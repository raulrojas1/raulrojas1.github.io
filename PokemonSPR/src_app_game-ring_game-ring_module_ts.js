"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_game-ring_game-ring_module_ts"],{

/***/ 4898:
/*!*******************************************************************!*\
  !*** ./src/app/components/temporizador/temporizador.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemporizadorComponent": () => (/* binding */ TemporizadorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _temporizador_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temporizador.component.html?ngResource */ 2983);
/* harmony import */ var _temporizador_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temporizador.component.scss?ngResource */ 84);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5050);






let TemporizadorComponent = class TemporizadorComponent {
    constructor() {
        this.progressCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.restart$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.progress = 0;
        this.color = 'success';
        this.progress$ = this.restart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(300).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.scan)((acc, val) => acc + 0.1, 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeWhile)(val => val < 1))));
    }
    onComplete() {
        this.progressCompleted.emit();
    }
    ngOnInit() {
        this.sub = this.progress$.subscribe(val => {
            this.progress = val;
            if (val >= 0.99999) {
                this.onComplete();
            }
            if (val >= 0.7) {
                return this.color = 'danger';
            }
            if (val >= 0.4) {
                return this.color = 'warning';
            }
        });
    }
    stopCount() {
        this.sub.unsubscribe();
    }
    handleRestart() {
        this.progress = 0;
        this.color = 'success';
        this.restart$.next();
    }
};
TemporizadorComponent.ctorParameters = () => [];
TemporizadorComponent.propDecorators = {
    progressCompleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TemporizadorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-temporizador',
        template: _temporizador_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_temporizador_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TemporizadorComponent);



/***/ }),

/***/ 4570:
/*!*******************************************************!*\
  !*** ./src/app/game-ring/game-ring-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameRingPageRoutingModule": () => (/* binding */ GameRingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _game_ring_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-ring.page */ 6263);




const routes = [
    {
        path: '',
        component: _game_ring_page__WEBPACK_IMPORTED_MODULE_0__.GameRingPage
    }
];
let GameRingPageRoutingModule = class GameRingPageRoutingModule {
};
GameRingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GameRingPageRoutingModule);



/***/ }),

/***/ 4684:
/*!***********************************************!*\
  !*** ./src/app/game-ring/game-ring.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameRingPageModule": () => (/* binding */ GameRingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-countdown */ 1314);
/* harmony import */ var _game_ring_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-ring-routing.module */ 4570);
/* harmony import */ var _game_ring_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-ring.page */ 6263);
/* harmony import */ var _components_pokeball_pokeball_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pokeball/pokeball.component */ 3878);
/* harmony import */ var _components_pokeball_pokeball_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pokeball/pokeball.module */ 9170);
/* harmony import */ var _components_temporizador_temporizador_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/temporizador/temporizador.component */ 4898);












let GameRingPageModule = class GameRingPageModule {
    constructor() {
    }
};
GameRingPageModule.ctorParameters = () => [];
GameRingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _game_ring_routing_module__WEBPACK_IMPORTED_MODULE_0__.GameRingPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_10__.SwiperModule, _components_pokeball_pokeball_module__WEBPACK_IMPORTED_MODULE_3__.PokeballModule, ngx_countdown__WEBPACK_IMPORTED_MODULE_11__.CountdownModule
        ],
        providers: [
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.Pipe
        ],
        declarations: [
            _game_ring_page__WEBPACK_IMPORTED_MODULE_1__.GameRingPage, _components_pokeball_pokeball_component__WEBPACK_IMPORTED_MODULE_2__.PokeballComponent,
            _components_temporizador_temporizador_component__WEBPACK_IMPORTED_MODULE_4__.TemporizadorComponent,
        ]
    })
], GameRingPageModule);



/***/ }),

/***/ 6263:
/*!*********************************************!*\
  !*** ./src/app/game-ring/game-ring.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameRingPage": () => (/* binding */ GameRingPage)
/* harmony export */ });
/* harmony import */ var _var_www_html_PokeSPR_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _game_ring_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-ring.page.html?ngResource */ 2708);
/* harmony import */ var _game_ring_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-ring.page.scss?ngResource */ 728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sounds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sounds.service */ 5447);
/* harmony import */ var _game_ring_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-ring.service */ 6404);
/* harmony import */ var _components_temporizador_temporizador_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/temporizador/temporizador.component */ 4898);







 // import Swiper core and required modules





 // install Swiper modules

swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Virtual]);
let GameRingPage = class GameRingPage {
  constructor(soundsService, gameRingService, router, alertController) {
    this.soundsService = soundsService;
    this.gameRingService = gameRingService;
    this.router = router;
    this.alertController = alertController;
    this.puntaje = 0;
    this.tipoEnemigo$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.tipoSeleccionado$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.pokemonRival = this.gameRingService.pokemonShareInit;
    this.pokemonJugador = this.gameRingService.pokemonShareInit;

    this.delay = ms => new Promise(res => setTimeout(res, ms));
  }

  ngOnInit() {
    this.iniciarCiclo();
  }

  ngAfterViewInit() {
    this.soundsService.playMusicBackground('musica');
    this.soundsService.playPikachuSound();
  }

  ngOnDestroy() {
    this.soundsService.toggleMusic();
  }

  iniciarCiclo() {
    this.delay(2000).then(() => {
      this.voltearEnemigo();
      this.delay(900).then(() => {
        this.toggleOpciones(true);
      });
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      // this.ngOnInit();
      this.router.navigate(['batalla']);
      event.target.complete();
    }, 100);
  }

  tipoSelected(tipoClicado) {
    const comparadorHTML = document.querySelector('.comparador');
    this.temporizador.stopCount();
    this.tipoSeleccionado$.next(tipoClicado);
    this.toggleOpciones(false);
    this.tipoSeleccionado = tipoClicado; // espera a que las dos pokeballs sean traidas
    // toma un evento de las dos pokeballs

    this.gameRingService.ciclo.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe({
      next: showedPokemons => {
        // valida que el contador de pokemons volteados sea 2
        if (showedPokemons !== 2) {
          return false;
        }

        this.delay(1000).then(() => {
          const ganadorRes = this.gameRingService.compareWinner(this.tipoSeleccionado, this.pokemonRival.type);
          comparadorHTML.textContent = ganadorRes.emoji;
          this.soundsService.playSound(ganadorRes.mensaje);

          if (ganadorRes.punto < 0) {
            return this.gameEnded();
          }

          this.delay(1000).then(() => {
            this.puntaje += ganadorRes.punto;
            this.esperarParaIniciar();
          });
        });
      }
    });
  }

  voltearEnemigo() {
    this.tipoEnemigo$.next('random');
  }

  toggleOpciones(orden) {
    const lista = document.querySelector('#footerEleccion');

    if (orden) {
      return lista.classList.remove('no-click');
    }

    return lista.classList.add('no-click');
  }

  esperarParaIniciar() {
    this.delay(1200).then(() => {
      this.gameRingService.setPokebalState(true);
      document.querySelector('.comparador').textContent = 'VS';
      this.iniciarCiclo();
    });
  }

  toggleMusic() {
    this.soundsService.toggleMusic();
  }

  gameEnded() {
    var _this = this;

    return (0,_var_www_html_PokeSPR_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: '',
        subHeader: `Lograste ${_this.puntaje} aciertos`,
        message: 'Parece que alguien debe repasar la Pokedex!',
        buttons: ['OK']
      });
      alert.onDidDismiss().then(() => {
        // this.reloadWindow();
        _this.puntaje = 0;

        _this.esperarParaIniciar();
      });
      yield alert.present();
    })();
  }

  reloadWindow() {
    location.reload();
  }

};

GameRingPage.ctorParameters = () => [{
  type: _services_sounds_service__WEBPACK_IMPORTED_MODULE_4__.SoundsService
}, {
  type: _game_ring_service__WEBPACK_IMPORTED_MODULE_5__.GameRingService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}];

GameRingPage.propDecorators = {
  temporizador: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: [_components_temporizador_temporizador_component__WEBPACK_IMPORTED_MODULE_6__.TemporizadorComponent]
  }]
};
GameRingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-game-ring',
  template: _game_ring_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_game_ring_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GameRingPage);


/***/ }),

/***/ 1925:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
  constructor(SchedulerAction, now = Scheduler.now) {
    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  schedule(work, delay = 0, state) {
    return new this.SchedulerAction(this, work).schedule(state, delay);
  }

}

