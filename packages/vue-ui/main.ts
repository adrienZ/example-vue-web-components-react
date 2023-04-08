// embed vue in package
import { defineCustomElement } from 'vue'
import type { NgElement, WithProperties } from '@angular/elements'
import type { VuePropsType } from '@/utils/vue-prop-type'

// components
import Counter from './src/components/counter.ce.vue'

// interfaces
export type ICounterProps = VuePropsType<typeof Counter>

// turn component into web components
export const WebCounter = defineCustomElement(Counter)

/**
 * ANGULAR DOM API
 * https://angular.io/guide/elements#typings-for-custom-elements
 * 
 * it seems impossible to typecheck angular templates without creating a wrapper component and using @Input decorator
 * https://angular.io/guide/template-typecheck#strict-mode
 */
declare global {
  interface HTMLElementTagNameMap {
    ['web-counter']: NgElement & WithProperties<ICounterProps>;
  }
}

/**
 * JSX / REACT
 * https://www.typescriptlang.org/docs/handbook/jsx.html#intrinsic-elements
 */
type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };
type CustomElement<T, K extends string> = T & CustomEvents<`on${K}`>;


declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['web-counter']: CustomElement<ICounterProps, ''>;
    }
  }
}

/**
 * VUE TEMPLATES
 * https://github.com/vuejs/language-tools/tree/1b90234ec6f10a3c0f080d0310711c2cd8de02dd/extensions/vscode-vue-language-features#usage
 */
declare module 'vue' {
  export interface GlobalComponents {
    'WebCounter': typeof Counter,
  }
}