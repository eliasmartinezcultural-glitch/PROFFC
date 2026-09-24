/* YO FUTBOLISTA — DOMAIN ENGINE v1.2
   Normaliza, valida y consulta. No controla la UI.
*/
window.YF_ENGINE=(()=>{
 const D=window.YF_DATA;
 const index=(items,key="id")=>Object.fromEntries(items.map(x=>[x[key],x]));
 const players=index(D.players),seasons=index(D.seasons),models=index(D.tacticalModels),archetypes=D.archetypes;
 const currentSeason=()=>seasons[D.club.seasonId];
 const currentPlayer=()=>D.players.find(p=>p.isCurrentUser)||D.players[0];
 const currentProfile=()=>D.playerProfiles.find(p=>p.playerId===currentPlayer().id&&p.seasonId===D.club.seasonId);
 const nextMatch=()=>D.matches.find(m=>m.status==="upcoming"&&m.seasonId===D.club.seasonId);
 const formation=()=>models[nextMatch()?.formationId]||D.tacticalModels[0];
 const roleFor=position=>formation().roles[position]||formation().roles.CM;
 const playerLabel=p=>archetypes[p.archetype]?.label||p.archetype;
 const assert=(ok,msg)=>{if(!ok)throw new Error("YF DATA: "+msg)};
 function validate(){
  assert(D.schema==="yo-futbolista/1.2","schema inválido");
  assert(D.club.name&&D.club.seasonId,"club incompleto");
  assert(seasons[D.club.seasonId],"temporada activa inexistente");
  D.players.forEach(p=>assert(p.id&&Number.isInteger(p.number)&&p.name,"jugador inválido"));
  D.playerProfiles.forEach(p=>assert(players[p.playerId]&&seasons[p.seasonId],"perfil sin referencia"));
  D.matches.forEach(m=>assert(seasons[m.seasonId]&&models[m.formationId],"partido sin referencias"));
  D.trainingLibrary.forEach(t=>assert(seasons[t.seasonId]&&t.phases?.length,"entrenamiento incompleto"));
  return {ok:true,players:D.players.length,seasons:D.seasons.length,trainings:D.trainingLibrary.length,matches:D.matches.length};
 }
 function snapshot(){
  const p=currentPlayer(),profile=currentProfile(),match=nextMatch(),model=formation();
  return {club:D.club,season:currentSeason(),player:p,playerLabel:playerLabel(p),profile,match,formation:model,training:D.trainingLibrary[0],staff:D.staff,squad:D.players.map(x=>({id:x.id,number:x.number,name:x.name,role:playerLabel(x)}))};
 }
 return {validate,snapshot,currentPlayer,currentProfile,nextMatch,formation,roleFor,playerLabel};
})();
window.YF_ENGINE.validate();