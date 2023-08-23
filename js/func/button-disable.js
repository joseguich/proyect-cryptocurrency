import { $disableButton } from "../const.js";

export const buttonDisable = () => {
  $disableButton.disabled = true;
  $disableButton.style.opacity = 0.5;
  $disableButton.style.cursor = "not-allowed";

  setTimeout(() => {
    $disableButton.disabled = false;
    $disableButton.style.opacity = 1;
    $disableButton.style.cursor = "pointer";
  }, 3000);
};
