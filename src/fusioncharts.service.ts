import {Injectable} from '@angular/core';


@Injectable()
export class FusionChartsStatic {
    core: any;
    modules: Function[];
}

@Injectable()
export class FusionChartsService {
    _fusionchartsStatice: FusionChartsStatic;

    constructor(FusionChartsStatic: FusionChartsStatic) {
        const fcStatic = FusionChartsStatic;

        this._fusionchartsStatice = (typeof fcStatic.core == 'function' && fcStatic.core.id === 'FusionCharts') ?
            fcStatic.core : fcStatic.core();

        fcStatic.modules && fcStatic.modules.forEach && fcStatic.modules.forEach((FusionChartsModules: any) => {
            FusionChartsModules(fcStatic.core);
        });
    }

    getFusionChartsStatic() {
        return this._fusionchartsStatice;
    }
}
