/*
    This is a License
    Web Developer by Suryo DwiJayanto | CusMeDroid
    Don't delete this part!
*/
var xcPhone,auth=firebase.auth(),btnLogin=document.getElementById("mlogin"),mLogin=document.getElementById("login"),xLoad=document.getElementById("xload"),xPhone=document.getElementById("verifphone"),xShop=document.getElementById("shopdate");btnLogin.onclick=function(){var e=document.getElementById("email").value,t=document.getElementById("password").value;if(e){if(t)auth.signInWithEmailAndPassword(e,t).then(e=>{e.user}).catch(e=>{var t=document.getElementById("notifi"),n=document.createElement("div"),a=document.createElement("div"),i=document.createElement("h3"),l=document.createElement("p"),r=document.createElement("button");n.setAttribute("class","overlay animate-top pad10"),a.setAttribute("class","info xmcf"),l.setAttribute("style","overflow: auto;"),i.innerHTML="Sepanel",l.innerHTML="Kesalahan "+e,r.setAttribute("class","btn1"),r.innerHTML="OK",r.onclick=function(){n.remove()},t.appendChild(n),n.appendChild(a),a.appendChild(i),a.appendChild(l),a.appendChild(r)});else{var n=document.getElementById("notifi"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("h3"),r=document.createElement("p"),s=document.createElement("button");a.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),r.setAttribute("style","overflow: auto;"),l.innerHTML="Sepanel",r.innerHTML="Harap isi password anda",s.setAttribute("class","btn1"),s.innerHTML="OK",s.onclick=function(){a.remove()},n.appendChild(a),a.appendChild(i),i.appendChild(l),i.appendChild(r),i.appendChild(s)}}else{var n=document.getElementById("notifi"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("h3"),r=document.createElement("p"),s=document.createElement("button");a.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),r.setAttribute("style","overflow: auto;"),l.innerHTML="Sepanel",r.innerHTML="Harap isi email anda",s.setAttribute("class","btn1"),s.innerHTML="OK",s.onclick=function(){a.remove()},n.appendChild(a),a.appendChild(i),i.appendChild(l),i.appendChild(r),i.appendChild(s)}},auth.onAuthStateChanged(e=>{if(e){xLoad.style.display="none",mLogin.style.display="none",firebase.database().ref("users/"+e.uid).on("value",t=>{var n;t.val()||firebase.database().ref("users/"+e.uid).update({email:e.email,uid:e.uid})}),firebase.database().ref("users/"+e.uid+"/phone").on("value",t=>{var n=t.val();if(n)xcPhone=n,xPhone.style.display="none",xShop.style.display="block",document.getElementById("xmain").setAttribute("style","height: auto !important;");else{xPhone.style.display="block",xShop.style.display="none";var a=xPhone,i=document.createElement("label"),l=document.createElement("input"),r=document.createElement("button");a.setAttribute("class","scontent"),i.setAttribute("for","phone"),i.innerHTML="No Telpon",l.setAttribute("type","tel"),l.setAttribute("class","input"),l.setAttribute("name","phone"),l.setAttribute("id","phone"),l.setAttribute("autocomplete","phone"),l.setAttribute("maxlength","13"),l.setAttribute("placeholder","628123456789"),r.setAttribute("class","mbtn"),r.innerHTML="Simpan",r.onclick=function(){if(l.value)firebase.database().ref("users/"+e.uid).update({phone:l.value}),a.remove();else{var t=document.getElementById("notifi"),n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("h3"),s=document.createElement("p"),d=document.createElement("button");n.setAttribute("class","overlay animate-top pad10"),i.setAttribute("class","info xmcf"),s.setAttribute("style","overflow: auto;"),r.innerHTML="Sepanel",s.innerHTML="Harap isi no telpon anda",d.setAttribute("class","btn1"),d.innerHTML="OK",d.onclick=function(){n.remove()},t.appendChild(n),n.appendChild(i),i.appendChild(r),i.appendChild(s),i.appendChild(d)}},a.appendChild(i),a.appendChild(l),a.appendChild(r)}});var t,n,a,i=xShop,l=document.createElement("label"),r=document.createElement("input"),s=document.createElement("label"),d=document.createElement("input"),p=document.createElement("img"),o=document.createElement("br"),u=document.createElement("label"),c=document.createElement("textarea"),m=document.createElement("button"),h=document.createElement("button");i.setAttribute("class","scontent"),l.setAttribute("for","title"),l.innerHTML="Judul",r.setAttribute("type","text"),r.setAttribute("name","title"),r.setAttribute("class","input"),r.setAttribute("id","title"),r.setAttribute("placeholder","Masukan judul"),s.setAttribute("for","image"),s.innerHTML="Gambar",d.setAttribute("type","file"),d.setAttribute("name","image"),d.setAttribute("class","input"),d.setAttribute("id","image"),d.setAttribute("accept","image/*"),p.setAttribute("width","40%"),p.src="../assets/img/post/example001.jpg",u.setAttribute("for","description"),u.innerHTML="Deskripsi",c.setAttribute("rows","6"),c.setAttribute("name","description"),c.setAttribute("class","input"),c.setAttribute("id","description"),c.setAttribute("placeholder","Tulis sesuatu..."),m.setAttribute("class","mbtn"),m.innerHTML="Simpan",h.setAttribute("class","btn2"),h.innerHTML="Keluar";var b=()=>{var e,n=d.files,a=d.files[0].size/1024;if(n){var i=new FileReader;if(a>"1024"){var l=document.getElementById("notifi"),r=document.createElement("div"),s=document.createElement("div"),o=document.createElement("h3"),u=document.createElement("p"),c=document.createElement("button");r.setAttribute("class","overlay animate-top"),s.setAttribute("class","info xmcf"),o.innerHTML="DCM Player",u.innerHTML="OoPpSs sorry, max 1 mb",c.setAttribute("class","btn1"),c.innerHTML="OK",c.onclick=function(){r.remove()},l.appendChild(r),r.appendChild(s),s.appendChild(o),s.appendChild(u),s.appendChild(c),d.value=""}else i.onload=function(e){t=e.target.result,p.setAttribute("src",t)},i.readAsDataURL(n[0])}};d.addEventListener("change",b),m.onclick=function(){var n=r.value.replace(/ /g,"-").toLowerCase();if(m.disabled=!0,m.style.cursor="no-drop",r.value&&d.value&&c.value&&xcPhone)firebase.database().ref("shop/"+n).update({description:c.value,image:t,phone:xcPhone,title:r.value,uid:e.uid,uniq:n}),setTimeout(function e(){m.disabled=!1,m.style.cursor="pointer",r.value="",d.value="",c.value="",p.setAttribute("src","../assets/img/post/example001.jpg")},1e3);else{var a=document.getElementById("notifi"),i=document.createElement("div"),l=document.createElement("div"),s=document.createElement("h3"),o=document.createElement("p"),u=document.createElement("button");i.setAttribute("class","overlay animate-top pad10"),l.setAttribute("class","info xmcf"),o.setAttribute("style","overflow: auto;"),s.innerHTML="Sepanel",o.innerHTML="Harap isi semua!",u.setAttribute("class","btn1"),u.innerHTML="OK",u.onclick=function(){i.remove(),m.disabled=!1,m.style.cursor="pointer"},a.appendChild(i),i.appendChild(l),l.appendChild(s),l.appendChild(o),l.appendChild(u)}},h.onclick=function(){firebase.auth().signOut().then(()=>{document.getElementById("xmain").setAttribute("style","height: 100vh");var e=document.getElementById("notifi"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h3"),i=document.createElement("p"),l=document.createElement("button");t.setAttribute("class","overlay animate-top"),n.setAttribute("class","info xmcf"),a.innerHTML="Sepanel",i.innerHTML="Bye bye \uD83D\uDC4B.",l.setAttribute("class","btn1"),l.innerHTML="OK",l.onclick=function(){t.remove(),window.location.href=""},e.appendChild(t),t.appendChild(n),n.appendChild(a),n.appendChild(i),n.appendChild(l)}).catch(e=>{})},i.appendChild(l),i.appendChild(r),i.appendChild(s),i.appendChild(d),i.appendChild(p),i.appendChild(o),i.appendChild(u),i.appendChild(c),i.appendChild(m),i.appendChild(h)}else xLoad.style.display="none",mLogin.style.display="block",xPhone.style.display="none",xShop.style.display="none"});
