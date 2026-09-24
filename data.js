/* YO FUTBOLISTA — DOMAIN DATA v1.4
   DATOS REALES · UBICACIÓN · EXPERIENCIA DEL FUTBOLISTA
   Fuente única de verdad. Sin backend. Preparado para GitHub Pages.
   Regla: dato confirmado ≠ informado ≠ pendiente ≠ estimado.
*/
window.YF_DATA = {
  schema:"yo-futbolista/1.4",
  app:{name:"YO FUTBOLISTA",mode:"team-first",locale:"es-AR"},
  club:{
    id:"club-9fc",name:"9 FC",shortName:"9",seasonId:"season-2026",
    identity:{
      motto:"Una camiseta. Una historia. Un grupo.",
      values:["compromiso","compañerismo","competencia","respeto"],
      experiencePromise:"Que cada jugador sienta que es un jugador profesional, aunque el equipo sea amateur."
    },
    visual:{primary:"#d9ff42",secondary:"#10151c",accent:"#7de3ff"},
    provenance:"confirmed"
  },

  realWorld:{
    country:"Argentina",province:"Neuquén",city:"San Patricio del Chañar",
    footballFormat:{playersOnField:6,totalSquad:14,status:"confirmed"},
    training:{status:"none",detail:"El equipo no realiza entrenamientos; actualmente juega partidos."},
    homeVenue:{
      id:"venue-andalhue-c1",name:"Complejo Andalhue",city:"San Patricio del Chañar",
      field:"Cancha 1",type:"rented",homeStatus:"usual-home-venue",provenance:"confirmed"
    },
    access:{
      modes:["caminando","bicicleta","auto","camioneta"],
      responsibility:"Cada jugador llega por sus propios medios.",
      provenance:"confirmed"
    },
    arrival:{
      target:"5 minutos antes",
      preMatch:["llegar","vestirse","calentar","jugar"],
      lockerRoom:false,
      gathering:"Sin vestuario. El grupo se reúne un momento antes del partido y vuelve a encontrarse después.",
      provenance:"confirmed"
    }
  },

  communication:{
    matchConfirmation:{
      channel:"grupo de WhatsApp",
      leadTime:"varios días antes",
      schedule:"martes y jueves",
      fixedTime:"20:00",
      venue:"Complejo Andalhue · Cancha 1",
      provenance:"confirmed"
    }
  },

  seasons:[{
    id:"season-2026",clubId:"club-9fc",name:"Temporada 2026",status:"active",
    start:"2026-01-01",end:"2026-12-31",
    objectives:[
      {id:"obj-team-01",type:"collective",title:"Jugar juntos y competir con compromiso",status:"active",principleIds:["principle-team-connection"]},
      {id:"obj-team-02",type:"collective",title:"Sostener una experiencia de equipo seria y divertida",status:"active",principleIds:["principle-team-connection"]}
    ],
    archive:{matches:[],milestones:[],notes:[]}
  }],

  staff:[
    {id:"staff-cap-01",name:"Sebastián Vásquez",role:"captain",scope:"team",status:"confirmed",message:"El capitán representa al grupo."},
    {id:"staff-vice-01",name:"Jesús Aravena",role:"vice-captain",scope:"team",status:"confirmed",message:"Segundo referente del grupo."},
    {id:"staff-coach-01",name:null,role:"coach",scope:"team",status:"pending",message:null}
  ],

  teamGovernance:{
    leadership:{captainId:"staff-cap-01",viceCaptainId:"staff-vice-01",coachId:null},
    decisionMaking:"Los jugadores hablan y acuerdan entre ellos mientras no haya DT designado.",
    teamSize:14,
    playersOnField:6,
    allPlayersPlay:true,
    rosterStatus:"14 integrantes declarados; identidades individuales pendientes de carga salvo los datos confirmados.",
    provenance:"confirmed"
  },

  conduct:{
    positiveCulture:["ambiente divertido","competencia","hablar entre jugadores","patear 2 o 3 al arquero como costumbre antes de jugar"],
    nonNegotiables:[
      "No fumar durante la concentración o preparación del partido.",
      "No irse de la concentración antes del partido.",
      "Cumplir con el pago de la cuota.",
      "No asistir lesionado.",
      "Si se confirma asistencia, presentarse.",
      "No jugar en el mismo horario con otro equipo.",
      "No presentarse con jean."
    ],
    provenance:"confirmed"
  },

  units:[
    {id:"unit-gk",name:"Arquero",order:1,positions:["GK"]},
    {id:"unit-defense",name:"Defensa",order:2,positions:["DEF"]},
    {id:"unit-midfield",name:"Mediocampo",order:3,positions:["MID","AM"]},
    {id:"unit-attack",name:"Ataque",order:4,positions:["FW"]}
  ],

  zones:[
    {id:"zone-defensive-third",name:"Zona defensiva",lane:"all",third:"defensive"},
    {id:"zone-middle-third",name:"Zona media",lane:"all",third:"middle"},
    {id:"zone-final-third",name:"Tres cuartos / zona de ataque",lane:"all",third:"final"},
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
    {id:"behavior-connect",name:"Conectar",phaseIds:["phase-progress","phase-transition-positive"],evidence:["pase","continuidad"]},
    {id:"behavior-finish",name:"Finalizar",phaseIds:["phase-finish"],evidence:["selección","definición","ocupación de área"]}
  ],

  principles:[
    {id:"principle-team-connection",name:"Conexión del equipo",phaseIds:["phase-progress","phase-transition-positive","phase-transition-negative"],unitIds:["unit-defense","unit-midfield","unit-attack"]},
    {id:"principle-pass-lines",name:"Líneas de pase",phaseIds:["phase-build","phase-progress"],unitIds:["unit-gk","unit-defense","unit-midfield"]},
    {id:"principle-compact-block",name:"Bloque compacto",phaseIds:["phase-organize"],unitIds:["unit-defense","unit-midfield"]},
    {id:"principle-close-center",name:"Cerrar el centro",phaseIds:["phase-organize","phase-press"],unitIds:["unit-defense","unit-midfield"]},
    {id:"principle-transition-press",name:"Reacción tras pérdida",phaseIds:["phase-transition-negative","phase-press"],unitIds:["unit-defense","unit-midfield","unit-attack"]},
    {id:"principle-depth",name:"Profundidad",phaseIds:["phase-progress","phase-finish","phase-transition-positive"],unitIds:["unit-attack"]}
  ],

  players:[
    {
      id:"p-10",number:7,name:"Elías",positions:["FW","AM"],archetype:"forward-creator",
      unitId:"unit-attack",status:"active",isCurrentUser:true,
      dominantFoot:"left",preferredRole:"delantero / tres cuartos",
      selfDescription:"Desequilibrante",
      strengths:["generar oportunidades"],
      developmentGoals:["ser mucho más rápido"],
      teamNeed:"Que el equipo le indique dónde pararse para poder jugar tranquilo."
    }
  ],

  roster:{
    declaredCount:14,
    registeredPlayers:1,
    pendingPlayerData:13,
    policy:"No inventar nombres, números, posiciones ni estadísticas de los 13 jugadores cuyos datos aún no fueron cargados."
  },

  archetypes:{
    goalkeeper:{label:"Arquero",focus:["seguridad","juego aéreo","inicio"]},
    defender:{label:"Defensor",focus:["duelo","cobertura","salida"]},
    midfielder:{label:"Mediocampista",focus:["orientación","conexión","ritmo"]},
    "forward-creator":{label:"Delantero desequilibrante",focus:["desequilibrio","generación de oportunidades","profundidad"]},
    "forward-finisher":{label:"Delantero finalizador",focus:["desmarque","definición","ocupación de área"]}
  },

  tacticalModels:[{
    id:"model-6v6-flex",name:"6 en cancha · modelo flexible",status:"active",
    note:"El equipo juega fútbol 6. La distribución exacta puede definirse en cada partido; no se inventa una formación no confirmada.",
    principles:{
      collective:["principle-team-connection","principle-pass-lines","principle-transition-press"],
      attack:["principle-depth"],
      defense:["principle-compact-block","principle-close-center"]
    },
    roles:{
      GK:"Seguridad e inicio",
      DEF:"Cobertura y salida",
      MID:"Conexión y equilibrio",
      AM:"Conexión entre líneas",
      FW:"Profundidad, desequilibrio y finalización"
    }
  }],

  tacticalRoles:[
    {id:"role-fw",position:"FW",phaseIds:["phase-progress","phase-finish","phase-transition-negative"],behaviorIds:["behavior-fix","behavior-finish","behavior-press"],principleIds:["principle-depth","principle-transition-press"]},
    {id:"role-am",position:"AM",phaseIds:["phase-progress","phase-transition-positive"],behaviorIds:["behavior-scan","behavior-connect","behavior-support"],principleIds:["principle-team-connection","principle-pass-lines"]},
    {id:"role-mid",position:"MID",phaseIds:["phase-progress","phase-organize","phase-transition-negative"],behaviorIds:["behavior-scan","behavior-support","behavior-cover"],principleIds:["principle-team-connection","principle-close-center"]},
    {id:"role-def",position:"DEF",phaseIds:["phase-build","phase-organize"],behaviorIds:["behavior-cover","behavior-connect"],principleIds:["principle-compact-block","principle-pass-lines"]},
    {id:"role-gk",position:"GK",phaseIds:["phase-build","phase-organize"],behaviorIds:["behavior-receive","behavior-support"],principleIds:["principle-pass-lines"]}
  ],

  playerProfiles:[{
    playerId:"p-10",seasonId:"season-2026",archetype:"forward-creator",role:"Delantero / tres cuartos",unitId:"unit-attack",
    mission:"Desequilibrar, generar oportunidades y ocupar una zona de ataque clara para poder jugar tranquilo.",
    responsibilities:{
      withBall:["atacar el espacio","buscar el desequilibrio","generar oportunidades"],
      withoutBall:["mantener una posición clara","dar profundidad","ayudar a orientar la presión"],
      transition:["reaccionar después de perder la pelota","volver a ofrecerse","mantener conexión con el equipo"]
    },
    behaviorIds:["behavior-fix","behavior-finish","behavior-press","behavior-support"],
    principleIds:["principle-depth","principle-team-connection","principle-transition-press"],
    zones:["zone-final-third","zone-halfspace-left","zone-halfspace-right"],
    development:{
      technique:["definición","control en carrera"],
      tactics:["ubicación en tres cuartos","timing de desmarque"],
      physical:["velocidad"],
      psychosocial:["jugar tranquilo","confianza para decidir"]
    },
    dataProvenance:{
      dominantFoot:"self-report",
      preferredRole:"self-report",
      strengths:"self-assessment",
      developmentGoals:"self-assessment",
      teamNeed:"self-report"
    }
  }],

  trainingLibrary:[],

  matches:[
    {
      id:"match-tuesday-transportistas",seasonId:"season-2026",status:"recurring",
      schedule:{day:"martes",time:"20:00",fixed:true,confirmation:"varios días antes por grupo de WhatsApp"},
      home:"club-9fc",away:"transportistas-fc",opponentName:"Transportistas FC",
      venueId:"venue-andalhue-c1",venue:"Complejo Andalhue · Cancha 1",field:"Cancha 1",
      arrival:"5 minutos antes",transport:"propio",
      preMatch:["vestirse","calentar","jugar"],
      lockerRoom:false,captainId:"p-vasquez",formationId:"model-6v6-flex",
      plan:{objectiveId:"obj-team-01",principleIds:["principle-team-connection","principle-transition-press"],unitTasks:{}},
      playerMissions:{"p-10":"Delantero / tres cuartos: desequilibrar, generar oportunidades y recibir una ubicación clara del equipo."},
      postMatch:{teamReview:"reunión informal después del partido",playerReviews:[],stats:[]},
      provenance:"confirmed"
    },
    {
      id:"match-thursday-juan-pablo",seasonId:"season-2026",status:"recurring",
      schedule:{day:"jueves",time:"20:00",fixed:true,confirmation:"varios días antes por grupo de WhatsApp"},
      home:"club-9fc",away:"juan-pablo-fc",opponentName:"Juan Pablo FC",
      venueId:"venue-andalhue-c1",venue:"Complejo Andalhue · Cancha 1",field:"Cancha 1",
      arrival:"5 minutos antes",transport:"propio",
      preMatch:["vestirse","calentar","jugar"],
      lockerRoom:false,captainId:"p-vasquez",formationId:"model-6v6-flex",
      plan:{objectiveId:"obj-team-01",principleIds:["principle-team-connection","principle-transition-press"],unitTasks:{}},
      playerMissions:{"p-10":"Delantero / tres cuartos: desequilibrar, generar oportunidades y recibir una ubicación clara del equipo."},
      postMatch:{teamReview:"reunión informal después del partido",playerReviews:[],stats:[]},
      provenance:"confirmed"
    }
  ],

  experience:{
    promise:"Hacer sentir profesional la experiencia sin fingir que el fútbol es profesional.",
    before:{
      information:"El jugador sabe con anticipación que juega martes o jueves a las 20:00.",
      confirmation:"La convocatoria se confirma por el grupo de WhatsApp varios días antes.",
      arrival:"Llega por sus propios medios al Complejo Andalhue, Cancha 1, cinco minutos antes.",
      preparation:"Se viste, calienta y juega. No hay vestuario ni entrenamiento previo."
    },
    during:{
      culture:"Ambiente divertido y competitivo.",
      ritual:"Antes de jugar existe la costumbre de patear 2 o 3 veces al arquero.",
      teamLeadership:"Sebastián Vásquez es capitán; Jesús Aravena es subcapitán; no hay DT designado."
    },
    after:{
      gathering:"El grupo vuelve a reunirse después del partido.",
      records:"Todavía no se registran goles, tarjetas, minutos ni otros datos estadísticos.",
      history:"La historia del equipo debe construirse desde los partidos reales, no desde estadísticas inventadas."
    }
  },

  stats:{
    provenance:["registered","self-assessment","coach-assessment","estimate","pending"],
    policy:"No mostrar una medición como profesional si no existe fuente o registro. Actualmente no hay registro de goles ni estadísticas de partido.",
    fields:["matches","starts","minutes","goals","assists","cards","callups","results"],
    status:"pending-real-registration"
  }
};