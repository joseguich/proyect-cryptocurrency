import { $createElement, $cryptocurrency } from "../const.js";

export const showSelect = (cryptocurrency) => {
  cryptocurrency.forEach((crypto) => {
    const { Name, FullName } = crypto.CoinInfo;

    const option = $createElement("OPTION");
    option.value = Name;
    option.textContent = FullName;

    $cryptocurrency.appendChild(option);
  });
};
