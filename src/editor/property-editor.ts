import { Component } from "../runtime/component";

export class PropertyEditor<T> {
    #element: HTMLElement;
    readonly #components: Component[] = [];

    constructor(element: HTMLElement) {
        this.#element = element;
    }

    get element() {
        return this.#element;
    }

    get editComponents() {
        return this.#components;
    }

    /**
     * 添加要进行编辑的组件
     * @param component 要编辑的组件
     */
    appendEditComponent(component: Component) {
        this.#components.push(component);
    }

    updateComponentProp(name: string, value: T) {
        this.#components.forEach(c => {
            let props: any = {};
            props[name] = value;
            c.render(props);
        })
    }
}