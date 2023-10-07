export class Errors {
    static tagNameNull(typeName: string) {
        let msg = `Component type '${typeName}' tagName is null or empty.`;
        return new Error(msg);
    }

    static argumentNull(paramName: string) {
        let msg = `Argument '${paramName}' can not be null or empty.`;
        return new Error(msg);
    }

    static componentTypeNotLoad(componentType: string) {
        let msg = `Component type '${componentType}' is not loaded.`;
        return new Error(msg);
    }

    static elementIdEmpty() {
        let msg = `Element id is empty.`;
        return new Error(msg);
    }

    static elementTagNameIncorrect(expected: string, actual: string) {
        let msg = `Element tag name incorrect, expected '${expected}', actual is '${actual}'.`;
        return new Error(msg);
    }

    static componentTagNameNull(componentType: string) {
        let msg = `Component type '${componentType}' tag name is null.`;
        return new Error(msg);
    }
}