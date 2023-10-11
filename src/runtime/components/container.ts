import { innerComponentTypeNames } from "../inner-component-type-names";
import { Component } from "../component";
import { RawComponent } from "./raw-component";

export interface Props {
    children?: { [id: string]: any }
}

export default class Container extends RawComponent<Props> implements Component<Props> {

    static tagName = "DIV";
    static typeName = innerComponentTypeNames.container;


    setProps(props: Partial<Props>): void {
        super.setProps(props);

        this.children.forEach(c => {
            let childPropses = props.children || {};
            let childProps = childPropses[c.id] || {};

            c.setProps(childProps);
        })
    }

}