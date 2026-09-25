window.YF_DATA={
schema:"yo-futbolista/3.0",
product:{id:"yo-futbolista",name:"YO FUTBOLISTA",promise:"Mi equipo. Mi partido. Mi fútbol."},
club:{id:"sin9fc",name:"SIN 9 FC",shortName:"SIN 9",city:"San Patricio del Chañar",province:"Neuquén",country:"Argentina",sport:"Fútbol 6",colors:{primary:"#1769ff",secondary:"#05070b"},crest:{status:"pending"}},
season:{id:"interbarrial-clausura-2026",competition:"Interbarrial",stage:"Clausura",year:2026,status:"active"},
venue:{id:"andalhue-cancha-1",name:"Complejo Andalhue",detail:"Cancha 1",status:"confirmed"},
leadership:{captain:"sebastian-vasquez",viceCaptain:null},
teamStatus:{training:"No informado",participation:"Todos los jugadores juegan",matchConfirmation:"Por grupo de WhatsApp"},
players:[
{id:"agustin-gonzalez",name:"Agustín González",number:4,position:"Mediocampista",status:"active"},
{id:"agustin-jara",name:"Agustín Jara",position:"Mediocampista",status:"active"},
{id:"david-ayala",name:"David Ayala",position:"Mediocampista",status:"active"},
{id:"rodrigo-henriquez",name:"Rodrigo Henríquez",position:"Defensor central",status:"active"},
{id:"nicolas-necul",name:"Nicolás Necul",position:"Defensor central",status:"active"},
{id:"elias-martinez",name:"Elías Martínez",position:"Delantero",status:"active"},
{id:"sebastian-vasquez",name:"Sebastián Vásquez",position:"Defensor central",status:"active"},
{id:"manuel-ortiz",name:"Manuel Ortiz",position:"Delantero",status:"active"},
{id:"jesus-aravena",name:"Jesús Aravena",position:"Arquero",status:"active"},
{id:"lucas-taboada",name:"Lucas Taboada",position:"Mediocampista",status:"active"},
{id:"ivo-hawrylak",name:"Ivo Hawrylak",position:"Delantero",status:"active"},
{id:"nelson-mamani",name:"Nelson Mamani",position:"Defensor central",status:"active"},
{id:"axel-campestrini",name:"Axel Campestrini",position:"Delantero",status:"active"}
],
playerProfiles:{
"elias-martinez":{foot:"Zurdo",role:"Delantero",archetype:"Desequilibrante",strength:"Generar oportunidades",developmentGoal:"Ganar velocidad",teamNeed:"Posicionamiento claro para jugar con calma"}
},
recurringSchedule:[
{id:"tuesday",day:"MARTES",time:"20:00",opponentId:"transportistas-fc",matchId:"tue-transportistas"},
{id:"thursday",day:"JUEVES",time:"20:00",opponentId:"juan-pablo-fc",matchId:"thu-juan-pablo"}
],
opponents:[
{id:"transportistas-fc",name:"Transportistas FC"},
{id:"juan-pablo-fc",name:"Juan Pablo FC"}
],
matches:[
{id:"tue-transportistas",day:"MARTES",time:"20:00",opponentId:"transportistas-fc",venueId:"andalhue-cancha-1",status:"fixed",confirmation:"fixed-weekly"},
{id:"thu-juan-pablo",day:"JUEVES",time:"20:00",opponentId:"juan-pablo-fc",venueId:"andalhue-cancha-1",status:"fixed",confirmation:"fixed-weekly"}
],
matchProtocol:{arrival:"5 minutos antes",transport:"Medios propios",lockerRoom:"No disponible",preMatch:["Llegar","Cambiarse","Calentar","Jugar"],habit:"2 o 3 tiros al arquero antes de jugar",atmosphere:["Divertido","Competitivo"]},
rules:[
{id:"r1",text:"No fumar durante la concentración."},{id:"r2",text:"No salir de concentración."},{id:"r3",text:"No dejar cuotas impagas."},{id:"r4",text:"No asistir lesionado."},{id:"r5",text:"No confirmar y no presentarse."},{id:"r6",text:"No jugar otro equipo en el mismo horario."},{id:"r7",text:"No llegar en jeans."}
],
dataPolicy:{inventStats:false,inventPlayers:false,inventNumbers:false,inventResults:false,inventFormation:false,unknownState:"Mostrar como no informado"},matchCycle:[{id:"confirmed",label:"CONFIRMADO"},{id:"prepare",label:"PREPARAR"},{id:"arrival",label:"LLEGAR"},{id:"warmup",label:"CALENTAR"},{id:"play",label:"JUGAR"},{id:"close",label:"CERRAR"}],playerState:{current:"disponible",source:"manual"},convocations:[],history:{seasonId:"interbarrial-clausura-2026",entries:[]},teamIdentity:{motto:"Mi equipo. Mi partido. Mi fútbol.",crestStatus:"En diseño",values:["Compañerismo","Compromiso","Competencia"]}
,
clubProfile:{
  founded:"No informado", identity:"Equipo de amigos que compite como club", homeGround:"Complejo Andalhue · Cancha 1", colorsLabel:"Azul · Negro", crestMeaning:"Identidad en construcción"
},
clubSections:["INICIO","PARTIDOS","EQUIPO","TEMPORADA","HISTORIA"],
seasonMetrics:{matches:"No informado",wins:"No informado",draws:"No informado",losses:"No informado",goalsFor:"No informado",goalsAgainst:"No informado",points:"No informado"},
teamRoles:{captain:"sebastian-vasquez",viceCaptain:null,staff:[]},
matchExperience:{headline:"Día de partido",subline:"Todo empieza antes de entrar a la cancha.",stages:["Convocatoria","Preparación","Llegada","Calentamiento","Partido","Cierre"]},
media:{heroStatus:"placeholder",galleryStatus:"No informada"}
};