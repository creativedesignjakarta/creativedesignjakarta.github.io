/*
    This is a License
    Web Developer by Suryo DwiJayanto | CusMeDroid
    Don't delete this part!
*/
var coll=document.getElementsByClassName("collapsible"),mVisit=document.getElementById("mvisittxt"),mDakso=document.getElementById("ckdt"),vLoad=document.getElementById("vload");for(icol=0;icol<coll.length;icol++)coll[icol].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});var icol,pDts,mTitle,mTl1=document.getElementById("title1"),mTl2=document.getElementById("title2"),mTl3=document.getElementById("title3"),mTl4=document.getElementById("title4"),mTl5=document.getElementById("title5"),mTl6=document.getElementById("title6"),mKyw=document.getElementById("keywords"),mDsc1=document.getElementById("desc1"),mDsc2=document.getElementById("desc2"),mDsc3=document.getElementById("desc3"),mDsc4=document.getElementById("desc4"),mDsc5=document.getElementById("desc5"),cdHeader=document.getElementById("cdjheader"),imgHeader=firebase.database().ref("website/header_img");imgHeader.on("value",e=>{var t=e.val();t&&cdHeader.setAttribute("style","background-image: url('"+t+"') !important;")});var titleWeb=firebase.database().ref("website/title");titleWeb.on("value",e=>{var t=e.val();t&&(mTitle=t,mTl1.innerHTML=t,mTl2.setAttribute("content",t),mTl3.setAttribute("content",t),mTl4.setAttribute("content",t),mTl5.setAttribute("content",t),mTl6.innerHTML=t)});var keyWords=firebase.database().ref("website/keywords");keyWords.on("value",e=>{var t=e.val();t&&mKyw.setAttribute("content",t)});var wDesk=firebase.database().ref("website/description");wDesk.on("value",e=>{var t=e.val();t&&(mDsc1.setAttribute("content",t),mDsc2.setAttribute("content",t),mDsc3.setAttribute("content",t),mDsc4.innerHTML=t,mDsc5.innerHTML=t)});var sFb=document.getElementById("fb"),sYt=document.getElementById("yt"),sIg=document.getElementById("ig"),sSh=document.getElementById("sh"),sTp=document.getElementById("tp"),uFB=firebase.database().ref("website/uri_facebook");uFB.on("value",e=>{var t=e.val();t&&(sFb.href=t)});var uYT=firebase.database().ref("website/uri_youtube");uYT.on("value",e=>{var t=e.val();t&&(sYt.href=t)});var uIG=firebase.database().ref("website/uri_instagram");uIG.on("value",e=>{var t=e.val();t&&(sIg.href=t)});var uSH=firebase.database().ref("website/uri_shopee");uSH.on("value",e=>{var t=e.val();t&&(sSh.href=t)});var uTP=firebase.database().ref("website/uri_tokopedia");uTP.on("value",e=>{var t=e.val();t&&(sTp.href=t)});var mSend=document.getElementById("msend"),mxHome=document.getElementById("mxhome"),mxShop=document.getElementById("mxshop"),mxHelp=document.getElementById("mxhelp"),mxContact=document.getElementById("mxcontact");mxHome.onclick=function(){mxHome.setAttribute("class","mxactive"),mxShop.classList.remove("mxactive"),mxHelp.classList.remove("mxactive"),mxContact.classList.remove("mxactive"),mTl1.innerHTML="Beranda | "+mTitle},mxShop.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.setAttribute("class","mxactive"),mxHelp.classList.remove("mxactive"),mxContact.classList.remove("mxactive"),mTl1.innerHTML="Toko | "+mTitle},mxHelp.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.classList.remove("mxactive"),mxHelp.setAttribute("class","mxactive"),mxContact.classList.remove("mxactive"),mTl1.innerHTML="Bantuan | "+mTitle},mxContact.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.classList.remove("mxactive"),mxHelp.classList.remove("mxactive"),mxContact.setAttribute("class","mxactive"),mTl1.innerHTML="Kontak | "+mTitle};var mxxHome=document.getElementById("mxxhome"),mxxShop=document.getElementById("mxxshop"),mxxHelp=document.getElementById("mxxhelp"),mxxContact=document.getElementById("mxxcontact"),mxxPrivacy=document.getElementById("mxxprivacy");function formatRupiah(e,t){var a=e.replace(/[^,\d]/g,"").toString().split(","),l=a[0].length%3,s=a[0].substr(0,l),n=a[0].substr(l).match(/\d{3}/gi);return n&&(s+=(separator=l?".":"")+n.join(".")),s=void 0!=a[1]?s+","+a[1]:s,void 0==t?s:s?"Rp "+s:""}function itemAllShop(e,t,a,l,s,n){vLoad.style.display="none",pDts=e;var r=document.getElementById("readshop"),i=document.createElement("div"),m=document.createElement("article"),o=document.createElement("img"),c=document.createElement("section"),d=document.createElement("h2"),v=document.createElement("p");r.setAttribute("class","row"),i.setAttribute("class","column3"),m.setAttribute("class","card"),c.setAttribute("class","setitle"),o.setAttribute("class","card_img"),o.setAttribute("title",t),o.setAttribute("alt",t),o.src=a,d.setAttribute("class","nwrp"),d.setAttribute("style","font-size: 22px;"),d.innerHTML=t,v.setAttribute("class","nwrp montserrat fs12"),v.innerHTML=l,m.onclick=function(){document.getElementById("mfully").style.display="block",document.body.style.overflow="hidden";var e=document.getElementById("mfully"),s=document.createElement("div"),r=document.createElement("div"),i=document.createElement("span"),m=document.createElement("i"),o=document.createElement("img"),c=document.createElement("article"),d=document.createElement("h2"),v=document.createElement("p"),u=document.createElement("div"),p=document.createElement("p"),x=document.createElement("p"),y=document.createElement("button");e.setAttribute("class","overlays"),r.setAttribute("class","cdjflex setitle"),i.setAttribute("id","xclose"),i.setAttribute("title","Close"),m.setAttribute("class","fa fa-window-close"),o.setAttribute("class","xmimg"),o.setAttribute("alt",t),o.setAttribute("title",t),o.src=a,c.setAttribute("class","myarticle"),d.innerHTML=t,v.innerHTML="Beranda > Toko > "+t,u.setAttribute("class","desc"),p.innerHTML="Deskripsi",x.setAttribute("class","xbrk montserrat fs12"),x.innerHTML=l,y.setAttribute("id","buybyWA"),y.innerHTML="Pesan melalui WhatsApp",i.onclick=function(){document.getElementById("mfully").scrollTop=0,document.getElementById("mfully").style.display="none",document.body.style.overflow="auto",s.remove()},y.onclick=function(){window.location.href="https://wa.me/"+n+"?text=Nama%20Item%20:%20"+t+"%0AKeterangan%20:%0A*Masukan/ganti%20dengan%20keterangan%20anda%20disni*"},e.appendChild(s),s.appendChild(r),r.appendChild(d),r.appendChild(i),i.appendChild(m),s.appendChild(o),s.appendChild(c),c.appendChild(v),c.appendChild(u),u.appendChild(p),u.appendChild(x),c.appendChild(y)},r.appendChild(i),i.appendChild(m),m.appendChild(o),m.appendChild(c),c.appendChild(d),c.appendChild(v)}function allShop(){firebase.database().ref("shop/").once("value",function(e){e.forEach(function(t){var a,l=e.numChildren(),s=t.val().title,n=t.val().image,r=t.val().description;itemAllShop(l,s,n,r,t.val().uniq,t.val().phone)})})}mxxHome.onclick=function(){mxHome.setAttribute("class","mxactive"),mxShop.classList.remove("mxactive"),mxHelp.classList.remove("mxactive"),mxContact.classList.remove("mxactive"),mTl1.innerHTML="Beranda | "+mTitle},mxxShop.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.setAttribute("class","mxactive"),mxHelp.classList.remove("mxactive"),mxContact.classList.remove("mxactive"),mTl1.innerHTML="Toko | "+mTitle},mxxHelp.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.classList.remove("mxactive"),mxHelp.setAttribute("class","mxactive"),mxContact.classList.remove("mxactive"),mTl1.innerHTML="Bantuan | "+mTitle},mxxContact.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.classList.remove("mxactive"),mxHelp.classList.remove("mxactive"),mxContact.setAttribute("class","mxactive"),mTl1.innerHTML="Kontak | "+mTitle},allShop();var checkData=firebase.database().ref("shop/");checkData.on("value",e=>{var t=e.numChildren();if(t){if(mDakso.innerHTML=t,mDakso.innerHTML&&pDts&&pDts!=mDakso.innerHTML){var a=document.getElementById("notifi"),l=document.createElement("div"),s=document.createElement("div"),n=document.createElement("h3"),r=document.createElement("p"),i=document.createElement("button");l.setAttribute("class","overlay animate-top"),s.setAttribute("class","info xmcf"),n.innerHTML="Notification",r.innerHTML="Sepertinya ada yang baru \uD83D\uDE0A",i.setAttribute("class","btn1"),i.innerHTML="OK",i.onclick=function(){l.remove(),window.location.href=""},a.appendChild(l),l.appendChild(s),s.appendChild(n),s.appendChild(r),s.appendChild(i)}}else mDakso.innerHTML=0});var xQuest1=document.getElementById("xquest1"),xQuest2=document.getElementById("xquest2"),xQuest3=document.getElementById("xquest3"),xAnsw1=document.getElementById("xansw1"),xAnsw2=document.getElementById("xansw2"),xAnsw3=document.getElementById("xansw3"),qUest1=firebase.database().ref("website/help/0/quest");qUest1.on("value",e=>{var t=e.val();t&&(xQuest1.innerHTML=t)});var aNsw1=firebase.database().ref("website/help/0/answer");aNsw1.on("value",e=>{var t=e.val();t&&(xAnsw1.innerHTML=t)});var qUest2=firebase.database().ref("website/help/1/quest");qUest2.on("value",e=>{var t=e.val();t&&(xQuest2.innerHTML=t)});var aNsw2=firebase.database().ref("website/help/1/answer");aNsw2.on("value",e=>{var t=e.val();t&&(xAnsw2.innerHTML=t)});var qUest3=firebase.database().ref("website/help/2/quest");qUest3.on("value",e=>{var t=e.val();t&&(xQuest3.innerHTML=t)});var aNsw3=firebase.database().ref("website/help/2/answer");aNsw3.on("value",e=>{var t=e.val();t&&(xAnsw3.innerHTML=t)});var xMaps=document.getElementById("xmaps"),cMaps=firebase.database().ref("website/contact/maps");cMaps.on("value",e=>{var t=e.val();t&&(xMaps.src=t)});var cEmail1=firebase.database().ref("website/contact/email");cEmail1.on("value",e=>{var t=e.val();t&&(mSend.onclick=function(){var e=document.getElementById("name").value,a=document.getElementById("subject").value;if(e){if(a)window.location.href="mailto:"+t+"?subject="+e+"&body="+a;else{var l=document.getElementById("notifi"),s=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h3"),i=document.createElement("p"),m=document.createElement("button");s.setAttribute("class","overlay animate-top pad10"),n.setAttribute("class","info xmcf"),i.setAttribute("style","overflow: auto;"),r.innerHTML=mTitle,i.innerHTML="Harap isi subjek",m.setAttribute("class","btn1"),m.innerHTML="OK",m.onclick=function(){s.remove()},l.appendChild(s),s.appendChild(n),n.appendChild(r),n.appendChild(i),n.appendChild(m)}}else{var l=document.getElementById("notifi"),s=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h3"),i=document.createElement("p"),m=document.createElement("button");s.setAttribute("class","overlay animate-top pad10"),n.setAttribute("class","info xmcf"),i.setAttribute("style","overflow: auto;"),r.innerHTML=mTitle,i.innerHTML="Harap masukan nama anda",m.setAttribute("class","btn1"),m.innerHTML="OK",m.onclick=function(){s.remove()},l.appendChild(s),s.appendChild(n),n.appendChild(r),n.appendChild(i),n.appendChild(m)}})});var xxTag,xTag=document.getElementById("xtag"),xPhone1=document.getElementById("xphone1"),xPhone2=document.getElementById("xphone2"),xMail1=document.getElementById("xmail1"),xMail2=document.getElementById("xmail2"),ceTag=firebase.database().ref("website/about/tag");ceTag.on("value",e=>{var t=e.val();t&&(xTag.innerHTML="#"+t,xxTag=t)});var cePhone=firebase.database().ref("website/about/phone");cePhone.on("value",e=>{var t=e.val();t&&(xPhone1.href="tel:"+t,xPhone2.innerHTML=t)});var cEmail2=firebase.database().ref("website/about/email");cEmail2.on("value",e=>{var t=e.val();t&&(xMail1.href="mailto:"+t,xxTag&&(xMail2.innerHTML="@"+xxTag))});var seTheme=localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):"",veTheme=firebase.database().ref("website/theme"),setTheme=document.getElementById("spaneltheme");veTheme.on("value",e=>{var t;"true"==e.val()&&(spaneltheme.style.display="block")});var mDark=document.getElementById("btn_theme_dark"),mLight=document.getElementById("btn_theme_light"),xMedsos=document.getElementById("medsos");function cDark(){mDark.style.display="none",mLight.style.display="block",document.body.style.background="#222",document.querySelector(".xservice").style.background="#222",document.getElementById("mfully").style.background="#333",document.getElementById("shop").style.background="#333",document.getElementById("contact").style.background="#333",document.getElementById("footer").style.background="#333",document.body.style.color="#fff",xPhone1.style.color="#fff",xMail1.style.color="#fff",mxxHome.style.color="#fff",mxxShop.style.color="#fff",mxxHelp.style.color="#fff",mxxContact.style.color="#fff",mxxPrivacy.style.color="#fff",sFb.style.color="#fff",sYt.style.color="#fff",sIg.style.color="#fff",sSh.style.color="#fff",sTp.style.color="#fff",mTl6.style.color="#fff",mVisit.style.color="#fff"}function cLight(){mDark.style.display="block",mLight.style.display="none",document.body.style.background="#F5F5F5",document.querySelector(".xservice").style.background="#f5f5f5",document.getElementById("mfully").style.background="#FFF",document.getElementById("shop").style.background="#FFF",document.getElementById("contact").style.background="#FFF",document.getElementById("footer").style.background="#FFF",document.body.style.removeProperty("color"),xPhone1.style.removeProperty("color"),xMail1.style.removeProperty("color"),mxxHome.style.removeProperty("color"),mxxShop.style.removeProperty("color"),mxxHelp.style.removeProperty("color"),mxxContact.style.removeProperty("color"),mxxPrivacy.style.removeProperty("color"),sFb.style.removeProperty("color"),sYt.style.removeProperty("color"),sIg.style.removeProperty("color"),sSh.style.removeProperty("color"),sTp.style.removeProperty("color"),mTl6.style.removeProperty("color"),mVisit.style.removeProperty("color")}mDark.onclick=function(){seTheme="true",localStorage.setItem("theme",JSON.stringify(seTheme)),cDark()},mLight.onclick=function(){localStorage.removeItem("theme"),cLight()},"true"==seTheme?cDark():cLight();var veVisit=firebase.database().ref("website/visitor"),setVisit=document.getElementById("spanelvisitor");veVisit.on("value",e=>{var t;"true"==e.val()?setVisit.setAttribute("style","display: flex;"):setVisit.setAttribute("style","display: none;")});var ckVisit=firebase.database().ref("log/");ckVisit.on("value",e=>{var t=e.numChildren();t?mVisit.innerHTML=t:mVisit.innerHTML=0});var ceBlur=firebase.database().ref("website/blur_img"),setTheme=document.getElementById("spaneltheme");ceBlur.on("value",e=>{var t;"true"==e.val()?cdHeader.setAttribute("class","blur_img"):cdHeader.classList.remove("blur_img")});var xdate=new Date,xyear=xdate.getFullYear();document.getElementById("myear").innerHTML=xyear;
