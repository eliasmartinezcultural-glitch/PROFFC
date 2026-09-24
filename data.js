/* YO FUTBOLISTA — DOMAIN DATA v1.2
   Fuente única de verdad. Sin backend. Preparado para GitHub Pages.
   Regla: datos registrados ≠ estimaciones ≠ autoevaluaciones.
*/
window.YF_DATA = {
  schema: "yo-futbolista/1.2",
  app: { name:"YO FUTBOLISTA", mode:"team-first", locale:"es-AR" },
  club: {
    id:"club-9fc", name:"9 FC", shortName:"9", seasonId:"season-2026",
    identity:{ motto:"Una camiseta. Una historia. Un grupo.", values:["compromiso","compañerismo","competencia","respeto"] },
    visual:{ primary:"#d9ff42", secondary:"#10151c", accent:"#7de3ff" }
  },
  seasons:[{
    id:"season-2026", clubId:"club-9fc", name:"Temporada 2026", status:"active",
    start:"2026-01-01", end:"2026-12-31",
    objectives:[{id:"obj-team-01",type:"collective",title:"Presión tras pérdida",status:"active"}],
    archive:{ matches:[], milestones:[], notes:[] }
  }],
  staff:[
    {id:"staff-coach-01",name:"DT",role:"coach",scope:"team",message:"Hoy necesitamos jugar juntos."},
    {id:"staff-cap-01",name:"#5",role:"captain",scope:"team",message:"Representa al grupo."}
  ],
  players:[
    {id:"p-01",number:1,name:"ARQUERO",positions:["GK"],archetype:"goalkeeper",status:"active"},
    {id:"p-02",number:2,name:"LATERAL",positions:["RB","LB"],archetype:"fullback",status:"active"},
    {id:"p-04",number:4,name:"CENTRAL",positions:["CB"],archetype:"ball-playing-cb",status:"active"},
    {id:"p-05",number:5,name:"CAPITÁN",positions:["CB","DM"],archetype:"organizer",status:"active",leadership:"captain"},
    {id:"p-06",number:6,name:"VOLANTE",positions:["DM","CM"],archetype:"ball-winner",status:"active"},
    {id:"p-07",number:7,name:"EXTREMO",positions:["RW","LW"],archetype:"winger",status:"active"},
    {id:"p-08",number:8,name:"INTERIOR",positions:["CM"],archetype:"box-to-box",status:"active"},
    {id:"p-09",number:9,name:"DELANTERO",positions:["ST"],archetype:"finisher",status:"active"},
    {id:"p-10",number:10,name:"ELÍAS",positions:["CM","AM"],archetype:"organizer",status:"active",isCurrentUser:true}
  ],
  archetypes:{
    goalkeeper:{label:"Arquero",focus:["seguridad","juego aéreo","inicio"]},
    "ball-playing-cb":{label:"Central con salida",focus:["duelo","cobertura","primer pase"]},
    fullback:{label:"Lateral",focus:["amplitud","duelo","cierre"]},
    organizer:{label:"Organizador",focus:["orientación","conexión","ritmo"]},
    "ball-winner":{label:"Recuperador",focus:["presión","cobertura","duelo"]},
    "box-to-box":{label:"Interior",focus:["apoyo","llegada","transición"]},
    finisher:{label:"Finalizador",focus:["desmarque","definición","ocupación de área"]},
    winger:{label:"Extremo",focus:["amplitud","1v1","profundidad"]}
  },
  tacticalModels:[{
    id:"model-433",name:"4–3–3",status:"active",
    principles:{
      possession:["amplitud","tercer hombre","líneas de pase"],
      defense:["bloque compacto","cerrar centro","presión tras pérdida"],
      transition:["reacción inmediata","equilibrio","profundidad"]
    },
    roles:{GK:"Inicio y seguridad",CB:"Cobertura y salida",FB:"Amplitud y cierre",DM:"Equilibrio",CM:"Conexión y apoyo",W:"Amplitud y profundidad",ST:"Fijar y finalizar"}
  }],
  playerProfiles:[{
    playerId:"p-10",seasonId:"season-2026",archetype:"organizer",role:"Organizador",
    mission:"Recibir entre líneas, conectar con el 9 y equilibrar tras pérdida.",
    responsibilities:{
      withBall:["perfil corporal abierto","escanear antes de recibir","conectar con el 9"],
      withoutBall:["cerrar el centro","orientar la presión","sostener el bloque"],
      transition:["reaccionar tras pérdida","ofrecer apoyo","proteger el equilibrio"]
    },
    development:{
      technique:["control orientado","pase bajo presión"],
      tactics:["escaneo","ocupación de espacios"],
      physical:["resistencia general"],
      psychosocial:["comunicación","toma de decisiones"]
    }
  }],
  trainingLibrary:[{
    id:"train-001",seasonId:"season-2026",title:"CONTROL ORIENTADO",category:"technique+tactics",
    objective:"Recibir perfilado para salir de presión y encontrar al compañero libre.",
    phases:[
      {id:"receive",order:1,label:"Recibir",cue:"Perfil corporal abierto."},
      {id:"scan",order:2,label:"Escanear",cue:"Mirar antes del control."},
      {id:"connect",order:3,label:"Conectar",cue:"Encontrar al compañero."},
      {id:"react",order:4,label:"Reaccionar",cue:"Tras pérdida, juntos."}
    ],
    teamLink:"Presión tras pérdida",unitLink:"Mediocampo",playerLink:"p-10"
  }],
  matches:[{
    id:"match-2026-next",seasonId:"season-2026",status:"upcoming",home:"club-9fc",
    away:"rival-fc",opponentName:"Rival FC",dateLabel:"SÁB 16:30",venue:"Cancha principal",
    squadSize:22,captainId:"p-05",formationId:"model-433",
    playerMissions:{"p-10":"Recibir entre líneas, conectar con el 9 y ayudar a equilibrar tras pérdida."}
  }],
  stats:{
    provenance:["registered","self-assessment","coach-assessment","estimate","pending"],
    policy:"No mostrar una medición como profesional si no existe fuente o registro."
  }
};