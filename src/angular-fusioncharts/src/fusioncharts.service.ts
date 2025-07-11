import { Injectable } from '@angular/core';

@Injectable()
export class FusionChartsStatic {
  core: any;
  modules: Function[];
}

@Injectable()
export class FusionChartsService {
  static _fcRoot: any = null;
  static itemCount: any = 0;
  _fusionchartsStatice: FusionChartsStatic;

  static setFCRoot(fcRoot: any) {
    FusionChartsService._fcRoot = fcRoot;
  }

  static getFCRoot(): any {
    return FusionChartsService._fcRoot;
  }

  static isFCRootSet() {
    return !!FusionChartsService._fcRoot;
  }

  constructor(FCStatic: FusionChartsStatic) {
    let fcRoot: any;
    if (FusionChartsService.isFCRootSet()) {
      fcRoot = FusionChartsService.getFCRoot();
    } else {
      fcRoot = {
        core: FCStatic.core,
        modules: FCStatic.modules
      };
    }
    this.resolveFusionCharts(fcRoot.core, fcRoot.modules);
  }

  resolveFusionCharts(core: any, modules: any[]) {
    if (core && core.id && core.id === 'FusionCharts') {
      this._fusionchartsStatice = core;
    } else {
      this._fusionchartsStatice = core();
    }

    if (modules) {
      modules.forEach((FusionChartsModule: any) => {
        // Handle both function and object-with-default (ESM interop)
        let moduleFn = FusionChartsModule;
        if (FusionChartsModule && typeof FusionChartsModule === 'object' && FusionChartsModule.default) {
          moduleFn = FusionChartsModule.default;
        }
        if (
          (moduleFn.getName && moduleFn.getType) ||
          (moduleFn.name && moduleFn.type)
        ) {
          core.addDep(moduleFn);
        } else if (typeof moduleFn === 'function') {
          moduleFn(core);
        }
      });
    }
  }

  getFusionChartsStatic() {
    return this._fusionchartsStatice;
  }

  getNextItemCount() {
    FusionChartsService.itemCount++;
    return FusionChartsService.itemCount;
  }
}
