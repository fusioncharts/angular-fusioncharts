
import { FusionChartsService } from './fusioncharts.service';


export function FusionChartsConstructor(fusionchartsService, chartConfig: Object) {
    const FusionCharts = fusionchartsService.getFusionChartsStatic();

    return new FusionCharts(chartConfig);
}

