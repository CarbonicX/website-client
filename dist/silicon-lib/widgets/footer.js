import { ComplexWidgetBase, WidgetBase } from "../abstracts/widgetBase.js";
export class Footer extends ComplexWidgetBase {
    _element;
    constructor(id, classes, widget) {
        super(id, classes);
        this._element = document.createElement("div");
        this.addChild(widget);
        this.setIdAndClasses();
        this.addClassForElement("silib-footer");
    }
}
//# sourceMappingURL=footer.js.map