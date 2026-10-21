import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {resolve,dirname,extname} from 'node:path';
const root=resolve('.');
const manifest=JSON.parse(await readFile('knowledge.json','utf8'));
const release=JSON.parse(await readFile('release.json','utf8'));
assert.match(release.version,/^\d+\.\d+\.\d+(?:-[a-z0-9]+(?:\.[a-z0-9]+)*)?$/);
assert.equal(manifest.release,release.version,'The inventory must identify the working framework release');
assert.equal(manifest.version,1,'Inventory schema and framework release are independent');
assert.match(release.baseline.commit,/^[0-9a-f]{40}$/);
assert.ok(['development','candidate','stable'].includes(release.status));
if(release.status==='stable'){
 assert.equal(release.version,release.target);
 assert.doesNotMatch(release.version,/-/);
 assert.equal(manifest.edition,release.version,'A final edition must align its editorial and release labels');
}else{
 assert.ok(release.version.startsWith(release.target+'-'));
 assert.match(release.version,release.status==='candidate'?/-rc\./:/-dev\./);
}
assert.equal(manifest.repository,'kolmeia-dataecosystems/kdv-framework');
assert.deepEqual(manifest.languages,['en','pt','es']);
assert.equal(new Set(manifest.documents.map(d=>d.path)).size,manifest.documents.length);
const slugs=manifest.documents.filter(d=>d.language==='en').map(d=>d.slug).sort();
for(const l of manifest.languages)assert.deepEqual(manifest.documents.filter(d=>d.language===l).map(d=>d.slug).sort(),slugs);
for(const d of manifest.documents){
 assert.match(d.slug,/^[a-z][a-z0-9-]+$/);assert.equal(d.path,`docs/${d.language}/${d.slug}.md`);assert.ok(d.title&&d.description&&d.group);
 const md=await readFile(d.path,'utf8');assert.ok(md.startsWith('# '+d.title+'\n'));assert.ok(md.length>900,`${d.path} needs substantive content`);assert.ok(md.includes('CC BY 4.0'));
 assert.doesNotMatch(md,/<script\b|javascript:/i);
 for(const [,target] of md.matchAll(/\]\(([^)]+)\)/g)){
  if(/^(https?:|mailto:|#)/.test(target))continue;
  const f=resolve(dirname(resolve(d.path)),target.split('#')[0]);assert.ok(f.startsWith(root+'/'),target);await stat(f);
 }
}
for(const p of [...manifest.assets,...manifest.templates]){
 assert.ok(!p.includes('..')&&!p.startsWith('/'));const s=await readFile(p,'utf8');
 if(extname(p)==='.svg')assert.doesNotMatch(s,/<script\b|foreignObject|\son[a-z]+\s*=|\shref\s*=/i);
 if(extname(p)==='.md')assert.ok(s.includes('CC BY 4.0'));
}
assert.ok((await readFile('.github/CODEOWNERS','utf8')).includes('* @ismael-lab'));
const protection=JSON.parse(await readFile('governance/main-protection.json','utf8'));
assert.equal(protection.required_pull_request_reviews.require_code_owner_reviews,true);assert.equal(protection.enforce_admins,true);assert.deepEqual(protection.restrictions.users,['ismael-lab']);
console.log(`Validated ${manifest.documents.length} guides, ${manifest.templates.length} templates, ${manifest.assets.length} diagrams and guardian policy.`);
