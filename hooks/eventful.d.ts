import { StateUpdater } from './index'

export function useEventfulState<T, K extends string & keyof T>(obj: T, propertyName: K, eventName?: string): [T[K], StateUpdater<T[K]>]