import { $showWebsite } from "../const.js";
import { cleanWebsite } from "./clean-web.js";
import { showSpinner } from "./spinner.js";

export const showCryptoWebsite = (crypto) => {
  cleanWebsite($showWebsite);
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCTDAY, LASTUPDATE } = crypto;

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
