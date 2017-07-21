<!--单件商品信息-->

<template>
  <div class="good_component">
    <a href="" @mouseenter="showDetail" @mouseleave="hideDetail">
      <img :src="'http://localhost/my/goodsPicture/' + goodDetail.goodPicture0 " alt="加入图片地址接口">
    </a>
    <div class="nameAndPrice">
      <span>{{goodDetail.name}}</span>
      <span>￥{{goodDetail.price}}</span>
    </div>
    <div class="goodType">
      <span>{{goodDetail.goodSort}}</span>
    </div>
    <div class="dim" v-show="detailShow" @mouseenter="showDetail" @mouseleave="hideDetail">
      <a href=""><img src="../img/good/dim_bg.png" alt=""></a>
      <div class="detailDesc">
        <a href="" class="descTitle">详细描述</a>
        <a href="" class="desc" v-show="!goodDetail.desc">主人太懒啦，什么也没有留下~</a>
        <a href="" class="desc" v-show="goodDetail.desc">{{goodDetail.desc}}</a>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    props: {
      goodDetail: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail () {
        this.detailShow = true
      },
      hideDetail () {
        this.detailShow = false
      }
      //  点击路由到商品详细信息页
    }
  }
</script>
<style scoped>
  .good_component {
    position: relative;
  }
  a {
    text-decoration: none;
    color: #009efd;
  }
  .good_component > a > img {
    width:340px;
    height: 340px;
  }
  .nameAndPrice {
    position: absolute;
    bottom: 1.3rem;
    left: 0;
    width: 340px;
    height: 35px;
    background: url("../img/good/底部bg.png") no-repeat;
    z-index: 20;
  }
  .nameAndPrice span {
    font-size: 1.3rem;
    color: #009efd;
    margin-left: 9px;
    height: 35px;
    line-height: 35px;
  }

  .goodType {
    position: absolute;
    left: 0;
    top: 0;
    width: 70px;
    height: 35px;
    background: url("../img/good/标签bg.png") no-repeat;
    z-index: 20;
  }
  .goodType span {
    height: 35px;
    line-height: 35px;
    font-size: 1.8rem;
    margin-left: 9px;
    color: #fff;
  }
  .dim {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    cursor: pointer;
  }
  .detailDesc {
    position: absolute;
    top: 54px;
    width: 340px;
    height: 270px;
    overflow: hidden;
  }
  .descTitle {
    color: #009efd;
    font-size: 1.8rem;
    margin-left: 132px;
  }
  .desc {
    display: block;
    color: #3e3e3e;
    font-size:1.8rem;
    margin: 30px 36px;
    line-height: 2.8rem;
  }
</style>
