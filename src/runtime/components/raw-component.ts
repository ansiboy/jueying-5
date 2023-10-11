import { Component } from "../component";
import { Errors } from "../errors";

export class RawComponent<T extends Object = {}> implements Component {
    #element: HTMLElement;
    #props: T;

    protected children: RawComponent<any>[];

    constructor(element: HTMLElement, props: T, children?: RawComponent<any>[]) {
        if (!element) throw Errors.argumentNull('element');
        if (!element.id) throw Errors.elementIdEmpty();
        if (!props) throw Errors.argumentNull("props");
        if (typeof props != "object") throw Errors.argumentTypeIncorrect("props", "object", typeof props);

        let tagName = (this.constructor as any).tagName;
        if (!tagName)
            throw Errors.componentTagNameNull(this.constructor.name);

        if (tagName != element.tagName) {
            throw Errors.elementTagNameIncorrect(tagName, element.tagName);
        }

        //TODO: 检查 ID 是否重复
        if (children != null) {
            children.forEach(c => {
                element.appendChild(c.element);
            })
        }

        this.#element = element;
        this.#props = props;
        this.children = children || [];

        this.setProps(this.#props);
    }

    get element() {
        return this.#element;
    }

    get id() {
        return this.#element.id;
    }

    get props() {
        return this.#props;
    }

    setProps(props: Partial<T>): void {
        Object.assign(this.#props, props);
    }

}