const fs=require('fs'),H=process.env.HOME;
const store={},nodes={};
function mk(id){return {id,_h:'',_t:'',classList:{cls:new Set(),
  add(c){this.cls.add(c)},remove(c){this.cls.delete(c)},toggle(c,v){v?this.cls.add(c):this.cls.delete(c)},contains(c){return this.cls.has(c)}},
  set innerHTML(v){this._h=String(v)}, get innerHTML(){return this._h},
  set textContent(v){this._t=String(v)}, get textContent(){return this._t},
  addEventListener(){}, removeEventListener(){},
  style:{}, value:''};}
global.document={getElementById(id){if(!nodes[id])nodes[id]=mk(id);return nodes[id]},
  querySelectorAll(sel){return (document._sel[sel]||[]).slice()},
  addEventListener(){}, activeElement:null};
global.document._sel={};
global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}};
const w={};global.window=w;
const R=p=>eval(fs.readFileSync(p,'utf8'));
R(H+'/proof-map/data/engine.js'.replace('if (typeof module','if (0&&typeof module'));
R(H+'/proof-map/data/niche-faceless.js');
R(H+'/proof-map/data/objections-faceless.js');
global.ProofMap=w.ProofMap; global.NICHES=w.NICHES;
global.OBJECTIONS=w.OBJECTIONS;
// 🔴 НЕ подставляем riskOf/objectionsFor в global: в браузере index.html обязан
// получить их деструккцией из ProofMap. Подмена здесь маскировала бы боевую ошибку
// ReferenceError — именно так вкладка «Пробелы» молча оставалась пустой.
const {objectionLoad} = w.ProofMap;   // тест сам её зовёт — импорт честный, из движка
const h=fs.readFileSync(H+'/proof-map/index.html','utf8');
eval(h.split('<script>')[1].split('</'+'script>')[0]);
let fail=0; const ok=(c,m)=>{console.log('  '+(c?'✅':'❌')+' '+m); if(!c)fail++;};
console.log('═══ ТЕСТ ЭКРАНА «ПРОБЕЛЫ» ═══');
ok(!!document.getElementById('tabMap')&&!!document.getElementById('tabGaps'),'две вкладки на месте');
const cards=(nodes.gaps.innerHTML.match(/class="gap"/g)||[]).length;
ok(cards>0, 'карточек пробелов: '+cards+' (счётчик в шапке: '+nodes.gapCount.textContent+')');
const risks=[...nodes.gaps.innerHTML.matchAll(/риск (\d+)/g)].map(m=>+m[1]);
ok(risks.every((r,i)=>i===0||risks[i-1]>=r), 'сортировка по риску убывает: '+risks.slice(0,6).join(','));
ok(nodes.gaps.innerHTML.includes('закрыть дыру'),'кнопка «закрыть дыру» есть');
ok(nodes.gaps.innerHTML.includes('возражение')||nodes.gaps.innerHTML.includes('Возражение'),'возражения показаны');
const before=nodes.stats.innerHTML.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
document.getElementById('in_e1').value='медианы по 40 каналам 2024-2026, n=40';
addSrc('e1');
const after=nodes.stats.innerHTML.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
ok(JSON.parse(store['proofmap.sources.v1']).e1.length===1,'источник сохранён в localStorage');
ok(nodes.gaps.innerHTML.includes('медианы по 40 каналам'),'источник виден в карточке');
ok(nodes.gaps.innerHTML.includes('n не указан'),'н честно помечен как отсутствующий');
ok(before===after,'статистика НЕ изменилась: источник не закрывает дыру, где голос выше доказательства');
const box=document.getElementById('ok_e1').innerHTML;
ok(box.includes('НЕ закрыта')&&box.includes('сильнее доказательства'),'UI честно говорит, что дыра осталась: '+box.replace(/<[^>]+>/g,'').slice(0,60));
// обратный случай: слабое утверждение + источник перестаёт быть дырой
const stat0=nodes.stats.innerHTML.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
document.getElementById('in_a1').value='политика канала: disclosure AI-контента';
addSrc('a1');
const stat1=nodes.stats.innerHTML.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
ok(stat0!==stat1,'слабое утверждение + источник меняет статистику');
ok(stat1.includes('частично'),'статус «частично» честный: '+stat1);
ok(stat1.includes('частично'),'дыра перешла в «частично»: '+stat1);
ok(nodes.gaps.innerHTML.includes('n не указан'),'отсутствие n показано честно');
ok(nodes.gaps.innerHTML.includes('in_a1'),'частичное остаётся в списке — его можно докрутить');
const nodeCount=(nodes.map.innerHTML.match(/class="node"/g)||[]).length;
ok(nodeCount>=27,'карта перерисована, '+nodeCount+' вершин (было 23, +5 конкурентных claims)');
go('gaps');
ok(nodes.map.style.display==='none','переключение на «Пробелы» прячет карту');
go('map');
ok(nodes.map.style.display!=='none','переключение обратно возвращает карту');
console.log('\n'+(fail?('❌ провалено: '+fail):'✅ ВСЁ ЗЕЛЁНОЕ'));

