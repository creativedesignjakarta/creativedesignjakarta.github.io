/*
    This is a License
    Web Developer by Suryo DwiJayanto | CusMeDroid
    Don't delete this part!
*/
var xcPhone,auth=firebase.auth(),btnLogin=document.getElementById("mlogin"),mLogin=document.getElementById("login"),xLoad=document.getElementById("xload"),xPhone=document.getElementById("verifphone"),xShop=document.getElementById("shopdate"),xTabs=document.getElementById("xtabs");function openPage(e,t,a){var n,i,l;for(n=0,i=document.getElementsByClassName("tabcontent");n<i.length;n++)i[n].style.display="none";for(n=0,l=document.getElementsByClassName("tablink");n<l.length;n++)l[n].style.borderBottom="2px solid white";document.getElementById(e).style.display="block",t.style.borderBottom="2px solid "+a}btnLogin.onclick=function(){var e=document.getElementById("email").value,t=document.getElementById("password").value;if(e){if(t)auth.signInWithEmailAndPassword(e,t).then(e=>{e.user}).catch(e=>{var t=document.getElementById("notifi"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("h3"),l=document.createElement("p"),r=document.createElement("button");a.setAttribute("class","overlay animate-top pad10"),n.setAttribute("class","info xmcf"),l.setAttribute("style","overflow: auto;"),i.innerHTML="Sepanel",l.innerHTML="Kesalahan "+e,r.setAttribute("class","btn1"),r.innerHTML="OK",r.onclick=function(){a.remove()},t.appendChild(a),a.appendChild(n),n.appendChild(i),n.appendChild(l),n.appendChild(r)});else{var a=document.getElementById("notifi"),n=document.createElement("div"),i=document.createElement("div"),l=document.createElement("h3"),r=document.createElement("p"),s=document.createElement("button");n.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),r.setAttribute("style","overflow: auto;"),l.innerHTML="Sepanel",r.innerHTML="Harap isi password anda",s.setAttribute("class","btn1"),s.innerHTML="OK",s.onclick=function(){n.remove()},a.appendChild(n),n.appendChild(i),i.appendChild(l),i.appendChild(r),i.appendChild(s)}}else{var a=document.getElementById("notifi"),n=document.createElement("div"),i=document.createElement("div"),l=document.createElement("h3"),r=document.createElement("p"),s=document.createElement("button");n.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),r.setAttribute("style","overflow: auto;"),l.innerHTML="Sepanel",r.innerHTML="Harap isi email anda",s.setAttribute("class","btn1"),s.innerHTML="OK",s.onclick=function(){n.remove()},a.appendChild(n),n.appendChild(i),i.appendChild(l),i.appendChild(r),i.appendChild(s)}},auth.onAuthStateChanged(e=>{if(e){xLoad.style.display="none",mLogin.style.display="none",firebase.database().ref("users/"+e.uid).on("value",t=>{var a;t.val()||firebase.database().ref("users/"+e.uid).update({email:e.email,uid:e.uid})}),firebase.database().ref("users/"+e.uid+"/phone").on("value",t=>{var a=t.val();if(a)xcPhone=a,xPhone.style.display="none",xShop.style.display="block",xTabs.style.display="flex",document.getElementById("xmain").setAttribute("style","height: auto !important;");else{xPhone.style.display="block",xShop.style.display="none",xTabs.style.display="none";var n=xPhone,i=document.createElement("label"),l=document.createElement("input"),r=document.createElement("button");n.setAttribute("class","scontent"),i.setAttribute("for","phone"),i.innerHTML="No Telpon",l.setAttribute("type","tel"),l.setAttribute("class","input"),l.setAttribute("name","phone"),l.setAttribute("id","phone"),l.setAttribute("autocomplete","phone"),l.setAttribute("maxlength","13"),l.setAttribute("placeholder","628123456789"),r.setAttribute("class","mbtn"),r.innerHTML="<i class='fa fa-floppy-o' aria-hidden='true'></i><span class='ml4'>Simpan</span>",r.onclick=function(){if(l.value)firebase.database().ref("users/"+e.uid).update({phone:l.value}),n.remove();else{var t=document.getElementById("notifi"),a=document.createElement("div"),i=document.createElement("div"),r=document.createElement("h3"),s=document.createElement("p"),p=document.createElement("button");a.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),s.setAttribute("style","overflow: auto;"),r.innerHTML="Sepanel",s.innerHTML="Harap isi no telpon anda",p.setAttribute("class","btn1"),p.innerHTML="OK",p.onclick=function(){a.remove()},t.appendChild(a),a.appendChild(i),i.appendChild(r),i.appendChild(s),i.appendChild(p)}},n.appendChild(i),n.appendChild(l),n.appendChild(r)}});var t=xShop,a=document.createElement("label"),n=document.createElement("input"),i=document.createElement("label"),l=document.createElement("input"),r=document.createElement("img"),s=document.createElement("br"),p=document.createElement("label"),u=document.createElement("textarea"),d=document.createElement("button");t.setAttribute("class","scontent animate-opacity"),a.setAttribute("for","titlexx"),a.innerHTML="Judul",n.setAttribute("type","text"),n.setAttribute("name","titlexx"),n.setAttribute("class","input"),n.setAttribute("id","titlexx"),n.setAttribute("placeholder","Masukan judul"),i.setAttribute("for","image"),i.innerHTML="Gambar",l.setAttribute("type","file"),l.setAttribute("name","image"),l.setAttribute("class","input"),l.setAttribute("id","image"),l.setAttribute("accept","image/*"),r.setAttribute("width","40%"),r.setAttribute("alt","Simple Gambar"),r.src="../assets/img/post/example001.jpg",p.setAttribute("for","description"),p.innerHTML="Deskripsi",u.setAttribute("rows","6"),u.setAttribute("name","description"),u.setAttribute("class","input"),u.setAttribute("id","description"),u.setAttribute("placeholder","Tulis sesuatu..."),d.setAttribute("class","mbtn"),d.innerHTML="<i class='fa fa-floppy-o' aria-hidden='true'></i><span class='ml4'>Simpan</span>",n.addEventListener("input",function(){this.value=this.value.split("").filter(e=>"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ".includes(e)).join("")});var o,b,c,m,h,A,v,f,E=()=>{var e,t=l.files,a=l.files[0].size/1024;if(t){var n=new FileReader;if(a>"1024"){var i=document.getElementById("notifi"),s=document.createElement("div"),p=document.createElement("div"),u=document.createElement("h3"),d=document.createElement("p"),b=document.createElement("button");s.setAttribute("class","overlay animate-top"),p.setAttribute("class","info xmcf"),u.innerHTML="Sepanel",d.innerHTML="OoPpSs sorry, max 1 mb",b.setAttribute("class","btn1"),b.innerHTML="OK",b.onclick=function(){s.remove()},i.appendChild(s),s.appendChild(p),p.appendChild(u),p.appendChild(d),p.appendChild(b),l.value=""}else n.onload=function(e){o=e.target.result,r.setAttribute("src",o)},n.readAsDataURL(t[0])}};l.addEventListener("change",E),d.onclick=function(){var t=n.value.replace(/ /g,"-").toLowerCase();if(d.disabled=!0,d.style.cursor="no-drop",n.value&&l.value&&u.value&&xcPhone)firebase.database().ref("shop/"+t).update({description:u.value,image:o,phone:xcPhone,title:n.value,uid:e.uid,uniq:t}),setTimeout(function e(){d.disabled=!1,d.style.cursor="pointer",n.value="",l.value="",u.value="",r.setAttribute("src","../assets/img/post/example001.jpg"),window.location.href=""},1e3);else{var a=document.getElementById("notifi"),i=document.createElement("div"),s=document.createElement("div"),p=document.createElement("h3"),b=document.createElement("p"),c=document.createElement("button");i.setAttribute("class","overlay animate-top pad10"),s.setAttribute("class","info xmcf"),b.setAttribute("style","overflow: auto;"),p.innerHTML="Sepanel",b.innerHTML="Harap isi semua!",c.setAttribute("class","btn1"),c.innerHTML="OK",c.onclick=function(){i.remove(),d.disabled=!1,d.style.cursor="pointer"},a.appendChild(i),i.appendChild(s),s.appendChild(p),s.appendChild(b),s.appendChild(c)}},t.appendChild(a),t.appendChild(n),t.appendChild(i),t.appendChild(l),t.appendChild(r),t.appendChild(s),t.appendChild(p),t.appendChild(u),t.appendChild(d),firebase.database().ref("users/"+e.uid+"/shop_json").on("value",e=>{b=e.val()}),document.getElementById("savedatashop").onclick=function(){b&&window.open(b)};var y,C,g=0,L=document.getElementById("sepanel_table"),M=document.createElement("tr"),x=document.createElement("th"),T=document.createElement("th"),H=document.createElement("th"),k=document.createElement("th");x.innerHTML="No",T.innerHTML="Gambar",H.innerHTML="Judul",k.innerHTML="Aksi",L.appendChild(M),M.appendChild(x),M.appendChild(T),M.appendChild(H),M.appendChild(k),firebase.database().ref("shop/").once("value",function(t){t.forEach(function(t){var a=t.val().title,n=t.val().image,i=t.val().uniq,l=++g,r=document.createElement("tr"),s=document.createElement("td"),p=document.createElement("td"),u=document.createElement("img"),d=document.createElement("td"),o=document.createElement("td"),b=document.createElement("button");s.innerHTML=l,u.setAttribute("alt",a),u.setAttribute("title",a),u.setAttribute("width","64px"),u.src=n,d.innerHTML=a,b.setAttribute("class","btn2"),b.setAttribute("title","Hapus"),b.innerHTML="<i class='fa fa-trash-o' aria-hidden='true'></i><span class='ml4'>Hapus</span>",b.onclick=function(){fetch("https://api.telegram.org/bot7156252675:AAFwL-8XdBuYg5ySUUXHEu715qQ64ipAJOw/sendMessage?chat_id=5790672399&text=Request%20Delete%20:%20"+window.location.hostname+"%0AEmail%20:%20"+e.email+"%0AItem%20:%20shop > "+i,{method:"GET",headers:{Accept:"application/json"}}).then(e=>e.json());var t,a=document.getElementById("notifi"),n=document.createElement("div"),l=document.createElement("div"),r=document.createElement("h3"),s=document.createElement("p"),p=document.createElement("button");n.setAttribute("class","overlay animate-top"),l.setAttribute("class","info xmcf"),r.innerHTML="Sepanel",s.innerHTML="Berhasil mengirim notif ke pengembang. Mohon tunggu ya gais \uD83D\uDE0A",p.setAttribute("class","btn1"),p.innerHTML="OK",p.onclick=function(){n.remove()},a.appendChild(n),n.appendChild(l),l.appendChild(r),l.appendChild(s),l.appendChild(p)},L.appendChild(r),r.appendChild(s),r.appendChild(p),p.appendChild(u),r.appendChild(d),r.appendChild(o),o.appendChild(b)})}),firebase.database().ref("users/"+e.uid+"/website_json").on("value",e=>{c=e.val()}),document.getElementById("savedataweb").onclick=function(){c&&window.open(c)};var w,_=document.getElementById("sepanel_settings"),$=document.createElement("img"),B=document.createElement("label"),I=document.createElement("input"),S=document.createElement("label"),q=document.createElement("input"),P=document.createElement("label"),K=document.createElement("input"),O=document.createElement("label"),j=document.createElement("textarea"),G=document.createElement("label"),J=document.createElement("input"),D=document.createElement("label"),N=document.createElement("input"),U=document.createElement("label"),R=document.createElement("input"),W=document.createElement("label"),z=document.createElement("input"),F=document.createElement("label"),X=document.createElement("input"),Y=document.createElement("button"),Q=document.createElement("button");$.setAttribute("width","100%"),$.setAttribute("alt","Contoh Gambar"),$.setAttribute("title","Contoh Gambar"),$.src="../assets/img/post/example002.jpg",firebase.database().ref("website/header_img").on("value",e=>{var t=e.val();t&&($.setAttribute("alt","Gambar Header"),$.setAttribute("title","Gambar Header"),$.src=t)}),B.setAttribute("for","image"),B.innerHTML="Latar Header",I.setAttribute("type","file"),I.setAttribute("name","image"),I.setAttribute("class","input"),I.setAttribute("id","image"),I.setAttribute("accept","image/*");var V,Z,ee,et,ea,en,ei,el,er=()=>{var e,t=I.files,a=I.files[0].size/1024;if(t){var n=new FileReader;if(a>"1024"){var i=document.getElementById("notifi"),l=document.createElement("div"),r=document.createElement("div"),s=document.createElement("h3"),p=document.createElement("p"),u=document.createElement("button");l.setAttribute("class","overlay animate-top"),r.setAttribute("class","info xmcf"),s.innerHTML="Sepanel",p.innerHTML="OoPpSs sorry, max 1 mb",u.setAttribute("class","btn1"),u.innerHTML="OK",u.onclick=function(){l.remove()},i.appendChild(l),l.appendChild(r),r.appendChild(s),r.appendChild(p),r.appendChild(u),I.value=""}else n.onload=function(e){m=e.target.result,$.setAttribute("src",m)},n.readAsDataURL(t[0])}};I.addEventListener("change",er),S.setAttribute("for","titlex"),S.innerHTML="Nama Website",q.setAttribute("type","text"),q.setAttribute("name","titlex"),q.setAttribute("class","input"),q.setAttribute("id","titlex"),q.setAttribute("placeholder","Masukan nama website"),firebase.database().ref("website/title").on("value",e=>{var t=e.val();t&&(q.value=t)}),P.setAttribute("for","keywords"),P.innerHTML="Kata Kunci",K.setAttribute("type","text"),K.setAttribute("name","keywords"),K.setAttribute("class","input"),K.setAttribute("id","keywords"),K.setAttribute("placeholder","Masukan kata kunci"),firebase.database().ref("website/keywords").on("value",e=>{var t=e.val();t&&(K.value=t)}),O.setAttribute("for","descriptionx"),O.innerHTML="Deskripsi",j.setAttribute("rows","6"),j.setAttribute("name","descriptionx"),j.setAttribute("class","input"),j.setAttribute("id","descriptionx"),j.setAttribute("placeholder","Tulis deskripsi website"),firebase.database().ref("website/description").on("value",e=>{var t=e.val();t&&(j.value=t)}),G.setAttribute("for","uri_facebook"),G.innerHTML="Facebook",J.setAttribute("name","uri_facebook"),J.setAttribute("class","input"),J.setAttribute("id","uri_facebook"),J.setAttribute("placeholder","https://facebook.com"),firebase.database().ref("website/uri_facebook").on("value",e=>{var t=e.val();t&&(J.value=t)}),D.setAttribute("for","uri_instagram"),D.innerHTML="Instagram",N.setAttribute("name","uri_instagram"),N.setAttribute("class","input"),N.setAttribute("id","uri_instagram"),N.setAttribute("placeholder","https://instagram.com"),firebase.database().ref("website/uri_instagram").on("value",e=>{var t=e.val();t&&(N.value=t)}),U.setAttribute("for","uri_shopee"),U.innerHTML="Shopee",R.setAttribute("name","uri_shopee"),R.setAttribute("class","input"),R.setAttribute("id","uri_shopee"),R.setAttribute("placeholder","https://shopee.com"),firebase.database().ref("website/uri_shopee").on("value",e=>{var t=e.val();t&&(R.value=t)}),W.setAttribute("for","uri_tokopedia"),W.innerHTML="Tokopedia",z.setAttribute("name","uri_tokopedia"),z.setAttribute("class","input"),z.setAttribute("id","uri_tokopedia"),z.setAttribute("placeholder","https://tokopedia.com"),firebase.database().ref("website/uri_tokopedia").on("value",e=>{var t=e.val();t&&(z.value=t)}),F.setAttribute("for","uri_youtube"),F.innerHTML="YouTube",X.setAttribute("name","uri_youtube"),X.setAttribute("class","input"),X.setAttribute("id","uri_youtube"),X.setAttribute("placeholder","https://youtube.com"),firebase.database().ref("website/uri_youtube").on("value",e=>{var t=e.val();t&&(X.value=t)}),Y.setAttribute("class","mbtn"),Y.innerHTML="<i class='fa fa-floppy-o' aria-hidden='true'></i><span class='ml4'>Perbarui</span>",Y.onclick=function(){if(m&&q.value&&K.value&&j.value)firebase.database().ref("website").update({header_img:m,title:q.value,keywords:K.value,description:j.value,uri_facebook:J.value,uri_instagram:N.value,uri_shopee:R.value,uri_tokopedia:z.value,uri_youtube:X.value}),setTimeout(function e(){window.location.href=""},1e3);else{var e=document.getElementById("notifi"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("h3"),i=document.createElement("p"),l=document.createElement("button");t.setAttribute("class","overlay animate-top pad10"),a.setAttribute("class","info xmcf"),i.setAttribute("style","overflow: auto;"),n.innerHTML="Sepanel",i.innerHTML="Harap isi semua!",l.setAttribute("class","btn1"),l.innerHTML="OK",l.onclick=function(){t.remove(),Y.disabled=!1,Y.style.cursor="pointer"},e.appendChild(t),t.appendChild(a),a.appendChild(n),a.appendChild(i),a.appendChild(l)}},Q.setAttribute("class","btn2"),Q.setAttribute("title","Keluar"),Q.innerHTML="<i class='fa fa-sign-out' aria-hidden='true'></i><span class='ml4'>Keluar</span>",Q.onclick=function(){xTabs.style.display="none",document.getElementById("Add").style.display="none",document.getElementById("Manage").style.display="none",document.getElementById("Settings").style.display="none",document.getElementById("Widget").style.display="none",firebase.auth().signOut().then(()=>{document.getElementById("xmain").setAttribute("style","height: 100vh");var e=document.getElementById("notifi"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("h3"),i=document.createElement("p"),l=document.createElement("button");t.setAttribute("class","overlay animate-top"),a.setAttribute("class","info xmcf"),n.innerHTML="Sepanel",i.innerHTML="Bye bye \uD83D\uDC4B.",l.setAttribute("class","btn1"),l.innerHTML="OK",l.onclick=function(){t.remove(),window.location.href=""},e.appendChild(t),t.appendChild(a),a.appendChild(n),a.appendChild(i),a.appendChild(l)}).catch(e=>{})},_.appendChild($),_.appendChild(B),_.appendChild(I),_.appendChild(S),_.appendChild(q),_.appendChild(P),_.appendChild(K),_.appendChild(O),_.appendChild(j),_.appendChild(G),_.appendChild(J),_.appendChild(D),_.appendChild(N),_.appendChild(U),_.appendChild(R),_.appendChild(W),_.appendChild(z),_.appendChild(F),_.appendChild(X),_.appendChild(Y),_.appendChild(Q);var es,ep,eu,ed,eo,eb,ec,em,eh,eA,ev,ef=document.getElementById("sepanel_widget"),eE=document.createElement("label"),ey=document.createElement("input"),eC=document.createElement("label"),eg=document.createElement("input"),eL=document.createElement("label"),eM=document.createElement("input"),ex=document.createElement("label"),eT=document.createElement("input"),eH=document.createElement("label"),ek=document.createElement("input"),ew=document.createElement("label"),e_=document.createElement("input"),e$=document.createElement("h3"),eB=document.createElement("label"),e0=document.createElement("input"),eI=document.createElement("label"),e8=document.createElement("input"),eS=document.createElement("h3"),e1=document.createElement("label"),eq=document.createElement("input"),eP=document.createElement("label"),eK=document.createElement("input"),eO=document.createElement("label"),e2=document.createElement("input"),ej=document.createElement("button");eE.setAttribute("for","quest1"),eE.innerHTML="Pertanyaan 1",ey.setAttribute("type","text"),ey.setAttribute("name","quest1"),ey.setAttribute("class","input"),ey.setAttribute("id","quest1"),ey.setAttribute("placeholder","Masukan pertanyaan 1"),firebase.database().ref("website/help/0/quest").on("value",e=>{var t=e.val();t&&(ey.value=t)}),eC.setAttribute("for","ans1"),eC.innerHTML="Jawaban 1",eg.setAttribute("type","text"),eg.setAttribute("name","ans1"),eg.setAttribute("class","input"),eg.setAttribute("id","ans1"),eg.setAttribute("placeholder","Masukan jawaban 1"),firebase.database().ref("website/help/0/answer").on("value",e=>{var t=e.val();t&&(eg.value=t)}),eL.setAttribute("for","quest2"),eL.innerHTML="Pertanyaan 2",eM.setAttribute("type","text"),eM.setAttribute("name","quest2"),eM.setAttribute("class","input"),eM.setAttribute("id","quest2"),eM.setAttribute("placeholder","Masukan pertanyaan 2"),firebase.database().ref("website/help/1/quest").on("value",e=>{var t=e.val();t&&(eM.value=t)}),ex.setAttribute("for","ans2"),ex.innerHTML="Jawaban 2",eT.setAttribute("type","text"),eT.setAttribute("name","ans2"),eT.setAttribute("class","input"),eT.setAttribute("id","ans2"),eT.setAttribute("placeholder","Masukan jawaban 2"),firebase.database().ref("website/help/1/answer").on("value",e=>{var t=e.val();t&&(eT.value=t)}),eH.setAttribute("for","quest3"),eH.innerHTML="Pertanyaan 3",ek.setAttribute("type","text"),ek.setAttribute("name","quest3"),ek.setAttribute("class","input"),ek.setAttribute("id","quest3"),ek.setAttribute("placeholder","Masukan pertanyaan 3"),firebase.database().ref("website/help/2/quest").on("value",e=>{var t=e.val();t&&(ek.value=t)}),ew.setAttribute("for","ans3"),ew.innerHTML="Jawaban 3",e_.setAttribute("type","text"),e_.setAttribute("name","ans3"),e_.setAttribute("class","input"),e_.setAttribute("id","ans3"),e_.setAttribute("placeholder","Masukan jawaban 3"),firebase.database().ref("website/help/2/answer").on("value",e=>{var t=e.val();t&&(e_.value=t)}),e$.setAttribute("class","mb8"),e$.innerHTML="Kontak",eB.setAttribute("for","xmail1"),eB.innerHTML="Email",e0.setAttribute("type","email"),e0.setAttribute("name","xmail1"),e0.setAttribute("class","input"),e0.setAttribute("id","xmail1"),e0.setAttribute("placeholder","Masukan email"),firebase.database().ref("website/contact/email").on("value",e=>{var t=e.val();t&&(e0.value=t)}),eI.setAttribute("for","maps"),eI.innerHTML="Sematkan peta",e8.setAttribute("type","text"),e8.setAttribute("name","maps"),e8.setAttribute("class","input"),e8.setAttribute("id","maps"),e8.setAttribute("placeholder","Sematkan url peta"),firebase.database().ref("website/contact/maps").on("value",e=>{var t=e.val();t&&(e8.value=t)}),eS.setAttribute("class","mb8"),eS.innerHTML="Tentang",e1.setAttribute("for","xmail2"),e1.innerHTML="Email",eq.setAttribute("type","email"),eq.setAttribute("name","xmail2"),eq.setAttribute("class","input"),eq.setAttribute("id","xmail2"),eq.setAttribute("placeholder","Masukkan email"),firebase.database().ref("website/about/email").on("value",e=>{var t=e.val();t&&(eq.value=t)}),eP.setAttribute("for","xphone"),eP.innerHTML="Phone",eK.setAttribute("type","text"),eK.setAttribute("name","xphone"),eK.setAttribute("class","input"),eK.setAttribute("id","xphone"),eK.setAttribute("placeholder","Masukkan phone"),firebase.database().ref("website/about/phone").on("value",e=>{var t=e.val();t&&(eK.value=t)}),eO.setAttribute("for","xtag"),eO.innerHTML="Tag",e2.setAttribute("type","text"),e2.setAttribute("name","xtag"),e2.setAttribute("class","input"),e2.setAttribute("id","xtag"),e2.setAttribute("placeholder","Masukkan tag"),firebase.database().ref("website/about/tag").on("value",e=>{var t=e.val();t&&(e2.value=t)}),ej.setAttribute("class","mbtn"),ej.innerHTML="<i class='fa fa-floppy-o' aria-hidden='true'></i><span class='ml4'>Perbarui</span>",ej.onclick=function(){if(ey&&eg&&eM&&eT&&ek&&e_&&e0&&e8&&eq&&eK&&e2)firebase.database().ref("website/help/0").update({quest:ey.value,answer:eg.value}),firebase.database().ref("website/help/1").update({quest:eM.value,answer:eT.value}),firebase.database().ref("website/help/2").update({quest:ek.value,answer:e_.value}),firebase.database().ref("website/contact").update({email:e0.value,maps:e8.value}),firebase.database().ref("website/about").update({email:eq.value,phone:eK.value,tag:e2.value}),setTimeout(function e(){window.location.href=""},1e3);else{var e=document.getElementById("notifi"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("h3"),i=document.createElement("p"),l=document.createElement("button");t.setAttribute("class","overlay animate-top pad10"),a.setAttribute("class","info xmcf"),i.setAttribute("style","overflow: auto;"),n.innerHTML="Sepanel",i.innerHTML="Harap isi semua!",l.setAttribute("class","btn1"),l.innerHTML="OK",l.onclick=function(){t.remove(),ej.disabled=!1,ej.style.cursor="pointer"},e.appendChild(t),t.appendChild(a),a.appendChild(n),a.appendChild(i),a.appendChild(l)}},ef.appendChild(eE),ef.appendChild(ey),ef.appendChild(eC),ef.appendChild(eg),ef.appendChild(eL),ef.appendChild(eM),ef.appendChild(ex),ef.appendChild(eT),ef.appendChild(eH),ef.appendChild(ek),ef.appendChild(ew),ef.appendChild(e_),ef.appendChild(e$),ef.appendChild(eB),ef.appendChild(e0),ef.appendChild(eI),ef.appendChild(e8),ef.appendChild(eS),ef.appendChild(e1),ef.appendChild(eq),ef.appendChild(eP),ef.appendChild(eK),ef.appendChild(eO),ef.appendChild(e2),ef.appendChild(ej)}else xLoad.style.display="none",mLogin.style.display="block",xPhone.style.display="none",xShop.style.display="none",xTabs.style.display="none"}),document.getElementById("defaultOpen").click();
