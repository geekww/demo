<template>
  <div id="header">
    <div class="header_top">
      <div class="wrap clear">
        <p class="title left">原创设计的高端整屋家居</p>
        <div class="right">
          <div class="user_bar" style="display: inline-block;">
            <a id="login">登录</a>
            <a id="register">注册</a>
          </div>
          <div class="user_bar" style="display: none;">
            <a id="vip_center">会员中心</a>
            <a id="logout">退出</a>
          </div>
          <a class="app-loading"><i class="iconfont"></i>APP下载</a>
        </div>
      </div>
    </div>
    <div class="header_center">
      <img class="header_logo" src="https://pic.solux.cn/PC/home/logo.png">
    </div>
    <div class="header_footer">
      <div class="wrap clear">
        <div class="nav-bar left">
          <ul class="nav-list">
            <li class="left cur"><a href="javascript:void(0)">首页</a></li>
            <li class="left"><a href="javascript:void(0)">橱柜</a></li>
            <li class="left"><a href="javascript:void(0)">卫浴</a></li>
            <li class="left"><a href="javascript:void(0)">家具</a></li>
            <li class="left"><a href="javascript:void(0)">家居饰品</a></li>
          </ul>
        </div>
        <div class="search-bar right"></div>
      </div>
    </div>
  </div>
</template>
<script>
   // Vue.component("header",{
   //   template:"#header",
   //   data:{},
   //   methods:{}
   // });
   // export default {
   //   name: 'Header'
   // }
   // new Vue({
   //   el: '#header',
   //   data:{
   //     productList:[],
   //   },
   //   mounted:function () {
   //     //页面加载事件
   //     this.$nextTick(function () {
   //
   //     })
   //   },
   //   methods:{
   //
   //   }
   // })
</script>

<style>
  #header{background-color: #fff;width: 100%;position: relative;}
  .header_top{width: 100%;height: 40px;background-color: #232323;overflow: hidden;}
  .header_top .user_bar a{margin-right: 25px;}

  .header_center{width: 100%;height: auto;}
  .header_center .header_logo{width: 186px;height: 60px;margin: 40px auto 50px;display: block;}

  .header_footer{width: 100%;height: 60px;border-bottom: 1px solid #f3f3f3;}
  .header_footer .nav-list li{font-size: 16px;line-height: 24px;margin-right: 50px;height: 34px;position: relative;}
  .header_footer .nav-list .cur{border-bottom: 1px solid #bd7424;}
  .header_footer .nav-list .cur a{color: #bd7424;}
</style>
