import { NavBar } from "../generated/navbar.js";
export class NavBarO extends NavBar {
    constructor(id, classes) {
        super(id, classes);
        this.findId("about").element.onclick = () => {
            window.location.hash = "/about";
        };
        this.findId("logo").element.onclick = () => {
            window.location.hash = "/";
        };
    }
    style(content) {
        this.findId("nav").style(content);
    }
}
//# sourceMappingURL=navbaro.js.map