/// <reference path="./index.d.ts" />
/// <reference path="./hooks/index.d.ts" />

export * from './index'

declare module "preact" {
    export * from "./index"
}