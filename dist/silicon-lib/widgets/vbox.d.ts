import { WidgetBase } from "../abstracts/widgetBase.js";
import { StretchContainer } from "../abstracts/stretchContainer.js";
export declare class VBox extends StretchContainer {
    protected inherentClass: string | null;
    protected _stretch: boolean;
    get stretch(): boolean;
    set stretch(stretch: boolean);
    private _center;
    get center(): boolean;
    set center(center: boolean);
    constructor(id: string | null, classes: string[], children: WidgetBase[], stretch?: boolean, center?: boolean);
    protected updateStretchingMode(): void;
}
//# sourceMappingURL=vbox.d.ts.map