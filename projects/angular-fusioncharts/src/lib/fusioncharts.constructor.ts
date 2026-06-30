

import { FusionChartsService } from './fusioncharts.service';
import { getModuleFn } from './getModuleFn';


export function FusionChartsConstructor(fusionchartsService: any, chartConfig: Object) {
    let FusionCharts = fusionchartsService.getFusionChartsStatic();
    FusionCharts = getModuleFn(FusionCharts);
    return new FusionCharts(chartConfig);
}

