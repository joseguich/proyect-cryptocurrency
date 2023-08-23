import { $createElement, $exit } from "../const.js";
import { cleanWebsite } from "./clean-web.js";

export const showSpinner = () => {
  cleanWebsite($exit);
  const containerSpinner = $createElement("DIV");
  containerSpinner.classList.add("container-spinner");

  const spinner = $createElement("DIV");
  spinner.classList.add("loader");

  spinner.innerHTML = `    
  <span class="loader-text">loading</span>
  <span class="load"></span>`;

  containerSpinner.appendChild(spinner);
  $exit.appendChild(containerSpinner);

  setTimeout(() => {
    containerSpinner.remove();
  }, 2500);
};