// ═══ ТЕСТ ПОЛЗУНКА СИЛЫ ═══
console.log('\n═══ ТЕСТ ПОЛЗУНКА СИЛЫ УТВЕРЖДЕНИЯ ═══');
let f2=0; const ok2=(c,m)=>{console.log('  '+(c?'✅':'❌')+' '+m); if(!c)f2++;};
ok2(nodes.gaps.innerHTML.includes('type="range"'),'ползунок есть в карточках');
ok2(nodes.gaps.innerHTML.includes('приравнять к доказательству'),'кнопка «приравнять к доказательству» есть');
ok2(nodes.gaps.innerHTML.includes('Yeah, sure'),'подпись показывает тест «Yeah, sure» и разрыв');

// «зарабатывают»: claim 9, доказательство 7, источников нет
const statB=nodes.stats.innerHTML.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
lowerClaim('e1');
const statA=nodes.stats.innerHTML.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
ok2(statA!==statB,'статистика изменилась после опускания голоса: '+statA);
ok2(!document.getElementById('sn_e1').innerHTML.includes('Yeah, sure'),
    '«Yeah, sure» исчез после опускания голоса');
// теперь опускаем ровно до доказательства
lowerClaim('e1');
ok2(!document.getElementById('sn_e1').innerHTML.includes('Yeah, sure'),
    'приравнивание к доказательству убирает превышение голоса у e1');
// и убеждаемся, что e1 больше не в статусе «дыра»
const e1card=nodes.gaps.innerHTML.split('class="gap"').find(b=>b.includes('in_e1'))||'';
ok2(e1card.includes('n не указан')||e1card.includes('△'),'e1 теперь «частично», а не «дыра»');
const statC=nodes.stats.innerHTML.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
ok2(/\d+ дыр/.test(statC),'статистика содержит число дыр: '+statC);
// и обратно вверх
setClaim('e1', 9);
ok2(document.getElementById('sn_e1').innerHTML.includes('Yeah, sure'),'поднятие голоса возвращает дыру');
// ползунок не должен лгать про несохранённое
ok2(JSON.parse(store['proofmap.claims.v1']).e1===9,'голос сохранён в localStorage');
console.log('\n'+(f2?('❌ ползунок: провалено '+f2):'✅ ползунок: ВСЁ ЗЕЛЁНОЕ'));

// ═══ ТЕСТ МОСТА REDDIT ↔ ПРИЛОЖЕНИЕ ═══
console.log('\n═══ МОСТ: ЖИВЫЕ ЛЮДИ ↔ КАРТА ═══');
let f3=0; const ok3=(c,m)=>{console.log('  '+(c?'✅':'❌')+' '+m); if(!c)f3++;};
ok3(typeof w.ProofMap.objectionsFor==='function','движок знает про возражения');
ok3(w.OBJECTIONS && w.OBJECTIONS.clusters.length===10,'кластеров загружено: '+(w.OBJECTIONS?w.OBJECTIONS.clusters.length:0));
// каждый кластер бьёт в существующие id
const nicheIds=new Set(w.NICHES.faceless_youtube.claims.map(c=>c.id));
let fake=0, nohit=0;
w.OBJECTIONS.clusters.forEach(k=>{ if(!k.hits.length) nohit++;
  k.hits.forEach(h=>{ if(!nicheIds.has(h)) fake++; }); });
