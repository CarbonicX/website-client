import { AboutPage } from "../generated/aboutpage.js";
import server from "../server.js";
import axios from "axios";
import type { Button, Page } from "../silicon.index.js";

export class AboutPageO extends AboutPage {
    constructor(id: string | null, classes: string[]) {
        const date = Math.floor(
            (new Date().getTime() - new Date(2024, 1, 29).getTime()) / 86400000
        ).toString();
        super(id, classes, date);

        (this.findId("button") as Button).onclick = () => {
            axios.get(server('/')).then((res) => {
                alert(res.data);
            });
        };
    }

    style(parent: HTMLElement) {
        (this.findId("page") as Page).style(parent, {
            backgroundColor: "#f5f5f5", 
            foregroundColor: "white",
            padding: 20
        })
    }
}
