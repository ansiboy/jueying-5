import { Component } from "../../runtime/component";
import { ComponentData } from "../../runtime/component-data";
import { ComponentFactory } from "../../runtime/component-factory";
import { Errors } from "./errors";
import { HtmlComponent } from "./html-component";

let componentTypes: { [name: string]: typeof HtmlComponent } = {};

export class HtmlFactory implements ComponentFactory {


    createComponent(componentData: ComponentData): HtmlComponent<any> {
        let componentType = componentTypes[componentData.type];
        if (!componentType) throw Errors.componentTypeNotLoad(componentData.type);

        let childComponentDatas = componentData.children || [];
        let children = childComponentDatas.map(o => this.createComponent(componentData))

        let tagName = (componentType as any).tagName;

        let element = document.createElement(tagName);
        let component = new componentType(element, componentData.id, children) as any;

        return component;
    }



}

