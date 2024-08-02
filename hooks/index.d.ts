// Dispatch function type
type Dispatch<A> = (value: A) => void;

// SetStateAction type
type SetStateAction<S> = S | ((prevState: S) => S);

// useState
declare function useState<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>];
declare function useState<T = undefined>(): [T | undefined, Dispatch<SetStateAction<T | undefined>>];

// useEffect
declare function useEffect(effect: EffectCallback, deps?: DependencyList): void;

// EffectCallback type
type EffectCallback = () => (void | (() => void | undefined));

// DependencyList type
type DependencyList = ReadonlyArray<any>;

// useMemo
declare function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;

// useRef
interface MutableRef<T> {
    current: T;
}
declare function useRef<T>(initialValue?: T): MutableRef<T>;

export type StateUpdater<S> = S | ((prevState: S) => S);

export { useEventfulState } from './eventful';

// Export statement
export { useState, useEffect, useMemo, useRef };