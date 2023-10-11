import TextInput, { Props } from "../../components/text-input";
import { JSDOM } from "jsdom";

export function createTextInput(elementId: string, props: Props) {
    let jsdom = new JSDOM();
    let element = jsdom.window.document.createElement(TextInput.tagName) as HTMLInputElement;
    element.id = elementId;
    let component = new TextInput(element, props);

    return component;
}

describe("text component test", function () {

    test("create test", function () {

        let props: Props = { value: "Hello World!", placeholder: "Please input text" };
        let component = createTextInput("text", props);

        expect((component.element as HTMLInputElement).value).toEqual(props.value);
        console.log(component.element.outerHTML);
    })

    test("render test", function () {

        let jsdom = new JSDOM();
        let element = jsdom.window.document.createElement(TextInput.tagName) as HTMLInputElement;
        element.id = "text";
        let props: Props = { value: "Hello World!" };
        let component = new TextInput(element, props);
        component.setProps(props);

        expect(element.value).toEqual(props.value);
        console.log(component.element.outerHTML);
    })

})