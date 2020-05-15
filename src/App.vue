<script>
import appConfig from "@/app.config";
import { isMobile } from 'mobile-device-detect';
export default {
  name: "app",
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    }
  },
  mounted(){
    if(isMobile){document.body.removeAttribute("data-layout-size", "boxed");}
  }
};
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>
