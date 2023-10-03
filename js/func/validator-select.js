import { fillObjectCrypto } from "./fill-object.js";
import { showAlert } from "../func/show-alert.js";
import { getConsultCrypto } from "../API/fetch.js";
import { buttonDisable } from "./button-disable.js";

export const validatorSelect = e => {
  e.preventDefault();

  const { currency, cryptocurrency } = fillObjectCrypto;

  if (currency === "" || cryptocurrency === "") {
    showAlert("Fields are required select the currency and cryptocurrency");
    return;
  }

  //Get API.
  getConsultCrypto();

  //Disable Button.
  buttonDisable();
};
