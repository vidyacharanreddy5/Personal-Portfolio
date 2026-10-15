
/* To fill a slot, put an image address (or embedded image) in that group's imgs list, in order.
   Empty slots show as placeholders. Change count to add or remove placeholders. */
var CATS=[
{id:'event',icon:'cal',title:'Event photography',intro:'Photography for corporate events, conferences, campus programmes and cultural gatherings.',groups:[
 {id:'eventPhotos',title:'',note:'A selection of event photography across campus programmes, conferences and exhibitions.',count:0,imgs:[]}
]},
{id:'nature',icon:'leaf',title:'Nature photography',intro:'',groups:[{id:'nature',title:'',note:'',todo:'Add a one-line note on where and when these were shot',count:12,imgs:[]}]},
{id:'street',icon:'street',title:'Street photography',intro:'',groups:[{id:'street',title:'',note:'',todo:'Add a one-line note on where and when these were shot',count:12,imgs:[]}]},
{id:'other',icon:'star',title:'Other photography works',intro:'',groups:[{id:'other',title:'',note:'',todo:'Add a one-line note, for example portraits or photojournalism',count:12,imgs:[]}]}
];
var PH=((window.CONTENT||{}).photos)||{};CATS.forEach(function(c){c.groups.forEach(function(g){if(PH[g.id])g.imgs=PH[g.id]})});
var R=['r1','r2','r3','r4','r2','r1','r3','r2','r4','r1','r2','r3'];
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')}
var h='';
CATS.forEach(function(c){
 h+='<section class="cat" id="'+c.id+'"><h2><svg class="i"><use href="#'+c.icon+'"/></svg>'+c.title+'</h2>';
 if(c.intro)h+='<p class="intro">'+c.intro+'</p>';else h+='<div style="height:26px"></div>';
 c.groups.forEach(function(g){
  h+='<div class="grp">';
  if(g.title)h+='<h3>'+g.title+'</h3>';
  if(g.note)h+='<p class="note">'+g.note+'</p>';
  else if(g.todo)h+='<p class="note"><span class="todo">'+g.todo+'</span></p>';
  if(g.link)h+='<div class="btns"><a class="pill ghost" href="'+g.link.href+'" target="_blank" rel="noopener"><svg class="i"><use href="#book"/></svg>'+g.link.label+'</a></div>';
  h+='<div class="masonry">';
  var n=Math.max(g.count,g.imgs.length);
  for(var k=0;k<n;k++){
   var src=g.imgs[k];
   if(src)h+='<figure class="slot" style="margin-bottom:16px"><img src="'+esc(src)+'" alt="'+esc((g.title||c.title)+' photo '+(k+1))+'" loading="lazy"></figure>';
   else h+='<div class="slot ph '+R[k%R.length]+'"><svg class="i"><use href="#cam"/></svg><span><b>Photo '+(k+1<10?'0':'')+(k+1)+'</b><br>'+g.id+'</span></div>';
  }
  h+='</div></div>';
 });
 h+='</section>';
});
document.getElementById('gallery').innerHTML=h;
document.addEventListener('click',function(e){
 var im=e.target.closest&&e.target.closest('.slot img');
 if(im){var d=document.createElement('div');d.className='lb';d.innerHTML='<img alt="">';d.firstChild.src=im.src;d.onclick=function(){d.remove()};document.body.appendChild(d)}
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){var d=document.querySelector('.lb');if(d)d.remove()}});
