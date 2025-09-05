// const BASE_URL = "http://localhost:3000/convert?from=USD&to=EUR&amount=100";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Enhanced dropdown: show currency name, flag, and filter
const currencyNames = {
  USD: "US Dollar",
  INR: "Indian Rupee",
  EUR: "Euro",
  GBP: "British Pound",
  JPY: "Japanese Yen",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CNY: "Chinese Yuan",
  CHF: "Swiss Franc",
  RUB: "Russian Ruble",
  SGD: "Singapore Dollar",
  HKD: "Hong Kong Dollar",
  NZD: "New Zealand Dollar",
  ZAR: "South African Rand",
  BRL: "Brazilian Real",
  MXN: "Mexican Peso",
  AED: "UAE Dirham",
  SAR: "Saudi Riyal",
  TRY: "Turkish Lira",
  KRW: "South Korean Won",
  SEK: "Swedish Krona",
  NOK: "Norwegian Krone",
  DKK: "Danish Krone",
  PLN: "Polish Zloty",
  THB: "Thai Baht",
  PKR: "Pakistani Rupee",
  IDR: "Indonesian Rupiah",
  MYR: "Malaysian Ringgit",
  TWD: "Taiwan Dollar",
  VND: "Vietnamese Dong",
  EGP: "Egyptian Pound",
  BDT: "Bangladeshi Taka",
  LKR: "Sri Lankan Rupee",
  NGN: "Nigerian Naira",
  UAH: "Ukrainian Hryvnia",
  ARS: "Argentine Peso",
  COP: "Colombian Peso",
  PEN: "Peruvian Sol",
  CLP: "Chilean Peso",
  CZK: "Czech Koruna",
  HUF: "Hungarian Forint",
  ILS: "Israeli Shekel",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  KWD: "Kuwaiti Dinar",
  QAR: "Qatari Riyal",
  OMR: "Omani Rial",
  JOD: "Jordanian Dinar",
  BHD: "Bahraini Dinar",
  MAD: "Moroccan Dirham",
  DZD: "Algerian Dinar",
  TND: "Tunisian Dinar",
  SYP: "Syrian Pound",
  SDG: "Sudanese Pound",
  XOF: "West African CFA",
  XAF: "Central African CFA",
  GHS: "Ghanaian Cedi",
  KES: "Kenyan Shilling",
  UGX: "Ugandan Shilling",
  TZS: "Tanzanian Shilling",
  RWF: "Rwandan Franc",
  BWP: "Botswana Pula",
  ZMK: "Zambian Kwacha",
  ZWD: "Zimbabwe Dollar",
  BYR: "Belarusian Ruble",
  UZS: "Uzbekistani Som",
  GEL: "Georgian Lari",
  AMD: "Armenian Dram",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BGN: "Bulgarian Lev",
  HRK: "Croatian Kuna",
  MKD: "Macedonian Denar",
  RSD: "Serbian Dinar",
  ALL: "Albanian Lek",
  ISK: "Icelandic Krona",
  MNT: "Mongolian Tugrik",
  KZT: "Kazakhstani Tenge",
  LAK: "Lao Kip",
  MOP: "Macanese Pataca",
  MMK: "Myanmar Kyat",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  NAD: "Namibian Dollar",
  XPF: "CFP Franc",
  FJD: "Fijian Dollar",
  PGK: "Papua New Guinean Kina",
  SBD: "Solomon Islands Dollar",
  VUV: "Vanuatu Vatu",
  YER: "Yemeni Rial",
  BND: "Brunei Dollar",
  KYD: "Cayman Islands Dollar",
  GIP: "Gibraltar Pound",
  JMD: "Jamaican Dollar",
  BSD: "Bahamian Dollar",
  BBD: "Barbadian Dollar",
  BMD: "Bermudian Dollar",
  BZD: "Belize Dollar",
  CUP: "Cuban Peso",
  DOP: "Dominican Peso",
  HTG: "Haitian Gourde",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  STD: "Sao Tome and Principe Dobra",
  SVC: "Salvadoran Colon",
  SZL: "Swazi Lilangeni",
  TOP: "Tongan Paʻanga",
  TTD: "Trinidad and Tobago Dollar",
  UYU: "Uruguayan Peso",
  VEF: "Venezuelan Bolívar",
  ANG: "Netherlands Antillean Guilder",
  AWG: "Aruban Florin",
  BOB: "Bolivian Boliviano",
  GMD: "Gambian Dalasi",
  GTQ: "Guatemalan Quetzal",
  HNL: "Honduran Lempira",
  LBP: "Lebanese Pound",
  MGA: "Malagasy Ariary",
  MWK: "Malawian Kwacha",
  MZN: "Mozambican Metical",
  NPR: "Nepalese Rupee",
  PAB: "Panamanian Balboa",
  PHP: "Philippine Peso",
  PYG: "Paraguayan Guarani",
  SCR: "Seychellois Rupee",
  SSP: "South Sudanese Pound",
  AFN: "Afghan Afghani",
  BIF: "Burundian Franc",
  CDF: "Congolese Franc",
  DJF: "Djiboutian Franc",
  ERN: "Eritrean Nakfa",
  GNF: "Guinean Franc",
  KGS: "Kyrgyzstani Som",
  KMF: "Comorian Franc",
  LSL: "Lesotho Loti",
  LTL: "Lithuanian Litas",
  LVL: "Latvian Lats",
  LYD: "Libyan Dinar",
  MDL: "Moldovan Leu",
  MRO: "Mauritanian Ouguiya",
  MTL: "Maltese Lira",
  MWK: "Malawian Kwacha",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  RON: "Romanian Leu",
  SDG: "Sudanese Pound",
  SKK: "Slovak Koruna",
  SYP: "Syrian Pound",
  SZL: "Swazi Lilangeni",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  UAH: "Ukrainian Hryvnia",
  UZS: "Uzbekistani Som",
  VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu",
  YER: "Yemeni Rial",
  ZMK: "Zambian Kwacha",
  ZWD: "Zimbabwe Dollar",
};

