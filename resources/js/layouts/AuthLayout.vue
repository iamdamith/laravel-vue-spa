<template>
  <div class="h-full bg-white">
    <div class="h-full">
      AuthLayout
      <slot />
      <div>
        <span v-for="(lang, index) in langStore.locals" :key="`Lang${index}`">
          <a @click="changeLocale(index)" :class="{ 'active': $i18n.locale === lang }">
            {{ index }},
          </a>
          <span v-if="index < langStore.locals.length - 1">, </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguageStore } from '../store/lang'


export default {
  name: 'AuthLayout',
  setup(){
    // const langStore = useLanguageStore()
    // return { langStore }
  },
  data() {
    return {
      langStore:useLanguageStore()
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
      this.langStore.setLocale(locale);
    }
  }
}
</script>