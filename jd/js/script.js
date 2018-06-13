//京东广告关闭


//var ad=document.querySelector(".ad");
//var close=document.querySelector("#close");
//if(sessionStorage.ad == "false"){
//    ad.style.display="none";
//}else{
//    ad.style.display="block";
//}



close.onclick=function(){
    ad.style.display="none";
    sessionStorage.ad="false";
}



//banner部分轮播

var mySwiper = new Swiper ('.banner', {
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })        






//京东快报

//方法一

//setInterval(function(){
//    x();
//    setTimeout(function(){
//        e();
//        h();
//    },3000);
//},3500);

//方法二
setInterval(function(){
    x();
    
},3000);


setInterval(function(){
        e();
        h();
},3500);


//向上偏移16像素
function x(){
    $(".news .center .text").css({"transform":"translateY(-16px)","transition":"1s"});
};

//归零
function e(){
    $(".news .center .text").css({"transform":"translateY(0)","transition":"0s"});
};


//把第一个移动到末尾
function h(){
    $(".news .center .text").eq(0).appendTo($(".news .center"));
};







//首页京东秒杀部分的效果（倒计时）

var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 7, 1, 8),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());



//html调用方式
//<span id="hour">00</span> 




//京东直播
var swiper = new Swiper('.jingdongzhibo', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });



//为你推荐
new Vue ({
    el:"#app",
    data:{
        arrs:[
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price:"￥21.08", link:"https://item.m.jd.com/product/25732633792.html",link1:"http://www.jd.com/",link2:"https://home.m.jd.com/myjd/similar/list.action?skuId=26559837142"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗船",img:"images/weinituijian/2.jpg",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE 线",img:"images/weinituijian/3.jpg",price:"￥155.00"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套",img:"images/weinituijian/4.jpg",price:"￥59.00"},
            {name:"【京东超市】e洁 自动收口垃圾袋加厚45c",img:"images/weinituijian/1.jpg",price:"￥21.08",link:""},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗船",img:"images/weinituijian/2.jpg",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE线",img:"images/weinituijian/3.jpg",price:"￥155.00"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套",img:"images/weinituijian/4.jpg",price:"￥59.00"},
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price:"￥21.08"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透",img:"images/weinituijian/2.jpg",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE线",img:"images/weinituijian/3.jpg",price:"￥155.00"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套",img:"images/weinituijian/4.jpg",price:"￥59.00"},
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price:"￥21.08"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗",img:"images/weinituijian/2.jpg",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE线",img:"images/weinituijian/3.jpg",price:"￥155.00"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套",img:"images/weinituijian/4.jpg",price:"￥59.00"}
        ]
    }
})



//返回顶部
//
//var footer=document.querySelector(".footer-top");
// $(".footer-top").click(function () {
//        var speed=200;//滑动的速度
//        $('body,html').animate({ scrollTop: 0 }, speed);
//        return false;
// });

//$(".footer-top").click(function smoothscroll(){
//    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//    if (currentScroll>500) {
//         window.requestAnimationFrame(smoothscroll);
//         window.scrollTo (0,currentScroll - (currentScroll/5));
//    }
//});

var gotop = document.querySelector(".footer-top");

function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}

gotop.onclick = function(){
    smoothscroll();
}
var sr=document.querySelector(".search");
window.onscroll=function(){
    //search部分滚动变色
    if(sr!=null){
        if(document.body.scrollTop>115){
            document.querySelector(".search").style.background="red";
            document.querySelector(".search").style.top="0";
        }else{
            document.querySelector(".search").style.background="transparent";
            document.querySelector(".search").style.top="auto";
        }
    }
    
    //回到顶部，隐藏，显示
    if(document.body.scrollTop>1000){
        document.querySelector(".footer-top").style.display="inline-block";
    }else{
        document.querySelector(".footer-top").style.display="none";
    }
}



