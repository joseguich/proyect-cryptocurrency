import { getTopCrypto } from "../API/fetch.js";
import { $cryptocurrency, $currency, $form } from "../const.js";
import { getChangeSelect } from "../func/change-select.js";
import { validatorSelect } from "../func/validator-select.js";

export default class App {
  constructor() {
    this.init();
  }
  init() {
    window.addEventListener("load", () => {
      getTopCrypto();

      //Change select
      $currency.addEventListener("change", getChangeSelect);
      $cryptocurrency.addEventListener("change", getChangeSelect);

      //Form
      $form.addEventListener("submit", validatorSelect);
    });
  }
}
