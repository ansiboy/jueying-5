import Container, { Props } from "../../../src/providers/html/components/container";
import { JSDOM } from "jsdom";
import { createButton } from "./button.test";
import { createTextInput } from "./text.test";

describe("container component test", function () {

    test("create test", function () {

        let jsdom = new JSDOM();
        let element = jsdom.window.document.createElement(Container.tagName);
        element.id = "container";
        let props: Props = {};
        let button = createButton("button", { text: "Click ME" });
        let textInput = createTextInput("text", { value: "hello" });
        let container = new Container(element, props, [button, textInput]);

        expect(container.element).not.toBeNull();
        expect(container.element.children.item(0)).toBe(button.element);
        expect(container.element.children.item(1)).toBe(textInput.element);

        console.log(container.element.outerHTML);
    })

})