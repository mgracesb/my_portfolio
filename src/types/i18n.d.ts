import { I18n } from 'vue-i18n'

declare module '../plugins/i18n' {
  const i18n: I18n; // Assuming 'i18n' is an instance of the vue-i18n I18n class
  export default i18n;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: I18n['t']
  }
}
