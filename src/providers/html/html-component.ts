import { Errors } from "./errors";

export class HtmlComponent<T extends Object>  {
    #element: HTMLElement;
    #props: T;

    protected children: HtmlComponent<any>[];

    constructor(element: HTMLElement, props: T, children?: HtmlComponent<any>[]) {
        if (!element) throw Errors.argumentNull('element');
        if (!element.id) throw Errors.elementIdEmpty();
        if (!props) throw Errors.argumentNull("props");

        let tagName = (this.constructor as any).tagName;
        if (!tagName)
            throw Errors.componentTagNameNull(this.constructor.name);

        if (tagName != element.tagName) {
            throw Errors.elementTagNameIncorrect(tagName, element.tagName);
        }

        this.#element = element;
        this.#props = props;
        this.children = children || [];

        this.render(this.#props);
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

    render(props: Partial<T>): void {
        Object.assign(this.#props, props);
    }

}