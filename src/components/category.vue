<script>

import {Resource} from "@/resource/resource";
export default {
  data() {
    return {
        category:[],
    };
  },
  created(){
      this.loadData();
  },
  methods: {
        loadData(){
            Resource.getCategory((err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    this.category = data
                }
            })
        }
  }
};
</script>

<template>
    <div>
        <div class="card">
            <div class="card-body" >
                <h4 class="font-size-24 text-primary font-poppins">Kategori</h4>
                <hr>
                    <b-list-group v-for="(item,i) in category.data" :key="i">
                        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
                            {{item.name}}
                            <b-badge variant="primary" pill>{{item.count}}</b-badge>
                        </b-list-group-item>
                    </b-list-group>
            </div>
        </div>
    </div>
</template>
