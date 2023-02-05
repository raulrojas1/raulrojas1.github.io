"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_pokeball_pokeball_component_ts-src_app_components_pokeball_pokebal-c2c0e9"],{

/***/ 3878:
/*!***********************************************************!*\
  !*** ./src/app/components/pokeball/pokeball.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokeballComponent": () => (/* binding */ PokeballComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pokeball_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokeball.component.html?ngResource */ 4227);
/* harmony import */ var _pokeball_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokeball.component.scss?ngResource */ 5342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_pokemons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pokemons.service */ 6585);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var src_app_services_sounds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sounds.service */ 5447);
/* harmony import */ var src_app_game_ring_game_ring_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/game-ring/game-ring.service */ 6404);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2378);









// install Swiper modules
swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFlip]);
swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Virtual]);
let PokeballComponent = class PokeballComponent {
    constructor(pokemonService, soundsService, gameRingService) {
        this.pokemonService = pokemonService;
        this.soundsService = soundsService;
        this.gameRingService = gameRingService;
        this.typeSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable();
        this.pokemonDatos = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter(true);
        this.pokemonData = this.gameRingService.pokemonShareInit;
        this.delay = (ms) => new Promise((res) => setTimeout(res, ms));
    }
    ngOnInit() {
        this.gameRingService.getPokebals().subscribe({
            next: (hideOrder) => {
                console.log('Hide ' + hideOrder);
                this.voltear();
            },
        });
        this.typeSelected$.subscribe({
            next: (typeIputed) => {
                this.pokeType = typeIputed;
                if (this.pokeType === 'random') {
                    this.pokeType = this.pokemonService.getRandomType();
                }
                if (this.pokeType) {
                    this.getPokemonByType(this.pokeType);
                }
            },
        });
    }
    ngOnChanges(changes) {
    }
    emitirDatosPokemon() {
        this.pokemonDatos.emit(this.pokemonData);
    }
    getPokemonByType(type) {
        this.pokemonService.getPokemonByTypee(type).subscribe({
            next: (res) => {
                if (!this.resourcesOk(res)) {
                    this.getPokemonByType(this.pokeType);
                    return false;
                }
                this.pokemonData = res;
                this.startPokeballCycle();
            },
        });
    }
    startPokeballCycle() {
        this.slideNext();
        this.emitirDatosPokemon();
        this.soundsService.playWooshSound();
        this.gameRingService.setCiclo(1);
    }
    resourcesOk(pokemonRes) {
        return pokemonRes.sprite && pokemonRes.image;
    }
    voltear() {
        this.slidePrev();
        this.delay(200).then(() => {
            this.resetValues();
            this.gameRingService.restartCount();
        });
    }
    slideNext() {
        this.swiper.swiperRef.slideNext(500);
    }
    slidePrev() {
        this.swiper.swiperRef.slidePrev(200);
    }
    resetValues() {
        this.pokemonData = this.gameRingService.pokemonShareInit;
        this.pokemonDatos.emit(this.pokemonData);
    }
};
PokeballComponent.ctorParameters = () => [
    { type: _services_pokemons_service__WEBPACK_IMPORTED_MODULE_2__.PokemonService },
    { type: src_app_services_sounds_service__WEBPACK_IMPORTED_MODULE_4__.SoundsService },
    { type: src_app_game_ring_game_ring_service__WEBPACK_IMPORTED_MODULE_5__.GameRingService }
];
PokeballComponent.propDecorators = {
    typeSelected$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    pokemonDatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['swipeBigPokeball', { static: false },] }]
};
PokeballComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pokeball',
        template: _pokeball_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
        styles: [_pokeball_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PokeballComponent);



/***/ }),

/***/ 9170:
/*!********************************************************!*\
  !*** ./src/app/components/pokeball/pokeball.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokeballModule": () => (/* binding */ PokeballModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 341);




let PokeballModule = class PokeballModule {
};
PokeballModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperModule
        ]
    })
], PokeballModule);



/***/ }),

/***/ 6404:
/*!************************************************!*\
  !*** ./src/app/game-ring/game-ring.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameRingService": () => (/* binding */ GameRingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);




