type preciseCallback = () => any;
type parameterCallback = (address: string) => any;
export declare class Router {
    preciseRoutes: Map<string, preciseCallback>;
    parameterRoutes: [string, parameterCallback][];
    constructor(preciseRoutes?: Map<string, preciseCallback>, parameterRoutes?: [string, parameterCallback][]);
    hashChange(): void;
}
export {};
//# sourceMappingURL=router.d.ts.map