ok3(fake===0,'нет выдуманных id утверждений');
ok3(nohit===0,'каждый кластер куда-то бьёт');
// давление реальности ненулевое там, где кластеры есть
ok3(objectionLoad('p1')>0,'«ИИ неотличимо от human» (p1) имеет давление: '+objectionLoad('p1'));
ok3(objectionLoad('e1')>0,'«зарабатывают» (e1) имеет давление: '+objectionLoad('e1'));
const zero=['m1','r3','w1'].filter(id=>objectionLoad(id)===0);
ok3(zero.length===3,'эти 3 утверждения никто не оспаривал: '+zero.join(', '));
// блок в карточке
renderGaps();
ok3(nodes.gaps.innerHTML.includes('что говорят живые люди'),'в карточках есть блок живых людей');
ok3(nodes.gaps.innerHTML.includes('I despise AI slop'),'цитата в карточке (дословная)');
ok3(!nodes.gaps.innerHTML.includes('push_m1"'),'для не оспариваемого утверждения блока нет');
// вкладка
ok3(!!document.getElementById('tabReal'),'вкладка «Живые люди» есть');
go('real');
ok3(nodes.real.innerHTML.includes('Источник:'),'вкладка отрисована с источником');
ok3((nodes.real.innerHTML.match(/class="gap"/g)||[]).length===10,'10 кластеров во вкладке');
// честность: оговорка про один сабреддит
ok3(nodes.real.innerHTML.includes('один сабреддит'),'оговорка «один сабреддит» показана честно');
console.log('\n'+(f3?('❌ мост: провалено '+f3):'✅ мост: ВСЁ ЗЕЛЁНОЕ'));

console.log('═══ ТЕСТ ФИНМОДЕЛЕЙ ═══');
// второй инлайн-скрипт (блок финмоделей в конце body)
const finBlock = h.split('<script>').filter(b=>b.includes('function finCalc'))[0];
eval(finBlock.split('</'+'script>')[0]);
ok(!!document.getElementById('fin'),'модальное окно есть');
ok(!!document.getElementById('fv')&&!!document.getElementById('fc')&&!!document.getElementById('fn')&&!!document.getElementById('fe'),'4 поля ввода на месте');
ok(typeof openFin==='function'&&typeof closeFin==='function'&&typeof finCalc==='function','функции объявлены');
nodes.fv.value='500000'; nodes.fc.value='120'; nodes.fn.value='12'; nodes.fe.value='400';
finCalc();
ok(/60\s*000/.test(nodes.finout.innerHTML),'доход 500000/1000*120 = 60 000 ₽ посчитан');
ok(/55\s*200/.test(nodes.finout.innerHTML),'чистыми 60 000 − 4 800 = 55 200 ₽');
ok(/ok/.test(nodes.finverdict.className+'')||/ok/.test(nodes.finverdict.innerHTML),'вердикт вынесен');
nodes.fv.value='50000'; nodes.fc.value='60'; nodes.fn.value='12'; nodes.fe.value='400';
finCalc();
ok(/−1\s*800/.test(nodes.finout.innerHTML),'убыток −1 800 ₽ считается честно, а не скрывается');
ok(/bad/.test(nodes.finverdict.innerHTML),'на убытке вердикт честный');
nodes.fv.value='500000'; nodes.fc.value='120'; nodes.fn.value='0'; nodes.fe.value='400';
finCalc();
ok(!/NaN/.test(nodes.finout.innerHTML),'ноль роликов не даёт NaN');
console.log(fail? `\n❌ ФИНМОДЕЛИ — провалов: ${fail}` : '\n✅ ФИНМОДЕЛИ: ВСЁ ЗЕЛЁНОЕ');
// process.exit здесь НЕ ставим: ниже ещё прогоны 5+

