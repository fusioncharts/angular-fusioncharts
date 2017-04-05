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
        this._fusionchartsStatice = FusionChartsStatic.core;

        FusionChartsStatic.modules && FusionChartsStatic.modules.forEach((FusionChartsModules: any) => {
            FusionChartsModules(FusionChartsStatic.core);
        });
    }

    getFusionChartsStatic() {
        return this._fusionchartsStatice;
    }
}
