<script>

import {Resource} from "@/resource/resource";
export default {
  data() {
    return {
      post : [],
      mainProps: { blank: false, blankColor: '#777',  width: 100, height: 70, class: 'm1' }
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
    <div class="card">
        <div class="card-body">
        <h1 class="card-title text-primary">Berita Populer</h1>
        <p class="card-title-desc">Beberapa terpopuler hari ini.</p>
        <div class="my-4">
            <div class="d-flex mb-2 justify-content-between"  v-for="(data,i) in post.data" :key="i">
            <div class="d-flex flex-column px-1">
            <router-link tag="a" :to="{name:'detail',params:{slug:data.slug}}" class="card-title px-1">
                <span>{{data.judul}}</span>
            </router-link>
                <p class="text-muted px-1 my-0">{{data.created_date}}</p>
            </div>
            <b-img v-bind="mainProps" src="https://picsum.photos/1024/480/?image=58" rounded alt="Rounded image"></b-img>
            </div>
        </div>
        </div>
    </div>
</template>