console.log('═══ ПРОГОН 5: ПОИСК И УДОБСТВО ═══');
ok(typeof applyQ==='function','функция поиска есть');
ok(typeof expandAll==='function','развернуть/свернуть есть');
// эмулируем 3 карточки
const cardsQ=[{textContent:'Конкуренция бездонная тысячи каналов',classList:{cls:new Set(['gap']),toggle(c,v){v?this.cls.add(c):this.cls.delete(c)}},style:{}},
            {textContent:'Монетизация не гарантирована',classList:{cls:new Set(['gap']),toggle(c,v){v?this.cls.add(c):this.cls.delete(c)}},style:{}},
            {textContent:'Ниша перенасыщена',classList:{cls:new Set(['gap']),toggle(c,v){v?this.cls.add(c):this.cls.delete(c)}},style:{}}];
document._sel['#gaps .gap, #real .gap']=cardsQ;
nodes.q = mk('q'); nodes.qnote = mk('qnote');   // мок создаёт узлы по требованию
nodes.q.value='конкуренция'; applyQ();
ok(cardsQ[0].classList.cls.has('hit'),'найдена нужная карточка');
ok(!cardsQ[1].classList.cls.has('hit'),'ненужная не подсвечена');
ok(cardsQ[1].style.opacity==='.28','ненужная приглушена — видно, что она есть, но не в выдаче');
ok(nodes.qnote.textContent==='найдено: 1','счётчик найденного честный: '+nodes.qnote.textContent);
nodes.q.value='щщщ'; applyQ();
ok(nodes.qnote.textContent==='ничего не найдено','пустой результат говорит прямо, а не молчит');
nodes.q.value=''; applyQ();
ok(cardsQ.every(f=>!f.classList.cls.has('hit')&&f.style.opacity===''),'сброс поиска возвращает всё');
ok(h.includes("onclick=\"expandAll(true)\"")&&h.includes("onclick=\"expandAll(false)\""),'кнопки развернуть/свернуть в интерфейсе');
ok(h.includes("if (e.key==='2') go('gaps');"),'горячие клавиши 1/2/3 заявлены');
ok(h.includes("id=\"q\""),'поле поиска есть');
console.log(fail? `\n❌ ПРОВАЛОВ: ${fail}` : '\n✅ ПОИСК И УДОБСТВО: ВСЁ ЗЕЛЁНОЕ');

console.log('═══ ДЕКОМПОЗИЦИЯ: СЛОЙ «ПРАВИЛА РЫНКА» ═══');
R(H+'/proof-map/data/competitor-proof.js');
global.COMPETITOR_PROOF = w.COMPETITOR_PROOF;
ok(!!w.COMPETITOR_PROOF, 'данные правил рынка загрузились');
ok(w.COMPETITOR_PROOF.items.length>0, 'доказательств: '+w.COMPETITOR_PROOF.items.length);
ok(w.COMPETITOR_PROOF.items.every(i=>i.url&&i.quote&&i.claim),'у каждого есть цитата, ссылка и формулировка');
ok(w.COMPETITOR_PROOF.items.every(i=>w.COMPETITOR_PROOF.sourceWeights[i.src]),'у каждого известен тип источника → вес');
nodes.rules=mk('rules'); nodes.ruleCount=mk('ruleCount');
renderRules();
const RH=nodes.rules.innerHTML;
ok(RH.length>500,'раздел отрисовался, '+RH.length+' символов');
ok((RH.match(/class="rule"/g)||[]).length===w.COMPETITOR_PROOF.items.length,
   `все ${w.COMPETITOR_PROOF.items.length} доказательств видны пользователю, а не лежат в файле`);
ok(RH.includes('источник ↗'),'у каждого доказательства кликабельная ссылка на первоисточник');
ok(String(nodes.ruleCount.textContent)===String(w.COMPETITOR_PROOF.items.length),'счётчик на вкладке честный: '+nodes.ruleCount.textContent);
ok(RH.indexOf('сила 10/10') < (RH.indexOf('сила 1/10')>0?RH.indexOf('сила 1/10'):1e9),'сильные источники показаны первыми');
ok(h.includes("id=\"rules\"")&&h.includes("go('rules')"),'вкладка в интерфейсе и переключается');
console.log(fail? `\n❌ ПРОВАЛОВ: ${fail}` : '\n✅ ДЕКОМПОЗИЦИЯ: СЛОЙ 7 РАБОТАЕТ');
