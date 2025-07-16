import { getModuleFn } from './getModuleFn';
export function FusionChartsConstructor(fusionchartsService, chartConfig) {
    var FusionCharts = fusionchartsService.getFusionChartsStatic();
    FusionCharts = getModuleFn(FusionCharts);
    return new FusionCharts(chartConfig);
}
//# sourceMappingURL=fusioncharts.constructor.js.map