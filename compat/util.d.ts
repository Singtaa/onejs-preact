/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */
export declare function assign(obj: any, props: any): any;
/**
 * Check if two objects have a different shape
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */
export declare function shallowDiffers(a: any, b: any): boolean;
export declare function removeNode(node: any): void;
/**
 * Check if two values are the same value
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */
export declare function is(x: any, y: any): boolean;
