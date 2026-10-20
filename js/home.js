
/* Put your best photos here, in order (image address or embedded image). Empty slots show as placeholders. */
var FEATURED=((window.CONTENT||{}).photos||{}).featured||[],COUNT=5;
(function(){var c=document.getElementById('car'),h='',n=Math.max(COUNT,FEATURED.length);
for(var k=0;k<n;k++){h+=FEATURED[k]?'<div class="cs"><img src="'+FEATURED[k]+'" alt="Featured photograph '+(k+1)+'"></div>':'<div class="cs cph"><svg class="i"><use href="#cam"/></svg><span><b>Featured photo '+(k<9?'0':'')+(k+1)+'</b><br>Add your best shot</span></div>'}
c.innerHTML=h;
function go(d){c.scrollBy({left:d*c.clientWidth,behavior:'smooth'})}
document.getElementById('cprev').onclick=function(){go(-1)};document.getElementById('cnext').onclick=function(){go(1)};
c.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)});})();
document.querySelectorAll('#projects .th > img').forEach(function(img){
  img.parentElement.style.setProperty('--thumb-background', 'url("' + img.src.replace(/"/g, '%22') + '")');
});
document.querySelectorAll('#clients .ct > img').forEach(function(img){
  img.parentElement.style.setProperty('--thumb-background', 'url("' + img.src.replace(/"/g, '%22') + '")');
});

(function(){
  var showcase=document.getElementById('hero-showcase');
  if(!showcase)return;
  var track=document.getElementById('showcase-track');
  var slides=Array.prototype.slice.call(track.querySelectorAll('.showcase-slide'));
  var dots=Array.prototype.slice.call(showcase.querySelectorAll('.showcase-dots button'));
  var currentLabel=document.getElementById('showcase-current');
  var progress=document.getElementById('showcase-progress');
  var current=0,scrollFrame=0;
  function update(index){
    current=Math.max(0,Math.min(slides.length-1,index));
    currentLabel.textContent=String(current+1).padStart(2,'0');
    progress.style.transform='scaleX('+(current+1)/slides.length+')';
    dots.forEach(function(dot,i){if(i===current)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current')});
  }
  function go(index){
    index=(index+slides.length)%slides.length;
    track.scrollTo({left:index*track.clientWidth,behavior:'smooth'});
    update(index);
  }
  slides.forEach(function(slide){
    var img=slide.querySelector('img');
    slide.style.setProperty('--showcase-image','url("'+img.src.replace(/"/g,'%22')+'")');
  });
  document.getElementById('showcase-prev').addEventListener('click',function(){go(current-1)});
  document.getElementById('showcase-next').addEventListener('click',function(){go(current+1)});
  dots.forEach(function(dot,i){dot.addEventListener('click',function(){go(i)})});
  track.addEventListener('scroll',function(){
    if(scrollFrame)cancelAnimationFrame(scrollFrame);
    scrollFrame=requestAnimationFrame(function(){update(Math.round(track.scrollLeft/track.clientWidth))});
  },{passive:true});
  showcase.addEventListener('keydown',function(event){
    if(event.key==='ArrowLeft'){event.preventDefault();go(current-1)}
    if(event.key==='ArrowRight'){event.preventDefault();go(current+1)}
  });
  update(0);
})();
