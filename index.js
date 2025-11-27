import{a as d,S as f,i as s}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="53429701-1a3d0b5c13468a36cfdf6d483";function h(n){const o={key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:o}).then(t=>t.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const a=document.querySelector(".form"),S=a.querySelector("input[name='search-text']");a.addEventListener("submit",n=>{n.preventDefault();const o=S.value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}b(),L(),h(o).then(t=>{if(t.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query.",position:"topRight"});return}g(t.hits),a.reset()}).catch(()=>{s.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
