function rng(s){return()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const fmt=n=>Math.round(n).toLocaleString('en-US');
const NS='http://www.w3.org/2000/svg';

// pumpkin svg
function pumpkinSVG(w,h,glow=1,id=''){return `<svg viewBox="0 0 40 36" width="${w}" height="${h}">
 <defs><radialGradient id="pg${id}" cx="50%" cy="55%" r="60%"><stop offset="0" stop-color="#ffb347"/><stop offset="1" stop-color="#e2560c"/></radialGradient></defs>
 <path d="M19,6 C19,2 21,1 24,0" stroke="#5bbf3a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
 <ellipse cx="11" cy="21" rx="9" ry="13" fill="url(#pg${id})"/><ellipse cx="29" cy="21" rx="9" ry="13" fill="url(#pg${id})"/>
 <ellipse cx="20" cy="21" rx="9" ry="14" fill="url(#pg${id})" stroke="#c94a0a" stroke-width=".6"/>
 <g fill="#2b0d00" class="pface"><path d="M10,17 L15,13 L16,19 Z"/><path d="M30,17 L25,13 L24,19 Z"/><path d="M20,19 L22,23 L18,23 Z"/>
 <path d="M9,25 Q20,33 31,25 L28,26 L26,24 L24,27 L21,25 L19,28 L16,25 L14,27 L12,25 Z"/></g>
 <g fill="#ffe27a" opacity="${glow}" class="pglow"><path d="M11,17 L14.5,14.5 L15,18 Z"/><path d="M29,17 L25.5,14.5 L25,18 Z"/></g>
</svg>`}

// cat
function catSVG(id){return `<svg viewBox="0 0 220 290" width="100%" height="100%" style="overflow:visible">
<defs>
 <radialGradient id="eyeg${id}" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#fff6c0"/><stop offset=".45" stop-color="var(--ec)"/><stop offset="1" stop-color="var(--ec2)"/></radialGradient>
 <filter id="cg${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 <filter id="sg${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<g id="tail${id}"><path d="M150,262 C200,252 208,196 188,164 C180,150 190,136 200,142" fill="none" stroke="#ff7a1a" stroke-width="13" stroke-linecap="round" filter="url(#sg${id})"/>
<path d="M150,262 C200,252 208,196 188,164 C180,150 190,136 200,142" fill="none" stroke="#07050a" stroke-width="7.5" stroke-linecap="round"/></g>
<path d="M58,274 C50,226 62,184 110,178 C158,184 170,226 162,274 Z" fill="#07050a" stroke="#ff7a1a" stroke-width="3" filter="url(#sg${id})"/>
<path d="M92,196 L110,226 L128,196" fill="none" stroke="#a66bff" stroke-width="2" opacity=".55"/>
<g id="head${id}">
 <path d="M52,132 L44,58 L92,92 Z" fill="#07050a" stroke="#ff7a1a" stroke-width="3" stroke-linejoin="round" filter="url(#sg${id})"/>
 <path d="M168,132 L176,58 L128,92 Z" fill="#07050a" stroke="#ff7a1a" stroke-width="3" stroke-linejoin="round" filter="url(#sg${id})"/>
 <path d="M56,118 L52,74 L82,96 Z" fill="#3a0f2a"/><path d="M164,118 L168,74 L138,96 Z" fill="#3a0f2a"/>
 <ellipse cx="110" cy="132" rx="64" ry="52" fill="#07050a" stroke="#ff7a1a" stroke-width="3" filter="url(#sg${id})"/>
 <!-- hat -->
 <g transform="rotate(-7 110 84)">
  <path d="M74,82 C84,60 94,34 110,14 C118,4 134,0 150,12 C136,12 128,20 126,32 C130,50 140,68 148,82 Z" fill="#1c0f2c" stroke="#b07cff" stroke-width="2.5" stroke-linejoin="round" filter="url(#sg${id})"/>
  <path d="M110,40 C114,30 118,24 124,20" stroke="#b07cff" stroke-width="1" opacity=".5" fill="none"/>
  <path d="M77,74 C98,66 124,66 144,74 L147,83 C124,75 98,75 74,83 Z" fill="#ff7a1a"/>
  <rect x="103" y="69" width="15" height="12" rx="1.5" fill="none" stroke="#7cff4f" stroke-width="2.2" filter="url(#sg${id})"/>
  <ellipse cx="110" cy="86" rx="72" ry="12" fill="#1c0f2c" stroke="#b07cff" stroke-width="2.5" filter="url(#sg${id})"/>
  <circle cx="150" cy="12" r="3.5" fill="#7cff4f" filter="url(#sg${id})"/>
 </g>
 <!-- eyes -->
 <g id="eyes${id}" filter="url(#cg${id})">
  <g class="e-open"><ellipse cx="86" cy="134" rx="13" ry="15" fill="url(#eyeg${id})"/><ellipse cx="134" cy="134" rx="13" ry="15" fill="url(#eyeg${id})"/>
   <ellipse class="pup" cx="86" cy="135" rx="3" ry="11" fill="#120400"/><ellipse class="pup" cx="134" cy="135" rx="3" ry="11" fill="#120400"/></g>
  <g class="e-happy" style="display:none"><path d="M73,138 Q86,118 99,138" stroke="#7cff4f" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M121,138 Q134,118 147,138" stroke="#7cff4f" stroke-width="5.5" fill="none" stroke-linecap="round"/></g>
 </g>
 <g class="e-brow" style="display:none"><path d="M70,114 L100,124" stroke="#ff3b5c" stroke-width="4.5" stroke-linecap="round"/><path d="M150,114 L120,124" stroke="#ff3b5c" stroke-width="4.5" stroke-linecap="round"/></g>
 <path d="M104,152 L116,152 L110,159 Z" fill="#ff5f8f"/>
 <path d="M110,159 Q104,167 96,162 M110,159 Q116,167 124,162" stroke="#ff7a1a" stroke-width="2" fill="none" stroke-linecap="round"/>
 <path d="M101,163 L104,172 L107,164.5 Z M113,164.5 L116,172 L119,163 Z" fill="#fff"/>
 <g stroke="#ff9a4a" stroke-width="1" opacity=".75"><path d="M62,150 L28,143"/><path d="M62,157 L28,161"/><path d="M158,150 L192,143"/><path d="M158,157 L192,161"/></g>
</g>
<path d="M70,186 Q110,202 150,186" stroke="#ff7a1a" stroke-width="5" fill="none" stroke-linecap="round" filter="url(#sg${id})"/>
<g transform="translate(99,190) scale(.55)">${pumpkinSVG(40,36,1,'c'+id).replace(/^<svg[^>]*>|<\/svg>$/g,'')}</g>
<ellipse cx="86" cy="274" rx="18" ry="10" fill="#07050a" stroke="#ff7a1a" stroke-width="3"/>
<ellipse cx="134" cy="274" rx="18" ry="10" fill="#07050a" stroke="#ff7a1a" stroke-width="3"/>
</svg>`}

function web(x,y,sx,sy,sz,op){let d='';const n=6;for(let i=0;i<=n;i++){const a=i/n*Math.PI/2;d+=`M0,0 L${Math.cos(a)*sz},${Math.sin(a)*sz} `}
 for(let r=1;r<=4;r++){const rr=sz*r/4.4;let p='';for(let i=0;i<=n;i++){const a=i/n*Math.PI/2;const px=Math.cos(a)*rr,py=Math.sin(a)*rr;
  if(i==0)p+=`M${px},${py} `;else{const am=(i-.5)/n*Math.PI/2;const sag=rr*.82;p+=`Q${Math.cos(am)*sag},${Math.sin(am)*sag} ${px},${py} `}}d+=p}
 return `<path transform="translate(${x},${y}) scale(${sx},${sy})" d="${d}" fill="none" stroke="#d8cfe6" stroke-opacity="${op}" stroke-width="${0.9/Math.abs(sx)}"/>`}
const BATP='M0,0 C-4,-6 -10,-8 -18,-6 C-14,-3 -14,1 -16,4 C-11,2 -8,3 -6,6 C-4,3 -2,2 0,4 C2,2 4,3 6,6 C8,3 11,2 16,4 C14,1 14,-3 18,-6 C10,-8 4,-6 0,0 Z';

function batG(x,y,s,flap,op){const fy=.35+.65*Math.abs(Math.sin(flap));
 return `<g transform="translate(${x},${y}) scale(${s},${s*fy})" opacity="${op}"><path d="${BATP}" fill="#0a0610" stroke="#a66bff" stroke-width="1.1"/></g>
  <g transform="translate(${x},${y}) scale(${s})" opacity="${op}"><circle cx="-1.4" cy="-.8" r=".9" fill="#ff3b5c"/><circle cx="1.4" cy="-.8" r=".9" fill="#ff3b5c"/></g>`}
