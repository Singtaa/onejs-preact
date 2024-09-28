/// <reference types="onejs-core" />
/// <reference types="onejs-core" />
declare function styled<T extends keyof JSX.IntrinsicElements>(Tag: T | ((props?: any) => Element)): {
    (strings: TemplateStringsArray, ...values: any[]): (props: JSX.IntrinsicElements[T], ref: any) => Element;
    attrs(func: (props: any) => ({})): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => any;
};
declare namespace styled {
    var div: {
        (strings: TemplateStringsArray, ...values: any[]): (props: JSX.VisualElement, ref: any) => Element;
        attrs(func: (props: any) => {}): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => any;
    };
    var button: {
        (strings: TemplateStringsArray, ...values: any[]): (props: JSX.Button, ref: any) => Element;
        attrs(func: (props: any) => {}): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => any;
    };
    var textfield: {
        (strings: TemplateStringsArray, ...values: any[]): (props: JSX.TextField, ref: any) => Element;
        attrs(func: (props: any) => {}): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => any;
    };
}
export { styled as default };
export declare const uss: (strings: TemplateStringsArray, ...values: any[]) => (props: any) => string;
export type CompType<T, K> = (props: K | T, ref: any) => Element;
