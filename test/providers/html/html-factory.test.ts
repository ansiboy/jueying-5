import { default as Button, Props as ButtonProps } from "../../components/button";
import { Page, RawFactory as HtmlFactory } from "../../../src/runtime"
import { ComponentData } from "../../../src/runtime/component-data";
import { JSDOM } from "jsdom";

describe("html factory test", function () {

    test("register test", function () {
        let jsdom = new JSDOM();
        let factory = new HtmlFactory(jsdom.window.document);
        factory.register(Button.typeName, Button);
        factory.register(Page.tagName, Page);
    })

    test("create component test 1", function () {
        let jsdom = new JSDOM();
        let doc = jsdom.window.document;
        let div = doc.createElement("button");
        expect(typeof div).toEqual("object");
        div.id = "abc";
        expect(typeof div).toEqual("object");
        let factory = new HtmlFactory(new JSDOM().window.document);

        factory.register(Button.typeName, Button);
        factory.register(Page.typeName, Page);

        let componentData: ComponentData = {
            id: "page",
            type: Page.typeName
        }

        let component = factory.createComponent(componentData);
        console.log(component.element.outerHTML);

    })

    test("create component test 2", function () {
        let jsdom = new JSDOM();
        let doc = jsdom.window.document;
        let div = doc.createElement("button");
        expect(typeof div).toEqual("object");
        div.id = "abc";
        expect(typeof div).toEqual("object");
        let factory = new HtmlFactory(new JSDOM().window.document);

        factory.register(Button.typeName, Button);
        factory.register(Page.typeName, Page);

        let componentData: ComponentData = {
            id: "page",
            type: Page.typeName,
            children: [
                { id: "button", type: Button.typeName, props: { text: "Click ME" } as ButtonProps }
            ]
        }

        let component = factory.createComponent(componentData);
        let outerHTML = component.element.outerHTML.toLowerCase();
        expect(outerHTML.indexOf(Button.tagName.toLowerCase())).toBeGreaterThan(0);
        console.log(component.element.outerHTML);

    })



})