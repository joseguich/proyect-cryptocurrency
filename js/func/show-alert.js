import { $, $createElement, $exit } from "../const.js";

export const showAlert = (message) => {
  const removeAlert = $(".error-message");
  if (!removeAlert) {
    const messageAlert = $createElement("P");
    messageAlert.classList.add(
      "error-message",
      "animate__animated",
      "animate__fadeInUp"
    );

    messageAlert.textContent = message;

    $exit.appendChild(messageAlert);

    setTimeout(() => {
      messageAlert.remove();
    }, 3000);
  }
};
