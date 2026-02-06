import { ComplexWidgetBase, WidgetBase } from "../abstracts/widgetBase.js";
export class Page extends ComplexWidgetBase {
    _element;
    _mode;
    get mode() {
        return this._mode;
    }
    set mode(mode) {
        if (!["card", "page"].includes(mode))
            throw Error("Mode can only be \"card\" or \"page\"");
        this.removeClassForElement("silib-" + this._mode);
        this.addClassForElement("silib-" + mode);
        this._mode = mode;
    }
    // mode: card / page
    constructor(id, classes, content, mode) {
        super(id, classes);
        this._element = document.createElement("div");
        this.addChild(content);
        this.mode = mode;
        this.setIdAndClasses();
    }
    // 需要在创建 Page 后调用
    style(parent, settings) {
        if (parent instanceof WidgetBase) {
            parent = parent.element;
        }
        if (settings.backgroundColor != undefined)
            parent.style.backgroundColor = settings.backgroundColor;
        if (settings.foregroundColor != undefined)
            this._element.style.backgroundColor = settings.foregroundColor;
        if (settings.height != undefined)
            this._element.style.height = settings.height.toString() + "px";
        if (settings.width != undefined)
            this._element.style.width = settings.width.toString() + "px";
        if (settings.padding != undefined)
            this._element.style.padding = settings.padding.toString() + "px";
        if (this.mode == "card") {
            parent.classList.add("silib-card-parent");
        }
        else if (this.mode == "page") {
            parent.classList.remove("silib-card-parent");
        }
    }
}
//# sourceMappingURL=page.js.map