let GameRingService = class GameRingService {
    constructor() {
        this.newType$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.pokemonShareInit = {
            name: '',
            image: '',
            sprite: '',
            type: '',
        };
        this.weapons = {
            fire: { weakTo: 'water', strongTo: 'grass' },
            water: { weakTo: 'grass', strongTo: 'fire' },
            grass: { weakTo: 'fire', strongTo: 'water' },
        };
        this.contador = 0; //pokebals volteadas
        this.finCiclo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.pokebalsState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.typeSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.delay = (ms) => new Promise((res) => setTimeout(res, ms));
    }
    get ciclo() {
        return this.finCiclo.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((x) => x === 2));
    }
    getPokebals() {
        return this.pokebalsState$.asObservable();
    }
    setPokebalState(orden) {
        this.pokebalsState$.next(orden);
    }
    getTypeSelected() {
        return this.typeSelected$.asObservable();
    }
    setTypeSelected(type) {
        this.newType$.emit(type);
        this.typeSelected$.next(type);
    }
    compareWinner(tipoPokemonJugador, tipoPokemonRival) {
        if (this.weapons[tipoPokemonJugador].strongTo === tipoPokemonRival) {
            return { mensaje: 'gana', emoji: '⭕', punto: 1 };
        }
        if (this.weapons[tipoPokemonJugador].weakTo === tipoPokemonRival) {
            return { mensaje: 'pierde', emoji: '❌', punto: -1 };
        }
        return { mensaje: 'empate', emoji: '=', punto: 0 };
    }
    setCiclo(volteado) {
        this.contador += volteado;
        this.finCiclo.next(this.contador);
    }
    restartCount() {
        this.contador = 0;
    }
};
GameRingService.ctorParameters = () => [];
GameRingService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root',
    })
], GameRingService);



/***/ }),

/***/ 6585:
/*!**********************************************!*\
  !*** ./src/app/services/pokemons.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonService": () => (/* binding */ PokemonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9727);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);






let PokemonService = class PokemonService {
    constructor(http) {
        this.http = http;
        this.pokemonShareTemplate = { name: '', image: '', sprite: '', type: '' };
        this.types = ['water', 'fire', 'grass'];
        this.isShowed = false;
    }
    getRandomType() {
        return this.types[Math.floor(Math.random() * this.types.length)];
    }
    selectRandomPokemon(coleccionPokemons) {
        const arrayLength = coleccionPokemons.pokemon.length;
        const randomIndex = Math.floor(Math.random() * arrayLength);
        const randomName = coleccionPokemons.pokemon[randomIndex].pokemon.url;
        return randomName;
    }
    // Se concatena la request para buscar pokemons por tipo con la busqueda del pokemon elegido
    getPokemonByTypee(pokeType) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pokeUrlBase + 'type/' + pokeType, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Accept', 'applicaion/json'),
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((res) => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.zip)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(res), this.http.get(this.selectRandomPokemon(res)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([tipo, pokemon]) => ({
            type: tipo.name,
            name: pokemon.name,
            sprite: pokemon.sprites.front_default,
            image: pokemon.sprites.other['official-artwork'].front_default,
        })));
    }
};
PokemonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PokemonService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], PokemonService);



/***/ }),

/***/ 9727:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/zip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipOperator": () => (/* binding */ ZipOperator),
/* harmony export */   "ZipSubscriber": () => (/* binding */ ZipSubscriber),
/* harmony export */   "zip": () => (/* binding */ zip)
/* harmony export */ });
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromArray */ 8005);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ 4327);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/symbol/iterator */ 2803);
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../innerSubscribe */ 2831);





function zip(...observables) {
  const resultSelector = observables[observables.length - 1];

  if (typeof resultSelector === 'function') {
    observables.pop();
  }

  return (0,_fromArray__WEBPACK_IMPORTED_MODULE_0__.fromArray)(observables, undefined).lift(new ZipOperator(resultSelector));
}
class ZipOperator {
  constructor(resultSelector) {
    this.resultSelector = resultSelector;
  }

