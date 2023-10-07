import { HtmlComponent } from "../html-component";

export interface Props {
    text: string
}

export default class Button extends HtmlComponent<Props>  {
    static tagName = "BUTTON";

    render(props: Partial<Props>): void {
        super.render(props);
        let element = this.element as HTMLButtonElement;
        element.innerHTML = this.props.text;
    }
}