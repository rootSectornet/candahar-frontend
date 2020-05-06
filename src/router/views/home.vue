<script>
import Layout from "../layouts/main";
import Slider from "@/components/slider";
import Artikel from "@/components/artikel";
import Kategori from "@/components/category";
import appConfig from "@/app.config";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Berita",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout,Slider,Artikel,Kategori },
  data() {
    return {
      title: "Dashboard",
      mainProps: { blank: false, blankColor: '#777', width: 100, height: 70, class: 'm1' }
    };
  }
};
</script>

<template>
  <Layout>
    <div class="row mt-4">
      <div class="col-md-4 col-lg-4 col-sm-12">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-primary">Berita Populer</h1>
            <p class="card-title-desc">Beberapa terpopuler hari ini.</p>
            <div class="my-4" v-for="item in 4" :key="item">
              <div class="d-flex mb-2">
                <div class="d-flex flex-column px-1">
                <router-link tag="a" :to="{name:'detail',params:{slug:'robot-gantikan'}}" class="card-title px-1">
                  <span>Robot Gantikan Acara Kelulusan Wisuda Di Jepang</span>
                </router-link>
                  <p class="text-muted px-1 my-0">April 10, 2020</p>
                </div>
                <b-img v-bind="mainProps" src="https://picsum.photos/1024/480/?image=58" rounded alt="Rounded image"></b-img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-lg-8 col-sm-8">
        <div class="card p-0">
          <div class="card-body p-0">
             <Slider/>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-9 col-lg-9 col-sm-12">
        <Artikel/>
      </div>
      <div class="col-md-3 col-lg-3 col-sm-12">
        <div class="card card-muted">
          <div class="card-body">
            <h1 class="card-title text-primary">Berlangganan</h1>
            <p class="card-title-desc">Masukan Email anda untuk berlanggan berita berita terbaru.</p>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email">
            </div>
            <b-button variant="dark" size="sm">Kirim</b-button>
          </div>
        </div>
        <div class="my-4">
          <Kategori/>
        </div>
      </div>
    </div>
  </Layout>
</template>
