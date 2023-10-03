import { $showWebsite } from "../const.js";
import { cleanWebsite } from "./clean-web.js";
import { showAlert } from "./show-alert.js";
import { showSpinner } from "./spinner.js";

export const showCryptoWebsite = crypto => {
  cleanWebsite($showWebsite);
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCTDAY, LASTUPDATE } = crypto;

  if (
    PRICE === undefined ||
    LOWDAY === undefined ||
    CHANGEPCTDAY === undefined ||
    LASTUPDATE === undefined
  ) {
    showAlert("There is no data for this coin");
    return;
  }

  setTimeout(() => {
    $showWebsite.innerHTML += `
   <td>${PRICE}</td> 
   <td>${HIGHDAY}</td> 
   <td>${LOWDAY}</td>
   <td>${CHANGEPCTDAY}%</td>
   <td>${LASTUPDATE}</td>
   `;
  }, 3000);
  //Show Spinner
  showSpinner();
};
