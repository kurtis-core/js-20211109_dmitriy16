/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let collator;
  if (param === 'asc') {
    collator = new Intl.Collator(["ru", "en"], { caseFirst: "upper" });
    return arr.slice().sort(collator.compare);
  } else {
    let collator = new Intl.Collator(["ru", "en"]);
    return arr.slice().sort(collator.compare).reverse();
  }
}
