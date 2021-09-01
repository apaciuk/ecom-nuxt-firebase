<template>
  <div>
    <Menubar></Menubar>
    <nuxt />
    <Footer2></Footer2>
    <SiteLoader  v-if="loading" />
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import Menubar from './Menubar';
import Footer2 from './Footer2';
import BackToTop from './BackToTop';
import SiteLoader from './SiteLoder';
export default {
  components: {
   Menubar, Footer2, BackToTop, SiteLoader
  },
  data() {
    return {
      loading: true,
      isShowing: true
    }
  },
  watch: {
    '$route' (pathUrl){
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 600);
    }
  },
  mounted(){
    setTimeout(() => { this.loading = false; }, 600);
  }
}
</script>