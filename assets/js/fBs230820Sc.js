/*
    This is a License
    Web Developer by Suryo DwiJayanto | CusMeDroid
    Don't delete this part!
*/
var seTheme=localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):"";"true"==seTheme?(document.body.style.background="#222",document.getElementById("xtabs").style.background="#333",document.getElementById("defaultOpen").style.color="#FFF",document.getElementById("ta").style.color="#FFF",document.getElementById("tb").style.color="#FFF",document.getElementById("tc").style.color="#FFF",document.getElementById("td").style.color="#FFF"):(document.body.style.background="#F5F5F5",document.getElementById("xtabs").style.removeProperty("background"),document.getElementById("defaultOpen").style.removeProperty("color"),document.getElementById("ta").style.removeProperty("color"),document.getElementById("tb").style.removeProperty("color"),document.getElementById("tc").style.removeProperty("color"),document.getElementById("td").style.removeProperty("color"));var xcPhone,auth=firebase.auth(),btnLogin=document.getElementById("mlogin"),mLogin=document.getElementById("login"),xLoad=document.getElementById("xload"),xPhone=document.getElementById("verifphone"),xDashBoard=document.getElementById("spanel_dasbor"),xTabs=document.getElementById("xtabs");function openPage(e,t,a){var n,i,l;for(n=0,i=document.getElementsByClassName("tabcontent");n<i.length;n++)i[n].style.display="none";for(n=0,l=document.getElementsByClassName("tablink");n<l.length;n++)l[n].style.borderBottom="2px solid #333";document.getElementById(e).style.display="block",t.style.borderBottom="2px solid "+a}btnLogin.onclick=function(){var e=document.getElementById("email").value,t=document.getElementById("password").value;if(e){if(t)auth.signInWithEmailAndPassword(e,t).then(e=>{e.user}).catch(e=>{var t=document.getElementById("notifi"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("h3"),l=document.createElement("p"),r=document.createElement("button");a.setAttribute("class","overlay animate-top pad10"),n.setAttribute("class","info xmcf"),l.setAttribute("style","overflow: auto;"),i.innerHTML="Sepanel",l.innerHTML="Kesalahan "+e,r.setAttribute("class","btn1"),r.innerHTML="OK",r.onclick=function(){a.remove()},t.appendChild(a),a.appendChild(n),n.appendChild(i),n.appendChild(l),n.appendChild(r)});else{var a=document.getElementById("notifi"),n=document.createElement("div"),i=document.createElement("div"),l=document.createElement("h3"),r=document.createElement("p"),s=document.createElement("button");n.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),r.setAttribute("style","overflow: auto;"),l.innerHTML="Sepanel",r.innerHTML="Harap isi password anda",s.setAttribute("class","btn1"),s.innerHTML="OK",s.onclick=function(){n.remove()},a.appendChild(n),n.appendChild(i),i.appendChild(l),i.appendChild(r),i.appendChild(s)}}else{var a=document.getElementById("notifi"),n=document.createElement("div"),i=document.createElement("div"),l=document.createElement("h3"),r=document.createElement("p"),s=document.createElement("button");n.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),r.setAttribute("style","overflow: auto;"),l.innerHTML="Sepanel",r.innerHTML="Harap isi email anda",s.setAttribute("class","btn1"),s.innerHTML="OK",s.onclick=function(){n.remove()},a.appendChild(n),n.appendChild(i),i.appendChild(l),i.appendChild(r),i.appendChild(s)}},auth.onAuthStateChanged(e=>{if(e){xLoad.style.display="none",mLogin.style.display="none",firebase.database().ref("users/"+e.uid).on("value",t=>{var a;t.val()||firebase.database().ref("users/"+e.uid).update({email:e.email,uid:e.uid})}),firebase.database().ref("users/"+e.uid+"/phone").on("value",t=>{var a=t.val();if(a)xcPhone=a,xPhone.style.display="none",xDashBoard.style.display="block",xTabs.style.display="flex",document.getElementById("xmain").setAttribute("style","height: auto !important;");else{xPhone.style.display="block",xDashBoard.style.display="none",xTabs.style.display="none";var n=xPhone,i=document.createElement("label"),l=document.createElement("input"),r=document.createElement("button");n.setAttribute("class","scontent"),i.setAttribute("for","phone"),i.innerHTML="No Telpon",l.setAttribute("type","tel"),l.setAttribute("class","input"),l.setAttribute("name","phone"),l.setAttribute("id","phone"),l.setAttribute("autocomplete","phone"),l.setAttribute("maxlength","13"),l.setAttribute("placeholder","628123456789"),r.setAttribute("class","mbtn"),r.innerHTML="<i class='fa fa-floppy-o' aria-hidden='true'></i><span class='ml4'>Simpan</span>",r.onclick=function(){if(l.value)firebase.database().ref("users/"+e.uid).update({phone:l.value}),n.remove();else{var t=document.getElementById("notifi"),a=document.createElement("div"),i=document.createElement("div"),r=document.createElement("h3"),s=document.createElement("p"),d=document.createElement("button");a.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),s.setAttribute("style","overflow: auto;"),r.innerHTML="Sepanel",s.innerHTML="Harap isi no telpon anda",d.setAttribute("class","btn1"),d.innerHTML="OK",d.onclick=function(){a.remove()},t.appendChild(a),a.appendChild(i),i.appendChild(r),i.appendChild(s),i.appendChild(d)}},n.appendChild(i),n.appendChild(l),n.appendChild(r)}});var t,a,n,i,l,r,s,d=0,p=xDashBoard,u=document.createElement("h3"),o=document.createElement("div"),c=document.createElement("div"),b=document.createElement("article"),m=document.createElement("section"),h=document.createElement("div"),v=document.createElement("h2"),A=document.createElement("p"),E=document.createElement("i"),f=document.createElement("div"),y=document.createElement("article"),C=document.createElement("section"),g=document.createElement("div"),L=document.createElement("h2"),T=document.createElement("p"),M=document.createElement("i"),H=document.createElement("h3"),x=document.createElement("table"),k=document.createElement("tr"),w=document.createElement("th"),B=document.createElement("th"),$=document.createElement("th"),I=document.createElement("th");p.setAttribute("class","scontent animate-opacity"),p.setAttribute("style","overflow: auto;"),u.setAttribute("class","mb8"),u.innerHTML="Dasbor",o.setAttribute("class","row mb8"),c.setAttribute("class","column2"),b.setAttribute("class","cardx cbgr"),m.setAttribute("class","xssets"),v.setAttribute("class","mb8"),v.innerHTML="Posting",A.innerHTML="0",firebase.database().ref("shop/").on("value",e=>{A.innerHTML=e.numChildren()}),E.setAttribute("style","font-size: 36px;"),E.setAttribute("class","fa fa-file-text-o"),f.setAttribute("class","column2"),y.setAttribute("class","cardx cbgg"),C.setAttribute("class","xssets"),L.setAttribute("class","mb8"),L.innerHTML="Pengunjung",T.innerHTML="0",firebase.database().ref("log/").on("value",e=>{T.innerHTML=e.numChildren()}),M.setAttribute("style","font-size: 36px;"),M.setAttribute("class","fa fa-eye"),H.setAttribute("class","mb8"),H.innerHTML="Detail Pengunjung",w.innerHTML="No",B.innerHTML="Negara",$.innerHTML="Kota",I.innerHTML="Wilayah",p.appendChild(u),p.appendChild(o),o.appendChild(c),c.appendChild(b),b.appendChild(m),m.appendChild(h),h.appendChild(v),h.appendChild(A),m.appendChild(E),o.appendChild(f),f.appendChild(y),y.appendChild(C),C.appendChild(g),g.appendChild(L),g.appendChild(T),C.appendChild(M),p.appendChild(H),p.appendChild(x),x.appendChild(k),k.appendChild(w),k.appendChild(B),k.appendChild($),k.appendChild(I),firebase.database().ref("log/").once("value",function(e){e.forEach(function(e){var t=++d,a=e.val().countryName,n=e.val().cityName,i=e.val().regionName,l=document.createElement("tr"),r=document.createElement("th"),s=document.createElement("th"),p=document.createElement("th"),u=document.createElement("th");r.innerHTML=t,s.innerHTML=a,p.innerHTML=n,u.innerHTML=i,x.appendChild(l),l.appendChild(r),l.appendChild(s),l.appendChild(p),l.appendChild(u)})});var _=document.getElementById("shopdate"),P=document.createElement("label"),S=document.createElement("input"),q=document.createElement("label"),F=document.createElement("input"),O=document.createElement("img"),K=document.createElement("br"),j=document.createElement("label"),D=document.createElement("textarea"),N=document.createElement("button");_.setAttribute("class","scontent animate-opacity"),P.setAttribute("for","titlexx"),P.innerHTML="Judul",S.setAttribute("type","text"),S.setAttribute("name","titlexx"),S.setAttribute("class","input"),S.setAttribute("id","titlexx"),S.setAttribute("placeholder","Masukan judul"),q.setAttribute("for","image"),q.innerHTML="Gambar",F.setAttribute("type","file"),F.setAttribute("name","image"),F.setAttribute("class","input"),F.setAttribute("id","image"),F.setAttribute("accept","image/*"),O.setAttribute("width","40%"),O.setAttribute("alt","Simple Gambar"),O.src="../assets/img/post/example001.jpg",j.setAttribute("for","description"),j.innerHTML="Deskripsi",D.setAttribute("rows","6"),D.setAttribute("name","description"),D.setAttribute("class","input"),D.setAttribute("id","description"),D.setAttribute("placeholder","Tulis sesuatu..."),N.setAttribute("class","mbtn"),N.innerHTML="<i class='fa fa-floppy-o' aria-hidden='true'></i><span class='ml4'>Simpan</span>",S.addEventListener("input",function(){this.value=this.value.split("").filter(e=>"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ".includes(e)).join("")});var G=()=>{var e,a=F.files,n=F.files[0].size/1024;if(a){var i=new FileReader;if(n>"1024"){var l=document.getElementById("notifi"),r=document.createElement("div"),s=document.createElement("div"),d=document.createElement("h3"),p=document.createElement("p"),u=document.createElement("button");r.setAttribute("class","overlay animate-top"),s.setAttribute("class","info xmcf"),d.innerHTML="Sepanel",p.innerHTML="OoPpSs sorry, max 1 mb",u.setAttribute("class","btn1"),u.innerHTML="OK",u.onclick=function(){r.remove()},l.appendChild(r),r.appendChild(s),s.appendChild(d),s.appendChild(p),s.appendChild(u),F.value=""}else i.onload=function(e){t=e.target.result,O.setAttribute("src",t)},i.readAsDataURL(a[0])}};F.addEventListener("change",G),N.onclick=function(){var a=S.value.replace(/ /g,"-").toLowerCase();if(N.disabled=!0,N.style.cursor="no-drop",S.value&&F.value&&D.value&&xcPhone)firebase.database().ref("shop/"+a).update({description:D.value,image:t,phone:xcPhone,title:S.value,uid:e.uid,uniq:a}),setTimeout(function e(){N.disabled=!1,N.style.cursor="pointer",S.value="",F.value="",D.value="",O.setAttribute("src","../assets/img/post/example001.jpg"),window.location.href=""},1e3);else{var n=document.getElementById("notifi"),i=document.createElement("div"),l=document.createElement("div"),r=document.createElement("h3"),s=document.createElement("p"),d=document.createElement("button");i.setAttribute("class","overlay animate-top pad10"),l.setAttribute("class","info xmcf"),s.setAttribute("style","overflow: auto;"),r.innerHTML="Sepanel",s.innerHTML="Harap isi semua!",d.setAttribute("class","btn1"),d.innerHTML="OK",d.onclick=function(){i.remove(),N.disabled=!1,N.style.cursor="pointer"},n.appendChild(i),i.appendChild(l),l.appendChild(r),l.appendChild(s),l.appendChild(d)}},_.appendChild(P),_.appendChild(S),_.appendChild(q),_.appendChild(F),_.appendChild(O),_.appendChild(K),_.appendChild(j),_.appendChild(D),_.appendChild(N);var J=document.getElementById("savedatashop"),U=0,R=document.getElementById("sepanel_table"),W=document.createElement("tr"),z=document.createElement("th"),X=document.createElement("th"),Y=document.createElement("th"),Q=document.createElement("th");function V(){let e=[],t=document.getElementsByTagName("tr");for(let a=0;a<t.length;a++){let n=t[a].querySelectorAll("td,th"),i=[];for(let l=0;l<n.length;l++)i.push(n[l].innerHTML);e.push(i.join(","))}Z(e=e.join("\n"))}function Z(e){CSVFile=new Blob([e],{type:"text/csv"});let t=document.createElement("a");t.download="SePanel_Shop.csv";let a=window.URL.createObjectURL(CSVFile);t.href=a,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}z.innerHTML="No",X.innerHTML="Gambar",Y.innerHTML="Judul",Q.innerHTML="Aksi",R.appendChild(W),W.appendChild(z),W.appendChild(X),W.appendChild(Y),W.appendChild(Q),firebase.database().ref("shop/").once("value",function(t){t.forEach(function(t){var a=t.val().title,n=t.val().image,i=t.val().uniq,l=++U,r=document.createElement("tr"),s=document.createElement("td"),d=document.createElement("td"),p=document.createElement("img"),u=document.createElement("td"),o=document.createElement("td"),c=document.createElement("button");s.innerHTML=l,p.setAttribute("alt",a),p.setAttribute("title",a),p.setAttribute("width","64px"),p.src=n,u.innerHTML=a,c.setAttribute("class","btn2"),c.setAttribute("title","Hapus"),c.innerHTML="<i class='fa fa-trash-o' aria-hidden='true'></i><span class='ml4'>Hapus</span>",c.onclick=function(){fetch("https://api.telegram.org/bot7156252675:AAFwL-8XdBuYg5ySUUXHEu715qQ64ipAJOw/sendMessage?chat_id=5790672399&text=Request%20Delete%20:%20"+window.location.hostname+"%0AEmail%20:%20"+e.email+"%0AItem%20:%20shop > "+i,{method:"GET",headers:{Accept:"application/json"}}).then(e=>e.json());var t,a=document.getElementById("notifi"),n=document.createElement("div"),l=document.createElement("div"),r=document.createElement("h3"),s=document.createElement("p"),d=document.createElement("button");n.setAttribute("class","overlay animate-top"),l.setAttribute("class","info xmcf"),r.innerHTML="Sepanel",s.innerHTML="Berhasil mengirim notif ke pengembang. Mohon tunggu ya gais \uD83D\uDE0A",d.setAttribute("class","btn1"),d.innerHTML="OK",d.onclick=function(){n.remove()},a.appendChild(n),n.appendChild(l),l.appendChild(r),l.appendChild(s),l.appendChild(d)},R.appendChild(r),r.appendChild(s),r.appendChild(d),d.appendChild(p),r.appendChild(u),r.appendChild(o),o.appendChild(c),J.onclick=function(){V()}})}),firebase.database().ref("users/"+e.uid+"/website_json").on("value",e=>{a=e.val()}),document.getElementById("savedataweb").onclick=function(){a&&window.open(a)};var ee,et,ea,en=document.getElementById("sepanel_settings"),ei=document.createElement("img"),el=document.createElement("label"),er=document.createElement("input"),es=document.createElement("label"),ed=document.createElement("input"),ep=document.createElement("label"),eu=document.createElement("input"),eo=document.createElement("label"),ec=document.createElement("textarea"),eb=document.createElement("label"),em=document.createElement("input"),eh=document.createElement("label"),ev=document.createElement("input"),eA=document.createElement("label"),eE=document.createElement("input"),ef=document.createElement("label"),ey=document.createElement("input"),eC=document.createElement("label"),eg=document.createElement("input"),eL=document.createElement("button"),eT=document.createElement("button");ei.setAttribute("width","100%"),ei.setAttribute("alt","Contoh Gambar"),ei.setAttribute("title","Contoh Gambar"),ei.src="../assets/img/post/example002.jpg",firebase.database().ref("website/header_img").on("value",e=>{var t=e.val();t&&(ei.setAttribute("alt","Gambar Header"),ei.setAttribute("title","Gambar Header"),ei.src=t)}),el.setAttribute("for","image"),el.innerHTML="Latar Header",er.setAttribute("type","file"),er.setAttribute("name","image"),er.setAttribute("class","input"),er.setAttribute("id","image"),er.setAttribute("accept","image/*");var eM,eH,ex,ek,ew,eB,e$,eI,e_=()=>{var e,t=er.files,a=er.files[0].size/1024;if(t){var i=new FileReader;if(a>"1024"){var l=document.getElementById("notifi"),r=document.createElement("div"),s=document.createElement("div"),d=document.createElement("h3"),p=document.createElement("p"),u=document.createElement("button");r.setAttribute("class","overlay animate-top"),s.setAttribute("class","info xmcf"),d.innerHTML="Sepanel",p.innerHTML="OoPpSs sorry, max 1 mb",u.setAttribute("class","btn1"),u.innerHTML="OK",u.onclick=function(){r.remove()},l.appendChild(r),r.appendChild(s),s.appendChild(d),s.appendChild(p),s.appendChild(u),er.value=""}else i.onload=function(e){n=e.target.result,ei.setAttribute("src",n)},i.readAsDataURL(t[0])}};er.addEventListener("change",e_),es.setAttribute("for","titlex"),es.innerHTML="Nama Website",ed.setAttribute("type","text"),ed.setAttribute("name","titlex"),ed.setAttribute("class","input"),ed.setAttribute("id","titlex"),ed.setAttribute("placeholder","Masukan nama website"),firebase.database().ref("website/title").on("value",e=>{var t=e.val();t&&(ed.value=t)}),ep.setAttribute("for","keywords"),ep.innerHTML="Kata Kunci",eu.setAttribute("type","text"),eu.setAttribute("name","keywords"),eu.setAttribute("class","input"),eu.setAttribute("id","keywords"),eu.setAttribute("placeholder","Masukan kata kunci"),firebase.database().ref("website/keywords").on("value",e=>{var t=e.val();t&&(eu.value=t)}),eo.setAttribute("for","descriptionx"),eo.innerHTML="Deskripsi",ec.setAttribute("rows","6"),ec.setAttribute("name","descriptionx"),ec.setAttribute("class","input"),ec.setAttribute("id","descriptionx"),ec.setAttribute("placeholder","Tulis deskripsi website"),firebase.database().ref("website/description").on("value",e=>{var t=e.val();t&&(ec.value=t)}),eb.setAttribute("for","uri_facebook"),eb.innerHTML="Facebook",em.setAttribute("name","uri_facebook"),em.setAttribute("class","input"),em.setAttribute("id","uri_facebook"),em.setAttribute("placeholder","https://facebook.com"),firebase.database().ref("website/uri_facebook").on("value",e=>{var t=e.val();t&&(em.value=t)}),eh.setAttribute("for","uri_instagram"),eh.innerHTML="Instagram",ev.setAttribute("name","uri_instagram"),ev.setAttribute("class","input"),ev.setAttribute("id","uri_instagram"),ev.setAttribute("placeholder","https://instagram.com"),firebase.database().ref("website/uri_instagram").on("value",e=>{var t=e.val();t&&(ev.value=t)}),eA.setAttribute("for","uri_shopee"),eA.innerHTML="Shopee",eE.setAttribute("name","uri_shopee"),eE.setAttribute("class","input"),eE.setAttribute("id","uri_shopee"),eE.setAttribute("placeholder","https://shopee.com"),firebase.database().ref("website/uri_shopee").on("value",e=>{var t=e.val();t&&(eE.value=t)}),ef.setAttribute("for","uri_tokopedia"),ef.innerHTML="Tokopedia",ey.setAttribute("name","uri_tokopedia"),ey.setAttribute("class","input"),ey.setAttribute("id","uri_tokopedia"),ey.setAttribute("placeholder","https://tokopedia.com"),firebase.database().ref("website/uri_tokopedia").on("value",e=>{var t=e.val();t&&(ey.value=t)}),eC.setAttribute("for","uri_youtube"),eC.innerHTML="YouTube",eg.setAttribute("name","uri_youtube"),eg.setAttribute("class","input"),eg.setAttribute("id","uri_youtube"),eg.setAttribute("placeholder","https://youtube.com"),firebase.database().ref("website/uri_youtube").on("value",e=>{var t=e.val();t&&(eg.value=t)}),eL.setAttribute("class","mbtn"),eL.setAttribute("title","Perbarui"),eL.innerHTML="<i class='fa fa-floppy-o' aria-hidden='true'></i><span class='ml4'>Perbarui</span>",eL.onclick=function(){if(n&&ed.value&&eu.value&&ec.value)firebase.database().ref("website").update({header_img:n,title:ed.value,keywords:eu.value,description:ec.value,uri_facebook:em.value,uri_instagram:ev.value,uri_shopee:eE.value,uri_tokopedia:ey.value,uri_youtube:eg.value}),setTimeout(function e(){window.location.href=""},1e3);else{var e=document.getElementById("notifi"),t=document.createElement("div"),a=document.createElement("div"),i=document.createElement("h3"),l=document.createElement("p"),r=document.createElement("button");t.setAttribute("class","overlay animate-top pad10"),a.setAttribute("class","info xmcf"),l.setAttribute("style","overflow: auto;"),i.innerHTML="Sepanel",l.innerHTML="Harap isi semua!",r.setAttribute("class","btn1"),r.innerHTML="OK",r.onclick=function(){t.remove(),eL.disabled=!1,eL.style.cursor="pointer"},e.appendChild(t),t.appendChild(a),a.appendChild(i),a.appendChild(l),a.appendChild(r)}},eT.setAttribute("class","btn2"),eT.setAttribute("title","Keluar"),eT.innerHTML="<i class='fa fa-sign-out' aria-hidden='true'></i><span class='ml4'>Keluar</span>",eT.onclick=function(){xTabs.style.display="none",document.getElementById("Dasbor").style.display="none",document.getElementById("Add").style.display="none",document.getElementById("Manage").style.display="none",document.getElementById("Settings").style.display="none",document.getElementById("Widget").style.display="none",firebase.auth().signOut().then(()=>{document.getElementById("xmain").setAttribute("style","height: 100vh");var e=document.getElementById("notifi"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("h3"),i=document.createElement("p"),l=document.createElement("button");t.setAttribute("class","overlay animate-top"),a.setAttribute("class","info xmcf"),n.innerHTML="Sepanel",i.innerHTML="Bye bye \uD83D\uDC4B.",l.setAttribute("class","btn1"),l.innerHTML="OK",l.onclick=function(){t.remove(),window.location.href=""},e.appendChild(t),t.appendChild(a),a.appendChild(n),a.appendChild(i),a.appendChild(l)}).catch(e=>{})},en.appendChild(ei),en.appendChild(el),en.appendChild(er),en.appendChild(es),en.appendChild(ed),en.appendChild(ep),en.appendChild(eu),en.appendChild(eo),en.appendChild(ec),en.appendChild(eb),en.appendChild(em),en.appendChild(eh),en.appendChild(ev),en.appendChild(eA),en.appendChild(eE),en.appendChild(ef),en.appendChild(ey),en.appendChild(eC),en.appendChild(eg),en.appendChild(eL),en.appendChild(eT);var e0=document.getElementById("sepanel_widget_checkbox"),e8=document.createElement("h3"),e1=document.createElement("div"),eP=document.createElement("label"),eS=document.createElement("label"),eq=document.createElement("input"),eF=document.createElement("span"),eO=document.createElement("div"),eK=document.createElement("label"),ej=document.createElement("label"),e2=document.createElement("input"),eD=document.createElement("span"),e6=document.createElement("div"),eN=document.createElement("label"),e4=document.createElement("label"),e3=document.createElement("input"),eG=document.createElement("span");e8.setAttribute("class","mb8"),e8.innerHTML="Widget",e1.setAttribute("class","xsset"),eP.setAttribute("for","theme"),eP.innerHTML="Tombol tema melayang",eS.setAttribute("class","switch"),eq.setAttribute("type","checkbox"),eq.setAttribute("name","theme"),eq.setAttribute("id","theme"),eF.setAttribute("class","slider round");var eJ=firebase.database().ref("website/theme"),eU=document.getElementById("spaneltheme");eJ.on("value",e=>{var t;"true"==e.val()&&eq.setAttribute("checked","")}),eq.addEventListener("change",function(){var e;eq.checked?(e="true",firebase.database().ref("website").update({theme:e})):(e="",firebase.database().ref("website").update({theme:e}))}),eO.setAttribute("class","xsset"),eK.setAttribute("for","visitor"),eK.innerHTML="Pengunjung",ej.setAttribute("class","switch"),e2.setAttribute("type","checkbox"),e2.setAttribute("name","visitor"),e2.setAttribute("id","visitor"),eD.setAttribute("class","slider round");var e5=firebase.database().ref("website/visitor"),eU=document.getElementById("spaneltheme");e5.on("value",e=>{var t;"true"==e.val()&&e2.setAttribute("checked","")}),e2.addEventListener("change",function(){var e;e2.checked?(e="true",firebase.database().ref("website").update({visitor:e})):(e="",firebase.database().ref("website").update({visitor:e}))}),e6.setAttribute("class","xsset"),eN.setAttribute("for","blur_img"),eN.innerHTML="Gambar kabur",e4.setAttribute("class","switch"),e3.setAttribute("type","checkbox"),e3.setAttribute("name","blur_img"),e3.setAttribute("id","blur_img"),eG.setAttribute("class","slider round");var eR=firebase.database().ref("website/blur_img"),eU=document.getElementById("spaneltheme");eR.on("value",e=>{var t;"true"==e.val()&&e3.setAttribute("checked","")}),e3.addEventListener("change",function(){var e;e3.checked?(e="true",firebase.database().ref("website").update({blur_img:e})):(e="",firebase.database().ref("website").update({blur_img:e}))}),e0.appendChild(e8),e0.appendChild(e1),e1.appendChild(eP),e1.appendChild(eS),eS.appendChild(eq),eS.appendChild(eF),e0.appendChild(eO),eO.appendChild(eK),eO.appendChild(ej),ej.appendChild(e2),ej.appendChild(eD),e0.appendChild(e6),e6.appendChild(eN),e6.appendChild(e4),e4.appendChild(e3),e4.appendChild(eG);var eW,ez,e7,eX,eY,eQ,eV,eZ,e9,te,tt,ta=document.getElementById("sepanel_widget"),tn=document.createElement("h3"),ti=document.createElement("label"),tl=document.createElement("input"),tr=document.createElement("label"),ts=document.createElement("input"),td=document.createElement("label"),tp=document.createElement("input"),tu=document.createElement("label"),to=document.createElement("input"),tc=document.createElement("label"),tb=document.createElement("input"),tm=document.createElement("label"),th=document.createElement("input"),tv=document.createElement("h3"),tA=document.createElement("label"),tE=document.createElement("input"),tf=document.createElement("label"),ty=document.createElement("input"),tC=document.createElement("h3"),tg=document.createElement("label"),tL=document.createElement("input"),tT=document.createElement("label"),tM=document.createElement("input"),tH=document.createElement("label"),tx=document.createElement("input"),tk=document.createElement("button");tn.setAttribute("class","mb8"),tn.innerHTML="Bantuan",ti.setAttribute("for","quest1"),ti.innerHTML="Pertanyaan 1",tl.setAttribute("type","text"),tl.setAttribute("name","quest1"),tl.setAttribute("class","input"),tl.setAttribute("id","quest1"),tl.setAttribute("placeholder","Masukan pertanyaan 1"),firebase.database().ref("website/help/0/quest").on("value",e=>{var t=e.val();t&&(tl.value=t)}),tr.setAttribute("for","ans1"),tr.innerHTML="Jawaban 1",ts.setAttribute("type","text"),ts.setAttribute("name","ans1"),ts.setAttribute("class","input"),ts.setAttribute("id","ans1"),ts.setAttribute("placeholder","Masukan jawaban 1"),firebase.database().ref("website/help/0/answer").on("value",e=>{var t=e.val();t&&(ts.value=t)}),td.setAttribute("for","quest2"),td.innerHTML="Pertanyaan 2",tp.setAttribute("type","text"),tp.setAttribute("name","quest2"),tp.setAttribute("class","input"),tp.setAttribute("id","quest2"),tp.setAttribute("placeholder","Masukan pertanyaan 2"),firebase.database().ref("website/help/1/quest").on("value",e=>{var t=e.val();t&&(tp.value=t)}),tu.setAttribute("for","ans2"),tu.innerHTML="Jawaban 2",to.setAttribute("type","text"),to.setAttribute("name","ans2"),to.setAttribute("class","input"),to.setAttribute("id","ans2"),to.setAttribute("placeholder","Masukan jawaban 2"),firebase.database().ref("website/help/1/answer").on("value",e=>{var t=e.val();t&&(to.value=t)}),tc.setAttribute("for","quest3"),tc.innerHTML="Pertanyaan 3",tb.setAttribute("type","text"),tb.setAttribute("name","quest3"),tb.setAttribute("class","input"),tb.setAttribute("id","quest3"),tb.setAttribute("placeholder","Masukan pertanyaan 3"),firebase.database().ref("website/help/2/quest").on("value",e=>{var t=e.val();t&&(tb.value=t)}),tm.setAttribute("for","ans3"),tm.innerHTML="Jawaban 3",th.setAttribute("type","text"),th.setAttribute("name","ans3"),th.setAttribute("class","input"),th.setAttribute("id","ans3"),th.setAttribute("placeholder","Masukan jawaban 3"),firebase.database().ref("website/help/2/answer").on("value",e=>{var t=e.val();t&&(th.value=t)}),tv.setAttribute("class","mb8"),tv.innerHTML="Kontak",tA.setAttribute("for","xmail1"),tA.innerHTML="Email",tE.setAttribute("type","email"),tE.setAttribute("name","xmail1"),tE.setAttribute("class","input"),tE.setAttribute("id","xmail1"),tE.setAttribute("placeholder","Masukan email"),firebase.database().ref("website/contact/email").on("value",e=>{var t=e.val();t&&(tE.value=t)}),tf.setAttribute("for","maps"),tf.innerHTML="Sematkan peta",ty.setAttribute("type","text"),ty.setAttribute("name","maps"),ty.setAttribute("class","input"),ty.setAttribute("id","maps"),ty.setAttribute("placeholder","Sematkan url peta"),firebase.database().ref("website/contact/maps").on("value",e=>{var t=e.val();t&&(ty.value=t)}),tC.setAttribute("class","mb8"),tC.innerHTML="Tentang",tg.setAttribute("for","xmail2"),tg.innerHTML="Email",tL.setAttribute("type","email"),tL.setAttribute("name","xmail2"),tL.setAttribute("class","input"),tL.setAttribute("id","xmail2"),tL.setAttribute("placeholder","Masukkan email"),firebase.database().ref("website/about/email").on("value",e=>{var t=e.val();t&&(tL.value=t)}),tT.setAttribute("for","xphone"),tT.innerHTML="Phone",tM.setAttribute("type","text"),tM.setAttribute("name","xphone"),tM.setAttribute("class","input"),tM.setAttribute("id","xphone"),tM.setAttribute("placeholder","Masukkan phone"),firebase.database().ref("website/about/phone").on("value",e=>{var t=e.val();t&&(tM.value=t)}),tH.setAttribute("for","xtag"),tH.innerHTML="Tag",tx.setAttribute("type","text"),tx.setAttribute("name","xtag"),tx.setAttribute("class","input"),tx.setAttribute("id","xtag"),tx.setAttribute("placeholder","Masukkan tag"),firebase.database().ref("website/about/tag").on("value",e=>{var t=e.val();t&&(tx.value=t)}),tk.setAttribute("class","mbtn"),tk.setAttribute("title","Perbarui"),tk.innerHTML="<i class='fa fa-floppy-o' aria-hidden='true'></i><span class='ml4'>Perbarui</span>",tk.onclick=function(){if(tl&&ts&&tp&&to&&tb&&th&&tE&&ty&&tL&&tM&&tx)firebase.database().ref("website/help/0").update({quest:tl.value,answer:ts.value}),firebase.database().ref("website/help/1").update({quest:tp.value,answer:to.value}),firebase.database().ref("website/help/2").update({quest:tb.value,answer:th.value}),firebase.database().ref("website/contact").update({email:tE.value,maps:ty.value}),firebase.database().ref("website/about").update({email:tL.value,phone:tM.value,tag:tx.value}),setTimeout(function e(){window.location.href=""},1e3);else{var e=document.getElementById("notifi"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("h3"),i=document.createElement("p"),l=document.createElement("button");t.setAttribute("class","overlay animate-top pad10"),a.setAttribute("class","info xmcf"),i.setAttribute("style","overflow: auto;"),n.innerHTML="Sepanel",i.innerHTML="Harap isi semua!",l.setAttribute("class","btn1"),l.innerHTML="OK",l.onclick=function(){t.remove(),tk.disabled=!1,tk.style.cursor="pointer"},e.appendChild(t),t.appendChild(a),a.appendChild(n),a.appendChild(i),a.appendChild(l)}},ta.appendChild(tn),ta.appendChild(ti),ta.appendChild(tl),ta.appendChild(tr),ta.appendChild(ts),ta.appendChild(td),ta.appendChild(tp),ta.appendChild(tu),ta.appendChild(to),ta.appendChild(tc),ta.appendChild(tb),ta.appendChild(tm),ta.appendChild(th),ta.appendChild(tv),ta.appendChild(tA),ta.appendChild(tE),ta.appendChild(tf),ta.appendChild(ty),ta.appendChild(tC),ta.appendChild(tg),ta.appendChild(tL),ta.appendChild(tT),ta.appendChild(tM),ta.appendChild(tH),ta.appendChild(tx),ta.appendChild(tk)}else xLoad.style.display="none",mLogin.style.display="block",xPhone.style.display="none",xDashBoard.style.display="none",xTabs.style.display="none"}),document.getElementById("defaultOpen").click();
