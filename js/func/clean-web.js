export const cleanWebsite = (selector) => {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
};
