import { ComplexWidgetBase, WidgetBase } from "../abstracts/widgetBase.js";
export interface IPageStyle {
    backgroundColor?: string;
    foregroundColor?: string;
    height?: number;
    width?: number;
    padding?: number;
}
export declare class Page extends ComplexWidgetBase {
    protected _element: HTMLElement;
    private _mode;
    get mode(): string;
    set mode(mode: string);
    constructor(id: string | null, classes: string[], content: WidgetBase, mode: string);
    style(parent: HTMLElement | WidgetBase, settings: IPageStyle): void;
}
//# sourceMappingURL=page.d.ts.map