/*menu DESKTOP*/
if(window.matchMedia('(any-pointer: fine)').matches) {
    // no-touchscreen
var contenitore_primo_menu_pc=document.createElement("section");contenitore_primo_menu_pc.classList.add("menu-desktop","sticky","classic-menu");var primo_nav_pc=document.createElement("nav");primo_nav_pc.classList.add("primo-nav-menu-pc"),primo_nav_pc.setAttribute("role","navigation"),contenitore_primo_menu_pc.appendChild(primo_nav_pc),
primo_nav_pc.innerHTML +='<ul class="flexnav menu with-js"><li id="menu-item-home-pc" class="menu-item menu-item-type-post_type menu-item-object-page link menu-timeline"><a href="home" data-type="page-transition" class="ajax-link"><span data-hover="Home">Home</span></a></li><li id="menu-item-servizi-pc" class="menu-item-servizi link menu-timeline"><a href="#" data-type="" class="link apri-menu-servizi" onclick="return false;"><span data-hover="Servizi">Servizi</span></a></li><li id="menu-item-contatti-pc" class="menu-item-contatti link menu-timeline"><a href="#" data-type="" class="link apri-popup-contact-form" onclick="return false;"><span data-hover="Contatti">Contatti</span></a></li></ul>';var primo_cont_ent=document.getElementById("page-content");primo_cont_ent.prepend(contenitore_primo_menu_pc);
//2nd menu
var contenitore_menu_pc = document.createElement('div');
contenitore_menu_pc.classList.add('overlay-navigation', 'contenitore-menu');
var nav_pc = document.createElement('nav');
nav_pc.classList.add('nav-menu-pc');
nav_pc.setAttribute('role', 'navigation');
contenitore_menu_pc.appendChild(nav_pc);
var cont_ent = document.getElementById('page-content');
cont_ent.appendChild(contenitore_menu_pc);
nav_pc.innerHTML +='<ul><li><a href="#" data-content="Progettazione e Sviluppo">Progettazione e Sviluppo</a></li><li><a href="#" data-content="Strategia digitali">Comunicazione Online</a></li><li><a href="#" data-content="Strategie di Branding">Comunicazione Offline</a></li></ul>';
//trigger
jQuery.noConflict()(function(e){e(".apri-menu-servizi").click(function(){e(".contenitore-menu").css("pointer-events","none");var i=e(".overlay-navigation");i.toggleClass("overlay-active"),i.hasClass("overlay-active")?(i.removeClass("overlay-slide-up").addClass("overlay-slide-down"),i.velocity("transition.slideLeftIn",{duration:200,delay:0,begin:function(){e(".nav-menu-pc ul li").velocity("transition.perspectiveLeftIn",{stagger:150,delay:0,complete:function(){e(".nav-menu-pc ul li a").velocity({opacity:[1,0]},{delay:5,duration:140}),e(".apri-menu-servizi").css("pointer-events","auto")}})}})):(e(".apri-menu-servizi").css("pointer-events","none"),i.removeClass("overlay-slide-down").addClass("overlay-slide-up"),e(".nav-menu-pc ul li").velocity("transition.perspectiveRightOut",{stagger:150,delay:0,complete:function(){i.velocity("transition.fadeOut",{delay:0,duration:200,complete:function(){e(".nav-menu-pc ul li a").velocity({opacity:[0,1]},{delay:0,duration:50}),e(".apri-menu-servizi").css("pointer-events","initial")}})}}))})});
//trigger
}
/*trigger popup laterale*/
jQuery.noConflict();(function($){ 
  $('.apri-popup-contact-form').on('click', function () {
        $('.inner-modal-contact').addClass('slidein');
        $('.popup-contact-form').addClass('active');
    });
    $('.chiudi-popup-contact-form,.outer-modal-contact').not('form').on('click', function () {
        $('.inner-modal-contact').removeClass('slidein');
        $('.popup-contact-form').removeClass('active');
		$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       $('.inner-modal-contact').removeClass('slidein');
        $('.popup-contact-form').removeClass('active');
    }
});
    });
})(jQuery);
/*MatchMedia Mobile Mediaqueries*/
if(window.matchMedia('(any-pointer: coarse)').matches) {
//circle radial
let radial_circle = document.createElement('div');
radial_circle.classList.add('radial', 'contenitore-radial-mobile');
radial_circle.innerHTML +='<a href="#" data-type="page-transition" class="action ajax-link"><div class="fa fa-phone fa-3x" id="fa-1"></div></a><a href="javascript:void(0)" class="action ajax-link"><div class="fa fa-comments fa-3x" id="fa-2"></div></a><a href="i-nostri-servizi" data-type="page-transition" class="ajax-link action"><div class="fa fa-search fa-3x" id="fa-3"></div></a><a class="fab center"><div class="fa fa-plus" id="plus"></div></a>';
let cont_ent_mobile = document.getElementById('page-content');
cont_ent_mobile.append(radial_circle);
let cta_footer_mobile = document.querySelector('.fab');
const handleToggle = () => radial_circle.classList.toggle('open');
let ctm_cta = document.querySelector('.action');
ctm_cta.onclick = () => handleToggle();
cta_footer_mobile.ontouchstart = () => handleToggle();
/*thank you*/
let innerhidden=jQuery(".inner2.hidden"),innervis=jQuery(".inner1");innerhidden.hide(),document.addEventListener("wpcf7mailsent",function(n){"80152"==n.detail.contactFormId&&(innervis.fadeOut(),innerhidden.removeClass("hidden").fadeIn())},!1);
/*popup mobile bottom*/
	/*if exists*/
	if (document.querySelector('.native-popup') !== null) {
function checkmobile(media){
  if (media.matches) {
       jQuery(".native-popup .contenuto-icon-box p").each(function(index , p) {
        var id = "popup-content-"+index; 
        jQuery(this).attr('id', id);
		jQuery(this).addClass("move-from-bottom");
        jQuery(this).addClass("mfp-with-anim");
        jQuery(this).addClass("white-popup-mobile");
        jQuery(this).addClass("mfp-hide");
		   let cta_mobile_popup = document.createElement('div');
		   cta_mobile_popup.innerHTML +='<a class="cta-popup-mobile ajax-link grad1" data-type="page-transition" href="../contatti"><div class="testo_blu-verde">Pronto? Iniziamo a lavorare? <i class="fas fa-chevron-circle-right"></i></div></a>';
		   jQuery(this).append(cta_mobile_popup)
     }); 
     
    
   
     jQuery(".native-popup .clapat-icon").each(function(index , icon) {
      
       var anchor = document.createElement("a");
		 var title_icon = document.querySelector('.native-popup .contenuto-icon-box h6');
		 anchor.classList.add("move-from-bottom");
        var p = jQuery(this).next(".contenuto-icon-box").children("p");
       var fake_id = p['0'].id;
       anchor.href = "#" + fake_id;
       var iconbox = jQuery(this).clone();
       iconbox = iconbox["0"];
       anchor.innerHTML =iconbox.innerHTML;
       jQuery(this).parent().prepend(anchor); 
        this.style.display = "none";
		 anchor.append(title_icon)
       
       
       
     });
    
  } else {
    
     jQuery(".native-popup .clapat-icon").each(function(index , icon) {
      
        var a = jQuery(this).siblings("a");
		 
        if(a) {
         a.remove();
		title_icon.remove();
		cta_mobile_popup.remove()
        }
        this.style.display = "inline";  
       
     });
    
    jQuery(".native-popup .contenuto-icon-box p").each(function(index , p) {
  
        jQuery(this).removeClass("move-from-bottom");
		jQuery(this).removeClass("mfp-with-anim");
        jQuery(this).removeClass("white-popup-mobile");
        jQuery(this).removeClass("mfp-hide");
     }); 
   
  }
}

var media = window.matchMedia("(max-width: 769px)")
checkmobile(media);
media.addListener(checkmobile)


// Inline popups
jQuery(document).ready(function (jQuery) {
 jQuery('.native-popup').magnificPopup({
  delegate: 'a',
  removalDelay: 500,
  mainClass:'move-from-bottom',
  midClick: true,
 showCloseBtn:false
    })
  });
 
 }
/*popup mobile*/
}/*chiusura matchmedia*/
/*audio*/
jQuery.noConflict()(function($){
    "use strict";
    $(document).ready(function() {
/*skill home*/
var skill = jQuery('.servizi-home a, .cta-footer a');
skill.addClass('skill-home link-image');
skill.each(function(index){$(this).velocity({delay:1200,delay:600*index,fadeIn:800})});
var audio = $('.focus-home');
var fonte = $('.focus-home source');
fonte.attr('src', '//whynot.media/2020/assets/uploads/2020/07/sounds-hover-home.mp3').attr('src','//whynot.media/2020/assets/uploads/2020/07/sounds-hover-home.ogg');
//musica repeat
skill.each(function(a){-1!=a&&audio.clone().attr("id","beep-"+a).appendTo($(this).parent()),$(this).data("beeper",a,audio)}).on('click', function(e){$("#beep-"+$(this).data("beeper"))[0].play(),$("#beep-").attr("id","beep-0").css("display","none")});
 });
/*Svg home*/
const elementsCC=document.querySelectorAll(".origin-center");elementsCC.forEach(e=>{let t=e.getBBox(),r=t.x,o=t.y,l=r+t.width/2+"px "+(o+t.height/2)+"px";e.style.setProperty("transform-origin",l)});let elementsTL=document.querySelectorAll(".origin-left");elementsTL.forEach(e=>{let t=e.getBBox(),r=t.x,o=t.y,l=(t.width,t.height,r+"px "+o+"px");e.style.setProperty("transform-origin",l)});
});
/*globo*/
if(null!==document.querySelector(".home")){var canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),spheres=[],imgdata=[];canvas.width=window.innerWidth,canvas.height=window.innerHeight;var imgWidth=100,imgHeight=50,screenX=canvas.width/2,screenY=canvas.height/2,screenScale=1e3,rotation=0,isReadyAnimation=!1,Vector=function(t,e,i){this.x=t,this.y=e,this.z=i},Particle=function(t,e,i,s){this.pos=new Vector(t,e,i),this.posModel=new Vector(t,e,i),this.GenerateColorFromImgIndex(s)};Particle.prototype.GenerateColorFromImgIndex=function(t){this.r=256-imgdata[4*t+0],this.g=256-imgdata[4*t+1],this.b=imgdata[4*t+2],this.a=0};var Sphere=function(t,e,i,s,a){this.pos=new Vector(t,e,1),this.particles=[],this.GeneratePoints(t,e,i,s,a)};function CreateColorsArr(){var t=document.createElement("canvas"),e=t.getContext("2d"),i=new Image;i.crossOrigin="",i.src="/assets/uploads/2021/05/il_mondo_e_piccolo.png";e=t.getContext("2d");i.onload=function(){e.translate(imgWidth,imgHeight),e.scale(-1,-1),e.drawImage(i,0,0),imgdata=e.getImageData(0,0,imgWidth,imgHeight).data,e.clearRect(0,0,imgWidth,imgHeight),spheres.push(new Sphere(0,0,canvas.height/4,imgWidth,imgHeight)),isReadyAnimation=!0}}function loop(){ctx.clearRect(0,0,canvas.width,canvas.height),isReadyAnimation&&(spheres[0].Draw(ctx),spheres[0].RotateAxisY(rotation),rotation+=.02),requestAnimationFrame(loop)}Sphere.prototype.GeneratePoints=function(t,e,i,s,a){t/=2,e/=2,s=Math.floor(s);for(var o=2*Math.PI/s,r=Math.PI/a,n=0;n<=a;n++)for(var h=0;h<s;h++){var c=i*Math.cos(o*h)*Math.sin(r*n),l=i*Math.sin(o*h)*Math.sin(r*n),p=i*Math.cos(r*n);this.particles.push(new Particle(t+c,e+p,l,n*imgWidth+h))}},Sphere.prototype.RotateAxisY=function(t){for(var e=0;e<this.particles.length;e++)this.particles[e].posModel.x=this.particles[e].pos.x*Math.cos(t)+-1*this.particles[e].pos.z*Math.sin(t),this.particles[e].posModel.y=this.particles[e].pos.y,this.particles[e].posModel.z=this.particles[e].pos.x*Math.sin(t)+this.particles[e].pos.z*Math.cos(t)},Sphere.prototype.Draw=function(t){t.beginPath();for(var e=0;e<this.particles.length;e++){var i=this.particles[e].posModel.z,s=this.particles[e].posModel.x*screenScale/(-1*i+screenScale)+screenX,a=this.particles[e].posModel.y*screenScale/(-1*i+screenScale)+screenY,o=(this.particles[e].posModel.z+imgWidth/2)/imgWidth;o>.2&&(t.fillStyle="rgba("+this.particles[e].r+","+this.particles[e].g+","+this.particles[e].b+","+o+")",t.fillRect(this.pos.x+s,this.pos.y+a,2,2))}},CreateColorsArr(),loop()}
/*Ajax Complete*/
jQuery(document).ajaxComplete(function(){
/*menu DESKTOP*/
if(window.matchMedia('(any-pointer: fine)').matches) {
    // no-touchscreen
var contenitore_primo_menu_pc=document.createElement("section");contenitore_primo_menu_pc.classList.add("menu-desktop","sticky","classic-menu");var primo_nav_pc=document.createElement("nav");primo_nav_pc.classList.add("primo-nav-menu-pc"),primo_nav_pc.setAttribute("role","navigation"),contenitore_primo_menu_pc.appendChild(primo_nav_pc),
primo_nav_pc.innerHTML +='<ul class="flexnav menu with-js"><li id="menu-item-home-pc" class="menu-item menu-item-type-post_type menu-item-object-page link menu-timeline"><a href="home" data-type="page-transition" class="ajax-link"><span data-hover="Home">Home</span></a></li><li id="menu-item-servizi-pc" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-servizi link menu-timeline"><a href="#" data-type="" class="link apri-menu-servizi" onclick="return false;"><span data-hover="Servizi">Servizi</span></a></li><li id="menu-item-contatti-pc" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-contatti link menu-timeline"><a href="#" data-type="" class="link apri-popup-contact-form" onclick="return false;"><span data-hover="Contatti">Contatti</span></a></li></ul>';var primo_cont_ent=document.getElementById("page-content");primo_cont_ent.prepend(contenitore_primo_menu_pc);
//2nd menu
var contenitore_menu_pc = document.createElement('div');
contenitore_menu_pc.classList.add('overlay-navigation', 'contenitore-menu');
var nav_pc = document.createElement('nav');
nav_pc.classList.add('nav-menu-pc');
nav_pc.setAttribute('role', 'navigation');
contenitore_menu_pc.appendChild(nav_pc);
var cont_ent = document.getElementById('page-content');
cont_ent.appendChild(contenitore_menu_pc);
nav_pc.innerHTML +='<ul><li><a href="#" data-content="Progettazione e Sviluppo">Progettazione e Sviluppo</a></li><li><a href="#" data-content="Strategia digitali">Comunicazione Online</a></li><li><a href="#" data-content="Strategie di Branding">Comunicazione Offline</a></li></ul>';
//trigger
jQuery.noConflict()(function(e){e(".apri-menu-servizi").click(function(){e(".contenitore-menu").css("pointer-events","none");var i=e(".overlay-navigation");i.toggleClass("overlay-active"),i.hasClass("overlay-active")?(i.removeClass("overlay-slide-up").addClass("overlay-slide-down"),i.velocity("transition.slideLeftIn",{duration:300,delay:0,begin:function(){e(".nav-menu-pc ul li").velocity("transition.perspectiveLeftIn",{stagger:150,delay:0,complete:function(){e(".nav-menu-pc ul li a").velocity({opacity:[1,0]},{delay:10,duration:140}),e(".apri-menu-servizi").css("pointer-events","auto")}})}})):(e(".apri-menu-servizi").css("pointer-events","none"),i.removeClass("overlay-slide-down").addClass("overlay-slide-up"),e(".nav-menu-pc ul li").velocity("transition.perspectiveRightOut",{stagger:150,delay:0,complete:function(){i.velocity("transition.fadeOut",{delay:0,duration:300,complete:function(){e(".nav-menu-pc ul li a").velocity({opacity:[0,1]},{delay:0,duration:50}),e(".apri-menu-servizi").css("pointer-events","auto")}})}}))})});
//trigger
}
/*trigger popup laterale*/
jQuery.noConflict();(function($){ 
  $('.apri-popup-contact-form').on('click', function () {
        $('.inner-modal-contact').addClass('slidein');
        $('.popup-contact-form').addClass('active');
    });
    $('.chiudi-popup-contact-form,.outer-modal-contact').not('form').on('click', function () {
        $('.inner-modal-contact').removeClass('slidein');
        $('.popup-contact-form').removeClass('active');
		$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       $('.inner-modal-contact').removeClass('slidein');
        $('.popup-contact-form').removeClass('active');
    }
});
    });
})(jQuery);
/*MatchMedia Mobile Mediaqueries*/
if(window.matchMedia('(any-pointer: coarse)').matches) {
//circle radial
let radial_circle = document.createElement('div');
radial_circle.classList.add('radial', 'contenitore-radial-mobile');
radial_circle.innerHTML +='<a href="#" data-type="page-transition" class="action ajax-link"><div class="fa fa-phone fa-3x" id="fa-1"></div></a><a href="javascript:void(0)" class="action ajax-link"><div class="fa fa-comments fa-3x" id="fa-2"></div></a><a href="i-nostri-servizi" data-type="page-transition" class="ajax-link action"><div class="fa fa-search fa-3x" id="fa-3"></div></a><a class="fab center"><div class="fa fa-plus" id="plus"></div></a>';
let cont_ent_mobile = document.getElementById('page-content');
cont_ent_mobile.append(radial_circle);
let cta_footer_mobile = document.querySelector('.fab');
const handleToggle = () => radial_circle.classList.toggle('open');
let ctm_cta = document.querySelector('.action');
ctm_cta.onclick = () => handleToggle();
cta_footer_mobile.ontouchstart = () => handleToggle();
/*thank you*/
let innerhidden=jQuery(".inner2.hidden"),innervis=jQuery(".inner1");innerhidden.hide(),document.addEventListener("wpcf7mailsent",function(n){"80152"==n.detail.contactFormId&&(innervis.fadeOut(),innerhidden.removeClass("hidden").fadeIn())},!1);
/*popup mobile bottom*/
	/*if exists*/
	if (document.querySelector('.native-popup') !== null) {
function checkmobile(media){
  if (media.matches) {
       jQuery(".native-popup .contenuto-icon-box p").each(function(index , p) {
        var id = "popup-content-"+index; 
        jQuery(this).attr('id', id);
		jQuery(this).addClass("move-from-bottom");
        jQuery(this).addClass("mfp-with-anim");
        jQuery(this).addClass("white-popup-mobile");
        jQuery(this).addClass("mfp-hide");
		   let cta_mobile_popup = document.createElement('div');
		   cta_mobile_popup.innerHTML +='<a class="cta-popup-mobile ajax-link grad1" data-type="page-transition" href="../contatti"><div class="testo_blu-verde">Pronto? Iniziamo a lavorare? <i class="fas fa-chevron-circle-right"></i></div></a>';
		   jQuery(this).append(cta_mobile_popup)
     }); 
     
    
   
     jQuery(".native-popup .clapat-icon").each(function(index , icon) {
      
       var anchor = document.createElement("a");
		 var title_icon = document.querySelector('.native-popup .contenuto-icon-box h6');
		 anchor.classList.add("move-from-bottom");
        var p = jQuery(this).next(".contenuto-icon-box").children("p");
       var fake_id = p['0'].id;
       anchor.href = "#" + fake_id;
       var iconbox = jQuery(this).clone();
       iconbox = iconbox["0"];
       anchor.innerHTML =iconbox.innerHTML;
       jQuery(this).parent().prepend(anchor); 
        this.style.display = "none";
		 anchor.append(title_icon)
       
       
       
     });
    
  } else {
    
     jQuery(".native-popup .clapat-icon").each(function(index , icon) {
      
        var a = jQuery(this).siblings("a");
		 
        if(a) {
         a.remove();
		title_icon.remove();
		cta_mobile_popup.remove()
        }
        this.style.display = "inline";  
       
     });
    
    jQuery(".native-popup .contenuto-icon-box p").each(function(index , p) {
  
        jQuery(this).removeClass("move-from-bottom");
		jQuery(this).removeClass("mfp-with-anim");
        jQuery(this).removeClass("white-popup-mobile");
        jQuery(this).removeClass("mfp-hide");
     }); 
   
  }
}

var media = window.matchMedia("(max-width: 769px)")
checkmobile(media);
media.addListener(checkmobile)


// Inline popups
jQuery(document).ready(function (jQuery) {
 jQuery('.native-popup').magnificPopup({
  delegate: 'a',
  removalDelay: 500,
  mainClass:'move-from-bottom',
  midClick: true,
 showCloseBtn:false
    })
  });
 
 }
/*popup mobile*/
}/*chiusura matchmedia*/
/*audio*/
jQuery.noConflict()(function($){
    "use strict";
    $(document).ready(function() {
/*skill home*/
var skill = jQuery('.servizi-home a, .cta-footer a');
skill.addClass('skill-home link-image');
skill.each(function(index){$(this).velocity({delay:1200,delay:600*index,fadeIn:800})});
var audio = $('.focus-home');
var fonte = $('.focus-home source');
fonte.attr('src', '//whynot.media/2020/assets/uploads/2020/07/sounds-hover-home.mp3').attr('src','//whynot.media/2020/assets/uploads/2020/07/sounds-hover-home.ogg');
//musica repeat
skill.each(function(a){-1!=a&&audio.clone().attr("id","beep-"+a).appendTo($(this).parent()),$(this).data("beeper",a,audio)}).on('click touchstart mouseenter', function(e){$("#beep-"+$(this).data("beeper"))[0].play(),$("#beep-").attr("id","beep-0").css("display","none")});
 });
/*Svg home*/
const elementsCC=document.querySelectorAll(".origin-center");elementsCC.forEach(e=>{let t=e.getBBox(),r=t.x,o=t.y,l=r+t.width/2+"px "+(o+t.height/2)+"px";e.style.setProperty("transform-origin",l)});let elementsTL=document.querySelectorAll(".origin-left");elementsTL.forEach(e=>{let t=e.getBBox(),r=t.x,o=t.y,l=(t.width,t.height,r+"px "+o+"px");e.style.setProperty("transform-origin",l)});
});
/*globo*/
if(null!==document.querySelector(".home")){var canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),spheres=[],imgdata=[];canvas.width=window.innerWidth,canvas.height=window.innerHeight;var imgWidth=100,imgHeight=50,screenX=canvas.width/2,screenY=canvas.height/2,screenScale=1e3,rotation=0,isReadyAnimation=!1,Vector=function(t,e,i){this.x=t,this.y=e,this.z=i},Particle=function(t,e,i,s){this.pos=new Vector(t,e,i),this.posModel=new Vector(t,e,i),this.GenerateColorFromImgIndex(s)};Particle.prototype.GenerateColorFromImgIndex=function(t){this.r=256-imgdata[4*t+0],this.g=256-imgdata[4*t+1],this.b=imgdata[4*t+2],this.a=0};var Sphere=function(t,e,i,s,a){this.pos=new Vector(t,e,1),this.particles=[],this.GeneratePoints(t,e,i,s,a)};function CreateColorsArr(){var t=document.createElement("canvas"),e=t.getContext("2d"),i=new Image;i.crossOrigin="",i.src="/assets/uploads/2021/05/il_mondo_e_piccolo.png";e=t.getContext("2d");i.onload=function(){e.translate(imgWidth,imgHeight),e.scale(-1,-1),e.drawImage(i,0,0),imgdata=e.getImageData(0,0,imgWidth,imgHeight).data,e.clearRect(0,0,imgWidth,imgHeight),spheres.push(new Sphere(0,0,canvas.height/4,imgWidth,imgHeight)),isReadyAnimation=!0}}function loop(){ctx.clearRect(0,0,canvas.width,canvas.height),isReadyAnimation&&(spheres[0].Draw(ctx),spheres[0].RotateAxisY(rotation),rotation+=.02),requestAnimationFrame(loop)}Sphere.prototype.GeneratePoints=function(t,e,i,s,a){t/=2,e/=2,s=Math.floor(s);for(var o=2*Math.PI/s,r=Math.PI/a,n=0;n<=a;n++)for(var h=0;h<s;h++){var c=i*Math.cos(o*h)*Math.sin(r*n),l=i*Math.sin(o*h)*Math.sin(r*n),p=i*Math.cos(r*n);this.particles.push(new Particle(t+c,e+p,l,n*imgWidth+h))}},Sphere.prototype.RotateAxisY=function(t){for(var e=0;e<this.particles.length;e++)this.particles[e].posModel.x=this.particles[e].pos.x*Math.cos(t)+-1*this.particles[e].pos.z*Math.sin(t),this.particles[e].posModel.y=this.particles[e].pos.y,this.particles[e].posModel.z=this.particles[e].pos.x*Math.sin(t)+this.particles[e].pos.z*Math.cos(t)},Sphere.prototype.Draw=function(t){t.beginPath();for(var e=0;e<this.particles.length;e++){var i=this.particles[e].posModel.z,s=this.particles[e].posModel.x*screenScale/(-1*i+screenScale)+screenX,a=this.particles[e].posModel.y*screenScale/(-1*i+screenScale)+screenY,o=(this.particles[e].posModel.z+imgWidth/2)/imgWidth;o>.2&&(t.fillStyle="rgba("+this.particles[e].r+","+this.particles[e].g+","+this.particles[e].b+","+o+")",t.fillRect(this.pos.x+s,this.pos.y+a,2,2))}},CreateColorsArr(),loop()}
});
