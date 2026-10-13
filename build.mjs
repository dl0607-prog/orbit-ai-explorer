import {cp,mkdir,rm} from 'node:fs/promises';
const root=new URL('.',import.meta.url),dist=new URL('dist/',root);
await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
for(const name of ['index.html','style.css','layout.css','app.js','core.js','data.js','guides.js','globe.js','assets'])await cp(new URL(name,root),new URL(name,dist),{recursive:true});
console.log('Orbit static site prepared in dist/');
