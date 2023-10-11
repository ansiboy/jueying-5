import { ComponentData } from "./component-data";
import { ComponentFactory } from "./component-factory";
import { Errors } from "./errors";
import { RawComponent } from "./components/raw-component";
import { ComponentContext } from "./component-context";
import { Component } from "./component";

const BINDING_EXPR_BEGIN = '${';
const BINDING_EXPR_END = '}';

export class RawFactory implements ComponentFactory {

    doc: Document;
    componentTypes: { [name: string]: typeof RawComponent } = {};
    allComponents: { [id: string]: Component } = {};

    constructor(doc: Document) {
        this.doc = doc;
    }

    private createElement(tagName: string, id: string): HTMLElement {
        let element = this.doc.createElement(tagName);
        element.id = id;
        return element;
    }

    createComponent(componentData: ComponentData): RawComponent<any> {
        let componentType = this.componentTypes[componentData.type];
        if (!componentType) throw Errors.componentTypeNotLoad(componentData.type);

        let context: ComponentContext = { document: this.doc, root: componentData, factory: this };
        let component = this.createComponentWithContext(componentData, context);
        return component;
    }

    private createComponentWithContext(componentData: ComponentData, context: ComponentContext): RawComponent<any> {
        let componentType = this.componentTypes[componentData.type];
        if (!componentType) throw Errors.componentTypeNotLoad(componentData.type);



        let tagName = (componentType as any).tagName;

        let dataSource = componentData.dataSource || [];


        let element = this.createElement(tagName, componentData.id);
        let childComponentDatas = componentData.children || [];
        let children: RawComponent[];
        if (dataSource.length > 0) {
            children = [];
            for (let dataItem of dataSource) {
                let childs = childComponentDatas.map(o => {
                    let childComponentData = JSON.parse(JSON.stringify(o));

                    let c = this.createComponentWithContext(o, context);
                    return c;
                });
                children.push(...childs);
            }
        }
        else {
            children = childComponentDatas.map(o => this.createComponentWithContext(o, context));
        }


        let component = new componentType(element, componentData.props || {}, children) as any;

        return component;
    }

    private generateComponentId(typeName: string) {

    }

    private evalComponentDataProps(componentData: ComponentData) {
        let props = componentData.props;
        if (!props)
            return;

        for (let key in props) {
            let value = props[key];
            if (typeof value != "string")
                continue;

            if (!value.startsWith(BINDING_EXPR_BEGIN) || !value.endsWith(BINDING_EXPR_END))
                continue;

            let len = value.length - BINDING_EXPR_BEGIN.length - BINDING_EXPR_END.length;
            let expr = value.substring(BINDING_EXPR_BEGIN.length, len);
            let newValue = eval(expr);
        }
    }

    register(componentTypeName: string, componentType: Function) {
        this.componentTypes[componentTypeName] = componentType as typeof RawComponent;
    }



}



