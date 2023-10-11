import { ComponentData } from "./component-data";
import { ComponentFactory } from "./component-factory";

export interface ComponentContext {
    root: ComponentData,
    factory: ComponentFactory,
    document: Document,
}