import { HtmlComponent } from "../html-component";

export interface Props {
    value?: string;
    placeholder?: string;
}

export default class TextInput extends HtmlComponent<Props>  {

    static tagName = "INPUT";

    render(props: Partial<Props>): void {
        super.render(props);
        let e = this.element as HTMLInputElement;
        e.value = this.props.value || "";
        e.placeholder = this.props.placeholder || "";
    }

}