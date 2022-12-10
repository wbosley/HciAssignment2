function viewDetails(cardName){
	var card = document.getElementById(cardName);
	var cards = document.getElementsByClassName("card");
	var hiddenCards = false;

	for(let i=0; i< cards.length; i++){
		if(cards[i].id !== cardName && cards[i].style.display !== "none"){
			cards[i].style.display = "none";
			hiddenCards = true;
		}
	}
	if(hiddenCards === true){
		var breadcrumbs = document.getElementById("breadcrumbs");
		var fieldset = document.createElement('fieldset');
		var legend = document.createElement('legend');
		breadcrumbs.innerText = "Administrate faults > Needs assigning > Fault details";
		legend.innerText = "Location";
		fieldset.appendChild(legend);
		fieldset.appendChild(card);
		document.getElementById("fault-cards").appendChild(fieldset);
		card.style.border = "0px";
		card.style.backgroundColor = "white";
		document.getElementById("lowerDetailsDiv").style.display = "flex";
	}else{

	}
}
function viewDetailsUpdate(cardName){
	var card = document.getElementById(cardName);
	var cards = document.getElementsByClassName("card");
	var hiddenCards = false;

	for(let i=0; i< cards.length; i++){
		if(cards[i].id !== cardName && cards[i].style.display !== "none"){
			cards[i].style.display = "none";
			hiddenCards = true;
		}
	}
	if(hiddenCards === true){
		var breadcrumbs = document.getElementById("breadcrumbs");
		var fieldset = document.createElement('fieldset');
		var legend = document.createElement('legend');
		breadcrumbs.innerText = "Administrate faults > Needs assigning > Fault details";
		legend.innerText = "Details";
		fieldset.appendChild(legend);
		fieldset.appendChild(card);
		document.getElementById("fault-cards").appendChild(fieldset);
		card.style.border = "0px";
		card.style.backgroundColor = "white";
	}else{

	}
}