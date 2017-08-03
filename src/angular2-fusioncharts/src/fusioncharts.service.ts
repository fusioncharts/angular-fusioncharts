import {Injectable} from '@angular/core';

@Injectable()
export class FusionChartsStatic {
    core: any;
    modules: Function[];
}

@Injectable()
export class FusionChartsService {
    _fusionchartsStatice: FusionChartsStatic;

    constructor(FCStatic: FusionChartsStatic) {

        /* TODO: Need to remove this when FusionCharts becomes ES6 modules */
        if (FCStatic.core && FCStatic.core.getCurrentRenderer &&
            FCStatic.core.getCurrentRenderer() === 'javascript') {
            this._fusionchartsStatice = FCStatic.core;
        } else {
            this._fusionchartsStatice = FCStatic.core();
        }

        if (FCStatic && FCStatic.modules) {
            FCStatic.modules.forEach((FusionChartsModules: any) => {
                    FusionChartsModules(FCStatic.core);
                });
        }
    }

    getFusionChartsStatic() {
        return this._fusionchartsStatice;
    }
}
