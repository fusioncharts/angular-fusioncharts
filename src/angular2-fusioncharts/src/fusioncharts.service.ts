import {Injectable} from '@angular/core';

/* TODO: Need to remove this when FusionCharts becomes ES6 modules */
declare var FusionCharts: any;

@Injectable()
export class FusionChartsStatic {
    core: any;
    modules: Function[];
}

@Injectable()
export class FusionChartsService {
    _fusionchartsStatice: FusionChartsStatic;

    constructor(FusionChartsStatic: FusionChartsStatic) {

        /* TODO: Need to remove this when FusionCharts becomes ES6 modules */
        this._fusionchartsStatice = FusionChartsStatic.core || FusionCharts;
        if (FusionChartsStatic && FusionChartsStatic.modules) {
            FusionChartsStatic.modules.forEach((FusionChartsModules: any) => {
                    FusionChartsModules(FusionChartsStatic.core);
                });
        }
    }

    getFusionChartsStatic() {
        return this._fusionchartsStatice;
    }
}
