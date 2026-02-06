import { WidgetBase } from "../abstracts/widgetBase.js";
export class Image extends WidgetBase {
    _element;
    constructor(id, classes, image, width, height) {
        super(id, classes);
        this._element = document.createElement("img");
        this._element.src = image;
        if (width != undefined) {
            this._element.width = width;
        }
        if (height != undefined) {
            this._element.height = height;
        }
        this.setIdAndClasses();
    }
}
//# sourceMappingURL=image.js.map