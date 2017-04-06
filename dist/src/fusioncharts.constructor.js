export function FusionChartsConstructor(fusionchartsService, chartConfig) {
    var FusionCharts = fusionchartsService.getFusionChartsStatic();
    return new FusionCharts(chartConfig);
}
