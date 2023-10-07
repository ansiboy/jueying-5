import { Component } from "../../../runtime/component";
import { HtmlComponent } from "../html-component";

export interface Props {
    children?: { [id: string]: any }
}

export default class Container extends HtmlComponent<Props> implements Component<Props> {

    static tagName = "DIV";

    constructor(element: HTMLElement, props: Props, children?: HtmlComponent<any>[]) {
        super(element, props, children);

        //TODO: 检查 ID 是否重复
        this.children.forEach(c => {
            element.appendChild(c.element);
        })
    }


    render(props: Partial<Props>): void {
        super.render(props);

        this.children.forEach(c => {
            let childPropses = props.children || {};
            let childProps = childPropses[c.id] || {};

            c.render(childProps);
        })
    }

}