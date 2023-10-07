import { PropertyEditor } from "./property-editor";
import { PropertyValidate } from "./property-validate";

/**
 * 编辑项
 */
export interface EditorPanelItem {
    propertyName: string;
    displayName?: string;
    editorType: typeof PropertyEditor;
    defaultValue?: any;
    validates?: PropertyValidate[]
}