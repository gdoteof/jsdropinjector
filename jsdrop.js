(function(){
  select = document.createElement("select");
  selectId = "insertedSelect";
  select.id = selectId;

options =[
  {p:49, cost:"599" , label:"35,000 FBA Orders"},
  {p:50, cost:"799" , label:"50,000 FBA Orders"},
  {p:51, cost:"1099", label:"75,000 FBA Orders"},
  {p:52, cost:"1349", label:"100,000 FBA Orders"},
  {p:53, cost:"1599", label:"125,000 FBA Orders"},
  {p:54, cost:"1799", label:"150,000 FBA Orders"},
  {p:55, cost:"1999", label:"200,000 FBA Orders"},
  {p:56, cost:"2299", label:"250,000 FBA Orders"},
  {p:57, cost:"2499", label:"300,000 FBA Orders"}
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
  const buttonElem     = getButtonElement();
  if(i == 0){
    startingAtElem.innerText = "Starting At" 
    startingAtElem.classList.remove("hide-starting-at");
  } else {
    startingAtElem.innerText = "Only" 
    startingAtElem.classList.add("hide-starting-at");
  }

  //Set the Price
  priceElem.textContent = "$" + o.cost;

  //Create the 99c thing which we destroyed (oops)
  sup = document.createElement('sup');
  sup.innerText = '.99';
  priceElem.appendChild(sup);

  //Update the link
  const baseUrl = "https://restockpro.ecomengine.com/home/signup?p=";
  buttonElem.cta_dest_link = baseUrl + o.p;
  buttonElem.href = baseUrl + o.p;
}

select.onchange=onchange

//This is a little finicky still.  It assumes somewhat stable internal structure.  We need an ID or class on the specific <ul> to be safe.
function insertSelector(){
  const liWrapper = document.createElement('li');
  liWrapper.appendChild(select);
  document.querySelector("#rsp-enterprise-column ul > li:nth-child(1)").replaceWith(liWrapper)
}

function getStartElement(){
  return document.querySelector('#rsp-enterprise-column .rsp-pricing-enterprise--starting-at')
}


function getPriceElement(){
  return document.querySelector('#rsp-enterprise-column .rsp-pricing-enterprise--price')
}

function getButtonElement(){
  return document.querySelector('#rsp-enterprise-column .rsp-pricing-enterprise--button')
}

function attach(){
  
}

function run(){
  insertSelector();
}

run()
})()
