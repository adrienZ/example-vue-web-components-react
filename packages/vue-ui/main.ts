// embed vue in package
import { defineCustomElement, type VueElementConstructor } from 'vue'
import type { VuePropsType } from '@/utils/vue-prop-type'

// components
import Counter from './src/components/counter.ce.vue'

// interfaces
export type ICounterProps = VuePropsType<typeof Counter>

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
