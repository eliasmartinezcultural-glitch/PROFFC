/* YO FUTBOLISTA — DOMAIN ENGINE v1.3
   Consulta, normaliza y valida el dominio futbolístico. No controla la UI.
*/
window.YF_ENGINE=(()=>{\n /* v1.4: liderazgo real puede pertenecer a staff y no requiere ser un jugador registrado. */
 const D=window.YF_DATA;
 const index=(items,key="id")=>Object.fromEntries((items||[]).map(x=>[x[key],x]));
 const players=index(D.players),seasons=index(D.seasons),models=index(D.tacticalModels),units=index(D.units),
       zones=index(D.zones),phases=index(D.phases),behaviors=index(D.behaviors),principles=index(D.principles),
       archetypes=D.archetypes,staff=index(D.staff);
 const currentSeason=()=>seasons[D.club.seasonId];
 const currentPlayer=()=>D.players.find(p=>p.isCurrentUser)||D.players[0];
 const currentProfile=()=>D.playerProfiles.find(p=>p.playerId===currentPlayer().id&&p.seasonId===D.club.seasonId);
 const nextMatch=()=>D.matches.find(m=>m.status==="upcoming"&&m.seasonId===D.club.seasonId);
 const formation=()=>models[nextMatch()?.formationId]||D.tacticalModels[0];
 const roleFor=position=>formation().roles[position]||formation().roles.CM;
 const playerLabel=p=>archetypes[p.archetype]?.label||p.archetype;
 const byIds=(table,ids)=>[...(ids||[])].map(id=>table[id]).filter(Boolean);
 const unique=a=>[...new Set(a||[])];
 const assert=(ok,msg)=>{if(!ok)throw new Error("YF DATA: "+msg)};
 const assertIds=(ids,table,label)=>{(ids||[]).forEach(id=>assert(table[id],label+" referencia inexistente: "+id));};

 function validate(){
  assert(D.schema==="yo-futbolista/1.3","schema inválido");
  assert(D.club.id&&D.club.name&&D.club.seasonId,"club incompleto");
  assert(seasons[D.club.seasonId],"temporada activa inexistente");
  assert(Object.values(seasons).filter(s=>s.status==="active").length===1,"debe existir una sola temporada activa");
  const numbers=new Set();
  D.players.forEach(p=>{
    assert(p.id&&Number.isInteger(p.number)&&p.name,"jugador inválido");
    assert(!numbers.has(p.number),"número de camiseta duplicado: "+p.number); numbers.add(p.number);
    assert(units[p.unitId],"unidad inexistente para jugador: "+p.id);
    assertIds(p.positions||[],{GK:1,RB:1,LB:1,CB:1,DM:1,CM:1,AM:1,RW:1,LW:1,ST:1},"posición");
    assert(archetypes[p.archetype],"arquetipo inexistente para jugador: "+p.id);
  });
  D.playerProfiles.forEach(p=>{
    assert(players[p.playerId]&&seasons[p.seasonId],"perfil sin referencia");
    assert(units[p.unitId],"unidad inexistente en perfil: "+p.playerId);
    assert(archetypes[p.archetype],"arquetipo inexistente en perfil: "+p.playerId);
    assertIds(p.behaviorIds,behaviors,"comportamiento");
    assertIds(p.principleIds,principles,"principio");
    assertIds(p.zones,zones,"zona");
  });
  D.principles.forEach(p=>{
    assertIds(p.phaseIds,phases,"fase de principio");
    assertIds(p.unitIds,units,"unidad de principio");
  });
  D.behaviors.forEach(b=>assertIds(b.phaseIds,phases,"fase de comportamiento"));
  D.tacticalRoles.forEach(r=>{
    assertIds(r.phaseIds,phases,"fase de rol");
    assertIds(r.behaviorIds,behaviors,"comportamiento de rol");
    assertIds(r.principleIds,principles,"principio de rol");
  });
  D.tacticalModels.forEach(m=>{
    Object.values(m.principles||{}).flat().forEach(id=>assert(principles[id],"principio táctico inexistente: "+id));
  });
  D.trainingLibrary.forEach(t=>{
    assert(seasons[t.seasonId]&&t.phases?.length,"entrenamiento incompleto");
    assertIds(t.phaseIds,phases,"fase de entrenamiento");
    assertIds(t.behaviorIds,behaviors,"comportamiento de entrenamiento");
    assertIds(t.principleIds,principles,"principio de entrenamiento");
    assertIds(t.unitIds,units,"unidad de entrenamiento");
    if(t.playerId) assert(players[t.playerId],"jugador de entrenamiento inexistente: "+t.playerId);
  });
  D.matches.forEach(m=>{
    assert(seasons[m.seasonId]&&models[m.formationId],"partido sin referencias");
    assert(staff[m.captainId],"capitán de partido inexistente");
    Object.keys(m.playerMissions||{}).forEach(id=>assert(players[id],"misión de jugador inexistente: "+id));
    assertIds(m.plan?.principleIds,principles,"principio de plan");
    Object.keys(m.plan?.unitTasks||{}).forEach(id=>assert(units[id],"unidad de tarea inexistente: "+id));
    assert(m.postMatch&&Array.isArray(m.postMatch.playerReviews)&&Array.isArray(m.postMatch.stats),"estructura post-partido incompleta");
  });
  return {
    ok:true,players:D.players.length,seasons:D.seasons.length,units:D.units.length,zones:D.zones.length,
    phases:D.phases.length,behaviors:D.behaviors.length,principles:D.principles.length,
    trainings:D.trainingLibrary.length,matches:D.matches.length
  };
 }

 function getClub(){return D.club}
 function getSeason(id=D.club.seasonId){return seasons[id]}
 function getUnit(id){return units[id]}
 function getZone(id){return zones[id]}
 function getPhase(id){return phases[id]}
 function getBehavior(id){return behaviors[id]}
 function getPrinciple(id){return principles[id]}
 function getPlayer(id){return players[id]}
 function getPlayersByUnit(unitId){return D.players.filter(p=>p.unitId===unitId)}
 function getPlayerProfile(playerId=currentPlayer().id,seasonId=D.club.seasonId){
   return D.playerProfiles.find(p=>p.playerId===playerId&&p.seasonId===seasonId);
 }
 function getPlayerBehaviors(playerId=currentPlayer().id){
   const p=getPlayerProfile(playerId); return byIds(behaviors,p?.behaviorIds);
 }
 function getPlayerPrinciples(playerId=currentPlayer().id){
   const p=getPlayerProfile(playerId); return byIds(principles,p?.principleIds);
 }
 function getTrainingForPlayer(playerId=currentPlayer().id){
   return D.trainingLibrary.filter(t=>t.playerId===playerId||t.unitIds?.includes(players[playerId]?.unitId));
 }
 function getMatchPlan(match=nextMatch()){
   if(!match)return null;
   return {
     match,
     objective:D.seasons.find(s=>s.id===match.seasonId)?.objectives.find(o=>o.id===match.plan?.objectiveId)||null,
     principles:byIds(principles,match.plan?.principleIds),
     units:Object.entries(match.plan?.unitTasks||{}).map(([id,tasks])=>({unit:units[id],tasks}))
   };
 }
 function getHistory(seasonId=D.club.seasonId){
   const season=getSeason(seasonId);
   return {season,matches:D.matches.filter(m=>m.seasonId===seasonId),archive:season?.archive||{matches:[],milestones:[],notes:[]}};
 }
 function getPlayerTacticalContext(playerId=currentPlayer().id){
   const p=getPlayer(playerId),profile=getPlayerProfile(playerId),model=formation();
   const positions=p?.positions||[];
   const primary=positions[0];
   const role=D.tacticalRoles.find(r=>r.position===primary)||
              D.tacticalRoles.find(r=>r.position==="CM");
   return {
     player:p,unit:getUnit(p?.unitId),profile,archetype:archetypes[p?.archetype],
     zones:byIds(zones,profile?.zones),role,
     behaviors:byIds(behaviors,role?.behaviorIds),
     principles:unique([...(profile?.principleIds||[]),...(role?.principleIds||[])]).map(id=>principles[id]).filter(Boolean),
     formation:model
   };
 }
 function snapshot(){
  const p=currentPlayer(),profile=currentProfile(),match=nextMatch(),model=formation();
  return {
    club:D.club,season:currentSeason(),player:p,playerLabel:playerLabel(p),profile,match,
    formation:model,training:D.trainingLibrary[0],staff:D.staff,
    squad:D.players.map(x=>({id:x.id,number:x.number,name:x.name,role:playerLabel(x)}))
  };
 }
 return {
   validate,snapshot,currentPlayer,currentProfile,nextMatch,formation,roleFor,playerLabel,
   getClub,getSeason,getUnit,getZone,getPhase,getBehavior,getPrinciple,getPlayer,getPlayersByUnit,
   getPlayerProfile,getPlayerBehaviors,getPlayerPrinciples,getTrainingForPlayer,getMatchPlan,getHistory,getPlayerTacticalContext
 };
})();
window.YF_ENGINE.validate();