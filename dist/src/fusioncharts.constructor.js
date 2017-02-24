"use strict";
function FusionChartsConstructor(fusionchartsService, chartConfig) {
    var FusionCharts = fusionchartsService.getFusionChartsStatic();
    return new FusionCharts(chartConfig);
}
exports.FusionChartsConstructor = FusionChartsConstructor;
//# sourceMappingURL=fusioncharts.constructor.js.map