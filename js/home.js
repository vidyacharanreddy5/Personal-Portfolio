
/* Put your best photos here, in order (image address or embedded image). Empty slots show as placeholders. */
var FEATURED=((window.CONTENT||{}).photos||{}).featured||[],COUNT=5;
(function(){var c=document.getElementById('car'),h='',n=Math.max(COUNT,FEATURED.length);
for(var k=0;k<n;k++){h+=FEATURED[k]?'<div class="cs"><img src="'+FEATURED[k]+'" alt="Featured photograph '+(k+1)+'"></div>':'<div class="cs cph"><svg class="i"><use href="#cam"/></svg><span><b>Featured photo '+(k<9?'0':'')+(k+1)+'</b><br>Add your best shot</span></div>'}
c.innerHTML=h;
var activeSlide=-1,scrollFrame=0;
function popSlide(index){
 var slides=c.querySelectorAll('.cs');
 if(!slides.length)return;
 index=Math.max(0,Math.min(slides.length-1,index));
 if(index===activeSlide)return;
 activeSlide=index;
 var img=slides[index].querySelector('img');
 if(!img)return;
 img.classList.remove('carousel-pop');
 void img.offsetWidth;
 img.classList.add('carousel-pop');
}
function nearestSlide(){
 var slides=c.querySelectorAll('.cs'),center=c.getBoundingClientRect().left+c.clientWidth/2,best=Infinity,index=0;
 for(var i=0;i<slides.length;i++){var rect=slides[i].getBoundingClientRect(),distance=Math.abs(rect.left+rect.width/2-center);if(distance<best){best=distance;index=i}}
 popSlide(index);
}
function go(d){c.scrollBy({left:d*c.clientWidth,behavior:'smooth'})}
 c.addEventListener('scroll',function(){if(scrollFrame)cancelAnimationFrame(scrollFrame);scrollFrame=requestAnimationFrame(nearestSlide)},{passive:true});
 nearestSlide();
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
  var current=-1,scrollFrame=0;
  function update(index){
    var next=Math.max(0,Math.min(slides.length-1,index)),changed=next!==current;
    current=next;
    if(changed){var img=slides[current].querySelector('img');img.classList.remove('carousel-pop');void img.offsetWidth;img.classList.add('carousel-pop')}
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

(function(){
  if(!('IntersectionObserver' in window)||!window.matchMedia||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var targets=document.querySelectorAll('#experience .job,#experience .sr,#skills .sr,#skills .software-item,#projects .p,#clients .cc,#poseidon .ps,#poseidon .drive-video,#poseidon .poseidon-thumb,#poseidon .linkedin-embed,#photography .pcat,#photography .carw,.edu>div,.cta .ci');
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    });
  },{threshold:.12,rootMargin:'0px 0px -36px 0px'});
  targets.forEach(function(target){
    var index=Array.prototype.indexOf.call(target.parentNode.children,target);
    target.style.setProperty('--reveal-delay',Math.min(index%4,3)*70+'ms');
    target.classList.add('scroll-reveal');
    observer.observe(target);
  });
})();
(function(){
  var bar=document.createElement('div');
  bar.className='page-progress';
  bar.setAttribute('aria-hidden','true');
  document.body.appendChild(bar);
  var scheduled=false;
  function update(){
    var scrollable=document.documentElement.scrollHeight-window.innerHeight;
    var ratio=scrollable>0?window.scrollY/scrollable:0;
    bar.style.transform='scaleX('+Math.max(0,Math.min(1,ratio))+')';
    scheduled=false;
  }
  window.addEventListener('scroll',function(){if(!scheduled){scheduled=true;requestAnimationFrame(update)}},{passive:true});
  window.addEventListener('resize',update,{passive:true});
  update();
})();
(function(){
  if(!('IntersectionObserver' in window)||!window.matchMedia||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var headings=document.querySelectorAll('#top h1,#top .role,#top .tag,section>h2,#projects .pb h3,#clients h3,#experience h3,#skills h3,#poseidon h3,.edu h3');
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('text-visible');observer.unobserve(entry.target)}});
  },{threshold:.35,rootMargin:'0px 0px -24px 0px'});
  headings.forEach(function(heading){
    if(heading.dataset.textMotion)return;
    heading.dataset.textMotion='true';
    var walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT),nodes=[],node,wordIndex=0;
    while((node=walker.nextNode()))if(node.nodeValue.trim())nodes.push(node);
    nodes.forEach(function(textNode){
      var fragment=document.createDocumentFragment();
      textNode.nodeValue.split(/(\s+)/).forEach(function(part){
        if(!part)return;
        if(/^\s+$/.test(part)){fragment.appendChild(document.createTextNode(part));return}
        var word=document.createElement('span');
        word.className='text-word';
        word.style.setProperty('--word-index',wordIndex++);
        word.textContent=part;
        fragment.appendChild(word);
      });
      textNode.parentNode.replaceChild(fragment,textNode);
    });
    heading.classList.add('text-reveal');
    observer.observe(heading);
  });
})();
(function(){
  if(!('IntersectionObserver' in window)||!window.matchMedia||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var copyTargets=document.querySelectorAll('nav ul a,section p,section li,section time,section .org,section .go,section .pb a,section .bn,section .th>span,footer');
  var copyObserver=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('copy-visible');copyObserver.unobserve(entry.target)}});
  },{threshold:.12,rootMargin:'0px 0px -20px 0px'});
  copyTargets.forEach(function(target){
    if(target.classList.contains('text-word'))return;
    var index=Array.prototype.indexOf.call(target.parentNode.children,target);
    target.style.setProperty('--copy-delay',Math.min(index,4)*55+'ms');
    target.classList.add('copy-reveal');
    copyObserver.observe(target);
  });
  var timeline=document.querySelector('#experience .tl');
  if(timeline){
    var timelineObserver=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){if(entry.isIntersecting){timeline.classList.add('timeline-visible');timelineObserver.disconnect()}});
    },{threshold:.18});
    timelineObserver.observe(timeline);
  }
})();
