"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6457],{6457:(K,k,a)=>{a.r(k),a.d(k,{GameRingPageModule:()=>q});var e=a(6738),d=a(6895),Z=a(4719),s=a(5616),h=a(9485),u=a(8359),p=a(199),b=a(2986),v=a(5447),w=a(5529),x=a(2198);let y=(()=>{class o{constructor(){this.pokemonShareInit={name:"",image:"",sprite:"",type:""},this.weapons={fire:{weakTo:"water",strongTo:"grass"},water:{weakTo:"grass",strongTo:"fire"},grass:{weakTo:"fire",strongTo:"water"}},this.contador=0,this.finCiclo=new w.xQ,this.delay=t=>new Promise(n=>setTimeout(n,t))}get ciclo(){return this.finCiclo.pipe((0,x.h)(t=>2===t))}compareWinner(t,n){return this.weapons[t].strongTo===n?{mensaje:"gana",emoji:"\u2b55"}:this.weapons[t].weakTo===n?{mensaje:"pierde",emoji:"\u274c"}:{mensaje:"empate",emoji:"="}}setCiclo(t){this.contador+=t,this.finCiclo.next(this.contador)}restartCount(){this.contador=0}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var T=a(529),S=a(3009),R=a(6688),C=a(3489),g=a(5430),f=a(1177);class G{constructor(i){this.resultSelector=i}call(i,t){return t.subscribe(new I(i,this.resultSelector))}}class I extends C.L{constructor(i,t,n=Object.create(null)){super(i),this.resultSelector=t,this.iterators=[],this.active=0,this.resultSelector="function"==typeof t?t:void 0}_next(i){const t=this.iterators;(0,R.k)(i)?t.push(new D(i)):t.push("function"==typeof i[g.hZ]?new O(i[g.hZ]()):new A(this.destination,this,i))}_complete(){const i=this.iterators,t=i.length;if(this.unsubscribe(),0!==t){this.active=t;for(let n=0;n<t;n++){let r=i[n];r.stillUnsubscribed?this.destination.add(r.subscribe()):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const i=this.iterators,t=i.length,n=this.destination;for(let c=0;c<t;c++){let m=i[c];if("function"==typeof m.hasValue&&!m.hasValue())return}let r=!1;const l=[];for(let c=0;c<t;c++){let m=i[c],P=m.next();if(m.hasCompleted()&&(r=!0),P.done)return void n.complete();l.push(P.value)}this.resultSelector?this._tryresultSelector(l):n.next(l),r&&n.complete()}_tryresultSelector(i){let t;try{t=this.resultSelector.apply(this,i)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}class O{constructor(i){this.iterator=i,this.nextResult=i.next()}hasValue(){return!0}next(){const i=this.nextResult;return this.nextResult=this.iterator.next(),i}hasCompleted(){const i=this.nextResult;return Boolean(i&&i.done)}}class D{constructor(i){this.array=i,this.index=0,this.length=0,this.length=i.length}[g.hZ](){return this}next(i){const t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class A extends f.Ds{constructor(i,t,n){super(i),this.parent=t,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[g.hZ](){return this}next(){const i=this.buffer;return 0===i.length&&this.isComplete?{value:null,done:!0}:{value:i.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(i){this.buffer.push(i),this.parent.checkIterators()}subscribe(){return(0,f.ft)(this.observable,new f.IY(this))}}var N=a(1086),j=a(1709),J=a(4850),U=a(2340);let Y=(()=>{class o{constructor(t){this.http=t,this.pokemonShareTemplate={name:"",image:"",sprite:"",type:""},this.types=["water","fire","grass"],this.isShowed=!1}getRandomType(){return this.types[Math.floor(Math.random()*this.types.length)]}selectRandomPokemon(t){const n=t.pokemon.length,r=Math.floor(Math.random()*n);return t.pokemon[r].pokemon.url}getPokemonByTypee(t){return this.http.get(U.N.pokeUrlBase+"type/"+t,{headers:(new T.WM).set("Accept","applicaion/json")}).pipe((0,j.zg)(n=>function M(...o){const i=o[o.length-1];return"function"==typeof i&&o.pop(),(0,S.n)(o,void 0).lift(new G(i))}((0,N.of)(n),this.http.get(this.selectRandomPokemon(n)))),(0,J.U)(([n,r])=>({type:n.name,name:r.name,sprite:r.sprites.front_default,image:r.sprites.other["official-artwork"].front_default,...r})))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(T.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const _=["swipeBigPokeball"];function z(o,i){1&o&&e._UZ(0,"ion-img",4)}function B(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-img",5),e.NdJ("load",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.cargada())}),e.qZA()}if(2&o){const t=e.oxw();let n;e.Q6J("src",null!==(n=t.pokemonData.image)&&void 0!==n?n:"")}}p.ZP.use([p.VP]),p.ZP.use([p.eZ]);let Q=(()=>{class o{constructor(t,n,r){this.pokemonService=t,this.soundsService=n,this.gameRingServide=r,this.tipoRealPokemon=new e.vpe(!0),this.nombrePokemon=new e.vpe(!0),this.spritePokemon=new e.vpe(!0),this.pokemonDatos=new e.vpe(!0),this.pokemonData=this.gameRingServide.pokemonShareInit,this.delay=l=>new Promise(c=>setTimeout(c,l))}ngOnChanges(t){for(const n in t)if(t.hasOwnProperty(n))switch(n){case"pokeType":"string"!=typeof this.pokeType&&this.pokeType>=1&&(this.pokeType=this.pokemonService.getRandomType()),this.pokeType&&this.getPokemonByType(this.pokeType);break;case"ordenTapar":"esconder"===this.ordenTapar&&this.voltear()}}cargada(){console.log("imagen cargada")}emitirDatosPokemon(){this.pokemonDatos.emit(this.pokemonData)}getPokemonByType(t){this.pokemonService.getPokemonByTypee(t).subscribe({next:n=>{if(!this.resourcesOk(n))return this.getPokemonByType(this.pokeType),!1;this.pokemonData=n,this.slideNext(),this.emitirDatosPokemon(),this.soundsService.playWooshSound(),this.gameRingServide.setCiclo(1)}})}resourcesOk(t){return t.sprite&&t.image}voltear(){try{this.slidePrev(),this.delay(200).then(()=>{this.resetValues(),this.gameRingServide.restartCount()})}catch{}}slideNext(){this.swiper.swiperRef.slideNext(500)}slidePrev(){this.swiper.swiperRef.slidePrev(200)}resetValues(){this.pokemonData=this.gameRingServide.pokemonShareInit,this.pokemonDatos.emit(this.pokemonData)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Y),e.Y36(v.d),e.Y36(y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-pokeball"]],viewQuery:function(t,n){if(1&t&&e.Gf(_,5),2&t){let r;e.iGM(r=e.CRH())&&(n.swiper=r.first)}},inputs:{pokeType:"pokeType",typoIngresado:"typoIngresado",ordenTapar:"ordenTapar"},outputs:{tipoRealPokemon:"tipoRealPokemon",nombrePokemon:"nombrePokemon",spritePokemon:"spritePokemon",pokemonDatos:"pokemonDatos"},features:[e.TTD],decls:5,vars:2,consts:[[1,"pokeballSelf"],["effect","flip",1,"mySwiper",2,"padding","0","margin","0",3,"virtual","allowTouchMove"],["swipeBigPokeball",""],["swiperSlide","","style","padding: 0; margin: 0;"],["src","https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",2,"width","100px","height","100px","padding","0","margin","0"],[2,"min-width","170px","min-height","170px","padding","0","margin","0",3,"src","load"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"swiper",1,2),e.YNc(3,z,1,0,"ng-template",3),e.YNc(4,B,1,1,"ng-template",3),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("virtual",!0)("allowTouchMove",!1))},dependencies:[s.Xz,h.nF,h.YC],styles:[".pokeballSelf{display:inline-block;min-height:200px;margin:auto}.swiper{width:80px;height:80px;padding:5px}.swiper-slide{width:80px;height:80px;background-position:center;background-size:cover}.swiper-slide img{width:100%}.mySwiper{animation:rotation 1s 1 ease-out}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}to{transform:rotate(719deg)}}\n"],encapsulation:2}),o})();function F(o,i){if(1&o&&(e.TgZ(0,"ion-card-title",14),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij("Enemigo ",t.pokemonRival.name," ")}}function V(o,i){if(1&o&&e._UZ(0,"img",24),2&o){const t=e.oxw();e.s9C("src",t.pokemonJugador.sprite,e.LSH)}}function L(o,i){if(1&o&&e._UZ(0,"img",24),2&o){const t=e.oxw();e.s9C("src",t.pokemonRival.sprite,e.LSH)}}function W(o,i){if(1&o&&(e.TgZ(0,"ion-card-title",14),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij("Jugador ",t.pokemonJugador.name," ")}}p.ZP.use([p.eZ]);const E=[{path:"",component:(()=>{class o{constructor(t,n,r){this.soundsService=t,this.gameRingService=n,this.router=r,this.random=0,this.pokemonRival=this.gameRingService.pokemonShareInit,this.pokemonJugador=this.gameRingService.pokemonShareInit,this.delay=l=>new Promise(c=>setTimeout(c,l))}ngOnInit(){this.iniciarCiclo()}ngAfterViewInit(){this.soundsService.playMusicBackground("musica"),this.soundsService.playPikachuSound()}ngOnDestroy(){this.soundsService.toggleMusic()}iniciarCiclo(){this.gameRingService.restartCount(),this.esconderPokemons="esconder",this.tipoSeleccionado="",this.delay(2e3).then(()=>{this.esconderPokemons="esperar",this.voltearEnemigo(),this.delay(900).then(()=>{try{this.toggleOpciones(!0)}catch{}})})}doRefresh(t){this.esconderPokemons="esconder",setTimeout(()=>{this.ngOnInit(),this.router.navigate(["batalla"]),t.target.complete()},100)}tipoSelected(t){const n=document.querySelector(".comparador");this.toggleOpciones(!1),this.tipoSeleccionado=t,this.gameRingService.ciclo.pipe((0,b.q)(1)).subscribe({next:r=>{if(console.log(r),2!==r)return!1;this.delay(1e3).then(()=>{const l=this.gameRingService.compareWinner(this.tipoSeleccionado,this.pokemonRival.type);n.textContent=l.emoji,this.soundsService.playSound(l.mensaje),this.delay(1e3).then(()=>{this.esperarParaIniciar(n)})})}})}voltearEnemigo(){this.random++}iniciarContador(){document.querySelector("#cronometro")}toggleOpciones(t){const n=document.querySelector("#footerEleccion");return t?n.classList.remove("no-click"):n.classList.add("no-click")}esperarParaIniciar(t){this.delay(1200).then(()=>{t.textContent="VS",this.iniciarCiclo()})}toggleMusic(){this.soundsService.toggleMusic()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.d),e.Y36(y),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-game-ring"]],decls:67,vars:8,consts:[["slot","start"],["defaultHref","home"],["slot","end","fill","clear",2,"font-size","1.3em",3,"click"],["scroll-y","false",2,"position","relative"],["slot","fixed",3,"ionRefresh"],["id","contenidoArena"],[1,"contenedorArena"],[1,"arena","enemigoPokeball"],["class","ion-text-center titulos",4,"ngIf"],[1,"pokeballTarjeta"],[1,"pokeballsGroup"],["no-lines","",1,"pokeballColumn"],[3,"pokeType","ordenTapar","pokemonDatos"],[1,"centroArena"],[1,"ion-text-center","titulos"],[2,"display","none"],[1,"pokeballsGroup",2,"display","none"],[1,"pokeballColumn"],["alt","imagen","class","spriteCentro",3,"src",4,"ngIf"],[1,"comparador"],[1,"arena","jugadorPokeball"],["id","footerEleccion",1,"no-click"],[1,"ion-activatable","ripple-parent",3,"click"],[1,"tipoEmoji"],["alt","imagen",1,"spriteCentro",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Zona de batalla"),e.qZA(),e.TgZ(6,"ion-button",2),e.NdJ("click",function(){return n.toggleMusic()}),e._uU(7,"\u{1f50a}"),e.qZA()()(),e.TgZ(8,"ion-content",3)(9,"ion-refresher",4),e.NdJ("ionRefresh",function(l){return n.doRefresh(l)}),e._UZ(10,"ion-refresher-content"),e.qZA(),e.TgZ(11,"div",5)(12,"div",6)(13,"ion-card",7)(14,"ion-card-header"),e.YNc(15,F,2,1,"ion-card-title",8),e.qZA(),e.TgZ(16,"ion-card-content",9)(17,"ion-grid")(18,"ion-row",10)(19,"ion-col",11),e._UZ(20,"br"),e.TgZ(21,"app-pokeball",12),e.NdJ("pokemonDatos",function(l){return n.pokemonRival=l}),e.qZA()()()()()(),e.TgZ(22,"ion-card",13)(23,"ion-card-header"),e._UZ(24,"ion-card-title",14),e.qZA(),e.TgZ(25,"ion-card-content",9)(26,"ion-grid"),e._UZ(27,"ion-row",15),e.TgZ(28,"ion-row",16),e._UZ(29,"ion-col",11),e.qZA(),e.TgZ(30,"ion-row",10)(31,"ion-col",17),e.YNc(32,V,1,1,"img",18),e.qZA(),e.TgZ(33,"ion-col",17)(34,"ion-text",19),e._uU(35," VS "),e.qZA()(),e.TgZ(36,"ion-col",17),e.YNc(37,L,1,1,"img",18),e.qZA()()()()(),e.TgZ(38,"ion-card",20)(39,"ion-card-header"),e.YNc(40,W,2,1,"ion-card-title",8),e.qZA(),e.TgZ(41,"ion-card-content",9)(42,"ion-grid")(43,"ion-row",10)(44,"ion-col",11),e._UZ(45,"br"),e.TgZ(46,"app-pokeball",12),e.NdJ("pokemonDatos",function(l){return n.pokemonJugador=l}),e.qZA()()()()()()(),e.TgZ(47,"ion-footer",21)(48,"ion-toolbar")(49,"ion-row",10)(50,"ion-col")(51,"div",22),e.NdJ("click",function(){return n.tipoSelected("water")}),e.TgZ(52,"h3",23),e._uU(53,"\u{1f30a}"),e.qZA(),e._UZ(54,"ion-ripple-effect"),e.qZA()(),e.TgZ(55,"ion-col")(56,"div")(57,"div",22),e.NdJ("click",function(){return n.tipoSelected("fire")}),e.TgZ(58,"h3",23),e._uU(59,"\u{1f525}"),e.qZA(),e._UZ(60,"ion-ripple-effect"),e.qZA()()(),e.TgZ(61,"ion-col")(62,"div")(63,"div",22),e.NdJ("click",function(){return n.tipoSelected("grass")}),e.TgZ(64,"h3",23),e._uU(65,"\u{1f33f}"),e.qZA(),e._UZ(66,"ion-ripple-effect"),e.qZA()()()()()()()()),2&t&&(e.xp6(15),e.Q6J("ngIf",n.pokemonRival),e.xp6(6),e.Q6J("pokeType",n.random)("ordenTapar",n.esconderPokemons),e.xp6(11),e.Q6J("ngIf",n.pokemonJugador.sprite),e.xp6(5),e.Q6J("ngIf",n.pokemonRival.sprite),e.xp6(3),e.Q6J("ngIf",n.pokemonJugador),e.xp6(6),e.Q6J("pokeType",n.tipoSeleccionado)("ordenTapar",n.esconderPokemons))},dependencies:[d.O5,s.oU,s.YG,s.Sm,s.PM,s.FN,s.Zi,s.Dq,s.wI,s.W2,s.fr,s.jY,s.Gu,s.nJ,s.Wo,s.H$,s.Nd,s.yW,s.wd,s.sr,s.cs,Q],styles:[".pokeballsGroup[_ngcontent-%COMP%]{text-align:center;height:10vh}.pokeballTarjeta[_ngcontent-%COMP%]{height:20vh}.tipoEmoji[_ngcontent-%COMP%]{font-size:2.4rem}@media only screen and (max-width: 450px){#footerEleccion[_ngcontent-%COMP%]{background-color:red}.arena[_ngcontent-%COMP%]{--background: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fffe330-0a41-49ed-9885-6e3aba462e70/ddxkac6-ebe2ffce-8080-4ebf-b301-598019f384b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmZmZlMzMwLTBhNDEtNDllZC05ODg1LTZlM2FiYTQ2MmU3MFwvZGR4a2FjNi1lYmUyZmZjZS04MDgwLTRlYmYtYjMwMS01OTgwMTlmMzg0YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.axxzTibMfkRu03fwZBSQTnycdkMOj-U14iKZzrsMUhI) 0 0/100% 100%}}#footerEleccion[_ngcontent-%COMP%]{background-color:#00f;position:fixed;bottom:0;width:100%;max-width:620px;max-height:300px}.arena[_ngcontent-%COMP%]{--background: url(https://c4.wallpaperflare.com/wallpaper/503/189/157/pokemon-video-games-pixel-art-pixels-wallpaper-preview.jpg) 0 0/100% 100% no-repeat}.contenedorArena[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:83vh}.centroArena[_ngcontent-%COMP%]{flex:1;background-image:url(https://i.redd.it/3hqfdsb9uvg11.png)}.spriteCentro[_ngcontent-%COMP%]{overflow:hidden;max-width:410px;min-width:100px;margin:auto}.comparador[_ngcontent-%COMP%]{margin:auto;font-size:3em;font-weight:bolder}.enemigoPokeball[_ngcontent-%COMP%], .jugadorPokeball[_ngcontent-%COMP%]{height:27vh}.titulos[_ngcontent-%COMP%]{color:#ffb1cd;font:bold;background-image:url(https://wallpaperaccess.com/full/8045537.jpg)}.no-click[_ngcontent-%COMP%]{pointer-events:none}#contenidoArena[_ngcontent-%COMP%]{margin:auto;max-width:620px}#cronometro[_ngcontent-%COMP%]{margin:auto;position:absolute}"]}),o})()}];let X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(E),u.Bz]}),o})(),H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,h.kz]}),o})(),q=(()=>{class o{constructor(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[e.E6H],imports:[d.ez,Z.u5,s.Pc,X,h.kz,H]}),o})()}}]);