  call(subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  }

}
class ZipSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
  constructor(destination, resultSelector, values = Object.create(null)) {
    super(destination);
    this.resultSelector = resultSelector;
    this.iterators = [];
    this.active = 0;
    this.resultSelector = typeof resultSelector === 'function' ? resultSelector : undefined;
  }

  _next(value) {
    const iterators = this.iterators;

    if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__.iterator] === 'function') {
      iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__.iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  }

  _complete() {
    const iterators = this.iterators;
    const len = iterators.length;
    this.unsubscribe();

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;

    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];

      if (iterator.stillUnsubscribed) {
        const destination = this.destination;
        destination.add(iterator.subscribe());
      } else {
        this.active--;
      }
    }
  }

  notifyInactive() {
    this.active--;

    if (this.active === 0) {
      this.destination.complete();
    }
  }

  checkIterators() {
    const iterators = this.iterators;
    const len = iterators.length;
    const destination = this.destination;

    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];

      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    let shouldComplete = false;
    const args = [];

    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];
      let result = iterator.next();

      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  }

  _tryresultSelector(args) {
    let result;

    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  }

}

class StaticIterator {
  constructor(iterator) {
    this.iterator = iterator;
    this.nextResult = iterator.next();
  }

  hasValue() {
    return true;
  }

  next() {
    const result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  }

  hasCompleted() {
    const nextResult = this.nextResult;
    return Boolean(nextResult && nextResult.done);
  }

}

class StaticArrayIterator {
  constructor(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }

  [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__.iterator]() {
    return this;
  }

  next(value) {
    const i = this.index++;
    const array = this.array;
    return i < this.length ? {
      value: array[i],
      done: false
    } : {
      value: null,
      done: true
    };
  }

  hasValue() {
    return this.array.length > this.index;
  }

  hasCompleted() {
    return this.array.length === this.index;
  }

}

class ZipBufferIterator extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__.SimpleOuterSubscriber {
  constructor(destination, parent, observable) {
    super(destination);
    this.parent = parent;
    this.observable = observable;
    this.stillUnsubscribed = true;
    this.buffer = [];
    this.isComplete = false;
  }

  [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__.iterator]() {
    return this;
  }

  next() {
    const buffer = this.buffer;

    if (buffer.length === 0 && this.isComplete) {
      return {
        value: null,
        done: true
      };
    } else {
      return {
        value: buffer.shift(),
        done: false
      };
    }
  }

  hasValue() {
    return this.buffer.length > 0;
  }

  hasCompleted() {
    return this.buffer.length === 0 && this.isComplete;
  }

  notifyComplete() {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  }

  notifyNext(innerValue) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  }

  subscribe() {
    return (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_4__.innerSubscribe)(this.observable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__.SimpleInnerSubscriber(this));
  }

}

/***/ }),

/***/ 5342:
/*!************************************************************************!*\
  !*** ./src/app/components/pokeball/pokeball.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".pokeballSelf {\n  display: inline-block;\n  min-height: 200px;\n  margin: auto;\n}\n\n.swiper {\n  width: 80px;\n  height: 80px;\n  padding: 5px;\n}\n\n.swiper-slide {\n  width: 80px;\n  height: 80px;\n  background-position: center;\n  background-size: cover;\n}\n\n.swiper-slide img {\n  width: 100%;\n}\n\n.mySwiper {\n  animation: rotation 1s 1 ease-out;\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n  to {\n    transform: rotate(719deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2ViYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUNFO0VBQ0U7SUFDRSx1QkFBQTtFQUNKO0VBQ0U7SUFDRSx5QkFBQTtFQUNKO0VBQ0U7SUFDRSx5QkFBQTtFQUNKO0FBQ0YiLCJmaWxlIjoicG9rZWJhbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9rZWJhbGxTZWxme1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zd2lwZXIge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15U3dpcGVye1xuICBhbmltYXRpb246IHJvdGF0aW9uIDFzIDEgZWFzZS1vdXQ7XG5cbiAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzE5ZGVnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 4227:
/*!************************************************************************!*\
  !*** ./src/app/components/pokeball/pokeball.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"pokeballSelf\">\n  <swiper effect=\"flip\" #swipeBigPokeball [virtual]=\"true\"\n  [allowTouchMove]=false\n  class=\"mySwiper\" style=\"padding: 0; margin: 0;\">\n    <ng-template swiperSlide style=\"padding: 0; margin: 0;\">\n      <ion-img style=\"width: 100px; height: 100px; padding: 0; margin: 0;\"\n      src=\"https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png\">\n    </ion-img>\n    </ng-template>\n    <ng-template swiperSlide style=\"padding: 0; margin: 0;\">\n      <ion-img style=\"min-width: 170px; min-height: 170px; padding: 0; margin: 0;\"\n      [src]=\"pokemonData.image ?? ''\" (load)=\"cargada()\">\n      </ion-img>\n    </ng-template>\n  </swiper>\n</div>\n";

/***/ }),

