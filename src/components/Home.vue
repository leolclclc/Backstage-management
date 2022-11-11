<template>
  <div class="home">
      <Header/>
      <el-container class="content">
          <Menu/>
        <el-container>
        <el-main>
          <Breadcrumb/>
          <div class="cont">
          <router-view></router-view>
          </div>
        </el-main>
        <el-footer><Footer/></el-footer>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Menu from "./common/Menu.vue";
import Breadcrumb from "./Breadcrumb.vue";
export default {
  components: {
    Header,
    Menu,
    Footer,
    Breadcrumb,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  // background: red;
  .content{
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
  }
  .cont{
    margin-top: 10px;
  }
}
</style>
