import { HBox } from "./hbox.js";
import { WidgetBase } from "../abstracts/widgetBase.js";
import { StretchContainer } from "../abstracts/stretchContainer.js";
export class VBox extends StretchContainer {
    inherentClass = "silib-vbox";
    _stretch;
    get stretch() {
        return this._stretch;
    }
    set stretch(stretch) {
        this._stretch = stretch;
        this.updateStretchingMode();
    }
    _center;
    get center() {
        return this._center;
    }
    set center(center) {
        this._center = center;
        this.updateStretchingMode();
    }
    constructor(id, classes, children, stretch = true, center = false) {
        super(id, classes, children);
        this._stretch = stretch;
        this._center = center;
        this.updateStretchingMode();
        this.each((widget) => {
            if (widget.functions.includes("stretchable")) {
                widget.addClassForElement("silib-stretching");
            }
        });
        this.setIdAndClasses();
    }
    updateStretchingMode() {
        if (this.stretch)
            this.addClassForElement("silib-vbox-stretch");
        else
            this.removeClassForElement("silib-vbox-stretch");
        let hasHBox = false;
        for (const c of this.children) {
            if (c instanceof HBox && c.stretch) {
                hasHBox = true;
            }
        }
        if (!hasHBox && this.center) {
            this.addClassForElement("silib-vbox-center");
        }
        else {
            this.removeClassForElement("silib-vbox-center");
        }
    }
}
//# sourceMappingURL=vbox.js.map