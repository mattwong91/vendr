import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";

// SECTION Private functions
function _drawMoney() {
  setText('moneyCount', AppState.money.toFixed(2))
}

function _drawSnacks() {
  let content = ''
  AppState.snacks.forEach(snack => content += snack.getSnackCard)

  setHTML('snackCards', content)
}

function _checkSnacks() {
  const snacks = AppState.snacks
  snacks.forEach(snack => {
    if (AppState.money >= snack.price) {
      snacksService.changeBuyableState(snack.name, true)
      return
    }
    snacksService.changeBuyableState(snack.name, false)
    // console.log(snack);
  })
  _drawSnacks()
}
// !SECTION Private functions

export class SnacksController {
  constructor() {
    console.log('Snacks Controller loaded');
    _drawSnacks()

    AppState.on('money', _drawMoney)
    AppState.on('money', _checkSnacks)
  }

  // SECTION Public methods
  addMoney(amount) {
    snacksService.addMoney(amount)
  }

  buySnack(snackName) {
    const foundSnack = AppState.snacks.find(snack => snack.name == snackName)
    if (AppState.money < foundSnack.price) {
      return
    }
    snacksService.buySnack(snackName)
  }
  // !SECTION Public methods
}