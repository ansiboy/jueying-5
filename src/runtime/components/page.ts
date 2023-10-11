import { innerComponentTypeNames } from "../inner-component-type-names";
import Container, { Props as ContainerProps } from "./container";

export interface Props extends ContainerProps {

}

export default class Page<Props> extends Container {

    static tagName = "DIV";
    static typeName = innerComponentTypeNames.page;

}