function populateDropdown(select, defaultCode) {
  select.innerHTML = "";
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    let countryName = currencyNames[currCode] || currCode;
    newOption.innerHTML = `<span class='flag-option'><img src='https://flagsapi.com/${countryList[currCode]}/flat/32.png' style='vertical-align:middle;margin-right:6px;'/>${currCode} - ${countryName}</span>`;
    newOption.value = currCode;
    if (currCode === defaultCode) {
      newOption.selected = true;
    }
    select.append(newOption);
  }
}

populateDropdown(fromCurr, "USD");
populateDropdown(toCurr, "INR");

for (let select of dropdowns) {
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

// Dropdown search/filter — rebuild options based on filter (more reliable across browsers)
const allCurrencyCodes = Object.keys(countryList).sort();

function rebuildOptions(select, filter) {
  const prev = select.value; // preserve selection if possible
  select.innerHTML = "";
  const f = (filter || "").trim().toUpperCase();
  const matches = allCurrencyCodes.filter((code) => {
    if (!f) return true;
    const name = (currencyNames[code] || "").toUpperCase();
    return code.includes(f) || name.includes(f);
  });
  for (let currCode of matches) {
    let newOption = document.createElement("option");
    let countryName = currencyNames[currCode] || currCode;
    newOption.innerHTML = `<span class='flag-option'><img src='https://flagsapi.com/${countryList[currCode]}/flat/32.png' style='vertical-align:middle;margin-right:6px;'/>${currCode} - ${countryName}</span>`;
    newOption.value = currCode;
    if (currCode === prev) newOption.selected = true;
    select.append(newOption);
  }
  // if previous selection was filtered out, keep first option
  if (
    !select.querySelector(`option[value="${prev}"]`) &&
    select.options.length
  ) {
    select.selectedIndex = 0;
  }
  updateflag(select); // update flag img for the newly selected option
}

const searchInputs = document.querySelectorAll(".currency-search");
searchInputs.forEach((input, idx) => {
  const select = idx === 0 ? fromCurr : toCurr;
  input.addEventListener("input", function () {
    rebuildOptions(select, input.value);
  });
  // when input is cleared, rebuild full list
  input.addEventListener("search", function () {
    rebuildOptions(select, input.value);
  });
});

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  console.log(fromCurr.value, toCurr.value);
  //   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  const URL = `http://localhost:3001/api/convert?from=${fromCurr.value}&to=${toCurr.value}&amount=${amtVal}`;
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  let finalAmount = data.result;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateflag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
