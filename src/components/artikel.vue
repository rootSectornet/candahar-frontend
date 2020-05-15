<script>

import {Resource} from "@/resource/resource";
import { isMobile } from 'mobile-device-detect';
export default {
  data() {
    return {
      post :[],
      isMobile : isMobile,
      mainProps: { blank: false, blankColor: '#777', width: 300, height: 250, class: 'm1' }
    };
  },
  mounted(){
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
    <div>
        <div class="card">
            <div class="card-body">
                <h4 class="font-size-24 text-primary font-poppins">Berita Terbaru </h4>
                <p class="card-title-desc">Beberapa berita terbaru seputar teknologi informasi.</p>
                <hr>
                <div :class="'my-3 d-flex '+ (isMobile ? 'flex-column align-items-center justify-content-center' : '')" v-for="(item,i) in post.data" :key="i">
                    <div class="mb-3" v-show="isMobile">
                        <b-img v-bind="mainProps"  src="https://picsum.photos/1024/480/?image=58" rounded alt="Rounded image"></b-img>
                    </div>
                    <div class="d-flex flex-column pr-4">
                        <router-link tag="a" :to="{name:'detail',params:{slug:item.slug}}" class="mb-2 text-primary">
                            <h3 class="font-poppins">{{item.judul}}</h3>
                        </router-link>
                        <p class="text-muted artikel-indent mb-4 font-size-16 text-justify">
                           {{item.content.substring(0,500)}}......
                        </p>
                        <div class="d-flex">
                            <p class="text-muted pr-2 font-size-14">
                                <i class="far fa-clock"></i>
                                {{item.created_date}}
                            </p>
                            |
                            <a href="javascript:void(0);" class="d-flex text-primary px-2">
                                <i class="fas fa-comments"></i>
                                <p class="text-muted pl-1">{{item.comment.length}}</p>
                            </a>
                        </div>
                        <div class="d-flex">  
                            <router-link tag="a" :to="{name:'detail',params:{slug:item.slug}}" class="mb-2 btn btn-sm btn-primary">
                                Baca Selengkapnya <i class="fas fa-arrow-right ml-1"></i> 
                            </router-link>
                        </div>
                    </div>
                    <div class="ml-auto" v-show="!isMobile">
                        <b-img v-bind="mainProps"  src="https://picsum.photos/1024/480/?image=58" rounded alt="Rounded image"></b-img>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-4 pt-4">
                    <b-button variant="primary" pill size="md">Lihat Selanjutnya  </b-button>
                </div>
            </div>
        </div>
    </div>
</template>
