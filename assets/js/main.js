document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js",{particles:{number:{value:70,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"polygon",stroke:{width:0,color:"#ffffff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.5,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});var t=["learn","think","code","innovate"];!function e(n){void 0===t[n]&&setTimeout(function(){e(0)},0),n<t[n].length&&function e(n,t,i){t<n.length?(document.querySelector(".desc").innerHTML=n.substring(0,t+1)+"<span></span>",setTimeout(function(){e(n,t+1,i)},90)):"function"==typeof i&&setTimeout(i,700)}(t[n],0,function(){!function e(n,t,i){0<t?(document.querySelector(".desc").innerHTML=n.substring(0,t-1)+"<span></span>",setTimeout(function(){e(n,t-1,i)},90)):"function"==typeof i&&setTimeout(i,700)}(t[n],t[n].length,function(){e(n+1)})})}(0)},!1);