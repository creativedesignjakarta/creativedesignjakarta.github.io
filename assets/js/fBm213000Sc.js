/*
    This is a License
    Web Developer by Suryo DwiJayanto | CusMeDroid
    Don't delete this part!
*/
var icol,pDts,coll=document.getElementsByClassName("collapsible"),mDakso=document.getElementById("ckdt");for(icol=0;icol<coll.length;icol++)coll[icol].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});var mSend=document.getElementById("msend");mSend.onclick=function(){var e=document.getElementById("name").value,t=document.getElementById("subject").value;if(e){if(t)window.location.href="mailto:jktcreativedesign@yahoo.com?subject="+e+"&body="+t;else{var a=document.getElementById("notifi"),i=document.createElement("div"),n=document.createElement("div"),l=document.createElement("h3"),s=document.createElement("p"),c=document.createElement("button");i.setAttribute("class","overlay animate-top pad10"),n.setAttribute("class","info xmcf"),s.setAttribute("style","overflow: auto;"),l.innerHTML="Creative Design Jakarta",s.innerHTML="Harap isi subjek",c.setAttribute("class","btn1"),c.innerHTML="OK",c.onclick=function(){i.remove()},a.appendChild(i),i.appendChild(n),n.appendChild(l),n.appendChild(s),n.appendChild(c)}}else{var a=document.getElementById("notifi"),i=document.createElement("div"),n=document.createElement("div"),l=document.createElement("h3"),s=document.createElement("p"),c=document.createElement("button");i.setAttribute("class","overlay animate-top pad10"),n.setAttribute("class","info xmcf"),s.setAttribute("style","overflow: auto;"),l.innerHTML="Creative Design Jakarta",s.innerHTML="Harap masukan nama anda",c.setAttribute("class","btn1"),c.innerHTML="OK",c.onclick=function(){i.remove()},a.appendChild(i),i.appendChild(n),n.appendChild(l),n.appendChild(s),n.appendChild(c)}};var mxHome=document.getElementById("mxhome"),mxShop=document.getElementById("mxshop"),mxHelp=document.getElementById("mxhelp"),mxContact=document.getElementById("mxcontact");mxHome.onclick=function(){mxHome.setAttribute("class","mxactive"),mxShop.classList.remove("mxactive"),mxHelp.classList.remove("mxactive"),mxContact.classList.remove("mxactive")},mxShop.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.setAttribute("class","mxactive"),mxHelp.classList.remove("mxactive"),mxContact.classList.remove("mxactive")},mxHelp.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.classList.remove("mxactive"),mxHelp.setAttribute("class","mxactive"),mxContact.classList.remove("mxactive")},mxContact.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.classList.remove("mxactive"),mxHelp.classList.remove("mxactive"),mxContact.setAttribute("class","mxactive")};var mxxHome=document.getElementById("mxxhome"),mxxShop=document.getElementById("mxxshop"),mxxHelp=document.getElementById("mxxhelp"),mxxContact=document.getElementById("mxxcontact");function formatRupiah(e,t){var a=e.replace(/[^,\d]/g,"").toString().split(","),i=a[0].length%3,n=a[0].substr(0,i),l=a[0].substr(i).match(/\d{3}/gi);return l&&(n+=(separator=i?".":"")+l.join(".")),n=void 0!=a[1]?n+","+a[1]:n,void 0==t?n:n?"Rp "+n:""}function itemAllShop(e,t,a,i,n,l){pDts=e;var s=document.getElementById("readshop"),c=document.createElement("div"),m=document.createElement("article"),o=document.createElement("img"),r=document.createElement("section"),p=document.createElement("h3");s.setAttribute("class","row"),c.setAttribute("class","column3"),m.setAttribute("class","card"),o.setAttribute("class","card_img"),o.setAttribute("title",t),o.setAttribute("alt",t),o.src=a,p.setAttribute("class","nwrp"),p.innerHTML=t,m.onclick=function(){document.getElementById("mfully").style.display="block",document.body.style.overflow="hidden";var e=document.getElementById("mfully"),n=document.createElement("div"),s=document.createElement("span"),c=document.createElement("i"),m=document.createElement("img"),o=document.createElement("article"),r=document.createElement("h1"),p=document.createElement("p"),d=document.createElement("div"),x=document.createElement("p"),v=document.createElement("p"),u=document.createElement("button");n.setAttribute("class","overlay"),s.setAttribute("id","xclose"),s.setAttribute("title","Close"),c.setAttribute("class","fa fa-window-close"),m.setAttribute("class","xmimg"),m.setAttribute("alt",t),m.setAttribute("title",t),m.src=a,o.setAttribute("class","myarticle"),r.innerHTML=t,p.innerHTML="Beranda > Shop > "+t,d.setAttribute("class","desc"),x.innerHTML="Deskripsi",v.setAttribute("class","xbrk"),v.innerHTML=i,u.setAttribute("id","buybyWA"),u.innerHTML="Pesan melalui WhatsApp",s.onclick=function(){document.getElementById("mfully").style.display="none",document.body.style.overflow="auto",n.remove()},u.onclick=function(){window.location.href="https://wa.me/"+l+"?text=Nama%20Item%20:%20"+t+"%0AKeterangan%20:%0A*Masukan/ganti%20dengan%20keterangan%20anda%20disni*"},e.appendChild(n),n.appendChild(s),s.appendChild(c),n.appendChild(m),n.appendChild(o),o.appendChild(r),o.appendChild(p),o.appendChild(d),d.appendChild(x),d.appendChild(v),o.appendChild(u)},s.appendChild(c),c.appendChild(m),m.appendChild(o),m.appendChild(r),r.appendChild(p)}function allShop(){firebase.database().ref("shop/").once("value",function(e){e.forEach(function(t){var a,i=e.numChildren(),n=t.val().title,l=t.val().image,s=t.val().description;itemAllShop(i,n,l,s,t.val().uniq,t.val().phone)})})}mxxHome.onclick=function(){mxHome.setAttribute("class","mxactive"),mxShop.classList.remove("mxactive"),mxHelp.classList.remove("mxactive"),mxContact.classList.remove("mxactive")},mxxShop.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.setAttribute("class","mxactive"),mxHelp.classList.remove("mxactive"),mxContact.classList.remove("mxactive")},mxxHelp.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.classList.remove("mxactive"),mxHelp.setAttribute("class","mxactive"),mxContact.classList.remove("mxactive")},mxxContact.onclick=function(){mxHome.classList.remove("mxactive"),mxShop.classList.remove("mxactive"),mxHelp.classList.remove("mxactive"),mxContact.setAttribute("class","mxactive")},allShop();var checkData=firebase.database().ref("shop/");checkData.on("value",e=>{var t=e.numChildren();if(t){if(mDakso.innerHTML=t,mDakso.innerHTML&&pDts&&pDts!=mDakso.innerHTML){var a=document.getElementById("notifi"),i=document.createElement("div"),n=document.createElement("div"),l=document.createElement("h3"),s=document.createElement("p"),c=document.createElement("button");i.setAttribute("class","overlay animate-top"),n.setAttribute("class","info xmcf"),l.innerHTML="Notification",s.innerHTML="Sepertinya ada yang baru \uD83D\uDE0A",c.setAttribute("class","btn1"),c.innerHTML="OK",c.onclick=function(){i.remove(),window.location.href=""},a.appendChild(i),i.appendChild(n),n.appendChild(l),n.appendChild(s),n.appendChild(c)}}else mDakso.innerHTML=0});var xdate=new Date,xyear=xdate.getFullYear();document.getElementById("myear").innerHTML=xyear;
