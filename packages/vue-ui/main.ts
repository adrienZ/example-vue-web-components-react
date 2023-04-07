// embed vue in package
import { defineCustomElement, type VueElementConstructor } from 'vue'

// interface
import type { ICounterProps } from './src/interfaces/ICounterProps'

// components
import Counter from './src/components/counter.ce.vue'

// turn component into web components
export const WebCounter = defineCustomElement(Counter) as VueElementConstructor<ICounterProps>


import type React from 'react'

type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };

type CustomElement<T, K extends string> = Partial<T & React.DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['web-counter']: CustomElement<ICounterProps, ''>;
    }
  }
}
