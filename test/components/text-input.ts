import { RawComponent as HtmlComponent } from "../../src/runtime";

export interface Props {
    value?: string;
    placeholder?: string;
}

export default class TextInput extends HtmlComponent<Props>  {

    static tagName = "INPUT";

    setProps(props: Partial<Props>): void {
        super.setProps(props);
        let e = this.element as HTMLInputElement;
        e.value = this.props.value || "";
        e.placeholder = this.props.placeholder || "";
    }

}