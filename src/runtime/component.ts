export interface Component<T = any> {
    dataSource?: any[];
    setProps(props: T): void;
}