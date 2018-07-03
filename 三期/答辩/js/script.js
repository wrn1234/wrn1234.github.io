







//图片轮播 
var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });


//图片轮播 

//文字上下轮播


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
//文字上下轮播




//分类页的选项卡特效

new Vue ({
    el:".sort",
    data:{
        ars1:[
            {img:"images/women1.jpg",name:"百丽"},
            {img:"images/women2.jpg",name:"天意美"},
            {img:"images/women3.jpg",name:"他她"},
            {img:"images/women4.jpg",name:"拔佳"},
            {img:"images/women5.jpg",name:"思加图"},
            {img:"images/women6.jpg",name:"百思图"},
            {img:"images/women7.jpg",name:"森达"},
            {img:"images/women8.jpg",name:"妙丽"},
            {img:"images/women9.jpg",name:"全部品牌"},
          
        ],
        ars2:[
            {img:"images/simple1.jpg",name:"小白鞋"},
            {img:"images/simple2.jpg",name:"乐福鞋"},
            {img:"images/simple3.jpg",name:"休闲鞋"},
            {img:"images/simple4.jpg",name:"松糕鞋"},
            {img:"images/simple5.jpg",name:"内增高"},
            {img:"images/simple6.jpg",name:"帆布鞋"},
            {img:"images/simple7.jpg",name:"运动风"},
            {img:"images/simple8.jpg",name:"布洛克鞋"},
            {img:"images/simple9.jpg",name:"豆豆鞋"},
            {img:"images/simple10.jpg",name:"婚鞋"},
          
        ],
        ars3:[
            {img:"images/singles1.jpg",name:"浅口鞋"},
            {img:"images/singles2.jpg",name:"乐福鞋"},
            {img:"images/singles3.jpg",name:"平底鞋"},
            {img:"images/singles4.jpg",name:"满帮鞋"},
            {img:"images/singles5.jpg",name:"鱼嘴鞋"},
            {img:"images/singles6.jpg",name:"高跟鞋"},
            {img:"images/singles7.jpg",name:"坡跟鞋"},
            {img:"images/singles8.jpg",name:"松糕鞋"},
            {img:"images/singles9.jpg",name:"休闲鞋"},
            {img:"images/singles10.jpg",name:"粗高跟"},
            {img:"images/singles11.jpg",name:"布洛克鞋"},
            {img:"images/singles12.jpg",name:"帆布鞋"},
            {img:"images/singles13.jpg",name:"防水台"},
            {img:"images/singles14.jpg",name:"尖头鞋"},
            {img:"images/singles15.jpg",name:"内增高"},
            {img:"images/singles16.jpg",name:"婚鞋"},
            {img:"images/singles17.jpg",name:"运动风"},
            {img:"images/singles18.jpg",name:"豆豆鞋"},
            {img:"images/singles19.jpg",name:"雨鞋"},
           
          
        ],
         ars4:[
            {img:"images/foothold1.jpg",name:"纯凉鞋"},
            {img:"images/foothold2.jpg",name:"中空凉鞋"},
            {img:"images/foothold3.jpg",name:"坡跟凉鞋"},
            {img:"images/foothold4.jpg",name:"鱼嘴凉鞋"},
            {img:"images/foothold5.jpg",name:"后空凉鞋"},
            {img:"images/foothold6.jpg",name:"拖鞋"},
            {img:"images/foothold7.jpg",name:"凉靴"},
           
          
        ],
        ars5:[
            {img:"images/foothold1.jpg",name:"纯凉鞋"},
            {img:"images/foothold2.jpg",name:"中空凉鞋"},
            {img:"images/foothold3.jpg",name:"坡跟凉鞋"},
            {img:"images/foothold4.jpg",name:"鱼嘴凉鞋"},
            {img:"images/foothold5.jpg",name:"后空凉鞋"},
            {img:"images/foothold6.jpg",name:"拖鞋"},
            {img:"images/foothold7.jpg",name:"凉靴"},
           
          
        ],
        ars6:[
            {img:"images/son1.jpg",name:"百丽男鞋"},
            {img:"images/son2.jpg",name:"天意美"},
            {img:"images/son3.jpg",name:"他她"},
            {img:"images/son4.jpg",name:"拔佳"},
            {img:"images/son5.jpg",name:"暇步士"},
            {img:"images/son6.jpg",name:"森达"},
            {img:"images/son7.jpg",name:"爱乐"},
            {img:"images/son8.jpg",name:"花花公子"},
            {img:"images/son9.jpg",name:"全部品牌"},
        ],
        ars7:[
            {img:"images/man1.jpg",name:"满帮鞋"},
            {img:"images/man2.jpg",name:"休闲鞋"},
            {img:"images/man3.jpg",name:"乐福鞋"},
            {img:"images/man4.jpg",name:"正装鞋"},
            {img:"images/man5.jpg",name:"商务鞋"},
            {img:"images/man6.jpg",name:"豆豆鞋"},
            {img:"images/man7.jpg",name:"牛津鞋"},
            {img:"images/man8.jpg",name:"运动休闲"},
            {img:"images/man9.jpg",name:"德比鞋"},
            {img:"images/man10.jpg",name:"系带鞋"},
            {img:"images/man11.jpg",name:"工装鞋"},
            {img:"images/man12.jpg",name:"布鲁彻尔鞋"},
            {img:"images/man13.jpg",name:"布洛克鞋"},
            {img:"images/man14.jpg",name:"懒人鞋"},
            {img:"images/man15.jpg",name:"帆布鞋"},
            {img:"images/man16.jpg",name:"内增高"},
        ],
        ars8:[
            {img:"images/boots1.jpg",name:"低靴"},
            {img:"images/boots2.jpg",name:"中靴"},
            {img:"images/boots3.jpg",name:"高靴"},
            {img:"images/boots4.jpg",name:"雪地靴"},
            {img:"images/boots5.jpg",name:"雨靴"},
        ],
        ars9:[
            {img:"images/mancool1.jpg",name:"纯凉鞋"},
            {img:"images/mancool2.jpg",name:"人字拖"},
            
        ],
        ars10:[
            {img:"images/motion1.jpg",name:"阿迪达斯"},
            {img:"images/motion2.jpg",name:"耐克"},
            {img:"images/motion3.jpg",name:"彪马"},
            {img:"images/motion4.jpg",name:"new balance"},
            {img:"images/motion5.jpg",name:"三叶草"},
            {img:"images/motion6.jpg",name:"阿迪NEO"},
            {img:"images/motion7.jpg",name:"鬼冢虎"},
            {img:"images/motion8.jpg",name:"匡威"},
            {img:"images/motion9.jpg",name:"亚瑟士"},
            {img:"images/motion10.jpg",name:"锐步"},
            {img:"images/motion11.jpg",name:"万斯"},
            {img:"images/motion12.jpg",name:"Paul frank"},
            {img:"images/motion13.jpg",name:"Lacoste"},
            {img:"images/motion14.jpg",name:"Dickies"},
            {img:"images/motion15.jpg",name:"李宁"},
            {img:"images/motion16.jpg",name:"鸿星尔克"},
            {img:"images/motion17.jpg",name:"特步"},
            {img:"images/motion18.jpg",name:"全部品牌"},
        ],
        ars11:[
            {img:"images/gym1.jpg",name:"跑步鞋"},
            {img:"images/gym2.jpg",name:"篮球鞋"},
            {img:"images/gym3.jpg",name:"网球鞋"},
            {img:"images/gym4.jpg",name:"综训鞋"},
            {img:"images/gym5.jpg",name:"户外鞋"},
            {img:"images/gym6.jpg",name:"足球鞋"},
            {img:"images/gym7.jpg",name:"羽毛球鞋"},
            {img:"images/gym8.jpg",name:"赛车鞋"},
            {img:"images/gym9.jpg",name:"乒乓球鞋"},
        ],
        ars12:[
            {img:"images/leisure1.jpg",name:"休闲鞋"},
            {img:"images/leisure2.jpg",name:"复刻鞋"},
            {img:"images/leisure3.jpg",name:"帆布鞋"},
            {img:"images/leisure4.jpg",name:"复古鞋"},
            {img:"images/leisure5.jpg",name:"凉鞋/凉拖"},
        ],
        ars13:[
            {img:"images/athleticwear1.jpg",name:"夹克"},
            {img:"images/athleticwear2.jpg",name:"卫衣/套头衫"},
            {img:"images/athleticwear3.jpg",name:"衬衫"},
            {img:"images/athleticwear4.jpg",name:"T恤"},
            {img:"images/athleticwear5.jpg",name:"POLO衫"},
            {img:"images/athleticwear6.jpg",name:"背心"},
            {img:"images/athleticwear7.jpg",name:"紧身衣/胸衣"},
            {img:"images/athleticwear8.jpg",name:"裙子"},
            {img:"images/athleticwear9.jpg",name:"短裤"},
            {img:"images/athleticwear10.jpg",name:"中裤"},
            {img:"images/athleticwear11.jpg",name:"长裤"},
            {img:"images/athleticwear12.jpg",name:"羽绒服"},
        ],
        ars14:[
            {img:"images/sportsbag1.jpg",name:"双肩包"},
            {img:"images/sportsbag2.jpg",name:"单肩包"},
            {img:"images/sportsbag3.jpg",name:"腰包"},
            {img:"images/sportsbag4.jpg",name:"斜挎包"},
            {img:"images/sportsbag5.jpg",name:"手提包"},
            {img:"images/sportsbag6.jpg",name:"钱包"},
        ],
        ars15:[
            {img:"images/equipment1.jpg",name:"袜子"},
            {img:"images/equipment2.jpg",name:"帽子"},
            {img:"images/equipment3.jpg",name:"装备"},
            {img:"images/equipment4.jpg",name:"篮球"},
            {img:"images/equipment5.jpg",name:"足球"},
            {img:"images/equipment6.jpg",name:"护具"},
            
        ],
        ars16:[
            {img:"images/outdoors1.jpg",name:"T恤"},
            {img:"images/outdoors2.jpg",name:"休闲裤"},
            {img:"images/outdoors3.jpg",name:"软壳衣裤"},
            {img:"images/outdoors4.jpg",name:"抓绒衣裤"},
            {img:"images/outdoors5.jpg",name:"冲锋衣裤"},
        ],
        ars17:[
            {img:"images/shoesboots1.jpg",name:"徒步鞋"},
            {img:"images/shoesboots2.jpg",name:"越野鞋"},
            {img:"images/shoesboots3.jpg",name:"休闲鞋"},
            {img:"images/shoesboots4.jpg",name:"工装靴"},
        ],
        ars18:[
            {img:"images/brand1.jpg",name:"乐斯菲斯"},
            {img:"images/brand2.jpg",name:"卡特"},
            {img:"images/brand3.jpg",name:"添柏岚"},
        ],
        ars19:[
            {img:"images/children1.jpg",name:"跑步鞋"},
            {img:"images/children2.jpg",name:"复刻鞋"},
            {img:"images/children3.jpg",name:"休闲鞋"},
            {img:"images/children4.jpg",name:"户外鞋"},
            
        ],
        ars20:[
            {img:"images/childrenclothes1.jpg",name:"T恤"},
            {img:"images/childrenclothes2.jpg",name:"夹克"},
            {img:"images/childrenclothes3.jpg",name:"裤装"},
            {img:"images/childrenclothes4.jpg",name:"儿童套服"},
        ],
        ars21:[
            {img:"images/age1.jpg",name:"小童"},
            {img:"images/age2.jpg",name:"中童"},
            {img:"images/age3.jpg",name:"大童"},
        ],
        ars22:[
            {img:"images/childbrand1.jpg",name:"阿迪达斯"},
            {img:"images/childbrand2.jpg",name:"三叶草"},
            {img:"images/childbrand3.jpg",name:"耐克"},
            {img:"images/childbrand4.jpg",name:"卡洛施"},
            {img:"images/childbrand5.jpg",name:"百丽"},
            {img:"images/childbrand6.jpg",name:"天意美"},
        ],
        ars23:[
            {img:"images/baili.jpg",name:"百丽"},
            {img:"images/women2.jpg",name:"天意美"},
            {img:"images/tata.jpg",name:"他她"},
            {img:"images/women5.jpg",name:"思加图"},
            {img:"images/women7.jpg",name:"森达"},
            {img:"images/women6.jpg",name:"百思图"},
            {img:"images/zhenshimei.jpg",name:"真美诗"},
            {img:"images/son4.jpg",name:"拔佳"},
            {img:"images/son5.jpg",name:"暇步士"},
            {img:"images/miaoli.jpg",name:"妙丽"},
            {img:"images/yinnaier.jpg",name:"茵奈儿"},
            {img:"images/ka.jpg",name:"卡洛施"},
        ],
        ars24:[
            {img:"images/motion1.jpg",name:"阿迪达斯"},
            {img:"images/motion2.jpg",name:"耐克"},
            {img:"images/motion3.jpg",name:"彪马"},
            {img:"images/motion5.jpg",name:"三叶草"},
            {img:"images/motion6.jpg",name:"阿迪NEO"},
            {img:"images/motion7.jpg",name:"鬼冢虎"},
            {img:"images/motion8.jpg",name:"匡威"},
            {img:"images/motion9.jpg",name:"亚瑟士"},
            {img:"images/sikai.jpg",name:"斯凯奇"},
            {img:"images/motion10.jpg",name:"锐步"},
            {img:"images/motion11.jpg",name:"万斯"},
        ],
        ars25:[
            {img:"images/brand1.jpg",name:"乐斯菲斯"},
            {img:"images/brand2.jpg",name:"卡特"},
            {img:"images/tian.jpg",name:"添柏岚"},
            
        ],
        ars26:[
            {img:"images/motion1.jpg",name:"阿迪达斯"}, 
            {img:"images/motion5.jpg",name:"阿迪三叶草"},
            {img:"images/motion2.jpg",name:"耐克"},
            {img:"images/childbrand5.jpg",name:"百丽"},
            {img:"images/di.jpg",name:"迪士尼"},
            {img:"images/ka.jpg",name:"卡洛驰"},
        ],
        ars27:[
            {img:"images/ladysandals1.jpg",name:"纯凉鞋"},
            {img:"images/ladysandals2.jpg",name:"坡跟凉鞋"},
            {img:"images/ladysandals3.jpg",name:"中空凉鞋"},
            {img:"images/ladysandals4.jpg",name:"后空凉鞋"},
            {img:"images/ladysandals5.jpg",name:"拖鞋"},
        ],
        ars28:[
            {img:"images/ladiesshoes1.jpg",name:"浅口鞋"},
            {img:"images/ladiesshoes2.jpg",name:"满帮鞋"},
            {img:"images/ladiesshoes3.jpg",name:"休闲鞋"},
            {img:"images/ladiesshoes4.jpg",name:"乐福鞋"},
            {img:"images/ladiesshoes5.jpg",name:"平底鞋"},
            {img:"images/ladiesshoes6.jpg",name:"内增高"},
            {img:"images/ladiesshoes7.jpg",name:"坡跟鞋"},
            {img:"images/ladiesshoes8.jpg",name:"松糕鞋"},
            {img:"images/ladiesshoes9.jpg",name:"婚鞋"},
            {img:"images/ladiesshoes10.jpg",name:"高跟鞋"},
            {img:"images/ladiesshoes11.jpg",name:"鱼嘴鞋"},
        ],
        ars29:[
            {img:"images/long1.jpg",name:"短靴"},
            {img:"images/long2.jpg",name:"中靴"},
            {img:"images/long3.jpg",name:"绒里靴"},
            {img:"images/long4.jpg",name:"坡跟靴"},
            {img:"images/long5.jpg",name:"长靴"},
            {img:"images/long6.jpg",name:"超长靴"},
            {img:"images/long7.jpg",name:"马丁靴"},
        ],
        ars30:[
            {img:"images/liang1.jpg",name:"纯凉鞋"},
            {img:"images/liang2.jpg",name:"凉拖"},
            
        ],
        ars31:[
            {img:"images/nvliang1.jpg",name:"纯凉鞋"},
            {img:"images/nvliang2.jpg",name:"坡跟凉鞋"},
            {img:"images/nvliang3.jpg",name:"中空凉鞋"},
            {img:"images/nvliang4.jpg",name:"后空凉鞋"},
            {img:"images/nvliang5.jpg",name:"凉拖"},
            {img:"images/nvliang6.jpg",name:"凉靴"},
        ],
        ars32:[
            {img:"images/nvdan1.jpg",name:"浅口鞋"},
            {img:"images/nvdan2.jpg",name:"满帮鞋"},
            {img:"images/nvdan3.jpg",name:"休闲鞋"},
            {img:"images/nvdan4.jpg",name:"平底鞋"},
            {img:"images/nvdan5.jpg",name:"乐福鞋"},
            {img:"images/nvdan6.jpg",name:"内增高"},
            {img:"images/nvdan7.jpg",name:"尖头鞋"},
            {img:"images/nvdan8.jpg",name:"松糕鞋"},
            {img:"images/nvdan9.jpg",name:"坡跟鞋"},
            {img:"images/nvdan10.jpg",name:"运动风"},
            {img:"images/nvdan11.jpg",name:"防水台"},
            {img:"images/nvdan12.jpg",name:"粗跟鞋"},
        ],
        ars33:[
            {img:"images/nandan1.jpg",name:"乐福鞋"},
            {img:"images/nandan2.jpg",name:"满帮鞋"},
            {img:"images/nandan3.jpg",name:"休闲鞋"},
            {img:"images/nandan4.jpg",name:"系带鞋"},
            {img:"images/nandan5.jpg",name:"懒人鞋"},
            {img:"images/nandan6.jpg",name:"豆豆鞋"},
            {img:"images/nandan7.jpg",name:"内增高"},
            {img:"images/nandan8.jpg",name:"德比鞋"},
            
        ],
        ars34:[
            {img:"images/nanliang.jpg",name:"纯凉鞋"}
        ],
        ars35:[
            {img:"images/nanxue.jpg",name:"低靴"}
        ],
        ars36:[
            {img:"images/baili1.jpg",name:"纯凉鞋"},
            {img:"images/baili2.jpg",name:"中空凉鞋"},
            {img:"images/baili3.jpg",name:"坡跟凉鞋"},
            {img:"images/baili4.jpg",name:"后空凉鞋"},
            {img:"images/baili5.jpg",name:"鱼嘴凉鞋"},
            {img:"images/baili6.jpg",name:"拖鞋"},
            {img:"images/baili7.jpg",name:"凉靴"},
        ],
        ars37:[
            {img:"images/baili8.jpg",name:"浅口鞋"},
            {img:"images/baili9.jpg",name:"乐福鞋"},
            {img:"images/baili10.jpg",name:"满帮鞋"},
            {img:"images/baili11.jpg",name:"平底鞋"},
            {img:"images/baili12.jpg",name:"松糕鞋"},
            {img:"images/baili13.jpg",name:"高跟鞋"},
            {img:"images/baili14.jpg",name:"坡跟鞋"},
            {img:"images/baili15.jpg",name:"粗跟鞋"},
            {img:"images/baili16.jpg",name:"休闲鞋"},
            {img:"images/baili17.jpg",name:"鱼嘴鞋"},
            {img:"images/baili18.jpg",name:"防水台"},
            {img:"images/baili19.jpg",name:"尖头鞋"},
            {img:"images/baili20.jpg",name:"内增高"},
            {img:"images/baili21.jpg",name:"婚鞋"},
            {img:"images/baili22.jpg",name:"运动风鞋"},
            {img:"images/baili23.jpg",name:"豆豆鞋"},
        ],
        ars38:[
            {img:"images/baili24.jpg",name:"满帮鞋"},
            {img:"images/baili25.jpg",name:"商务鞋"},
            {img:"images/baili26.jpg",name:"乐福鞋"},
            {img:"images/baili27.jpg",name:"正装鞋"},
            {img:"images/baili28.jpg",name:"休闲鞋"},
            {img:"images/baili29.jpg",name:"豆豆鞋"},
            {img:"images/baili30.jpg",name:"牛津鞋"},
            {img:"images/baili31.jpg",name:"运动休闲"},
            {img:"images/baili32.jpg",name:"德比鞋"},
            {img:"images/baili33.jpg",name:"系带鞋"},
            {img:"images/baili34.jpg",name:"懒人鞋"},
        ],
        ars39:[
            {img:"images/sijia1.jpg",name:"纯凉鞋"},
            {img:"images/sijia2.jpg",name:"坡跟凉鞋"},
            {img:"images/sijia3.jpg",name:"中空凉鞋"},
            {img:"images/sijia4.jpg",name:"后空凉鞋"},
            {img:"images/sijia5.jpg",name:"拖鞋"},
            {img:"images/sijia6.jpg",name:"凉靴"},
        ],
        ars40:[
            {img:"images/sijia7.jpg",name:"浅口鞋"},
            {img:"images/sijia8.jpg",name:"满帮鞋"},
            {img:"images/sijia9.jpg",name:"尖头鞋"},
            {img:"images/sijia10.jpg",name:"乐福鞋"},
            {img:"images/sijia11.jpg",name:"休闲鞋"},
            {img:"images/sijia12.jpg",name:"粗跟鞋"},
            {img:"images/sijia13.jpg",name:"平底鞋"},
            {img:"images/sijia14.jpg",name:"超高跟"},
            {img:"images/sijia15.jpg",name:"坡跟鞋"},
            {img:"images/sijia16.jpg",name:"防水台"},
            {img:"images/sijia17.jpg",name:"鱼嘴鞋"},
            {img:"images/sijia18.jpg",name:"运动风鞋"},
            {img:"images/sijia19.jpg",name:"婚鞋"},
        ],
        ars41:[
            {img:"images/sijia20.jpg",name:"短靴"},
            {img:"images/sijia21.jpg",name:"中靴"},
            {img:"images/sijia22.jpg",name:"绒里靴"},
            {img:"images/sijia23.jpg",name:"长靴"},
            {img:"images/sijia24.jpg",name:"超长靴"},
            {img:"images/sijia25.jpg",name:"及踝靴"},
            {img:"images/sijia26.jpg",name:"马丁靴"},
        ],
        ars42:[
            {img:"images/senda1.jpg",name:"满帮鞋"},
            {img:"images/senda2.jpg",name:"系带鞋"},
            {img:"images/senda3.jpg",name:"正装鞋"},
            {img:"images/senda4.jpg",name:"懒人鞋"},
            {img:"images/senda5.jpg",name:"商务鞋"},
            {img:"images/senda6.jpg",name:"休闲鞋"},
        ],
        ars43:[
            {img:"images/senda7.jpg",name:"纯凉鞋"}
        ],
        ars44:[
            {img:"images/senda8.jpg",name:"低靴"}
        ],
        ars45:[
            {img:"images/senda9.jpg",name:"纯凉鞋"},
            {img:"images/senda10.jpg",name:"坡跟凉鞋"},
            {img:"images/senda11.jpg",name:"中空凉鞋"},
            {img:"images/senda12.jpg",name:"后空凉鞋"},
            {img:"images/senda13.jpg",name:"凉拖"},
        ],
        ars46:[
            {img:"images/senda14.jpg",name:"短靴"},
            {img:"images/senda15.jpg",name:"绒里靴"},
            {img:"images/senda16.jpg",name:"中靴"},
            {img:"images/senda17.jpg",name:"坡跟鞋"},
            {img:"images/senda18.jpg",name:"长靴"},
            {img:"images/senda19.jpg",name:"超长靴"},
            {img:"images/senda20.jpg",name:"马丁靴"},
            {img:"images/senda21.jpg",name:"雪地靴"},
        ],
        
    }
})



