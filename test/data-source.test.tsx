import { Page, RawFactory } from "../src/runtime";
import { ComponentData } from "../src/runtime/component-data";
import Button, { Props as ButtonProps } from "./components/button";
import { JSDOM } from "jsdom";

describe("data source test", function () {

    test("data source test1", function () {

        let dataSource: any[] = [{ text: "click1" }, { text: 'click2' }];
        let componentData: ComponentData = {
            id: "page",
            type: Page.typeName,
            children: [
                { id: "button", type: Button.typeName, props: { text: "${this.text}" } as ButtonProps }
            ],
            dataSource
        }

        let jsdom = new JSDOM();
        let document = jsdom.window.document;
        let factory = new RawFactory(document);

        factory.register(Button.typeName, Button);
        factory.register(Page.typeName, Page);

        let component = factory.createComponent(componentData);
        let outerHTML = component.element.outerHTML.toLowerCase();
        expect(outerHTML.indexOf(Button.tagName.toLowerCase())).toBeGreaterThan(0);
        console.log(component.element.outerHTML);

        document.body.innerHTML = component.element.outerHTML;

        let buttons = document.querySelectorAll('button');
        expect(buttons.length).toEqual(dataSource.length);

        // let element = do

    })

})