import {modules,paths,projects} from './data.js';
export const fresh=()=>({schema:1,path:'explore',modules:{},projects:{}});
export function validateState(raw){
 if(!raw||raw.schema!==1||!paths.some(p=>p.id===raw.path)||!raw.modules||typeof raw.modules!=='object'||!raw.projects||typeof raw.projects!=='object')throw Error('不是有效的 AI Explorer 备份（schema 1）');
 const result=fresh(); result.path=raw.path;
 for(const m of modules){const x=raw.modules[m.id];if(!x)continue;if(!['learning','mastered'].includes(x.status)||typeof x.note!=='string'||x.note.length>20000)throw Error('模块记录格式错误');result.modules[m.id]={status:x.status,note:x.note,updated:typeof x.updated==='string'?x.updated:'',method:['quiz','self'].includes(x.method)?x.method:'practice'};}
 for(const p of projects){const x=raw.projects[p.id];if(!x)continue;if(!['active','submitted'].includes(x.status)||typeof x.work!=='string'||x.work.length>20000)throw Error('项目记录格式错误');result.projects[p.id]={status:x.status,work:x.work,updated:typeof x.updated==='string'?x.updated:''};}
 return result;
}
export const missing=(m,state)=>m.prereqs.filter(id=>state.modules[id]?.status!=='mastered');
export const progress=(ids,state)=>({done:ids.filter(id=>state.modules[id]?.status==='mastered').length,total:ids.length});
export function recommend(state){const path=paths.find(p=>p.id===state.path);return path.ids.map(id=>modules.find(m=>m.id===id)).find(m=>state.modules[m.id]?.status!=='mastered'&&!missing(m,state).length)||path.ids.map(id=>modules.find(m=>m.id===id)).find(m=>state.modules[m.id]?.status!=='mastered');}
