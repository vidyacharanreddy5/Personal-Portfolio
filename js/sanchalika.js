
/* Put your photos here, in order (image address or embedded image). Empty slots show as placeholders. */
var FEATURED=((window.CONTENT||{}).photos||{}).sanchalika||[],COUNT=6;
(function(){var c=document.getElementById('car'),h='',n=Math.max(COUNT,FEATURED.length);
for(var k=0;k<n;k++){h+=FEATURED[k]?'<div class="cs"><img src="'+FEATURED[k]+'" alt="Photograph '+(k+1)+' from the shoot" loading="lazy"></div>':'<div class="cs cph"><svg class="i"><use href="#cam"/></svg><span><b>Photo '+(k<9?'0':'')+(k+1)+'</b><br>Add a photo from the shoot</span></div>'}
c.innerHTML=h;
function go(d){c.scrollBy({left:d*c.clientWidth*.8,behavior:'smooth'})}
document.getElementById('cprev').onclick=function(){go(-1)};document.getElementById('cnext').onclick=function(){go(1)};
c.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)});})();

(function(){var cv=((window.CONTENT||{}).photos||{}).sanchalikaCover;if(!cv)return;var p=document.querySelector('.poster'),a=p.querySelector('svg');p.innerHTML='';p.appendChild(a);var im=new Image();im.src=cv;im.alt='She Sanchalika magazine cover';p.appendChild(im)})();
