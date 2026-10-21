(function(){
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var isHome=!!document.getElementById('hero-showcase');
  var selector='.slot img,.poster-card img,.poster img,.car .cs img';
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('media-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -24px 0px'});
  function scan(root){
    if(root.matches&&root.matches(selector))observe(root);
    if(root.querySelectorAll)root.querySelectorAll(selector).forEach(observe);
  }
  function observe(img){
    if(img.classList.contains('media-reveal'))return;
    img.classList.add('media-reveal');
    observer.observe(img);
  }
  scan(document);
  new MutationObserver(function(records){records.forEach(function(record){record.addedNodes.forEach(function(node){if(node.nodeType===1)scan(node)})})}).observe(document.body,{childList:true,subtree:true});

  if(isHome)return;

  var revealSelector='.sec,.cat,.grp,.poster-card,.carw,.cta .ci,.chips li,.poster';
  var revealObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
  function reveal(root){
    if(root.matches&&root.matches(revealSelector))observeReveal(root);
    if(root.querySelectorAll)root.querySelectorAll(revealSelector).forEach(observeReveal);
  }
  function observeReveal(el){if(el.classList.contains('scroll-reveal'))return;var siblings=el.parentNode&&el.parentNode.children,index=siblings?Array.prototype.indexOf.call(siblings,el):0;el.style.setProperty('--reveal-delay',Math.min(index%4,3)*65+'ms');el.classList.add('scroll-reveal');revealObserver.observe(el)}
  reveal(document);
  var motionMutations=new MutationObserver(function(records){records.forEach(function(record){record.addedNodes.forEach(function(node){if(node.nodeType===1)reveal(node)})})});
  motionMutations.observe(document.body,{childList:true,subtree:true});

  var textObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('text-visible');textObserver.unobserve(entry.target)}})},{threshold:.25,rootMargin:'0px 0px -24px 0px'});
  document.querySelectorAll('.hero h1,.sec h2,.cat>h2,.grp h3,.cta h2').forEach(function(heading){
    if(heading.dataset.textMotion)return;
    heading.dataset.textMotion='true';
    var walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT),nodes=[],node,wordIndex=0;
    while((node=walker.nextNode()))if(node.nodeValue.trim())nodes.push(node);
    nodes.forEach(function(textNode){var fragment=document.createDocumentFragment();textNode.nodeValue.split(/(\s+)/).forEach(function(part){if(!part)return;if(/^\s+$/.test(part)){fragment.appendChild(document.createTextNode(part));return}var word=document.createElement('span');word.className='text-word';word.style.setProperty('--word-index',wordIndex++);word.textContent=part;fragment.appendChild(word)});textNode.parentNode.replaceChild(fragment,textNode)});
    heading.classList.add('text-reveal');textObserver.observe(heading);
  });

  var copyObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('copy-visible');copyObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.hero .who,.hero .lead,.hero .chips,.note,.intro,.grp .btns,nav .pill,footer').forEach(function(el,index){el.style.setProperty('--copy-delay',Math.min(index%4,3)*65+'ms');el.classList.add('copy-reveal');copyObserver.observe(el)});

  if(!isHome){
    var bars=document.createElement('div');bars.className='page-progress';bars.setAttribute('aria-hidden','true');document.body.appendChild(bars);
    var scheduled=false;function updateProgress(){var max=document.documentElement.scrollHeight-window.innerHeight;bars.style.transform='scaleX('+(max>0?Math.min(1,window.scrollY/max):0)+')';scheduled=false}
    window.addEventListener('scroll',function(){if(!scheduled){scheduled=true;requestAnimationFrame(updateProgress)}},{passive:true});window.addEventListener('resize',updateProgress,{passive:true});updateProgress();
  }

  if(!isHome){
    document.querySelectorAll('.car').forEach(function(car){var current=-1,frame=0;function updateSlide(){var slides=car.querySelectorAll('.cs'),center=car.getBoundingClientRect().left+car.clientWidth/2,best=Infinity,index=0;for(var i=0;i<slides.length;i++){var rect=slides[i].getBoundingClientRect(),distance=Math.abs(rect.left+rect.width/2-center);if(distance<best){best=distance;index=i}}if(index===current)return;current=index;var img=slides[index]&&slides[index].querySelector('img');if(img){img.classList.remove('carousel-pop');void img.offsetWidth;img.classList.add('carousel-pop')}}car.addEventListener('scroll',function(){if(frame)cancelAnimationFrame(frame);frame=requestAnimationFrame(updateSlide)},{passive:true});updateSlide()});
  }
})();
