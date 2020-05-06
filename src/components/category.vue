<script>

export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4 class="font-size-24 text-primary font-poppins">Kategori</h4>
                <hr>
                <b-list-group>
                    <b-list-group-item href="#" class="d-flex justify-content-between align-items-center">
                        Programming
                        <b-badge variant="primary" pill>14</b-badge>
                    </b-list-group-item>

                    <b-list-group-item href="#"  class="d-flex justify-content-between align-items-center">
                        Aplikasi
                        <b-badge variant="primary" pill>2</b-badge>
                    </b-list-group-item>

                    <b-list-group-item href="#"  class="d-flex justify-content-between align-items-center">
                        Robotic
                        <b-badge variant="primary" pill>1</b-badge>
                    </b-list-group-item>

                    <b-list-group-item href="#"  class="d-flex justify-content-between align-items-center">
                        Handphone
                        <b-badge variant="primary" pill>1</b-badge>
                    </b-list-group-item>
                </b-list-group>
            </div>
        </div>
    </div>
</template>
