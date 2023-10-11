import { ComponentData } from "../runtime/component-data";
import { ComponentFactory } from "../runtime/component-factory";

export interface Props {
    componentData: ComponentData
}

/** 组件设计器 */
export class ComponentDesigner {
    #element: HTMLElement;
    #props: Props;

    constructor(element: HTMLElement, factory: ComponentFactory) {
        this.#element = element;
        this.#props = { componentData: { type: "container", id: "page" } }
    }

    get element(): HTMLElement {
        return this.#element;
    }

    appendComponent(componentData: ComponentData, parentId: string, componentIndex?: number) {

    }

    setProps(props: Props) {

    }

}