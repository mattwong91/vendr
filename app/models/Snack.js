export class Snack {
  /** @param {{name:string; price:number; imgUrl:string}} data */
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.enabled = false
  }

  get getMySnack() {
    return `
      <p>${this.name}</p>
    `
  }
  get getSnackCard() {
    if (this.enabled) {
      return `
      <div class="col-3">
        <div class="card shadow">
          <img class="snack-img" src="${this.imgUrl}"
            alt="${this.name}">
          <div class="d-flex justify-content-between p-2 info-block">
            <div>
              <p>${this.name}</p>
              <p>$${this.price.toFixed(2)}</p>
            </div>
            <button type="button" onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-success">BUY</button>
          </div>
        </div>
      </div>
      `
    }
    return `
    <div class="col-3">
      <div class="card shadow">
        <img class="snack-img" src="${this.imgUrl}"
          alt="${this.name}">
        <div class="d-flex justify-content-between p-2 info-block">
          <div>
            <p>${this.name}</p>
            <p>$${this.price.toFixed(2)}</p>
          </div>
          <button type="button" onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-success disabled">BUY</button>
        </div>
      </div>
    </div>
    `
  }
}