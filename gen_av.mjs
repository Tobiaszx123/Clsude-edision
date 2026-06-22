// gen_av.mjs — genera las ventanas de AvatarLayer por video con VARIEDAD:
// corner (4 esquinas) + media pantalla (right/left sobre b-roll) + 1 full + OCULTO
// en los cutaways del presentador (imágenes el_*). Emite src/VideoEdit/av_<slug>.gen.ts
import fs from "fs";
const VIDEOS = ["prueba1"];
const isEl = (b) => /img\/el_/.test(b.src||"") || /img\/el_/.test(b.image||"");
const VIS = new Set(["raw","stat","quote","chips"]);
const rawCycle = [["cornerTR",1.0],["right",1.0],["cornerBL",1.05],["left",1.0],["cornerTL",0.95],["cornerBR",1.05]];
const cornerCycle = [["cornerTR",1.0],["cornerBL",1.05],["cornerTL",0.95],["cornerBR",1.0],["cornerTR",0.9]];
for (const v of VIDEOS) {
  const bs = JSON.parse(fs.readFileSync("beatsheet/"+v+".json","utf8"));
  const beats = [...bs.beats].sort((a,b)=>a.start-b.start);
  // 1 full: el quote de mayor duración (momento personal hablándole a cámara)
  let fullId=null,maxd=-1; for(const b of beats) if(b.kind==="quote"&&!isEl(b)&&b.dur>maxd){maxd=b.dur;fullId=b.id;}
  let ri=0,ci=0,prev=null;const out=[];
  const push=(start,mode,scale)=>{ if(mode===prev&&mode==="hidden")return; out.push(scale!=null&&mode!=="hidden"&&mode!=="full"&&mode!=="right"&&mode!=="left"?`  { start: ${Math.round(start)}, mode: "${mode}", scale: ${scale} },`:`  { start: ${Math.round(start)}, mode: "${mode}" },`); prev=mode; };
  for (const b of beats) {
    let mode="hidden",scale=null;
    if (isEl(b)) mode="hidden";
    else if (b.id===fullId) mode="full";
    else if (b.kind==="raw"){ const [m,s]=rawCycle[ri++%rawCycle.length]; mode=m; scale=s; }
    else if (VIS.has(b.kind)){ const [m,s]=cornerCycle[ci++%cornerCycle.length]; mode=m; scale=s; }
    else mode="hidden";
    if (mode===prev && mode!=="hidden") continue; // evita repetir modo seguido
    push(b.start,mode,scale);
  }
  if(!out[0].includes("start: 0,")) out.unshift(`  { start: 0, mode: "hidden" },`);
  const body = `// av_${v}.gen.ts — GENERADO por gen_av.mjs. No editar a mano.\nimport { AvatarWindow } from "./scenes/AvatarLayer";\nexport const AV: AvatarWindow[] = [\n${out.join("\n")}\n];\n`;
  fs.writeFileSync("src/VideoEdit/av_"+v+".gen.ts", body);
  const vis=out.filter(l=>!l.includes("hidden")).length;
  console.log(v,"ventanas:",out.length,"(visibles "+vis+", full:"+(out.some(l=>l.includes('"full"'))?"sí":"no")+", split:"+out.filter(l=>/"right"|"left"/.test(l)).length+")");
}
