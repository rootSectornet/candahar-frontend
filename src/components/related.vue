<script>

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
        this.axios.get("http://localhost:8000/api/post").then(response => {
        this.post = response.data;
      })
    }
  }
};
</script>

<template>
    <div class="card">
        <div class="card-body">
        <h1 class="card-title text-primary">Berita Menarik Lainnya</h1>
        <p class="card-title-desc">Beberapa Menarik Lainnya.</p>
        <div class="my-4" v-for="data in post" :key="data.id">
            <div class="d-flex mb-2">
              <table>
                <tr v-for="data_post in data.slice(0, 5)" :key="data_post.id">
                  <td>
                    <div class="d-flex flex-column px-1">
                        <router-link tag="a" :to="{name:'detail',params:{slug:data_post.slug}}" class="card-title px-1 text-dark">
                          {{data_post.judul}}
                        </router-link>
                        <p class="text-muted px-1 my-0">{{data_post.created_at}}</p>
                    </div>
                  </td>
                  <td>
                    <b-img v-bind="mainProps"  src="https://picsum.photos/1024/480/?image=58" rounded alt="Rounded image"></b-img>
                  </td>
                </tr>
              </table>
            </div>
        </div>
        </div>
    </div>
</template>
