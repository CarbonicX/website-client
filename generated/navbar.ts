
import * as silicon from "../silicon.index.js";
export class NavBar extends silicon.ComplexWidgetBase {
    protected _element: HTMLElement;
    constructor(id: string | null, classes: string[]) {
        super(id, classes);
        this._element = document.createElement("div");

		this.addChild(new silicon.Nav("nav", [], new silicon.HBox(null, [], [new silicon.Text("logo", ["nav_link"], "Carbo"), new silicon.Stretch(null, [], 1), new silicon.Text("about", ["nav_link"], "关于")])));

        this.setIdAndClasses();
    }
}
