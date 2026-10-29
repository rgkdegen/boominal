// Renders assets/banner.png (1500x500) using the terminal's own cat / pumpkin / bat art.
const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1500,height:500}});
await p.goto('file://'+path.resolve(__dirname,'../terminal/index.html')+'?render');await p.waitForFunction('window.READY');
await p.evaluate(()=>{
 document.documentElement.style.cssText='width:1500px;height:500px';document.body.style.cssText='width:1500px;height:500px;overflow:hidden;background:#09060d';
 const bats=[[620,70,1.9,.3],[830,60,1.2,1.1],[1440,60,1.6,2.0],[1010,40,1.1,.7],[860,445,1.3,1.6],[560,430,1.0,2.4]].map(([x,y,s,f])=>batG(x,y,s,f,1)).join('');
 document.body.innerHTML=`
 <div style="position:absolute;inset:0;background:
   radial-gradient(520px 380px at 1150px 250px,rgba(255,122,26,.16),transparent 70%),
   radial-gradient(700px 500px at 0% 100%,rgba(120,60,200,.18),transparent 70%),#09060d"></div>
 <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:24px 24px"></div>
 <div style="position:absolute;left:990px;top:70px;width:330px;height:330px;border-radius:50%;background:radial-gradient(circle at 42% 40%,rgba(255,220,160,.30),rgba(255,140,40,.12) 55%,rgba(255,122,26,0) 72%)"></div>
 <svg width="1500" height="500" style="position:absolute;left:0;top:0">${web(1500,0,-1,1,120,.3)+web(0,0,1,1,90,.22)+web(0,500,1,-1,80,.18)}${bats}</svg>
 <div style="position:absolute;left:64px;top:46px;font:700 15px JB;color:#ff9a2e;letter-spacing:3px">PUMP.FUN · RUG FILTER PIPELINE</div>
 <div style="position:absolute;left:58px;top:70px;font:900 128px RB;color:#ff7a1a;letter-spacing:2px;text-shadow:0 0 34px rgba(255,122,26,.75),0 0 4px #ffc080">BOOMINAL</div>
 <div style="position:absolute;left:66px;top:222px;font:50px CR;color:#7cff4f;letter-spacing:5px;text-shadow:0 0 18px rgba(124,255,79,.7)">HALLOWEEN EDITION</div>
 <div style="position:absolute;left:66px;top:292px;font:700 19px JB;color:#efe4d4">Boo the witch cat runs my pump.fun terminal</div>
 <div style="position:absolute;left:66px;top:336px;display:flex;gap:8px;font:700 13px JB">
  ${['SCAN','ASK','CAT','GATE 0.85','ACT'].map((s,i)=>`<span style="padding:6px 12px;border:1px solid ${['#ff9a2e','#ff6a1a','#a66bff','#ff3b5c','#7cff4f'][i]};border-radius:6px;color:${['#ff9a2e','#ff8a40','#c29bff','#ff7088','#7cff4f'][i]};background:rgba(255,255,255,.03)">${s}</span>${i<4?'<span style="color:#54485f;align-self:center">→</span>':''}`).join('')}
 </div>
 <div style="position:absolute;left:66px;top:394px;font:700 16px JB;color:#e9e0d2">31,031 scanned &nbsp;·&nbsp; <span style="color:#ff5a74">8 tricks swiped</span> &nbsp;·&nbsp; <span style="color:#7cff4f">4 treats</span> &nbsp;·&nbsp; <span style="color:#7cff4f">+6.66 SOL</span> &nbsp;·&nbsp; 0 rugs held</div>
 <div style="position:absolute;left:66px;top:440px;font:700 14px JB;color:#ffa040">built by RUGIKK <span style="color:#7d7088;font-weight:400">&nbsp;· @rgk_degen · simulated run</span></div>
 <div style="position:absolute;left:1036px;top:58px;width:238px;height:306px">${catSVG('b')}</div>
 <div style="position:absolute;left:980px;top:362px;width:360px;height:3px;background:#ff7a1a;box-shadow:0 0 14px #ff7a1a"></div>
 <div style="position:absolute;left:986px;top:312px;filter:drop-shadow(0 0 12px rgba(255,140,40,.9))">${pumpkinSVG(56,50,1,'b1')}</div>
 <div style="position:absolute;left:1282px;top:322px;filter:drop-shadow(0 0 10px rgba(255,140,40,.9))">${pumpkinSVG(44,40,1,'b2')}</div>
 <div style="position:absolute;left:870px;top:180px;transform:rotate(-16deg);padding:5px 14px;border:3px solid #ff4d7a;border-radius:8px;color:#ff4d7a;font:800 24px JB;letter-spacing:2px;text-align:center;line-height:22px;box-shadow:0 0 18px rgba(255,77,122,.7);text-shadow:0 0 8px #ff4d7a;background:rgba(40,0,15,.6)">TRICK<div style="font-size:10px;letter-spacing:.3px">sell tax 99%</div></div>
 <div style="position:absolute;left:1330px;top:236px;transform:rotate(12deg);padding:5px 14px;border:3px solid #7cff4f;border-radius:8px;color:#7cff4f;font:800 22px JB;letter-spacing:2px;text-align:center;line-height:22px;box-shadow:0 0 18px rgba(124,255,79,.6);text-shadow:0 0 8px #7cff4f;background:rgba(5,30,5,.6)">TREAT<div style="font-size:10px;letter-spacing:.3px">ape 0.5 SOL</div></div>
 <div style="position:absolute;left:1240px;top:92px;padding:3px 10px;border:1.5px solid #ff3b5c;border-radius:7px;color:#ff3b5c;font:800 15px JB;box-shadow:0 0 12px rgba(255,59,92,.6);background:rgba(20,5,10,.85)">trick.</div>
 `;
 setCat('b','trick',0.4);
});
await p.waitForTimeout(200);await p.screenshot({path:path.resolve(__dirname,'../assets/banner.png')});await b.close();})();
