import 'react'
import { WebCounter } from 'vue-ui'
window.customElements.define('web-counter', WebCounter);

function ComponentProvider(props: any): JSX.Element {
  return (
    <>
    {props.children}
    </>
  )
}

export default ComponentProvider