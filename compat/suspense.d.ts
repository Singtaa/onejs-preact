import { Component, ComponentChild, ComponentChildren } from '../index';

//
// Suspense/lazy
// -----------------------------------
export function lazy<T>(
	loader: () => Promise<{ default: T } | T>
): T extends { default: infer U } ? U : T;

export interface SuspenseProps {
	children?: ComponentChildren;
	fallback: ComponentChildren;
}

export class Suspense extends Component<SuspenseProps> {
	render(): ComponentChild;
}