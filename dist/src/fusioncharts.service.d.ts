export declare class FusionChartsStatic {
    core: any;
    modules: Function[];
}
export declare class FusionChartsService {
    static _fcRoot: any;
    static itemCount: any;
    _fusionchartsStatice: FusionChartsStatic;
    static setFCRoot(fcRoot: any): void;
    static getFCRoot(): any;
    static isFCRootSet(): boolean;
    constructor(FCStatic: FusionChartsStatic);
    resolveFusionCharts(core: any, modules: any[]): void;
    getFusionChartsStatic(): FusionChartsStatic;
    getNextItemCount(): any;
}
