import * as silicon from "./silicon.index.js";
const body = document.getElementById("body");
const nav = document.getElementById("nav");
const navbar = new silicon.NavBar(null, []);
nav.appendChild(navbar.element);
new silicon.Router(new Map([
    ["/about", () => {
            about();
        }]
]), [
    ["/", (_) => {
            about();
        }]
]);
function about() {
    const aboutpage = new silicon.AboutPage(null, []);
    silicon.clear(body);
    navbar.style(body);
    aboutpage.style(body);
    body.appendChild(aboutpage.element);
}
//# sourceMappingURL=index.js.map