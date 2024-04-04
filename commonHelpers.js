import{i as a,S as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",p="43225005-d66d61a579372833bf726388e";function d(i){const o=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${o}`).then(r=>{if(!r.ok)throw new Error("Ooooops");return r.json()})}function y(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,views:e,downloads:t,likes:n,comments:u})=>`
    <li class="imageItme">
    <a class="gallery-link" href="${r}">
    <img class="imgAdd" src="${o}" alt="${s}">
    <ul class="imgInfo">
    <li class="info_item"><p>Likes</p>${n}</li>
    <li class="info_item"><p>Views</p>${e}</li>
    <li class="info_item"><p>Comments</p>${u}</li>
    <li class="info_item"><p>Downloads</p>${t}</li>
    </ul>
    </a>
    </li>
`).join("")}const g=document.querySelector(".form"),h=document.querySelector(".gallery"),c=document.getElementById("loader"),l=document.querySelector("#nameImg");g.addEventListener("submit",L);function L(i){if(i.preventDefault(),console.log(l.value),l.value===""){a.error({position:"topRight",message:"The field is empty! Enter image name!"});return}const{nameImg:o}=i.currentTarget.elements;c.style.display="inline-block",d(o.value).then(r=>{r.total===0&&a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),h.innerHTML=y(r.hits),b()}).catch(r=>alert(r)).finally(()=>{c.style.display="none"}),l.value=""}function b(){new m(".gallery a",{overlayOpacity:.8,scrollZoom:!1,captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
