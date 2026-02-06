import { NavBar } from "../generated/navbar.js"
import type { Nav, Text } from "../silicon.index.js";

export class NavBarO extends NavBar {
    constructor(id: string | null, classes: string[]) {
        super(id, classes);

        (this.findId("about") as Text).element.onclick = () => {
            window.location.hash = "/about";
        };

        (this.findId("logo") as Text).element.onclick = () => {
            window.location.hash = "/";
        };
    }

    style(content: HTMLElement) {
        (this.findId("nav") as Nav).style(content);
    }
}
