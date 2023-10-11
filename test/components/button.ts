import { RawComponent as HtmlComponent } from "../../src/runtime/components/raw-component";

export interface Props {
    text: string
}

export default class Button extends HtmlComponent<Props>  {
    static tagName = "BUTTON";
    static typeName = "Button";

    setProps(props: Partial<Props>): void {
        super.setProps(props);
        let element = this.element as HTMLButtonElement;
        element.innerHTML = this.props.text;
    }
}