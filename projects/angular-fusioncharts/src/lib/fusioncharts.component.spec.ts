import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FusionChartsComponent } from './fusioncharts.component';
import { FusionChartsModule } from './fusioncharts.module';
import { FusionChartsService } from './fusioncharts.service';

// A fake FusionCharts core + chart instance implementing only the surface the
// wrapper actually calls: new FusionCharts(cfg), render, setChartData, chartType,
// resizeTo, dispose. `id === 'FusionCharts'` routes resolveFusionCharts' id-branch.
function makeFakeFusionCharts() {
  const instances: any[] = [];
  function FusionCharts(this: any, cfg: any) {
    this.cfg = cfg;
    this.rendered = false;
    this.disposed = false;
    this.lastData = undefined;
    this.lastType = undefined;
    this.lastSize = undefined;
    this.render = () => { this.rendered = true; };
    this.setChartData = (d: any, fmt: any) => { this.lastData = d; this.lastFormat = fmt; };
    this.chartType = (t: any) => { this.lastType = t; };
    this.resizeTo = (s: any) => { this.lastSize = s; };
    this.dispose = () => { this.disposed = true; };
    instances.push(this);
  }
  (FusionCharts as any).id = 'FusionCharts';
  (FusionCharts as any).addDep = () => {};
  return { FusionCharts, instances };
}

const SOURCE = {
  chart: { caption: 'Reserves', theme: 'fusion' },
  data: [{ label: 'Venezuela', value: '290' }],
};

// allow the ngAfterViewInit setTimeout(…, 1) (run outside Angular) to fire
const flush = () => new Promise((r) => setTimeout(r, 15));

describe('FusionChartsComponent', () => {
  beforeEach(() => {
    (FusionChartsService as any)._fcRoot = null;
    (FusionChartsService as any).itemCount = 0;
    TestBed.configureTestingModule({ imports: [FusionChartsModule] });
  });

  function createChart(): { fixture: ComponentFixture<FusionChartsComponent>; cmp: FusionChartsComponent; fc: ReturnType<typeof makeFakeFusionCharts> } {
    const fc = makeFakeFusionCharts();
    FusionChartsModule.fcRoot(fc.FusionCharts);
    const fixture = TestBed.createComponent(FusionChartsComponent);
    const cmp = fixture.componentInstance;
    cmp.type = 'column2d';
    cmp.width = '700';
    cmp.height = '400';
    cmp.dataSource = SOURCE;
    return { fixture, cmp, fc };
  }

  it('renders the chart in ngAfterViewInit', async () => {
    const { fixture, fc } = createChart();
    fixture.detectChanges();
    await flush();
    expect(fc.instances.length).toBe(1);
    expect(fc.instances[0].rendered).toBe(true);
    expect(fc.instances[0].cfg.type).toBe('column2d');
  });

  it('emits the initialized event with the chart instance', async () => {
    const { fixture, cmp, fc } = createChart();
    let chart: any = null;
    cmp.initialized.subscribe((e: any) => (chart = e.chart));
    fixture.detectChanges();
    await flush();
    expect(chart).toBe(fc.instances[0]);
  });

  it('pushes new data via setChartData when dataSource changes (ngDoCheck)', async () => {
    const { fixture, cmp, fc } = createChart();
    fixture.detectChanges();
    await flush();
    cmp.dataSource = { chart: { caption: 'New' }, data: [{ label: 'China', value: '1161' }] };
    cmp.ngDoCheck();
    expect(fc.instances[0].lastData).toBeTruthy();
  });

  it('changes chart type via chartType()', () => {
    const { cmp, fc } = createChart();
    (cmp as any).chartObj = fc.instances[0] ?? new (fc.FusionCharts as any)({});
    cmp.type = 'bar2d';
    cmp.updateType();
    expect((cmp as any).chartObj.lastType).toBe('bar2d');
  });

  it('resizes via resizeTo() on width/height update', () => {
    const { cmp, fc } = createChart();
    (cmp as any).chartObj = new (fc.FusionCharts as any)({});
    cmp.width = '500';
    cmp.updateWidth();
    expect((cmp as any).chartObj.lastSize).toBeTruthy();
  });

  it('routes a FusionCharts event to the matching @Output', () => {
    const { cmp } = createChart();
    const events: any = cmp.generateEventsCallback(['rendered']);
    let fired: any = null;
    cmp.rendered.subscribe((e: any) => (fired = e));
    events['rendered']({ foo: 1 }, { bar: 2 });
    expect(fired).toEqual({ eventObj: { foo: 1 }, dataObj: { bar: 2 } });
  });

  it('disposes the chart in ngOnDestroy', async () => {
    const { fixture, cmp, fc } = createChart();
    fixture.detectChanges();
    await flush();
    cmp.ngOnDestroy();
    expect(fc.instances[0].disposed).toBe(true);
  });

  it('ngDoCheck does not throw when dataSource is undefined (null-safety)', () => {
    const { cmp } = createChart();
    cmp.dataSource = undefined as any;
    expect(() => cmp.ngDoCheck()).not.toThrow();
  });
});
