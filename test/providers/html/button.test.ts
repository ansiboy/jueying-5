import Button, { Props } from "../../components/button";
import { JSDOM } from "jsdom";

export function createButton(elementId: string, props: Props) {
    let jsdom = new JSDOM();
    let element = jsdom.window.document.createElement(Button.tagName);
    element.id = elementId;
    let component = new Button(element, props);
    return component;
}

describe("button component test", function () {
    test("create test", function () {
        let props: Props = { text: "Click ME" };
        let component = createButton("button", props);
        expect(component.element.innerHTML).toEqual(props.text);
    })

    test("render test", function () {
        let jsdom = new JSDOM();
        let element = jsdom.window.document.createElement(Button.tagName);
        element.id = "button";
        let props: Props = { text: "Click ME" };
        let component = new Button(element, props);
        component.setProps(props);

        expect(component.element.innerHTML).toEqual(props.text);
    })
})

