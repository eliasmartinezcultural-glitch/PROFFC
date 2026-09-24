/* YO FUTBOLISTA — DOMAIN DATA v1.3
   Fuente única de verdad. Sin backend. Preparado para GitHub Pages.
   Regla: datos registrados ≠ estimaciones ≠ autoevaluaciones.
*/
window.YF_DATA = {
  schema:"yo-futbolista/1.3",
  app:{name:"YO FUTBOLISTA",mode:"team-first",locale:"es-AR"},
  club:{
    id:"club-9fc",name:"9 FC",shortName:"9",seasonId:"season-2026",
    identity:{motto:"Una camiseta. Una historia. Un grupo.",values:["compromiso","compañerismo","competencia","respeto"]},
    visual:{primary:"#d9ff42",secondary:"#10151c",accent:"#7de3ff"}
  },

  seasons:[{
    id:"season-2026",clubId:"club-9fc",name:"Temporada 2026",status:"active",
    start:"2026-01-01",end:"2026-12-31",
    objectives:[{id:"obj-team-01",type:"collective",title:"Presión tras pérdida",status:"active",principleIds:["principle-transition-press"]}],
    archive:{matches:[],milestones:[],notes:[]}
  }],

  staff:[
    {id:"staff-coach-01",name:"DT",role:"coach",scope:"team",message:"Hoy necesitamos jugar juntos."},
    {id:"staff-cap-01",name:"#5",role:"captain",scope:"team",message:"Representa al grupo."}
  ],

  units:[
    {id:"unit-gk",name:"Arquero",order:1,positions:["GK"]},
    {id:"unit-defense",name:"Defensa",order:2,positions:["CB","RB","LB"]},
    {id:"unit-midfield",name:"Mediocampo",order:3,positions:["DM","CM","AM"]},
    {id:"unit-attack",name:"Ataque",order:4,positions:["RW","LW","ST"]}
  ],

  zones:[
    {id:"zone-defensive-third",name:"Tercer defensivo",lane:"all",third:"defensive"},
    {id:"zone-middle-third",name:"Tercer medio",lane:"all",third:"middle"},
    {id:"zone-final-third",name:"Tercer final",lane:"all",third:"final"},
    {id:"zone-central",name:"Carril central",lane:"central",third:"all"},
    {id:"zone-halfspace-left",name:"Intervalo izquierdo",lane:"halfspace-left",third:"all"},
    {id:"zone-halfspace-right",name:"Intervalo derecho",lane:"halfspace-right",third:"all"},
    {id:"zone-wide-left",name:"Banda izquierda",lane:"wide-left",third:"all"},
    {id:"zone-wide-right",name:"Banda derecha",lane:"wide-right",third:"all"}
  ],

  phases:[
    {id:"phase-build",name:"Inicio",group:"attack"},
    {id:"phase-progress",name:"Progresión",group:"attack"},
    {id:"phase-finish",name:"Finalización",group:"attack"},
    {id:"phase-organize",name:"Organización defensiva",group:"defense"},
    {id:"phase-press",name:"Presión",group:"defense"},
    {id:"phase-transition-positive",name:"Transición ofensiva",group:"transition"},
    {id:"phase-transition-negative",name:"Transición defensiva",group:"transition"}
  ],

  behaviors:[
    {id:"behavior-receive",name:"Recibir",phaseIds:["phase-build","phase-progress"],evidence:["perfil corporal","control","orientación"]},
    {id:"behavior-scan",name:"Escanear",phaseIds:["phase-build","phase-progress"],evidence:["mirada previa","información disponible"]},
    {id:"behavior-support",name:"Dar apoyo",phaseIds:["phase-progress","phase-transition-positive"],evidence:["línea de pase","distancia de apoyo"]},
    {id:"behavior-cover",name:"Cubrir",phaseIds:["phase-organize","phase-transition-negative"],evidence:["equilibrio","cobertura"]},
    {id:"behavior-press",name:"Presionar",phaseIds:["phase-press","phase-transition-negative"],evidence:["distancia","orientación","reacción"]},
    {id:"behavior-fix",name:"Fijar",phaseIds:["phase-progress","phase-finish"],evidence:["atención del defensor","espacio generado"]},
    {id:"behavior-connect",name:"Conectar",phaseIds:["phase-progress","phase-transition-positive"],evidence:["pase","tercer hombre","continuidad"]},
    {id:"behavior-finish",name:"Finalizar",phaseIds:["phase-finish"],evidence:["selección","definición","ocupación de área"]}
  ],

  principles:[
    {id:"principle-possession-width",name:"Amplitud",phaseIds:["phase-progress","phase-finish"],unitIds:["unit-defense","unit-midfield","unit-attack"]},
    {id:"principle-third-man",name:"Tercer hombre",phaseIds:["phase-progress"],unitIds:["unit-midfield","unit-attack"]},
    {id:"principle-pass-lines",name:"Líneas de pase",phaseIds:["phase-build","phase-progress"],unitIds:["unit-gk","unit-defense","unit-midfield"]},
    {id:"principle-compact-block",name:"Bloque compacto",phaseIds:["phase-organize"],unitIds:["unit-defense","unit-midfield"]},
    {id:"principle-close-center",name:"Cerrar el centro",phaseIds:["phase-organize","phase-press"],unitIds:["unit-defense","unit-midfield"]},
    {id:"principle-transition-press",name:"Presión tras pérdida",phaseIds:["phase-transition-negative","phase-press"],unitIds:["unit-defense","unit-midfield","unit-attack"]},
    {id:"principle-immediate-reaction",name:"Reacción inmediata",phaseIds:["phase-transition-negative","phase-transition-positive"],unitIds:["unit-defense","unit-midfield","unit-attack"]},
    {id:"principle-balance",name:"Equilibrio",phaseIds:["phase-transition-negative"],unitIds:["unit-defense","unit-midfield"]},
    {id:"principle-depth",name:"Profundidad",phaseIds:["phase-progress","phase-finish","phase-transition-positive"],unitIds:["unit-attack"]}
  ],

  players:[
    {id:"p-01",number:1,name:"ARQUERO",positions:["GK"],archetype:"goalkeeper",unitId:"unit-gk",status:"active"},
    {id:"p-02",number:2,name:"LATERAL",positions:["RB","LB"],archetype:"fullback",unitId:"unit-defense",status:"active"},
    {id:"p-04",number:4,name:"CENTRAL",positions:["CB"],archetype:"ball-playing-cb",unitId:"unit-defense",status:"active"},
    {id:"p-05",number:5,name:"CAPITÁN",positions:["CB","DM"],archetype:"organizer",unitId:"unit-defense",status:"active",leadership:"captain"},
    {id:"p-06",number:6,name:"VOLANTE",positions:["DM","CM"],archetype:"ball-winner",unitId:"unit-midfield",status:"active"},
    {id:"p-07",number:7,name:"EXTREMO",positions:["RW","LW"],archetype:"winger",unitId:"unit-attack",status:"active"},
    {id:"p-08",number:8,name:"INTERIOR",positions:["CM"],archetype:"box-to-box",unitId:"unit-midfield",status:"active"},
    {id:"p-09",number:9,name:"DELANTERO",positions:["ST"],archetype:"finisher",unitId:"unit-attack",status:"active"},
    {id:"p-10",number:10,name:"ELÍAS",positions:["CM","AM"],archetype:"organizer",unitId:"unit-midfield",status:"active",isCurrentUser:true}
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
      possession:["principle-possession-width","principle-third-man","principle-pass-lines"],
      defense:["principle-compact-block","principle-close-center","principle-transition-press"],
      transition:["principle-immediate-reaction","principle-balance","principle-depth"]
    },
    shapes:{
      base:["GK","RB","CB","CB","LB","DM","CM","CM","RW","ST","LW"],
      inPossession:["GK","CB","CB","DM","FB","CM","AM","W","ST","W"],
      outOfPossession:["GK","FB","CB","CB","FB","CM","CM","W","W","ST"]
    },
    roles:{GK:"Inicio y seguridad",CB:"Cobertura y salida",FB:"Amplitud y cierre",DM:"Equilibrio",CM:"Conexión y apoyo",W:"Amplitud y profundidad",ST:"Fijar y finalizar"}
  }],

  tacticalRoles:[
    {id:"role-gk-build",position:"GK",phaseIds:["phase-build","phase-organize"],behaviorIds:["behavior-receive","behavior-support"],principleIds:["principle-pass-lines"]},
    {id:"role-cb-build",position:"CB",phaseIds:["phase-build","phase-organize"],behaviorIds:["behavior-cover","behavior-connect"],principleIds:["principle-pass-lines","principle-compact-block"]},
    {id:"role-fullback",position:"FB",phaseIds:["phase-progress","phase-organize"],behaviorIds:["behavior-support","behavior-cover"],principleIds:["principle-possession-width","principle-close-center"]},
    {id:"role-dm",position:"DM",phaseIds:["phase-progress","phase-organize","phase-transition-negative"],behaviorIds:["behavior-support","behavior-cover","behavior-press"],principleIds:["principle-balance","principle-close-center"]},
    {id:"role-cm",position:"CM",phaseIds:["phase-progress","phase-transition-positive"],behaviorIds:["behavior-scan","behavior-connect","behavior-support"],principleIds:["principle-third-man","principle-pass-lines"]},
    {id:"role-winger",position:"W",phaseIds:["phase-progress","phase-finish","phase-transition-negative"],behaviorIds:["behavior-fix","behavior-finish","behavior-press"],principleIds:["principle-possession-width","principle-depth","principle-transition-press"]},
    {id:"role-st",position:"ST",phaseIds:["phase-progress","phase-finish"],behaviorIds:["behavior-fix","behavior-finish"],principleIds:["principle-depth"]}
  ],

  playerProfiles:[{
    playerId:"p-10",seasonId:"season-2026",archetype:"organizer",role:"Organizador",unitId:"unit-midfield",
    mission:"Recibir entre líneas, conectar con el 9 y equilibrar tras pérdida.",
    responsibilities:{
      withBall:["perfil corporal abierto","escanear antes de recibir","conectar con el 9"],
      withoutBall:["cerrar el centro","orientar la presión","sostener el bloque"],
      transition:["reaccionar tras pérdida","ofrecer apoyo","proteger el equilibrio"]
    },
    behaviorIds:["behavior-receive","behavior-scan","behavior-support","behavior-connect","behavior-press"],
    principleIds:["principle-third-man","principle-close-center","principle-transition-press","principle-balance"],
    zones:["zone-halfspace-left","zone-central","zone-halfspace-right"],
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
    phaseIds:["phase-build","phase-progress","phase-transition-negative"],
    behaviorIds:["behavior-receive","behavior-scan","behavior-connect","behavior-press"],
    principleIds:["principle-pass-lines","principle-transition-press"],
    unitIds:["unit-midfield","unit-attack"],playerId:"p-10",
    phases:[
      {id:"receive",order:1,label:"Recibir",cue:"Perfil corporal abierto."},
      {id:"scan",order:2,label:"Escanear",cue:"Mirar antes del control."},
      {id:"connect",order:3,label:"Conectar",cue:"Encontrar al compañero."},
      {id:"react",order:4,label:"Reaccionar",cue:"Tras pérdida, juntos."}
    ]
  }],

  matches:[{
    id:"match-2026-next",seasonId:"season-2026",status:"upcoming",home:"club-9fc",away:"rival-fc",
    opponentName:"Rival FC",dateLabel:"SÁB 16:30",venue:"Cancha principal",squadSize:22,
    captainId:"p-05",formationId:"model-433",
    plan:{
      objectiveId:"obj-team-01",
      principleIds:["principle-transition-press","principle-compact-block"],
      unitTasks:{
        "unit-defense":["cerrar centro","sostener cobertura"],
        "unit-midfield":["acercar líneas","reaccionar tras pérdida"],
        "unit-attack":["orientar presión","dar profundidad"]
      }
    },
    playerMissions:{"p-10":"Recibir entre líneas, conectar con el 9 y ayudar a equilibrar tras pérdida."},
    postMatch:{teamReview:null,playerReviews:[],stats:[]}
  }],

  development:{
    dimensions:["technique","tactics","physical","psychosocial"],
    evidenceTypes:["registered","self-assessment","coach-assessment","observation","reflection","pending"],
    evaluationCycles:["pre-season","mid-season","post-match","end-season"],
    records:[]
  },

  stats:{
    provenance:["registered","self-assessment","coach-assessment","estimate","pending"],
    policy:"No mostrar una medición como profesional si no existe fuente o registro.",
    fields:["matches","starts","minutes","goals","assists","cards","callups","results"]
  }
};