/***/ 1314:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-countdown/fesm2020/ngx-countdown.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownComponent": () => (/* binding */ CountdownComponent),
/* harmony export */   "CountdownGlobalConfig": () => (/* binding */ CountdownGlobalConfig),
/* harmony export */   "CountdownModule": () => (/* binding */ CountdownModule),
/* harmony export */   "CountdownStatus": () => (/* binding */ CountdownStatus),
/* harmony export */   "CountdownTimer": () => (/* binding */ CountdownTimer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);





function CountdownComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function CountdownComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};

var CountdownStatus;

(function (CountdownStatus) {
  CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
  CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
  CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
  CountdownStatus[CountdownStatus["done"] = 3] = "done";
})(CountdownStatus || (CountdownStatus = {}));

class CountdownTimer {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.fns = [];
    this.commands = [];
    this.nextTime = 0;
    this.ing = false;
  }

  start() {
    if (this.ing === true) {
      return;
    }

    this.ing = true;
    this.nextTime = +new Date();
    this.ngZone.runOutsideAngular(() => {
      this.process();
    });
  }

  process() {
    while (this.commands.length) {
      this.commands.shift()();
    }

    let diff = +new Date() - this.nextTime;
    const count = 1 + Math.floor(diff / 100);
    diff = 100 - diff % 100;
    this.nextTime += 100 * count;

    for (let i = 0, len = this.fns.length; i < len; i += 2) {
      let frequency = this.fns[i + 1]; // 100/s

      if (0 === frequency) {
        this.fns[i](count); // 1000/s
      } else {
        // 先把末位至0，再每次加2
        frequency += 2 * count - 1;
        const step = Math.floor(frequency / 20);

        if (step > 0) {
          this.fns[i](step);
        } // 把末位还原成1


        this.fns[i + 1] = frequency % 20 + 1;
      }
    }

    if (!this.ing) {
      return;
    }

    setTimeout(() => this.process(), diff);
  }

  add(fn, frequency) {
    this.commands.push(() => {
      this.fns.push(fn);
      this.fns.push(frequency === 1000 ? 1 : 0);
      this.ing = true;
    });
    return this;
  }

  remove(fn) {
    this.commands.push(() => {
      const i = this.fns.indexOf(fn);

      if (i !== -1) {
        this.fns.splice(i, 2);
      }

      this.ing = this.fns.length > 0;
    });
    return this;
  }

}

CountdownTimer.ɵfac = function CountdownTimer_Factory(t) {
  return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CountdownTimer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CountdownTimer,
  factory: CountdownTimer.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownTimer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})(); // tslint:disable: no-inferrable-types


class CountdownGlobalConfig {
  constructor(locale) {
    this.locale = locale;
    this.demand = false;
    this.leftTime = 0;
    this.format = 'HH:mm:ss';
    this.timezone = '+0000';

    this.formatDate = ({
      date,
      formatStr,
      timezone
    }) => {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date(date), formatStr, this.locale, timezone || this.timezone || '+0000');
    };
  }

}

CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) {
  return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
};

CountdownGlobalConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CountdownGlobalConfig,
  factory: CountdownGlobalConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownGlobalConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }];
  }, null);
})();

class CountdownComponent {
  constructor(locale, timer, defCog, cdr, ngZone) {
    this.locale = locale;
    this.timer = timer;
    this.defCog = defCog;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.frequency = 1000;
    this._notify = {};
    this.status = CountdownStatus.ing;
    this.isDestroy = false;
    this.i = {};
    this.left = 0;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  set config(i) {
    if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
      i.notify = [i.notify];
    }

    this._config = i;
  }

  get config() {
    return this._config;
  }
  /**
   * Start countdown, you must manually call when `demand: false`
   */


  begin() {
    this.status = CountdownStatus.ing;
    this.callEvent('start');
  }
  /**
   * Restart countdown
   */


  restart() {
    if (this.status !== CountdownStatus.stop) {
      this.destroy();
    }

    this.init();
    this.callEvent('restart');
  }
  /**
   * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
   */


