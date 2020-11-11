/* 
Get the Passed ID to fetch from API to get the data for that Product
    https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams 
*/

const url = "";

const resultsContainer = document.querySelector(".results");

async function getProducts() { 

const response = await fetch(url);

const results = await response.json();

const peoducts = results.all;

resultsContainer.innerHTML = "";

for (let i = 0; i < facts.length; i++) {
    console.log(facts[i].text);

/* ??????????ska ikke ha me?
  if (i === 4) {
      break;
  }*/

    resultsContainer.innerHTML  += `<div class = "result">${products[i].text}<div>`;
 }
}

getProducts();