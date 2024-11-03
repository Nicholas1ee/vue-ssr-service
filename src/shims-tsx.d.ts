import Vue, { VNode } from 'vue'
import { StateTree } from 'pinia'

declare global {
  interface Window {
    __pinia: Pinia
    __INITIAL_STATE__: Record<string, StateTree>
  }
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
