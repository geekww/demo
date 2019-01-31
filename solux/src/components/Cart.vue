<template>
  <div id="car">
    <ul class="car_list">
      <li class="car_item clear" v-for="item in productList">
        <div class="car car_sel">
          <a href="javascript:void(0);" class="car_sel_btn" v-bind:class="{'checked':item.checked}" @click="selectProduct(item)"></a>
        </div>
        <div class="car car_name">
          <a class="left" href="" target="_blank">
            <img v-bind:src="item.img">
          </a>
          <div class="msg">
            <h2 class="p_name"><a target="_blank">{{item.name}}</a></h2>
            <h3 class="desc">{{item.desc}}</h3>
            <p class="spec">{{item.spec}}</p>
          </div>
        </div>
        <div class="car car_price">{{item.price | formatMoney}}</div>
        <div class="car_quan_btn">
          <a href="javascript:void(0);" class="car_btn car_redu" v-bind:class="{'disabled':item.disabled}" v-on:click="changeMoney(item,-1)">-</a>
          <input type="text" class="car_num" value="1" v-model="item.quantity">
          <a href="javascript:void(0);" class="car_btn car_add_btn" v-on:click="changeMoney(item,1)">+</a>
        </div>
        <div class="car car_total">{{item.price * item.quantity | formatMoney}}</div>
        <div class="car car_del">
          <a href="javascript:void(0);" class="car_del_btn"></a>
        </div>
      </li>
    </ul>
    <div class="car_footer">
      <div class="sel_all">
        <a class="sel_all_btn" v-bind:class="{'check':checkAllFlag}" @click="checkAll()"></a>
      </div>
      <div class="sel_already">
        <p>已选择<span>{{totalSelect}}</span>件商品</p>
      </div>
      <a href="javascript:void(0);" class="buy_btn">去结算</a>
      <div class="car_money">
        <p>总金额：<span>{{totalMoney | formatMoney}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'car',
    data () {
      return {
        totalMoney:0,
        totalSelect:0,
        checkAllFlag:false,
        productList:[
          {
            name: "Baird贝尔德 挂墙浴室柜800",
            desc: "简约实力派",
            spec: "",
            price: 1499,
            img :"https://pic.solux.cn/image/ac/97/aa/0322b4b0f48611ee83cffd904e.png?1525424467#h",
            quantity: 2,
          },
          {
            name: "方镜系列",
            desc: "漂亮的不像实力派",
            spec: "规格：单门镜柜",
            price: 2899,
            img: "https://pic.solux.cn/image/e0/d3/91/111881619c85f62654349ed2f5.png?1516689732#h",
            quantity: 1
          }
        ],
      }
    },
    filters:{
      //金额过滤器
      formatMoney:function(value){
        return '￥' + value.toFixed(2) + '元';
      }
    },
    methods:{
      changeMoney:function(item,way){
        if(way>0){
          item.quantity++;
        }else{
          item.quantity--;
          //数量最少为1
          if(item.quantity<1){
            item.quantity = 1;
          }
        }
        this.calcTotal();
      },
      selectProduct:function(item){
        if(typeof item.checked == 'undefined'){
          //局部注册checked
          this.$set(item,"checked",true);
        }else{
          item.checked = !item.checked;
        }
        this.calcTotal();
        //
        if(this.totalSelect >= this.productList.length){
          this.checkAllFlag = true;
        }else {
          this.checkAllFlag = false;
        }
      },
      checkAll:function(){
        //点击切换flag
        this.checkAllFlag = !this.checkAllFlag;
        var _this = this;
        this.productList.forEach(function(item,index){
          if(typeof item.checked == 'undefined'){
            //局部注册
            _this.$set(item,"checked",_this.checkAllFlag);
          }else{
            item.checked = _this.checkAllFlag;
          }
        });
        this.calcTotal();
      },
      calcTotal:function () {//计算总价和选中数量
       var _this = this;
        this.totalMoney = 0;
        this.totalSelect = 0;
        this.productList.forEach(function(item,index){
          if(item.checked){
            _this.totalMoney += item.price * item.quantity;
            _this.totalSelect = _this.totalSelect + 1;
          }
        });
      },
    }
  }
</script>

<style scoped>
  #car{
    margin-top: 50px;
  }
  .car_list{
    width: 1240px;
    margin: 0 auto;
    background: #fff;
    padding: 20px 40px;
  }
  .car_item{
    padding: 24px 0;
    border-top: 1px solid #e0e0e0;
  }
  .car_item .car{
    float: left;
    height: 100px;
  }
  .car_item .car_sel{
    width: 40px;
    position: relative;
  }
  .car_item .car_sel .car_sel_btn{
    width: 16px;
    height: 16px;
    border: 1px solid #808FAD;
    line-height: 100px;
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -8px;
  }
  .car_item .car_sel .car_sel_btn.checked{
    background: #000;
  }
  .car_name img{
    width: 100px;
    height: 100px;
    border: 1px solid #e0e0e0;
  }
  .car_name .msg{
    float: left;
    margin-left: 20px;
    color: #3f3f3f;
    text-align: left;
    width: 450px;
  }
  .car_name .msg .p_name{
    line-height: 28px;
  }
  .car_name .msg .desc{
    color: #999;
    line-height: 16px;
    font-size: 12px;
    margin-top: 5px;
  }
  .car_name .msg .spec{
    line-height: 24px;
    margin-top: 5px;
  }
  .car_price{
    line-height: 100px;
  }

  .car_quan_btn{
    width: 120px;
    height: 34px;
    float: left;
    margin-left: 100px;
    margin-top: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #e0e0e0;
  }
  .car_btn{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    transition: .2s;
  }
  .car_btn:hover{
    background: #f5f5f5;
  }
  .car_btn.car_redu{
    border-right: 1px solid #e0e0e0;
  }
  .car_btn.car_add_btn{
    border-left: 1px solid #e0e0e0;
  }
  .car_num{
    width: 54px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    float: left;
    border: none;
    outline:none
  }
  .car_total{
    width: 170px;
    line-height: 100px;
    color: #d4282d;
  }
  .car_del{
    float: left;
    line-height: 110px;
    width: 50px;
    text-align: center;
  }
  .car_del_btn{
    width: 20px;
    height: 20px;
    border-radius: 50px;
    display: inline-block;
    background: url('https://pic.solux.cn/icon/buy_icon_1.png')no-repeat -170px -50px;
    transition: .4s;
  }
  .car_del_btn:hover{
    background-position:-210px -50px
  }

  .car_footer{
    margin: 20px auto;
    width: 1240px;
    height: 64px;
    line-height: 64px;
    background: #fff;
  }
  .sel_all{
    width: 50px;
    height: 64px;
    position: relative;
    margin-left: 40px;
    float: left;
  }
  .sel_all_btn{
    width: 16px;
    height: 16px;
    border: 1px solid #808FAD;
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -8px;
  }
  .sel_all_btn.check{
    background: #000;
  }
  .sel_already{
    width: 120px;
    float: left;
  }
  .sel_already span{
    color: #d4282d;
    padding: 0 3px;
  }
  .car_money{
    float: right;
    margin-right: 20px;
    height: 64px;
  }
  .car_money span{
    color: #d4282d;
    padding-left: 5px;
    font-size: 18px;
  }
  .buy_btn{
    width: 140px;
    height: 64px;
    border: 0;
    color: #fff;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    float: right;
    transition: .4s;
    background: linear-gradient(to right,#DBC194,#C39664);
  }
  .buy_btn:hover{
    opacity: .85;
  }
</style>
