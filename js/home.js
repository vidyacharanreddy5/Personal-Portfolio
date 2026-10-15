
/* Put your best photos here, in order (image address or embedded image). Empty slots show as placeholders. */
var FEATURED=((window.CONTENT||{}).photos||{}).featured||[],COUNT=5;
(function(){var c=document.getElementById('car'),h='',n=Math.max(COUNT,FEATURED.length);
for(var k=0;k<n;k++){h+=FEATURED[k]?'<div class="cs"><img src="'+FEATURED[k]+'" alt="Featured photograph '+(k+1)+'"></div>':'<div class="cs cph"><svg class="i"><use href="#cam"/></svg><span><b>Featured photo '+(k<9?'0':'')+(k+1)+'</b><br>Add your best shot</span></div>'}
c.innerHTML=h;
function go(d){var slides=c.querySelectorAll('.cs'),center=c.getBoundingClientRect().left+c.clientWidth/2,current=0,best=Infinity;for(var i=0;i<slides.length;i++){var rect=slides[i].getBoundingClientRect(),distance=Math.abs(rect.left+rect.width/2-center);if(distance<best){best=distance;current=i}}current=Math.max(0,Math.min(slides.length-1,current+d));var slide=slides[current],left=slide.getBoundingClientRect().left-c.getBoundingClientRect().left+c.scrollLeft-(c.clientWidth-slide.clientWidth)/2;c.scrollTo({left:left,behavior:'smooth'})}
document.getElementById('cprev').onclick=function(){go(-1)};document.getElementById('cnext').onclick=function(){go(1)};
c.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)});})();