Scheduler.now = () => Date.now();

/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}

/***/ }),

/***/ 5353:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2425);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }

  schedule(state, delay = 0) {
    return this;
  }

}

/***/ }),

/***/ 3670:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 5353);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }

  schedule(state, delay = 0) {
    if (this.closed) {
      return this;
    }

    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }

  requestAsyncId(scheduler, id, delay = 0) {
    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  }

  recycleAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
    return undefined;
  }

  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    const error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }

  _execute(state, delay) {
    let errored = false;
    let errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }

  _unsubscribe() {
    const id = this.id;
    const scheduler = this.scheduler;
    const actions = scheduler.actions;
    const index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  }

}

/***/ }),

/***/ 2901:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1925);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, () => {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    });
    this.actions = [];
    this.active = false;
    this.scheduled = undefined;
  }

  schedule(work, delay = 0, state) {
    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return super.schedule(work, delay, state);
    }
  }

  flush(action) {
    const {
      actions
    } = this;

    if (this.active) {
      actions.push(action);
      return;
    }

    let error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  }

}

/***/ }),

/***/ 328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 7269:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 4327);

function isNumeric(val) {
  return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}

/***/ }),

/***/ 84:
/*!********************************************************************************!*\
  !*** ./src/app/components/temporizador/temporizador.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wb3JpemFkb3IuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 728:
/*!**********************************************************!*\
  !*** ./src/app/game-ring/game-ring.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".pokeballsGroup {\n  text-align: center;\n  height: 10vh;\n}\n\n.pokeballTarjeta {\n  height: 20vh;\n}\n\n.tipoEmoji {\n  font-size: 2.4rem;\n}\n\n@media only screen and (max-width: 450px) {\n  #footerEleccion {\n    background-color: red;\n  }\n  .arena {\n    --background: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fffe330-0a41-49ed-9885-6e3aba462e70/ddxkac6-ebe2ffce-8080-4ebf-b301-598019f384b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmZmZlMzMwLTBhNDEtNDllZC05ODg1LTZlM2FiYTQ2MmU3MFwvZGR4a2FjNi1lYmUyZmZjZS04MDgwLTRlYmYtYjMwMS01OTgwMTlmMzg0YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.axxzTibMfkRu03fwZBSQTnycdkMOj-U14iKZzrsMUhI) 0 0/100% 100%;\n  }\n}\n\n#footerEleccion {\n  background-color: blue;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  max-width: 620px;\n  max-height: 300px;\n}\n\n.arena {\n  --background: url(https://c4.wallpaperflare.com/wallpaper/503/189/157/pokemon-video-games-pixel-art-pixels-wallpaper-preview.jpg) 0 0/100% 100% no-repeat;\n}\n\n.contenedorArena {\n  display: flex;\n  flex-direction: column;\n  height: 83vh;\n}\n\n.centroArena {\n  flex: 1; /* this is the key; consumes all available height */\n  background-image: url(https://i.redd.it/3hqfdsb9uvg11.png);\n}\n\n.spriteCentro {\n  overflow: hidden;\n  max-width: 410px;\n  min-width: 100px;\n  margin: auto;\n}\n\n.comparador {\n  margin: auto;\n  font-size: 3em;\n  font-weight: bolder;\n}\n\n.enemigoPokeball {\n  height: 27vh;\n}\n\n.jugadorPokeball {\n  height: 27vh;\n}\n\n.titulos {\n  color: #ffb1cd;\n  font: bold;\n  background-image: url(https://wallpaperaccess.com/full/8045537.jpg);\n}\n\n.no-click {\n  pointer-events: none;\n}\n\n#contenidoArena {\n  margin: auto;\n  max-width: 620px;\n}\n\n#cronometro {\n  margin: auto;\n  position: absolute;\n}\n\n.puntaje {\n  background-color: rgba(27, 27, 27, 0.5);\n  background-blend-mode: screen;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  text-align: center;\n  max-width: 40px;\n  margin: auto;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtcmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSTtJQUNJLHFCQUFBO0VBQU47RUFFRTtJQUNJLG1sQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLHlKQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxPQUFBLEVBQUEsbURBQUE7RUFDQSwwREFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxtRUFBQTtBQURKOztBQUlBO0VBQ0Msb0JBQUE7QUFERDs7QUFJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDRSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURGIiwiZmlsZSI6ImdhbWUtcmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9rZWJhbGxzR3JvdXB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTB2aDtcbn1cblxuLnBva2ViYWxsVGFyamV0YXtcbiAgICBoZWlnaHQ6IDIwdmg7XG59XG5cbi50aXBvRW1vaml7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICNmb290ZXJFbGVjY2lvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cbiAgICAuYXJlbmF7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi8zZmZmZTMzMC0wYTQxLTQ5ZWQtOTg4NS02ZTNhYmE0NjJlNzAvZGR4a2FjNi1lYmUyZmZjZS04MDgwLTRlYmYtYjMwMS01OTgwMTlmMzg0YjAucG5nP3Rva2VuPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSjFjbTQ2WVhCd09qZGxNR1F4T0RnNU9ESXlOalF6TnpOaE5XWXdaRFF4TldWaE1HUXlObVV3SWl3aWFYTnpJam9pZFhKdU9tRndjRG8zWlRCa01UZzRPVGd5TWpZME16Y3pZVFZtTUdRME1UVmxZVEJrTWpabE1DSXNJbTlpYWlJNlcxdDdJbkJoZEdnaU9pSmNMMlpjTHpObVptWmxNek13TFRCaE5ERXRORGxsWkMwNU9EZzFMVFpsTTJGaVlUUTJNbVUzTUZ3dlpHUjRhMkZqTmkxbFltVXlabVpqWlMwNE1EZ3dMVFJsWW1ZdFlqTXdNUzAxT1Rnd01UbG1NemcwWWpBdWNHNW5JbjFkWFN3aVlYVmtJanBiSW5WeWJqcHpaWEoyYVdObE9tWnBiR1V1Wkc5M2JteHZZV1FpWFgwLmF4eHpUaWJNZmtSdTAzZndaQlNRVG55Y2RrTU9qLVUxNGlLWnpyc01VaEkpIDAgMC8xMDAlIDEwMCU7XG4gICAgfVxufVxuXG4jZm9vdGVyRWxlY2Npb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjIwcHg7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5hcmVuYXtcbiAgICAtLWJhY2tncm91bmQ6IHVybChodHRwczovL2M0LndhbGxwYXBlcmZsYXJlLmNvbS93YWxscGFwZXIvNTAzLzE4OS8xNTcvcG9rZW1vbi12aWRlby1nYW1lcy1waXhlbC1hcnQtcGl4ZWxzLXdhbGxwYXBlci1wcmV2aWV3LmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5jb250ZW5lZG9yQXJlbmEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDgzdmg7XG4gIH1cblxuLmNlbnRyb0FyZW5hIHtcbiAgICBmbGV4OiAxOyAgICAgLyogdGhpcyBpcyB0aGUga2V5OyBjb25zdW1lcyBhbGwgYXZhaWxhYmxlIGhlaWdodCAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kucmVkZC5pdC8zaHFmZHNiOXV2ZzExLnBuZyk7XG59XG5cbi5zcHJpdGVDZW50cm97XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDQxMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29tcGFyYWRvcntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmVuZW1pZ29Qb2tlYmFsbHtcbiAgICBoZWlnaHQ6IDI3dmg7XG59XG5cbi5qdWdhZG9yUG9rZWJhbGwge1xuICAgIGhlaWdodDogMjd2aDtcbn1cblxuLnRpdHVsb3N7XG4gICAgY29sb3I6ICNmZmIxY2Q7XG4gICAgZm9udDogYm9sZCA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2FsbHBhcGVyYWNjZXNzLmNvbS9mdWxsLzgwNDU1MzcuanBnKTtcbn1cblxuLm5vLWNsaWNrIHtcblx0cG9pbnRlci1ldmVudHM6bm9uZTsgLy9UaGlzIG1ha2VzIGl0IG5vdCBjbGlja2FibGVcbiAgfVxuXG4jY29udGVuaWRvQXJlbmF7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogNjIwcHg7XG59XG5cbiNjcm9ub21ldHJve1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wdW50YWple1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNywgMjcsIDAuNSk7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 2983:
/*!********************************************************************************!*\
  !*** ./src/app/components/temporizador/temporizador.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n    <ion-progress-bar [value]=\"progress\" [color]=\"color\"></ion-progress-bar>\n</div>\n";

/***/ }),