  stop() {
    if (this.status === CountdownStatus.stop) {
      return;
    }

    this.status = CountdownStatus.stop;
    this.destroy();
    this.callEvent('stop');
  }
  /**
   * Pause countdown, you can use `resume` to recover again
   */


  pause() {
    if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
      return;
    }

    this.status = CountdownStatus.pause;
    this.callEvent('pause');
  }
  /**
   * Resume countdown
   */


  resume() {
    if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
      return;
    }

    this.status = CountdownStatus.ing;
    this.callEvent('resume');
  }

  callEvent(action) {
    this.event.emit({
      action,
      left: this.left,
      status: this.status,
      text: this.i.text
    });
  }

  init() {
    const {
      locale,
      defCog
    } = this;
    const config = this.config = { ...new CountdownGlobalConfig(locale),
      ...defCog,
      ...this.config
    }; // tslint:disable-next-line: no-bitwise

    const frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
    this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
    this.getLeft(); // bind reflow to me

    const _reflow = this.reflow;

    this.reflow = (count = 0, force = false) => _reflow.apply(this, [count, force]);

    if (Array.isArray(config.notify)) {
      config.notify.forEach(time => {
        if (time < 1) {
          throw new Error(`The notify config must be a positive integer.`);
        }

        time = time * 1000;
        time = time - time % frq;
        this._notify[time] = true;
      });
    }

    this.timer.add(this.reflow, frq).start();
    this.reflow(0, true);
  }

  destroy() {
    this.timer.remove(this.reflow);
    return this;
  }
  /**
   * 更新时钟
   */


  reflow(count = 0, force = false) {
    if (this.isDestroy) {
      return;
    }

    const {
      status,
      config,
      _notify
    } = this;

    if (!force && status !== CountdownStatus.ing) {
      return;
    }

    let value = this.left = this.left - this.frequency * count;

    if (value < 1) {
      value = 0;
    }

    this.i = {
      value,
      text: config.formatDate({
        date: value,
        formatStr: config.format,
        timezone: config.timezone
      })
    };

    if (typeof config.prettyText === 'function') {
      this.i.text = config.prettyText(this.i.text);
    }

    this.cdr.detectChanges();

    if (config.notify === 0 || _notify[value]) {
      this.ngZone.run(() => {
        this.callEvent('notify');
      });
    }

    if (value === 0) {
      this.ngZone.run(() => {
        this.status = CountdownStatus.done;
        this.destroy();
        this.callEvent('done');
      });
    }
  }
  /**
   * 获取倒计时剩余帧数
   */


  getLeft() {
    const {
      config,
      frequency
    } = this;
    let left = config.leftTime * 1000;
    const end = config.stopTime;

    if (!left && end) {
      left = end - new Date().getTime();
    }

    this.left = left - left % frequency;
  }

  ngOnInit() {
    this.init();

    if (!this.config.demand) {
      this.begin();
    }
  }

  ngOnDestroy() {
    this.isDestroy = true;
    this.destroy();
  }

  ngOnChanges(changes) {
    if (!changes.config.firstChange) {
      this.restart();
    }
  }

}

CountdownComponent.ɵfac = function CountdownComponent_Factory(t) {
  return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CountdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CountdownComponent,
  selectors: [["countdown"]],
  hostVars: 2,
  hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("count-down", true);
    }
  },
  inputs: {
    config: "config",
    render: "render"
  },
  outputs: {
    event: "event"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CountdownTimer]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 5,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
  template: function CountdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.render);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.i));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'countdown',
      template: `
    <ng-container *ngIf="!render">
      <span [innerHTML]="i.text"></span>
    </ng-container>
    <ng-container *ngTemplateOutlet="render; context: { $implicit: i }"></ng-container>
  `,
      host: {
        '[class.count-down]': 'true'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      providers: [CountdownTimer],
      standalone: true
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }, {
      type: CountdownTimer
    }, {
      type: CountdownGlobalConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    render: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class CountdownModule {}

CountdownModule.ɵfac = function CountdownModule_Factory(t) {
  return new (t || CountdownModule)();
};

CountdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CountdownModule,
  imports: [CountdownComponent],
  exports: [CountdownComponent]
});
CountdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [CountdownComponent]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [CountdownComponent],
      exports: [CountdownComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_components_pokeball_pokeball_component_ts-src_app_components_pokeball_pokebal-c2c0e9.js.map