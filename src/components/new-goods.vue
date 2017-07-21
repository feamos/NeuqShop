<template>
  <div>
    <div class="slidebanner clearfix" @mouseenter="stop" @mouseleave.stop="beginnext">
      <span class="left_icon" @click="last"><img src="../img/goods/left.png" alt=""></span>
      <div class="banner_wrapper">
        <transition-group tag="ul" name="list">
          <li v-for="(goodDetail, index) in goods" :key="index" v-show="currentIndex<=index && currentIndex+3>index">
            <good :goodDetail="goodDetail"></good>
          </li>
        </transition-group>
      </div>
      <span class="right_icon" @click="next"><img src="../img/goods/right.png" alt=""></span>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store.js'
  import good from './good.vue'
  import { mapState, mapMutations, mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        this.beginnext()
      })
    },
    computed: {
      ...mapState(['goods', 'currentIndex'])
    },
    methods: {
      ...mapMutations(['stop', 'slide', 'last', 'next']),
      ...mapActions(['beginnext'])
    },
    components: {
      good
    },
    store
  }
</script>
<style scoped>
  .slidebanner {
    width: 1176px;
    margin: 0 auto 50px;
    height: 340px;
    position: relative;
  }

  span {
    line-height: 340px;
    cursor: pointer;
    position: absolute;
  }

  .left_icon {
    left: 0;
    top: 0;
    margin-right: 36px;
  }

  .right_icon {
    right: 0;
    top: 0;
    margin-left: 36px;
  }

  .banner_wrapper {
    width: 1100px;
    height: 340px;
    overflow: hidden;
    float: left;
    padding-left: 50px;
  }

  ul {
    width: 100%;
    height: 100%;
    padding-left: 0;
  }

  ul li {
    display: inline-block;
    margin-right: 20px;
  }
</style>
