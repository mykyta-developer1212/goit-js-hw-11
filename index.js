import{a as d,S as f,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="51603629-b4647d91657d34a62103fca40",m="https://pixabay.com/api/";async function y(a){const r={key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:r})).data}const c=document.querySelector(".gallery");let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:l,downloads:u})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${l}</p>
          <p><b>Downloads</b> ${u}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function w(){document.querySelector(".loader").classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query.",position:"topRight"});return}b(),L();try{const o=await y(r);o.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(o.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
