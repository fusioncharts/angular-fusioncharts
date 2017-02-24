import {Injectable} from '@angular/core';


@Injectable()
export class FusionChartsStatic {
}

@Injectable()
export class FusionChartsService {
    _fusionchartsStatice: FusionChartsStatic;

    constructor(FusionChartsStatic: FusionChartsStatic) {
        this._fusionchartsStatice = FusionChartsStatic;
    }

    getFusionChartsStatic() {
        return this._fusionchartsStatice;
    }
}
