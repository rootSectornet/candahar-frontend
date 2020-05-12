<script>

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
        this.axios.get("http://localhost:8000/api/category").then(response => {
        this.category = response.data;
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
                <div v-for="data in category" :key="data.id">
                    <b-list-group v-for="data_category in data" :key="data_category.id">
                        <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
                            {{data_category.name}}
                            <b-badge variant="primary" pill>14</b-badge>
                        </b-list-group-item>
                    </b-list-group>
                </div>
            </div>
        </div>
    </div>
</template>
