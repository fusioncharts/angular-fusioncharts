import { Component } from "@angular/core";
import { FusionChartsModule } from "angular-fusioncharts";

// Pinned to FusionCharts 3.23.0 to demonstrate v3 compatibility (see README).
// For real apps, use the latest FusionCharts (4.x).
// FusionCharts library + chart modules + theme (injected at runtime via fcRoot)
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

// Realistic dataset (per PRD data-quality rule: no test/ABC/123 placeholders)
const OIL_RESERVES = [
  { label: "Venezuela", value: "290" },
  { label: "Saudi Arabia", value: "260" },
  { label: "Canada", value: "180" },
  { label: "Iran", value: "140" },
  { label: "Russia", value: "115" },
  { label: "UAE", value: "100" },
  { label: "United States", value: "30" },
  { label: "China", value: "30" },
];

const RENEWABLE_CAPACITY = [
  { label: "China", value: "1161" },
  { label: "United States", value: "388" },
  { label: "Brazil", value: "193" },
  { label: "India", value: "176" },
  { label: "Germany", value: "150" },
  { label: "Japan", value: "121" },
];

function buildSource(caption: string, data: object[]) {
  return {
    chart: {
      caption,
      subCaption: "Source: validation dataset",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
      exportEnabled: "1",
    },
    data,
  };
}

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [FusionChartsModule],
})
export class AppComponent {
  // wrapper exercises these inputs: type / width / height / dataSource
  chartType = "column2d";
  width = "700";
  height = "400";
  dataSource: object = buildSource("Countries With Most Oil Reserves", OIL_RESERVES);

  // toggles the *ngIf so ngOnDestroy (dispose path) runs
  chartVisible = true;

  // captured chart instance (from the `initialized` event) for export
  private chartInstance: any = null;

  // visible event log so a viewer can confirm events fire
  log: string[] = [];

  private record(msg: string) {
    // newest first; cap to keep the panel readable
    this.log = [`${msg}`, ...this.log].slice(0, 12);
  }

  // --- event handlers (wrapper generateEventsCallback path) ---
  onInitialized(ev: any) {
    this.chartInstance = ev?.chart ?? null;
    this.record("initialized");
  }
  onRendered(_ev: any) {
    this.record("rendered");
  }
  onDataPlotClick(_ev: any) {
    this.record("dataplotClick");
  }

  // --- code-path triggers ---
  updateData() {
    // new object reference -> ngOnChanges -> updateChartData
    this.dataSource = buildSource("Renewable Energy Capacity (GW)", RENEWABLE_CAPACITY);
    this.record("data updated");
  }
  changeType() {
    this.chartType = this.chartType === "column2d" ? "bar2d" : "column2d";
    this.record(`type -> ${this.chartType}`);
  }
  resize() {
    this.width = this.width === "700" ? "500" : "700";
    this.height = this.height === "400" ? "300" : "400";
    this.record(`resize -> ${this.width}x${this.height}`);
  }
  exportChart() {
    if (this.chartInstance && typeof this.chartInstance.exportChart === "function") {
      try {
        this.chartInstance.exportChart({ exportFormat: "png" });
        this.record("export invoked");
      } catch (e) {
        this.record("export error: " + (e as Error).message);
      }
    } else {
      this.record("export: no instance");
    }
  }
  dispose() {
    // removes the <fusioncharts> element -> ngOnDestroy
    this.chartVisible = false;
    this.record("disposed (ngIf=false)");
  }
  recreate() {
    this.chartVisible = true;
    this.record("recreated");
  }
}