/***/ 2708:
/*!**********************************************************!*\
  !*** ./src/app/game-ring/game-ring.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Zona de batalla</ion-title>\n    <ion-button\n      slot=\"end\"\n      fill=\"clear\"\n      (click)=\"toggleMusic()\"\n      style=\"font-size: 1.3em\"\n      >🔊</ion-button\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scroll-y=\"false\" style=\"position: relative\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div id=\"contenidoArena\">\n    <div class=\"contenedorArena\">\n      <ion-card class=\"arena enemigoPokeball\">\n        <ion-card-header>\n          <ion-card-title *ngIf=\"pokemonRival\" class=\"ion-text-center titulos\"\n            >Enemigo {{ pokemonRival.name}}\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"pokeballTarjeta\">\n          <ion-grid>\n            <ion-row class=\"pokeballsGroup\">\n              <ion-col no-lines class=\"pokeballColumn\">\n                <br />\n                <app-pokeball\n                  [typeSelected$]=\"tipoEnemigo$\"\n                  (pokemonDatos)=\"pokemonRival = $event\"\n                ></app-pokeball>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class=\"centroArena\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-text-center titulos\"> </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"pokeballTarjeta\">\n          <ion-grid>\n            <ion-row style=\"display: none\"> </ion-row>\n            <ion-row class=\"pokeballsGroup\" style=\"display: none\">\n              <ion-col no-lines class=\"pokeballColumn\"> </ion-col>\n            </ion-row>\n            <ion-row class=\"pokeballsGroup\">\n              <ion-col class=\"pokeballColumn\">\n                <img\n                  *ngIf=\"pokemonJugador.sprite\"\n                  src=\"{{pokemonJugador.sprite}}\"\n                  alt=\"imagen\"\n                  class=\"spriteCentro\"\n                />\n              </ion-col>\n              <ion-col class=\"pokeballColumn\">\n                <app-temporizador *ngIf=\"pokemonRival.sprite\" (progressCompleted)=\"gameEnded()\"></app-temporizador>\n                <ion-text class=\"comparador\"> VS </ion-text>\n              </ion-col>\n\n              <ion-col class=\"pokeballColumn\">\n                <img\n                  *ngIf=\"pokemonRival.sprite\"\n                  src=\"{{pokemonRival.sprite}}\"\n                  alt=\"imagen\"\n                  class=\"spriteCentro\"\n                />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-text>\n                  <div>\n                    <h1 class=\"puntaje\">{{puntaje}}</h1>\n                  </div>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class=\"arena jugadorPokeball\">\n        <ion-card-header>\n          <ion-card-title *ngIf=\"pokemonJugador\" class=\"ion-text-center titulos\"\n            >Jugador {{ pokemonJugador.name }}\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"pokeballTarjeta\">\n          <ion-grid>\n            <ion-row class=\"pokeballsGroup\">\n              <ion-col no-lines class=\"pokeballColumn\">\n                <br />\n                <app-pokeball\n                  [typeSelected$]=\"tipoSeleccionado$\"\n                  (pokemonDatos)=\"pokemonJugador = $event\"\n                ></app-pokeball>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <ion-footer id=\"footerEleccion\" class=\"no-click\">\n      <ion-toolbar>\n        <ion-row class=\"pokeballsGroup\">\n          <ion-col>\n            <div\n              class=\"ion-activatable ripple-parent\"\n              (click)=\"tipoSelected('water')\"\n            >\n              <h3 class=\"tipoEmoji\">🌊</h3>\n              <ion-ripple-effect></ion-ripple-effect>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <div\n                class=\"ion-activatable ripple-parent\"\n                (click)=\"tipoSelected('fire')\"\n              >\n                <h3 class=\"tipoEmoji\">🔥</h3>\n                <ion-ripple-effect></ion-ripple-effect>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <div\n                class=\"ion-activatable ripple-parent\"\n                (click)=\"tipoSelected('grass')\"\n              >\n                <h3 class=\"tipoEmoji\">🌿</h3>\n                <ion-ripple-effect></ion-ripple-effect>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n    </ion-footer>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_game-ring_game-ring_module_ts.js.map