import { ErrorInfo, PreactContext, Ref, RefObject } from '..';

type Inputs = ReadonlyArray<unknown>;

// Dispatch function type
type Dispatch<A> = (value: A) => void;

// SetStateAction type
type SetStateAction<S> = S | ((prevState: S) => S);

// useState
declare function useState<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>];
declare function useState<T = undefined>(): [T | undefined, Dispatch<SetStateAction<T | undefined>>];

export type Reducer<S, A> = (prevState: S, action: A) => S;

/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @param reducer Given the current state and an action, returns the new state
 * @param initialState The initial value to store as state
 */
export function useReducer<S, A>(
    reducer: Reducer<S, A>,
    initialState: S
): [S, Dispatch<A>];

/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @param reducer Given the current state and an action, returns the new state
 * @param initialArg The initial argument to pass to the `init` function
 * @param init A function that, given the `initialArg`, returns the initial value to store as state
 */
export function useReducer<S, A, I>(
    reducer: Reducer<S, A>,
    initialArg: I,
    init: (arg: I) => S
): [S, Dispatch<A>];

// useEffect
declare function useEffect(effect: EffectCallback, deps?: DependencyList): void;

// EffectCallback type
type EffectCallback = () => (void | (() => void | undefined));

/**
 * @param ref The ref that will be mutated
 * @param create The function that will be executed to get the value that will be attached to
 * ref.current
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export function useImperativeHandle<T, R extends T>(
	ref: Ref<T>,
	create: () => R,
	inputs?: Inputs
): void;

/**
 * Accepts a function that contains imperative, possibly effectful code.
 * Use this to read layout from the DOM and synchronously re-render.
 * Updates scheduled inside `useLayoutEffect` will be flushed synchronously, after all DOM mutations but before the browser has a chance to paint.
 * Prefer the standard `useEffect` hook when possible to avoid blocking visual updates.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export function useLayoutEffect(effect: EffectCallback, inputs?: Inputs): void;

// DependencyList type
type DependencyList = ReadonlyArray<any>;

// useMemo
declare function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;

/**
 * Returns the current context value, as given by the nearest context provider for the given context.
 * When the provider updates, this Hook will trigger a rerender with the latest context value.
 *
 * @param context The context you want to use
 */
export function useContext<T>(context: PreactContext<T>): T;

// useRef
export interface MutableRef<T> {
    current: T;
}
/**
 * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
 * (`initialValue`). The returned object will persist for the full lifetime of the component.
 *
 * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
 * value around similar to how you’d use instance fields in classes.
 *
 * @param initialValue the initial value to store in the ref object
 */
export function useRef<T>(initialValue: T): MutableRef<T>;
export function useRef<T>(): MutableRef<T | undefined>;
export function useRef<T>(initialValue: null): MutableRef<T | null>;
// export function useRef<T>(initialValue: T | null): RefObject<T>;
// export function useRef<T = undefined>(): MutableRef<T | undefined>;

/**
 * Returns a memoized version of the callback that only changes if one of the `inputs`
 * has changed (using ===).
 */
export function useCallback<T extends Function>(callback: T, inputs: Inputs): T;

export type StateUpdater<S> = ((prevState: S) => S);

/**
 * Customize the displayed value in the devtools panel.
 *
 * @param value Custom hook name or object that is passed to formatter
 * @param formatter Formatter to modify value before sending it to the devtools
 */
export function useDebugValue<T>(value: T, formatter?: (value: T) => any): void;

export function useId(): string;

export function useErrorBoundary(error?: any, errorInfo?: ErrorInfo)



export { useEventfulState } from './eventful';

// Export statement
export { useState, useEffect, useMemo };