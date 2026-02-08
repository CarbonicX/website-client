import * as silicon from "../silicon.index.js";
export class AboutPage extends silicon.ComplexWidgetBase {
    _element;
    constructor(id, classes, date) {
        super(id, classes);
        this._element = document.createElement("div");
        this.addChild(new silicon.Page("page", [], new silicon.VBox(null, [], [new silicon.Text(null, ["title"], "Welcome!"), new silicon.Text(null, [], "Here is the homepage of CarbonicX."), new silicon.Text(null, [], `So far, the website has been running well for ${date} days.`), new silicon.Button("button", [], "Get a message from server"), new silicon.HBox(null, [], [new silicon.Text(null, [], "Build with Silicon v1.0.0-alpha"), new silicon.Image(null, [], "assets/silicon.svg", 32, 32)])]), "card"));
        this.setIdAndClasses();
    }
}
//# sourceMappingURL=aboutpage.js.map