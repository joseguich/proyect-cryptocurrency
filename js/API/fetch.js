import { $showWebsite } from "../const.js";
import { cleanWebsite } from "../func/clean-web.js";
import { fillObjectCrypto } from "../func/fill-object.js";
import { showAlert } from "../func/show-alert.js";
import { showSelect } from "../func/show-select.js";
import { showCryptoWebsite } from "../func/show-website.js";
//Create Promise.
const getConsult = crypto =>
  new Promise(resolve => {
    resolve(crypto);
  });

export const getTopCrypto = () => {
  const URL =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(URL)
    .then(response => response.json())
    .then(data => getConsult(data.Data))
    .then(crypto => showSelect(crypto));
};

export const getConsultCrypto = () => {
  const { currency, cryptocurrency } = fillObjectCrypto;

  const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

  fetch(URL)
    .then(response => response.json())
    .then(data => showCryptoWebsite(data.DISPLAY[cryptocurrency][currency]))
    .catch(error => {
      showAlert(` ${(error = "Infomración no encontrada con esta moneda")}`);
      cleanWebsite($showWebsite);
    });
};
