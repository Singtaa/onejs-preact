import { h } from "./index";
import { forwardRef } from "./compat";
import { hashAndAddRuntimeUSS } from "onejs-core/styling";
function _processTemplate(props, strings, values) {
    // ref: https://medium.com/styled-components/how-styled-components-works-618a69970421
    let style = values.reduce((result, expr, index) => {
        let value = typeof expr === "function" ? expr(props) : expr;
        if (typeof value === "function")
            value = value(props);
        return result + (value ? value : "") + strings[index + 1];
    }, strings[0]);
    return style;
}
function styled(Tag) {
    const AnyTag = Tag;
    const tag = function (strings, ...values) {
        return forwardRef((props, ref) => {
            let style = _processTemplate(props, strings, values);
            let compId = hashAndAddRuntimeUSS(style);
            return h(AnyTag, { ref: ref, class: compId, ...props });
        });
    };
    tag.attrs = (func) => {
        return function (strings, ...values) {
            return (props) => {
                let defaultProps = func(props);
                let condensedProps = Object.assign({}, defaultProps, props);
                let style = _processTemplate(condensedProps, strings, values);
                let compId = hashAndAddRuntimeUSS(style);
                return h(AnyTag, { class: compId, ...condensedProps });
            };
        };
    };
    return tag;
}
styled.div = styled("div");
styled.button = styled("button");
styled.textfield = styled("textfield");
export { styled as default };
export const uss = function (strings, ...values) {
    return (props) => {
        return _processTemplate(props, strings, values);
    };
};
