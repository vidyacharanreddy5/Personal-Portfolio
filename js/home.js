
/* Put your best photos here, in order (image address or embedded image). Empty slots show as placeholders. */
var FEATURED=((window.CONTENT||{}).photos||{}).featured||[],COUNT=5;
(function(){var c=document.getElementById('car'),h='',n=Math.max(COUNT,FEATURED.length);
for(var k=0;k<n;k++){h+=FEATURED[k]?'<div class="cs"><img src="'+FEATURED[k]+'" alt="Featured photograph '+(k+1)+'"></div>':'<div class="cs cph"><svg class="i"><use href="#cam"/></svg><span><b>Featured photo '+(k<9?'0':'')+(k+1)+'</b><br>Add your best shot</span></div>'}
c.innerHTML=h;
function go(d){c.scrollBy({left:d*c.clientWidth,behavior:'smooth'})}
document.getElementById('cprev').onclick=function(){go(-1)};document.getElementById('cnext').onclick=function(){go(1)};
c.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)});})();
