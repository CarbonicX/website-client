// 自动跳过 undefined 的 push 函数
export function push(list, element) {
    if (element != undefined)
        list.push(element);
}
export function clear(element) {
    const id = element.id;
    while (element.attributes.length > 0) {
        element.removeAttribute(element.attributes[0].name);
    }
    element.innerHTML = "";
    element.id = id;
}
//# sourceMappingURL=utils.js.map