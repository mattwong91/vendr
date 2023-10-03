import { AppState } from "../AppState.js"

class SnacksService {
  constructor() {

  }
  addMoney(amount) {
    AppState.money += amount
  }

  buySnack(snackName) {
    const foundSnack = AppState.snacks.find(snack => snack.name == snackName)
    AppState.money -= foundSnack.price
    AppState.mySnacks.push(foundSnack)
  }

  changeBuyableState(snackName, state) {
    const foundSnack = AppState.snacks.find(snack => snack.name == snackName)
    foundSnack.enabled = state
  }
}

export const snacksService = new SnacksService()