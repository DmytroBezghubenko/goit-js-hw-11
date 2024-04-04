import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",f="43225005-d66d61a579372833bf726388e";function p(r){const o=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${o}`).then(n=>{if(!n.ok)throw new Error("Ooooops");return n.json()})}function d(r){return r.map(({webformatURL:o,largeImageURL:n,tags:i,views:e,downloads:t,likes:s,comments:c})=>`
    <li class="imageItme">
    <a class="gallery-link" href="${n}">
    <img class="imgAdd" src="${o}" alt="${i}">
    <ul class="imgInfo">
    <li class="info_item"><p>Likes</p>${s}</li>
    <li class="info_item"><p>Views</p>${e}</li>
    <li class="info_item"><p>Comments</p>${c}</li>
    <li class="info_item"><p>Downloads</p>${t}</li>
    </ul>
    </a>
    </li>
`).join("")}const y=document.querySelector(".form"),g=document.querySelector(".gallery"),a=document.getElementById("loader");y.addEventListener("submit",h);function h(r){if(r.preventDefault(),r.currentTarget.elements.nameImg.value===""){l.error({position:"topRight",message:"The field is empty! Enter image name!"});return}const{nameImg:n}=r.currentTarget.elements;a.style.display="inline-block",p(n.value).then(i=>{i.total===0&&l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g.innerHTML=d(i.hits),L()}).catch(i=>alert(i)).finally(()=>{a.style.display="none"})}function L(){new u(".gallery a",{overlayOpacity:.8,scrollZoom:!1,captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
