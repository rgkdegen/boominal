// Exports the terminal animation to MP4 (1080x1350, 30fps, 30s).
// usage: node scripts/render.js out.mp4 [audio.mp3]
const {chromium}=require('playwright');const {spawn}=require('child_process');const path=require('path');
(async()=>{const out=process.argv[2]||'boominal.mp4',audio=process.argv[3];
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
await p.goto('file://'+path.resolve(__dirname,'../terminal/index.html')+'?render');await p.waitForFunction('window.READY');
const args=['-y','-v','error','-f','image2pipe','-framerate','30','-i','-'];
if(audio)args.push('-i',audio,'-map','0:v','-map','1:a','-c:a','aac','-b:a','192k','-shortest');
args.push('-c:v','libx264','-preset','veryfast','-crf','17','-pix_fmt','yuv420p','-movflags','+faststart',out);
const ff=spawn('ffmpeg',args,{stdio:['pipe','inherit','inherit']});
for(let f=0;f<900;f++){await p.evaluate(t=>render(t),f/30);const buf=await p.screenshot({type:'png'});
 if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));}
ff.stdin.end();await new Promise(r=>ff.on('close',r));await b.close();console.log('saved',out)})();
