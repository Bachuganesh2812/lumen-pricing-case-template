const $=s=>document.querySelector(s), euro=n=>`€${n.toFixed(2)}`;
const price=$('#price'),price2=$('#price2'),mix=$('#mix');
function linePath(fn){let d='';for(let i=0;i<=10;i++){let x=30+i*55,y=205-fn(i/10)*165;d+=(i?'L':'M')+x+' '+y}return d}
function update(p=+price.value){price.value=p;price2.value=p;let acceptance=p<1.9?61.7-(p-1.5)*9:p<2.3?51.7-(p-2.19)*18:26.7-(p-2.59)*6;acceptance=Math.max(18,Math.min(68,acceptance));let retail=.4+(p-1.79)*.575, gym=.81+(p-1.79)*.8,dtc=.77+(p-1.79)*.96,owned=+mix.value/100;let profit=owned*((gym+dtc)/2)+(1-owned)*retail,ratio=2.9+(owned-.6)*.4-(Math.abs(p-2.19)*.3);$('#headPrice').textContent=euro(p);$('#priceOut').textContent=euro(p);$('#summaryPrice').textContent=euro(p);$('#acceptance').textContent=acceptance.toFixed(1)+'%';$('#profit').textContent=euro(profit);$('#ratio').textContent=ratio.toFixed(1)+'×';$('#mixOut').textContent=mix.value+'% owned';$('#action').textContent=p<2?'Use this only as a time-boxed acquisition offer; protect premium shelf price.':p>2.45?'Reserve this for a premium pack or post-proof upsell.':'Protect '+euro(p)+' and validate repeat before opening grocery distribution.';$('#econTable').innerHTML=[['Retail / Grocery',p*.57,.43,retail],['Gym & Office',p*.87,.13,gym],['DTC Online',p*.96,.04,dtc]].map(r=>`<tr><td>${r[0]}</td><td>${euro(r[1])}</td><td>${(r[2]*100).toFixed(0)}%</td><td class="good">${euro(r[3])}</td></tr>`).join('');let pos=(p-1.5)/1.5*100;$('#brandPin').style.left=pos+'%';$('#handle').setAttribute('x1',30+pos*5.5);$('#handle').setAttribute('x2',30+pos*5.5);$('#fixedLine').setAttribute('d',linePath(t=>.35+.55*t));$('#elasticLine').setAttribute('d',linePath(t=>.2+.78*t-.28*t*t))}
price.addEventListener('input',()=>update());price2.addEventListener('input',e=>update(+e.target.value));mix.addEventListener('input',()=>update());update();
$('#theme').addEventListener('click',()=>{document.body.classList.toggle('dark');$('#theme').textContent=document.body.classList.contains('dark')?'☀':'☾'});
document.querySelectorAll('[data-match]').forEach(b=>b.addEventListener('click',()=>update(+b.dataset.match)));
const regions={
'Schleswig-Holstein':['3.2%','6%','€30.1k',61,'Build awareness through commuter and coastal wellness venues.'],
'Mecklenburg-Vorpommern':['2.0%','5%','€27.4k',48,'Defer broad launch; test only through tourism and selective DTC.'],
'Hamburg':['10%','7%','€36.8k',78,'Use as a high-income urban test with DTC and office partnerships.'],
'Bremen':['2.1%','6%','€29.4k',54,'Use sampling to learn; keep distribution tightly targeted.'],
'Lower Saxony':['9%','7%','€31.0k',68,'Prioritize Hanover and larger office clusters after Berlin proof.'],
'Brandenburg':['4%','6%','€30.2k',58,'Treat as Berlin spillover; service from the Berlin pilot.'],
'Berlin':['18%','9%','€31.2k',88,'Seed 20–30 workplaces and gym partners, then measure repeat by cohort.'],
'North Rhine-Westphalia':['17%','7%','€32.4k',82,'Largest scale pool; enter after the beachhead proves repeat.'],
'Saxony-Anhalt':['3%','6%','€28.3k',51,'Use grocery only after pricing and repeat gates pass nationally.'],
'Saxony':['6%','7%','€29.1k',63,'Test Leipzig and Dresden with creator-led demand generation.'],
'Thuringia':['3%','6%','€28.6k',50,'Maintain as a later-wave region; prioritize efficient DTC.'],
'Hesse':['8%','7%','€35.1k',75,'Frankfurt office density supports Gym & Office and premium DTC.'],
'Rhineland-Palatinate':['5%','6%','€31.0k',60,'Use regional retail partners after channel economics are validated.'],
'Saarland':['2%','5%','€30.0k',46,'Do not prioritize in the first wave; keep digital-only coverage.'],
'Bavaria':['15%','9%','€37.0k',86,'Munich is the second beachhead; pair premium positioning with DTC.'],
'Baden-Württemberg':['11%','8%','€36.2k',80,'Strong income proxy; activate Stuttgart through performance communities.']};
function showRegion(name){let d=regions[name]||regions.Berlin;document.querySelector('.region.selected')?.classList.remove('selected');document.querySelector(`[data-region="${name}"]`)?.classList.add('selected');$('#regionTitle').textContent=name;$('#regionTag').textContent=d[3]>=80?'priority beachhead':d[3]>=65?'second-wave candidate':'learn later';$('#regionScore').textContent=d[3];$('#regionShare').textContent=d[0];$('#regionCagr').textContent=d[1];$('#regionIncome').textContent=d[2];$('#regionHeadline').textContent=d[3]>=80?'High-priority market':d[3]>=65?'Scale candidate':'Learning market';$('#regionReason').textContent=`Modeled opportunity score ${d[3]}/100. This is a proxy view using market context, income index and city/region growth assumptions.`;$('#regionAction').textContent=d[4]}
document.querySelectorAll('.region').forEach(r=>r.addEventListener('click',()=>showRegion(r.dataset.region)));showRegion('Berlin');
