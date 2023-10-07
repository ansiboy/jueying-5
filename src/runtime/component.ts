export interface Component<T = any> {
    render(props: T): void;
}