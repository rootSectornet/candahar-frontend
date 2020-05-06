<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      ref="myCarousel"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
    </b-carousel>

    <div class="mt-3 pb-3 d-flex justify-content-start align-items-center">
        <div class="mr-auto d-flex justify-content-center align-items-center pl-2">
            <a href="javascript:void(0);" @click="prev()" class="text-muted"><i class="bx bx-chevron-left font-size-24"></i></a>
        </div>
        <div class="mr-auto d-flex justify-content-start flex-column align-items-start px-2">
            <!-- <b-button variant="primary" size="sm">Robot</b-button>s -->
            <a href="#"><h3>Robot Gantikan Acara Kelulusan Wisuda Di Jepang</h3></a>
            <div class="d-flex">
                <p class="text-muted">April 10, 2020</p>
            </div>
            <a href="#" class="font-size-14 text-primary">Baca Selengkapnya</a>
        </div>
        <div class="ml-auto d-flex justify-content-center align-items-center pr-2">
            <a href="javascript:void(0);" @click="next()" class="text-muted"><i class="bx bx-chevron-right font-size-24"></i></a>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        console.log(slide)
        this.sliding = true
      },
      onSlideEnd(slide) {
        console.log(slide)
        this.sliding = false
      },
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    }
  }
</script>