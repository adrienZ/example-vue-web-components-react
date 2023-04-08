import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { WebCounter } from 'vue-ui'
window.customElements.define('web-counter', WebCounter);

const typedRef = document.querySelector('web-counter');
if (typedRef) {
  typedRef.countValue = "string value"
}