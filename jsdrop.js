(function(){
  select = document.createElement("select");
selectId = "insertedSelect";
select.id = selectId

options =[
  {cost:"599" , label:"35,000 FBA Orders"},
  {cost:"799" , label:"50,000 FBA Orders"},
  {cost:"1099", label:"75,000 FBA Orders"},
  {cost:"1349", label:"100,000 FBA Orders"},
  {cost:"1599", label:"125,000 FBA Orders"},
  {cost:"1799", label:"150,000 FBA Orders"},
  {cost:"1999", label:"200,000 FBA Orders"},
  {cost:"2299", label:"250,000 FBA Orders"},
  {cost:"2499", label:"300,000 FBA Orders"}
]

for(i in options){
  var option = document.createElement("option");
  option.value=options[i].cost;
  option.text=options[i].label;
  select.appendChild(option)
}

function onchange(e){
  const i = e.target.options.selectedIndex;
  const o = options[i];
  const startingAtElem = getStartElement();
  const priceElem      = getPriceElement();
  if(i == 0){
    startingAtElem.innerText = "Starting At" 
    startingAtElem.classList.remove("hide-starting-at");
  } else {
    startingAtElem.innerText = "Only" 
    startingAtElem.classList.add("hide-starting-at");
  }

  priceElem.textContent = "$" + o.cost;
  sup = document.createElement('sup');
  sup.innerText = '.99';
  priceElem.appendChild(sup);
}

select.onchange=onchange

function insertSelector(){
  const liWrapper = document.createElement('li');
  liWrapper.appendChild(select);
  document.querySelectorAll("[id^=hs_cos_wrapper_module] > ul > li:nth-child(1)")[3].replaceWith(liWrapper)
}

function getStartElement(){
  return document.querySelectorAll('body > div.body-container-wrapper > div > div.row-fluid-wrapper.row-depth-1.row-number-20 > div > div > div > div.row-fluid-wrapper.row-depth-1.row-number-3 > div > div > div > div > div:nth-child(4) span[id^=hs_cos_wrapper_module]')[1]
}


function getPriceElement(){
   return document.querySelectorAll('body > div.body-container-wrapper > div > div.row-fluid-wrapper.row-depth-1.row-number-20 > div > div > div > div.row-fluid-wrapper.row-depth-1.row-number-3 > div > div > div > div > div:nth-child(4) span[id^=hs_cos_wrapper_module]')[2]
}

function attach(){
  
}

function run(){
  insertSelector();
}

run()
})()
