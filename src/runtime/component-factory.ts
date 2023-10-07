import { Component } from "./component";
import { ComponentData } from "./component-data";

export interface ComponentFactory {
    createComponent(componentData: ComponentData): Component<any>
}