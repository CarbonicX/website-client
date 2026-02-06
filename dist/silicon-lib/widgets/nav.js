import { ComplexWidgetBase, WidgetBase } from "../abstracts/widgetBase.js";
export class Nav extends ComplexWidgetBase {
    _element;
    constructor(id, classes, widget) {
        super(id, classes);
        this._element = document.createElement("nav");
        this.addChild(widget);
        this.setIdAndClasses();
    }
    style(content, height = 70) {
        if (content instanceof WidgetBase) {
            content = content.element;
        }
        this._element.style.height = `${height}px`;
        content.style.paddingTop = `${height}px`;
    }
}
//# sourceMappingURL=nav.js.map