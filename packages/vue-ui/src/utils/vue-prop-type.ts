import type { VNodeProps, AllowedComponentProps} from "vue"

type VueComponentWithProps = { $props: Record<string, unknown>}

export type VuePropsType<T extends abstract new (...args: any) => VueComponentWithProps> =  Omit<InstanceType<T>['$props'], keyof VNodeProps | keyof AllowedComponentProps>