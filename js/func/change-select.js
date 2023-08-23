import { $showWebsite } from "../const.js";
import { cleanWebsite } from "./clean-web.js";
import { fillObjectCrypto } from "./fill-object.js";

export const getChangeSelect = (e) => {
  if (e.target.value === "") {
    //To be returned and cleaned if nothing is selected
    cleanWebsite($showWebsite);

    //Empty the object.
    fillObjectCrypto[e.target.name] = "";
    return;
  }

  fillObjectCrypto[e.target.name] = e.target.value;
};
