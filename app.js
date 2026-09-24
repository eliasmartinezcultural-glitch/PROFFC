const TEAM={name:"9 FC",season:"2026",formation:"4–3–3",next:{opponent:"Rival FC",date:"SÁB 16:30"},player:{name:"ELÍAS",number:10,position:"MEDIOCAMPISTA",role:"Organizador"}};
const app=document.querySelector("#app");
const navButtons=[...document.querySelectorAll("[data-nav]")];
let current="club";

const views={
club(){
return `
<section class="hero">
<div><div class="eyebrow">Temporada ${TEAM.season} · ${TEAM.name}</div><h1>ESTE ES<br>NUESTRO FÚTBOL.</h1><p>Una experiencia creada para que cada jugador viva su equipo con identidad, preparación y la sensación de estar dentro de un verdadero entorno futbolístico.</p><div class="hero-actions"><button class="btn btn-primary" data-nav="match">MATCHDAY →</button><button class="btn btn-ghost" data-nav="team">ENTRAR AL VESTUARIO</button></div></div>
</section>
<div class="section-title"><h2>Hoy en el club</h2><span>${TEAM.season}</span></div>
<section class="grid">
<article class="card wide"><span class="pill">Próximo partido</span><h2>${TEAM.name} vs ${TEAM.next.opponent}</h2><p class="muted">${TEAM.next.date} · Preparación de equipo</p><button class="btn btn-primary" data-nav="match">Ver Matchday</button></article>
<article class="card"><span class="pill">Vestuario</span><div class="metric">22</div><p class="muted">Jugadores. Una camiseta.</p></article>
<article class="card"><span class="pill">Objetivo colectivo</span><h3>Presión tras pérdida</h3><p class="muted">Recuperar juntos y cerrar el centro.</p></article>
</section>`
},
team(){
return `
<div class="section-title"><h2>El vestuario</h2><span>${TEAM.name} · ${TEAM.season}</span></div>
<section class="grid">
<article class="card wide"><span class="pill">Mensaje del DT</span><h2>“Hoy necesitamos jugar juntos.”</h2><p class="muted">Hacer bien las cosas simples: ofrecer líneas de pase, cerrar espacios y competir cada pelota.</p></article>
<article class="card"><span class="pill">Capitán</span><div class="metric">#5</div><p class="muted">Representa al grupo.</p></article>
<article class="card"><span class="pill">Modelo</span><h3>${TEAM.formation}</h3><p class="muted">Cada posición tiene una responsabilidad dentro del sistema.</p><button class="btn btn-ghost" data-nav="player">Ver mi rol</button></article>
<article class="card full"><h3>Plantel</h3><div class="list">
${["#1 · ARQUERO","#2 · LATERAL","#4 · CENTRAL","#5 · CAPITÁN","#6 · VOLANTE","#8 · INTERIOR","#10 · ELÍAS","#7 · EXTREMO","#9 · DELANTERO"].map(x=>`<div class="row"><span>${x}</span><span class="number">→</span></div>`).join("")}
</div></article></section>`
},
train(){
return `
<div class="section-title"><h2>Entrenar</h2><span>Equipo + unidad + jugador</span></div>
<section class="grid">
<article class="card wide"><span class="pill">Sesión de hoy</span><h2>Control orientado</h2><p class="muted"><b>Objetivo individual:</b> recibir perfilado.<br><b>Objetivo colectivo:</b> salir de presión.<br><b>Aplicación:</b> encontrar al compañero libre.</p><button class="btn btn-primary">Marcar sesión</button></article>
<article class="card"><span class="pill">Equipo</span><h3>Presión</h3><p class="muted">Recuperar juntos después de perder la pelota.</p></article>
<article class="card"><span class="pill">Unidad</span><h3>Mediocampo</h3><p class="muted">Cerrar el centro y ofrecer apoyo.</p></article>
<article class="card"><span class="pill">Preparación</span><h3>Hoy</h3><p class="muted">Hidratación · comida · descanso · concentración.</p></article>
</section>`
},
player(){
return `
<div class="section-title"><h2>Mi fútbol</h2><span>#${TEAM.player.number} · ${TEAM.player.position}</span></div>
<section class="grid">
<article class="card wide"><span class="pill">Mi identidad</span><h2>#${TEAM.player.number} ${TEAM.player.name}</h2><p class="muted">${TEAM.player.position} · ${TEAM.player.role}</p><p class="muted">Tu identidad importa, pero existe dentro del sistema del equipo.</p></article>
<article class="card"><span class="pill">Arquetipo</span><h3>Organizador</h3><p class="muted">Conectar mediocampo y ataque.</p></article>
<article class="card full"><span class="pill">Nuestra formación · ${TEAM.formation}</span><div class="pitch">
${[
["#9",50,14,"Delantero"],["#11",24,27,"Extremo"],["#7",76,27,"Extremo"],["#10",50,38,"Organizador"],["#8",66,45,"Interior"],["#6",35,52,"Volante"],["#3",16,69,"Lateral"],["#5",39,76,"Central"],["#4",61,76,"Central"],["#2",84,69,"Lateral"],["#1",50,91,"Arquero"]
].map(([n,x,y,r])=>`<div class="player-dot ${n==="#10"?"me":""}" style="left:${x}%;top:${y}%">${n.replace("#","")}</div><div class="role" style="left:${x}%;top:${y}%">${r}</div>`).join("")}
</div></article>
<article class="card wide"><span class="pill">Mi función hoy</span><h3>Recibir entre líneas y conectar con el #9.</h3><p class="muted">Cuando el lateral avance, ayudá a equilibrar. Tras pérdida, reaccioná junto al bloque.</p></article>
<article class="card"><span class="pill">Progreso</span><div class="metric">3</div><p class="muted">objetivos activos</p></article>
</section>`
},
match(){
return `
<div class="section-title"><h2>Matchday</h2><span>Todo el equipo</span></div>
<section class="match-card"><span class="pill">Próximo partido · ${TEAM.next.date}</span><div class="teams"><div><div class="team-badge">9</div><b>${TEAM.name}</b></div><div class="vs">VS</div><div><div class="team-badge">R</div><b>${TEAM.next.opponent}</b></div></div><p class="muted">Objetivo del equipo: competir juntos, cerrar el centro y salir jugando con paciencia.</p><button class="btn btn-primary" data-nav="player">VER MI ROL</button></section>
<section class="grid">
<article class="card"><span class="pill">Convocados</span><div class="metric">22</div><p class="muted">Una camiseta. Un equipo.</p></article>
<article class="card"><span class="pill">Formación</span><div class="metric">4–3–3</div><p class="muted">Modelo colectivo.</p></article>
<article class="card"><span class="pill">Capitán</span><div class="metric">#5</div><p class="muted">“Entramos todos juntos.”</p></article>
<article class="card full"><h2>Tu misión</h2><p class="muted"><b>#10 · Organizador.</b> Recibir entre líneas, conectar con el 9 y ayudar a equilibrar tras pérdida.</p><button class="btn btn-primary" id="playBtn">SALIR A JUGAR →</button></article>
</section>`
}
};

function render(view=current){
current=view; app.innerHTML=views[view](); navButtons.forEach(b=>b.classList.toggle("active",b.dataset.nav===current));
app.querySelectorAll("[data-nav]").forEach(b=>b.addEventListener("click",()=>render(b.dataset.nav)));
const play=document.querySelector("#playBtn"); if(play) play.addEventListener("click",()=>{play.textContent="MATCHDAY ACTIVO ✓";play.disabled=true;});
app.focus({preventScroll:true});
}
navButtons.forEach(b=>b.addEventListener("click",()=>render(b.dataset.nav)));
document.querySelector("#soundToggle").addEventListener("click",e=>{e.currentTarget.textContent=e.currentTarget.textContent==="⌁"?"🔇":"⌁";});
render("club");
