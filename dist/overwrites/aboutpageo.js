import { AboutPage } from "../generated/aboutpage.js";
import server from "../server.js";
import axios from "axios";
export class AboutPageO extends AboutPage {
    constructor(id, classes) {
        const date = Math.floor((new Date().getTime() - new Date(2024, 1, 29).getTime()) / 86400000).toString();
        super(id, classes, date);
        this.findId("button").onclick = () => {
            axios.get(server('/')).then((res) => {
                alert(res.data);
            });
        };
    }
    style(parent) {
        this.findId("page").style(parent, {
            backgroundColor: "#f5f5f5",
            foregroundColor: "white",
            padding: 20
        });
    }
}
//# sourceMappingURL=aboutpageo.js.map