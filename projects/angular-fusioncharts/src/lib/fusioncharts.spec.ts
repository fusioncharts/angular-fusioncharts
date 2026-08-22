import { FusionChartsModule } from './fusioncharts.module';
import { FusionChartsService, FusionChartsStatic } from './fusioncharts.service';
import { FusionChartsPipe } from './fusioncharts.pipe';

// A minimal stand-in for the FusionCharts core (id-based branch of resolveFusionCharts).
function makeFakeCore() {
  const added: any[] = [];
  const core: any = {
    id: 'FusionCharts',
    addDep: (m: any) => added.push(m),
  };
  return { core, added };
}

describe('FusionChartsModule', () => {
  afterEach(() => {
    // reset shared static state between tests
    (FusionChartsService as any)._fcRoot = null;
    (FusionChartsService as any).itemCount = 0;
  });

  it('forRoot() returns a ModuleWithProviders wiring FusionChartsStatic', () => {
    const fakeCore = { id: 'FusionCharts' };
    const modA = () => {};
    const result: any = FusionChartsModule.forRoot(fakeCore, modA);

    expect(result.ngModule).toBe(FusionChartsModule);
    const provider = result.providers[0];
    expect(provider.provide).toBe(FusionChartsStatic);
    expect(provider.useValue.core).toBe(fakeCore);
    expect(provider.useValue.modules).toEqual([modA]);
  });

  it('fcRoot() sets the static FusionCharts root', () => {
    expect(FusionChartsService.isFCRootSet()).toBe(false);
    const fakeCore = { id: 'FusionCharts' };
    FusionChartsModule.fcRoot(fakeCore, () => {});
    expect(FusionChartsService.isFCRootSet()).toBe(true);
    expect(FusionChartsService.getFCRoot().core).toBe(fakeCore);
  });
});

describe('FusionChartsService', () => {
  afterEach(() => {
    (FusionChartsService as any)._fcRoot = null;
    (FusionChartsService as any).itemCount = 0;
  });

  it('resolves an id-based core and registers modules via addDep', () => {
    const { core, added } = makeFakeCore();
    const mod = { getName: () => 'x', getType: () => 'y' };
    const svc = new FusionChartsService({ core, modules: [mod] } as any);
    expect(svc.getFusionChartsStatic()).toBe(core);
    expect(added).toContain(mod);
  });

  it('invokes function-style modules with the core', () => {
    const { core } = makeFakeCore();
    let calledWith: any = null;
    const fnModule = (c: any) => { calledWith = c; };
    new FusionChartsService({ core, modules: [fnModule] } as any);
    expect(calledWith).toBe(core);
  });

  it('getNextItemCount() increments a shared counter', () => {
    const { core } = makeFakeCore();
    const svc = new FusionChartsService({ core, modules: [] } as any);
    const a = svc.getNextItemCount();
    const b = svc.getNextItemCount();
    expect(b).toBe(a + 1);
  });
});

describe('FusionChartsPipe', () => {
  it('transform() passes the value through', () => {
    const pipe = new FusionChartsPipe();
    expect(pipe.transform('Reserves')).toBe('Reserves');
  });
});
