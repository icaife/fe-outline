function getElById(id) {
    var el = document.getElementById(id);
    // console.log(el.childNodes.constructor);
    return el;
}

function getElsByClass(cls) {
    var els = document.getElementsByClassName(cls);
    console.log(els);
    return els;
}

function getElsByTagName(tagName) {
    var els = document.getElementsByTagName(tagName);
    console.log(els);
    return els;
}

function remove(el) {
    var parentNode = el.parentNode;
    parentNode.removeChild(el);
    return el;
}

function append(el, child) {
    var node = null;
    if (typeof child === "string") {
        node = document.createTextNode(child);
    } else {
        node = child;
    }
    el.appendChild(node);
}

function insertBefore(el, newNode) {
    var parentNode = el.parentNode;
    console.log(parentNode);
    parentNode.insertBefore(newNode, el);
}

function insertAfter(el, newNode) {
    var parentNode = el.parentNode;
    console.log(parentNode);
    if (parentNode.lastChild == newNode) {
        parentNode.appendChild(newNode);
    } else {
        parentNode.insertBefore(newNode, el.nextSibling);
    }
}

function getHTML(el) {
    return el.innerHTML;
}

function getText(el) {
    return el.innerText;
}

function attr(el, key, value) {
    if (value) {
        return el.setAttribute(key, value);
    } else {
        return el.getAttribute(key);
    }
}

function getStyle(el) {
    var style = el.style;
    var currentStyle = window.getComputedStyle(el, null);
    console.log("style:" + style.background);
    console.log("current style:" + currentStyle.background);
    return el.style;
}