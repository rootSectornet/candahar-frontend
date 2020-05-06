<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  data() {
    return {
      isMenuCondensed: false
    };
  },
  components: { Navbar,Footer },
};
</script>

<template>
  <b-container :fluid="true">
    <Navbar/>
    <slot></slot>
    <Footer/>
  </b-container>
</template>