var sortNav=document.querySelectorAll(".sort .sortnav > li");
console.log(sortNav);
var sortList=document.querySelectorAll(".sort .sort-list>div");
console.log(sortList);


for(var i=0;i<sortNav.length;i++){
    sortNav[i].index=i;
    sortNav[i].onclick=function(){
    console.log(this.index);
    for(var j=0;j<sortList.length;j++){
        sortNav[j].classList.remove("color");
//            给div加class名
        sortList[j].classList.remove("act");
    }
    sortNav[this.index].classList.add("color");
    sortList[this.index].classList.add("act");
        
//    sortList[this.index].classList.add("active");
        
}
}
//分类页的选项卡特效

//我的页面的注册登录的特效
var si1=document.querySelector(".signin .in1");
var si2=document.querySelector(".signin .in2");
var inp=document.querySelector(".container .inp");
var my=document.querySelector(".container .my");
if(my!=null){
    my.style.display="none";
    si1.addEventListener("click",function(){
    inp.style.display="block";
    my.style.display="none";
    si1.style.borderBottom="2px red solid";
    si2.style.borderBottom="2px transparent solid";
    si1.style.color="red";
    si2.style.color="#000";
})
si2.addEventListener("click",function(){
    inp.style.display="none";
    my.style.display="block";
    si1.style.borderBottom="2px transparent solid";
    si2.style.borderBottom="2px red solid";
    si1.style.color="#000";
    si2.style.color="red";
})

}

//我的页面的注册登录的特效








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
//    平滑滚动
}
window.onscroll=function(){
    //search部分滚动变色
    
    //回到顶部，隐藏，显示
    if(document.body.scrollTop>300){
        document.querySelector(".footer-top").style.display="inline-block";
    }else{
        document.querySelector(".footer-top").style.display="none";
    }
}


//弹出广告
var gb = document.querySelector(".gb");
var ad = document.querySelector(".get-out");
var sj = document.querySelector(".sj span");
var num = Number(sj.innerHTML);

gb.addEventListener("click",function(){
    ad.style.display="none";
})
var jsq = setInterval(function(){
    num--;
    sj.innerHTML=num;
    if(num===0){
        ad.style.display="none";
        clearInterval(jsq);
    }
},1000)
//弹出广告








