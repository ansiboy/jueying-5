import { ComponentStatus } from "./component-status";


export interface ComponentData {
    /** 
     * 组件类型名称
     * 自定义组件必须为驼峰规则（例如：ComponentPlaceHolder）
     * HTML 组件必须全小写（例如：div, span） 
     * */
    type: string;
    /** 组件属性 */
    props?: any;
    id: string;
    // parentId?: string;
    // name?: string;
    status?: ComponentStatus,
    children?: ComponentData[]
}