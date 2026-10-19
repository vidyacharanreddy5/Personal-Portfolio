(function(){
var C=window.CONTENT||{},P=C.photos||{},CFG=window.PAGE_CFG,V=(C.videos||{})[CFG.page]||{};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')}
function yid(u){var m=/(?:youtu\.be\/|shorts\/|[?&]v=)([\w-]{11})/.exec(u||'');return m?m[1]:null}
function igid(u){var m=/instagram\.com\/(?:reel|reels)\/([\w-]+)/.exec(u||'');return m?m[1]:null}
var h='';
CFG.sections.forEach(function(s){
 var items=s.kind==='photo'?(P[s.key]||[]):(V[s.key]||[]);
 h+='<section class="sec"><h2><svg class="i"><use href="#'+s.icon+'"/></svg>'+s.title+'</h2>';
 h+=s.todo?'<p class="note"><span class="todo">'+s.todo+'</span></p>':'<p class="note">'+(s.note||'')+'</p>';
 var n=Math.max(s.count,items.length),k;
 if(s.kind==='photo'){h+='<div class="masonry">';
  for(k=0;k<n;k++){var src=items[k];
   h+=src?'<figure class="slot"><img src="'+esc(src)+'" alt="'+esc(s.title+' photo '+(k+1))+'" loading="lazy"></figure>':'<div class="slot vp r'+(k%4)+'"><svg class="i"><use href="#cam"/></svg><span><b>Photo '+(k<9?'0':'')+(k+1)+'</b><br>Add photo</span></div>';}
  h+='</div>';}
 else{h+='<div class="vg '+(s.kind==='reel'?'reel':'')+(CFG.page==='fashion'&&items.some(function(item){return igid(item.href)})?' instagram':'')+'">';
  for(k=0;k<n;k++){var it=items[k],lab=(s.kind==='reel'?'Reel ':'Video ')+(k<9?'0':'')+(k+1),id=it&&yid(it.href);
   if(id)h+='<div class="vc yt g'+(k%4)+'" role="button" tabindex="0" data-id="'+id+'" data-t="'+esc(it.title||lab)+'" style="background-image:linear-gradient(to top,rgba(0,0,0,.7),rgba(0,0,0,0) 55%),url(https://i.ytimg.com/vi/'+id+'/hqdefault.jpg)"><svg class="i"><use href="#play"/></svg>'+esc(it.title||lab)+'<small>Play</small></div>';
   else if(it&&CFG.page==='fashion'&&igid(it.href))h+='<div class="ig-embed"><iframe src="https://www.instagram.com/reel/'+igid(it.href)+'/embed/" title="'+esc(it.title||lab)+'" loading="lazy" allowfullscreen></iframe><a href="'+esc(it.href)+'" target="_blank" rel="noopener">Open on Instagram</a></div>';
   else if(it&&it.href)h+='<a class="vc g'+(k%4)+'" href="'+esc(it.href)+'" target="_blank" rel="noopener"><svg class="i"><use href="#play"/></svg>'+esc(it.title||lab)+'<small>Watch</small></a>';
   else h+='<div class="vp"><svg class="i"><use href="#play"/></svg><span><b>'+lab+'</b><br>Add link</span></div>';}
  h+='</div>';}
 h+='</section>';});
document.getElementById('sections').innerHTML=h;
function play(el){if(el.classList.contains('on'))return;el.classList.add('on');el.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+el.dataset.id+'?autoplay=1&rel=0" title="'+el.dataset.t+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>'}
document.addEventListener('click',function(e){var y=e.target.closest&&e.target.closest('.yt');if(y){play(y);return}
 var im=e.target.closest&&e.target.closest('.slot img');if(im){var d=document.createElement('div');d.className='lb';d.innerHTML='<img alt="">';d.firstChild.src=im.src;d.onclick=function(){d.remove()};document.body.appendChild(d)}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){var d=document.querySelector('.lb');if(d)d.remove()}
 if(e.key==='Enter'){var y=document.activeElement;if(y&&y.classList&&y.classList.contains('yt'))play(y)}});
})();
