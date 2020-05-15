<script>
import Layout from "../layouts/main";
import Slider from "@/components/slider";
import Populer from "@/components/populer";
import Artikel from "@/components/artikel";
import Kategori from "@/components/category";
import appConfig from "@/app.config";
import {Resource} from "@/resource/resource";
import { isMobile } from 'mobile-device-detect';
/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Berita",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout,Slider,Artikel,Kategori,Populer },
  data() {
    return {
      metaInfo: {
        title: 'Candahar.com',
        titleTemplate: 'Tempat Berbagi Informasi Seputar Teknologi'
      },
      post: [],
      isMobile : isMobile,
      title: "Dashboard",
      mainProps: { blank: false, blankColor: '#777', width: 100, height: 70, class: 'm1' }
    };
  },
  created(){
    this.loadData();
  },
  methods: {
    loadData(){
      Resource.getArtikel((err,data)=>{
        if(err){
          console.log(err)
        }else{
          this.post = data
        }
      })
    }
  }
};
</script>

<template>
  <Layout>
    <div class="row mt-4">
      <div class="col-md-4 col-lg-4 col-sm-12" v-if="!isMobile">
        <Populer/>
      </div>
      <div class="col-md-8 col-lg-8 col-sm-12">
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