//分类页的js部分
new Vue({
    el:"#mainsort",
    data:{
        ars:[
            {img:"images/sort/5b056472N771896da.png",link:"",name:"电风扇"},
            {img:"images/sort/5b054fedN2ba90518.jpg",link:"",name:"手机"},
            {img:"images/sort/5b055000N410a7553.png",link:"",name:"空调"},
            {img:"images/sort/5b055011Nb89b2bda.png",link:"",name:"充电宝"},
            {img:"images/sort/5b05507eN6a4152bc.jpg",link:"",name:"蓝牙耳机"},
            {img:"images/sort/5b056485N5ff83ec1.png",link:"",name:"蚊帐"},
            {img:"images/sort/5b05648bN0b429032.png",link:"",name:"凉席"},
            {img:"images/sort/5b05648bN0b429032.png",link:"",name:"耳机"},
            {img:"images/sort/5b055555N9245f8aa.jpg",link:"",name:"电饭煲"},
            {img:"images/sort/5b055225N991ebfb0.png",link:"",name:"空调挂机"},
            {img:"images/sort/5b0565a7N8dbc0017.png",link:"",name:"路由器"},
            {img:"images/sort/5b0552f2Nac9a0c92.png",link:"",name:"空调扇"},
            {img:"images/sort/5b0552eaNbc8f1bda.png",link:"",name:"男鞋"},
            {img:"images/sort/5b055235Nf8fb2d6c.png",link:"",name:"热水器"},
            {img:"images/sort/5b055644Nf0b93238.jpg",link:"",name:"防晒"}
        ],
        ars1:[
            {img:"images/sort/5b0567c1N59d53b27.png",link:"",name:"冰箱"},
            {img:"images/sort/5b0567c7N9cc1c355.png",link:"",name:"洗衣机"},
            {img:"images/sort/5b0567cdN275fbcdd.png",link:"",name:"电视"},
        ],
        ars2:[
            {img:"images/sort/5a4f4872Ndb69555f.png",link:"",name:"华为手机"},
            {img:"images/sort/5a4f4867Ncb588473.png",link:"",name:"荣耀手机"},
            {img:"images/sort/5a69d582N25086304.png",link:"",name:"苹果手机"},
        ],
        ars3:[
            {img:"images/sort/1.jpg",link:"",name:"小米"},
            {img:"images/sort/2.jpg",link:"",name:"华为"},
            {img:"images/sort/3.jpg",link:"",name:"荣耀"},
            {img:"images/sort/4.jpg",link:"",name:"iPhone"},
            {img:"images/sort/5.jpg",link:"",name:"vivo"},
            {img:"images/sort/6.jpg",link:"",name:"OPPO"},
            {img:"images/sort/7.jpg",link:"",name:"魅族"},
            {img:"images/sort/8.jpg",link:"",name:"三星"},
            {img:"images/sort/9.jpg",link:"",name:"一加"},
            {img:"images/sort/10.jpg",link:"",name:"360手机"},
            {img:"images/sort/11.jpg",link:"",name:"锤子手机"},
            {img:"images/sort/12.jpg",link:"",name:"努比亚"}
        ],
        ars4:[
            {img:"images/sort/5a169217N5d1b842e.jpg",link:"",name:"老人机"},
            {img:"images/sort/5a169216N0701c7f1.jpg",link:"",name:"手机"},
            {img:"images/sort/5ac48d27N3f5bb821.jpg",link:"",name:"全面屏手机"},
            {img:"images/sort/5a169238Nc8f0882b.jpg",link:"",name:"游戏手机"},
            {img:"images/sort/5a169232Ndf76f53c.jpg",link:"",name:"拍照手机"},
            {img:"images/sort/5a169204Nd4aa27bb.jpg",link:"",name:"对讲机"},
            {img:"images/sort/5a1691e0N62f626e3.jpg",link:"",name:"京东回收"},
            {img:"images/sort/5a9fa728Nbff29ad2.jpg",link:"",name:"女性手机"},
            {img:"images/sort/5a169205N84a49a6a.jpg",link:"",name:"京东回收"},
            
        ],
        ars5:[
            {img:"images/sort/5a17f1d2N8078d5e6.jpg",link:"",name:"电水壶、热水"},
            {img:"images/sort/5a17f21dN905aaf4c.jpg",link:"",name:"电压力锅"},
            {img:"images/sort/5a17f224Nea1d3f59.jpg",link:"",name:"电饭煲"},
            {img:"images/sort/5a17f1edN56abbe6e.jpg",link:"",name:"电磁炉"},
            {img:"images/sort/5a17f203N50016f64.jpg",link:"",name:"微波炉"},
            {img:"images/sort/5a17f1e3Nf7957b34.jpg",link:"",name:"电饼铛"},
            {img:"images/sort/5a17f229Nc4c681fb.jpg",link:"",name:"豆浆机"},
            {img:"images/sort/5a17f1ccN019c7fda.jpg",link:"",name:"多用途锅"},
            {img:"images/sort/5a17f237Nb9978251.jpg",link:"",name:"料理锅"},
            {img:"images/sort/5a17f224N9756f6e5.jpg",link:"",name:"榨汁机"},
            {img:"images/sort/5a17f1f1N9c125c81.jpg",link:"",name:"电烤箱"},
            {img:"images/sort/5a17c966Nd140f4e3.jpg",link:"",name:"养生壶"},
            {img:"images/sort/5a17f1aeNf7647558.jpg",link:"",name:"电炖锅"},
            {img:"images/sort/5a17f1a9N8a775fab.jpg",link:"",name:"电烧烤炉"},
            {img:"images/sort/5a17f20aNde6af185.jpg",link:"",name:"面包机"},
            {img:"images/sort/5a17f208N6ea88eba.jpg",link:"",name:"咖啡机"},
            {img:"images/sort/5a17f1e3Nbb40dec0.jpg",link:"",name:"煮蛋器"},
            {img:"images/sort/5a17c968Nb5ea6a23.jpg",link:"",name:"电热饭盒"},
            {img:"images/sort/5a17c97bNad765464.jpg",link:"",name:"其他厨房电器"},
            {img:"images/sort/5a17c946N052e26a3.jpg",link:"",name:"面条机"},
            {img:"images/sort/5a17f1deN2f022a90.jpg",link:"",name:"酸奶机"},
            {img:"images/sort/5a17f1fbNc9df1b71.jpg",link:"",name:"空气炸锅"},
            {img:"images/sort/5a17f1b7N26b23a3a.jpg",link:"",name:"蔬菜解毒机"},
        ],
        ars6:[
            {img:"images/sort/5a17c20fN16e27ed9.png",link:"",name:"电吹风"},
            {img:"images/sort/5a17c221Nf85c1934.jpg",link:"",name:"剃须刀"},
            {img:"images/sort/5a17c201N6f968e89.jpg",link:"",name:"理发器"},
            {img:"images/sort/5a17c1eeNb9958e28.jpg",link:"",name:"足浴盆"},
            {img:"images/sort/5a17c21bN9fa5f473.jpg",link:"",name:"剃脱毛器"},
            {img:"images/sort/5a17c1f5Nb9390d12.jpg",link:"",name:"按摩器"},
            {img:"images/sort/5a17c1ddNba83885a.jpg",link:"",name:"卷、直发器"},
            {img:"images/sort/5a17c1fcN516045fe.jpg",link:"",name:"按摩椅"},
            {img:"images/sort/5a17c214N2eab4352.jpg",link:"",name:"口腔护理"},
            {img:"images/sort/5a17c1e8Nbfc87330.jpg",link:"",name:"电子秤"},
            {img:"images/sort/5a17c209Nff3d08aa.jpg",link:"",name:"美容器"},
            {img:"images/sort/5a17c1e3N576565f7.jpg",link:"",name:"其他健康电器"},
        ],
        ars7:[
            {img:"images/sort/5a17ba79N18b9f3d4.png",link:"",name:"轻薄本"},
            {img:"images/sort/5a17ba96N49561fea.png",link:"",name:"游戏本"},
            {img:"images/sort/5a17ba5aN0406a1b5.jpg",link:"",name:"机械键盘"},
            {img:"images/sort/5a17ba73N07b12f0c.jpg",link:"",name:"组装电脑"},
            {img:"images/sort/5a17ba7fN0740c051.jpg",link:"",name:"移动硬盘"},
            {img:"images/sort/5a17ba57Nf179b4e4.jpg",link:"",name:"显卡"},
            {img:"images/sort/5a17ba8bN911b7264.jpg",link:"",name:"游戏台式机"},
            {img:"images/sort/5a17ba5dN8f6ffa5e.jpg",link:"",name:"家用打印机"},
            {img:"images/sort/5a9fa34bNff4ef403.jpg",link:"",name:"吃鸡装备"},
            {img:"images/sort/5a17ba6dNafc95373.jpg",link:"",name:"曲屏显示器"},
            {img:"images/sort/5a17ba61N61a74bc3.jpg",link:"",name:"投影机"},
            {img:"images/sort/5a9fa366N889aad0f.jpg",link:"",name:"日本文具"},
            
        ],
        ars8:[
            {img:"images/sort/5a1fa4dfN13635e0b.jpg",link:"",name:"避孕套"},
            {img:"images/sort/5a1fa4c9N1722220b.jpg",link:"",name:"飞机杯"},
            {img:"images/sort/5a27dd39Nb291d7b4.jpg",link:"",name:"润滑液"},
            {img:"images/sort/5a1fa4d3N73ba4e26.jpg",link:"",name:"振动棒"},
            {img:"images/sort/5a27dd3dN8c2a767c.jpg",link:"",name:"情趣内衣"},
            {img:"images/sort/5a27dd43N3f71897a.jpg",link:"",name:"充气娃娃"},
        ],
        ars9:[
             {img:"images/sort/5afd3cbeN77d00886.jpg",link:"",name:"防晒"},
            {img:"images/sort/5afd3cc9N3add85ae.jpg",link:"",name:"控油"},
        ],
        ars10:[
            {img:"images/sort/5afd3d66Nbb817b81.jpg",link:"",name:"明星同款面膜"},
            {img:"images/sort/5afd3d61Ne42d8f0d.jpg",link:"",name:"显白口红"},
            {img:"images/sort/5afd3d5cN85837566.jpg",link:"",name:"小美盒"},
        ],
        ars11:[
            {img:"images/sort/5afd3d41N088429d4.jpg",link:"",name:"护肤礼盒"},
            {img:"images/sort/5afd3d3bN75fa18d3.jpg",link:"",name:"深层清洁"},
            {img:"images/sort/5afd3d35N2a6ee1be.jpg",link:"",name:"敏感肌"},
            {img:"images/sort/5afd3d27Ne9bbcfbf.jpg",link:"",name:"洁面"},
            {img:"images/sort/5afd3d21N7fc7e6b4.jpg",link:"",name:"爽肤水|化妆水"},
            {img:"images/sort/5afd3d1cN8cd5e8cc.jpg",link:"",name:"乳液面霜"},
            {img:"images/sort/5afd3d11Nc13f1029.jpg",link:"",name:"精华肌底液"},
            {img:"images/sort/5afd3d16N945cdc81.jpg",link:"",name:"眼霜"},
            {img:"images/sort/5afd3d07N2d13b43f.jpg",link:"",name:"睡眠面膜"},
            {img:"images/sort/5afd3cfdNa7337800.jpg",link:"",name:"面膜"},
            {img:"images/sort/5afd3cf8N65b1a524.jpg",link:"",name:"唇膜"},
            {img:"images/sort/5afd3cf3N79f5cd53.jpg",link:"",name:"润唇膏"},
            {img:"images/sort/5afd3ceeN5fc18eee.jpg",link:"",name:"眼膜"},
            {img:"images/sort/5afd3ce9N7eded916.png",link:"",name:"喷雾"},
            {img:"images/sort/5afd3ce3N13c408e7.jpg",link:"",name:"护肤套装"},
            {img:"images/sort/5afd3cdfN9bc90ffe.jpg",link:"",name:"T区护理"},
        ],
        ars12:[
            {img:"images/sort/5afd3c8aNd0e71275.jpg",link:"",name:"抗痘"},
            {img:"images/sort/5afd3c8fNc3b46f7b.jpg",link:"",name:"去黑头"},
            {img:"images/sort/5afd3c94N0e8d9216.jpg",link:"",name:"护肤套装"},
            {img:"images/sort/5afd3c98N71ab9819.jpg",link:"",name:"护肤礼盒"},
            {img:"images/sort/5afd3c9dNba0bf087.jpg",link:"",name:"洁面"},
            {img:"images/sort/5afd3ca2Na8144609.jpg",link:"",name:"剃须"},
            {img:"images/sort/5afd3cbeN77d00886.jpg",link:"",name:"防晒"},
            {img:"images/sort/5afd3c78Nc97eeb61.jpg",link:"",name:"爽肤水"},
            {img:"images/sort/5afd3c73Nace48a2e.jpg",link:"",name:"乳液面霜"},
            {img:"images/sort/5afd3c69N8fb6d828.jpg",link:"",name:"面膜"},
            {img:"images/sort/5afd3c60N21358b6a.jpg",link:"",name:"精华"},
            {img:"images/sort/5afd3c5cNf78334a9.jpg",link:"",name:"眼霜"},
            {img:"images/sort/5afd3c57N0443bb1f.jpg",link:"",name:"T区护理"},
            {img:"images/sort/5afd3c53N124735ef.jpg",link:"",name:"润唇膏"},
        ],
        ars13:[
            {img:"images/sort/5afd3c4bNc8d91bef.jpg",link:"",name:"女士香水"},
            {img:"images/sort/5afd3c46N0888d2dc.jpg",link:"",name:"男士香水"},
            {img:"images/sort/5afd3c42Ne4e18819.jpg",link:"",name:"香水礼盒"},
        ],
        ars14:[
            {img:"images/sort/5afd3c33N4a033cfa.jpg",link:"",name:"口红"},
            {img:"images/sort/5afd3c2eNa0edf02a.jpg",link:"",name:"气垫"},
            {img:"images/sort/5afd3c2aN62a8f842.jpg",link:"",name:"美甲"},
            {img:"images/sort/5afd3c1eN4eb4f341 (1).jpg",link:"",name:"粉底液、膏"},
            {img:"images/sort/5afd3c19N9a112423.jpg",link:"",name:"粉饼"},
            {img:"images/sort/5afd3c14N3a511758.jpg",link:"",name:"BB霜"},
            {img:"images/sort/5afd3c0fNf14f2ed1.jpg",link:"",name:"CC霜"},
            {img:"images/sort/5afd3bfaNa5f834a7.jpg",link:"",name:"眼线笔眼线液"},
            {img:"images/sort/5afd3bf6N9ef95dd1.jpg",link:"",name:"眼影"},
            {img:"images/sort/5afd3bf0Ncb393625.jpg",link:"",name:"腮红、胭脂"},
            {img:"images/sort/5afd3becN4cc965ae.jpg",link:"",name:"遮瑕"},
            {img:"images/sort/5afd3be8Nefd90916.jpg",link:"",name:"修容高光阴影"},
            {img:"images/sort/5afd3be2Nba54d202.jpg",link:"",name:"唇彩唇蜜唇釉"},
            {img:"images/sort/5afd3bdbNb2cd54b7.jpg",link:"",name:"唇笔唇线笔"},
            {img:"images/sort/5afd3bd6N0a805fe2.jpg",link:"",name:"彩妆套装"},
            {img:"images/sort/5afd3bd1Ndbbacc22.jpg",link:"",name:"男士彩妆"},
        ],
        ars15:[
            {img:"images/sort/5afd3bc6N2c61707c.jpg",link:"",name:"双眼皮贴"},
            {img:"images/sort/5afd3bc2N2c9377b7.jpg",link:"",name:"化妆棉"},
            {img:"images/sort/5afd3bbdN0b87943b.jpg",link:"",name:"化妆刷"},
            {img:"images/sort/5afd3bb8N9e1eed58.jpg",link:"",name:"粉扑洗脸扑"},
            {img:"images/sort/5afd3bb3N6955aa67.jpg",link:"",name:"假睫毛"},
            {img:"images/sort/5afd3badN235377a2.jpg",link:"",name:"睫毛夹"},
            {img:"images/sort/5afd3ba8N9c3a0301.jpg",link:"",name:"修眉刀"},
            {img:"images/sort/5afd3ba2N3d1558c2.jpg",link:"",name:"美妆工具套装"},
            {img:"images/sort/5afd3b9dNbc82998f.jpg",link:"",name:"美甲工具"},
            {img:"images/sort/5afd3b94Nc639af2a.jpg",link:"",name:"吸油纸"},
        ],
        ars16:[
            {img:"images/sort/5afd3b8bNd3ab0345.jpg",link:"",name:"SK_LL"},
            {img:"images/sort/5afd3b86N66bfc3a6.jpg",link:"",name:"欧莱雅"},
            {img:"images/sort/5afd3b80N95f5b02a.jpg",link:"",name:"碧欧泉"},
            {img:"images/sort/5afd3b7aN6233b03e.jpg",link:"",name:"悦诗风吟"},
            {img:"images/sort/5afd3b74N0ee70005.jpg",link:"",name:"赫莲娜"},
            {img:"images/sort/5afd3b70Nde29ec70.jpg",link:"",name:"玉兰油"},
            {img:"images/sort/5afd3b6aNbcadd493.jpg",link:"",name:"百雀羚"},
            {img:"images/sort/5afd3b64N1cfcd0d3.jpg",link:"",name:"妮维雅"},
            {img:"images/sort/5afd3b5fN4e8853a7.jpg",link:"",name:"自然堂"},
            {img:"images/sort/5afd3b5aN09a99e44.jpg",link:"",name:"御泥坊"},
            {img:"images/sort/5afd3b55N837c2f0e.jpg",link:"",name:"韩束"},
            {img:"images/sort/5afd3b51Na844d525.jpg",link:"",name:"美迪惠尔"},
            {img:"images/sort/5afd3b49Ncd6a25b8.jpg",link:"",name:"曼秀雷敦"},
            {img:"images/sort/5afd3b43N3dea11cd.jpg",link:"",name:"美宝莲"},
            {img:"images/sort/5afd3b3eN324ec57a.jpg",link:"",name:"相宜本草"},
            {img:"images/sort/5afd3b38Nbc5b7264.jpg",link:"",name:"兰芝"},
            {img:"images/sort/5afd3b33N06209208.jpg",link:"",name:"屈臣氏"},
            {img:"images/sort/5afd3b2eN5515804c.jpg",link:"",name:"佰草集"},
            {img:"images/sort/5afd3b28N6a8f3a24.jpg",link:"",name:"玛丽黛佳"},
            {img:"images/sort/5afd3b24Nb79f1297.jpg",link:"",name:"丝芙兰"},
            {img:"images/sort/5afd3b1fN9093e6da.png",link:"",name:"理肤泉"},
            {img:"images/sort/5afd3b19N7fc82bf1.jpg",link:"",name:"古驰"},
            {img:"images/sort/5afd3b15N2592a65b.jpg",link:"",name:"伊蒂之屋"},
            {img:"images/sort/5afd3b10N59c0b179.jpg",link:"",name:"博柏利"},
            {img:"images/sort/5afd3afeN2c04d637.jpg",link:"",name:"小美盒"},
        ],
        ars17:[
            {img:"images/sort/5b03c73fN69e0c2b7.jpg",link:"",name:"个护馆"},
            {img:"images/sort/5b03bf93Na049c54e.jpg",link:"",name:"清洁馆"},
            {img:"images/sort/5afd574eNb1ad35ae.jpg",link:"",name:"进口清洁"},
            {img:"images/sort/5afd5747N2fc58c3e.jpg",link:"",name:"卫生棉条"},
            {img:"images/sort/5afd5740Na342fa77.jpg",link:"",name:"湿厕纸"},
            {img:"images/sort/5afd572dN7ed9c341.jpg",link:"",name:"花露水"},
            {img:"images/sort/5afd5727N9f7271c7.jpg",link:"",name:"驱蚊用品"},
            {img:"images/sort/5afd571fN18ed0cd5.jpg",link:"",name:"本色纸"},
            {img:"images/sort/5afd571aN43e80da5.jpg",link:"",name:"免洗洗手液"},
        ],
        ars18:[
            {img:"images/sort/5afd5700N355dfa7d.jpg",link:"",name:"护肤套装"},
            {img:"images/sort/5b03ca93Nb4f64094.jpg",link:"",name:"护肤礼盒"},
            {img:"images/sort/5afd56f2Nf2b8ca84.jpg",link:"",name:"洁面"},
            {img:"images/sort/5afd56ecN8257b620.jpg",link:"",name:"剃须"},
            {img:"images/sort/5afd56e7N9961fe19.jpg",link:"",name:"防晒"},
            {img:"images/sort/5afd56e1N98a273a3.jpg",link:"",name:"爽肤水"},
            {img:"images/sort/5afd56dcNc16970a8.jpg",link:"",name:"乳液面霜"},
            {img:"images/sort/5afd56d5N4a00680d.jpg",link:"",name:"面膜"},
            {img:"images/sort/5afd56cfNaabd3f8c.jpg",link:"",name:"精华"},
            {img:"images/sort/5afd56caNdb42ae94.jpg",link:"",name:"眼霜"},
            {img:"images/sort/5afd56b8N1bd6906e.jpg",link:"",name:"T区护理"},
            {img:"images/sort/5afd56afN495321fb.jpg",link:"",name:"润唇膏"},
        ],
        ars19:[
            {img:"images/sort/5afd568bN971e6358.jpg",link:"",name:"抽纸"},
            {img:"images/sort/5afd5686N67808fa9.jpg",link:"",name:"卷纸"},
            {img:"images/sort/5afd5681N00604b0d.jpg",link:"",name:"手帕纸"},
            {img:"images/sort/5afd567cNfc430327.jpg",link:"",name:"湿巾"},
            {img:"images/sort/5afd5678N54ce98af.jpg",link:"",name:"厨房纸巾"},
        ]
        
    }
})


var sortNav=document.querySelectorAll(".sort .main .sortnav > li");
console.log(sortNav);
var sortList=document.querySelectorAll(".sort .main .sortlist>div");
console.log(sortList);


for(var i=0;i<sortNav.length;i++){
    sortNav[i].index=i;
    sortNav[i].onclick=function(){
    console.log(this.index);
    for(var i=0;i<sortList.length;i++){
        sortNav[i].classList.remove("active");
        sortList[i].classList.remove("active");
    }
    sortNav[this.index].classList.add("active");
    sortList[this.index].classList.add("active");
}
}
































