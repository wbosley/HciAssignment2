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

		//breadcrumbs.innerText = "Administrate faults > Needs assigning > Fault details";
		legend.innerText = "Location";
		fieldset.appendChild(legend);
		fieldset.appendChild(card);
		document.getElementById("fault-cards-assigning").appendChild(fieldset);
		card.style.border = "0px";
		card.style.backgroundColor = "white";
		card.style.cursor = "default";
		document.getElementById("lowerDetailsDiv").style.display = "flex";
		updateBreadcrumb(["Administrate faults", "Needs assigning", "Fault details"], ["administrate.html", "adminFaultsBar(0)"]);
	}else{

	}
}
function viewDetails2(cardName){
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
		console.log("test");
		var breadcrumbs = document.getElementById("breadcrumbs");
		var fieldset = document.createElement('fieldset');
		var legend = document.createElement('legend');
		//breadcrumbs.innerText = "Administrate faults > Needs assigning > Fault details";
		legend.innerText = "Location";
		fieldset.appendChild(legend);
		fieldset.appendChild(card);
		document.getElementById("fault-cards-assigned").appendChild(fieldset);
		card.style.border = "0px";
		card.style.backgroundColor = "white";
		card.style.cursor = "default";
		document.getElementById("lowerDetailsDiv").style.display = "flex";
		updateBreadcrumb(["Administrate faults", "Assigned", "Fault details"], ["administrate.html", "adminFaultsBar(1)"]);
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
		//breadcrumbs.innerText = "Administrate faults > Needs assigning > Fault details";
		legend.innerText = "Details";
		fieldset.appendChild(legend);
		fieldset.appendChild(card);
		document.getElementById("fault-cards-incomplete").appendChild(fieldset);
		card.style.border = "0px";
		card.style.backgroundColor = "white";
		card.style.cursor = "default";
		document.getElementById("lowerDetailsDiv").style.display = "flex";
		updateBreadcrumb(["Update fault status", "Incomplete", "Fault ???"], ["update.html", "updateBar(0)"]);
	}else{

	}
}

function viewDetailsUpdate2(cardName){
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
		//breadcrumbs.innerText = "Administrate faults > Needs assigning > Fault details";
		legend.innerText = "Details";
		fieldset.appendChild(legend);
		fieldset.appendChild(card);
		document.getElementById("fault-cards-complete").appendChild(fieldset);
		card.style.border = "0px";
		card.style.backgroundColor = "white";
		card.style.cursor = "default";
		document.getElementById("lowerDetailsDiv").style.display = "flex";
		updateBreadcrumb(["Update fault status", "Complete", "Fault ???"], ["update.html", "updateBar(1)"]);
	}else{

	}
}

function updateBreadcrumb(text, links){
	var breadcrumb = document.getElementById("bread")
	var breadcrumbCount = breadcrumb.getElementsByTagName('li').length;
	var textLength = text.length;
	var page = breadcrumb.getElementsByTagName('li')[0].innerText;
	breadcrumb.innerHTML = "";
	for(let i = 0; i<textLength; i++){
		if(i === textLength-1){
			breadcrumb.innerHTML += "<li>" +  text[i] + "</li>";
		}else{
			if(links[i].includes(".html")){
				breadcrumb.innerHTML += "<li>" + "<a href=\"" + links[i] +"\">" + text[i] + "</a>" + "</li>";
			}else{
				breadcrumb.innerHTML += "<li style=\"cursor:pointer;\" onclick=\"" + links[i] + "\">" +  text[i] + "</li>";
			}

		}
	}
}

function highlightAside(index){
	var nav = document.getElementById("sideNav");
	var wad = nav.getElementsByTagName('li')
	for(let i = 0; i< wad.length; i++){
		if(i === index){
			wad[i].style.backgroundColor = "#262626";
		}else{
			wad[i].style.backgroundColor = "transparent";
		}
	}
}

function adminFaultsBar(index){
	highlightAside(index);
	if(index === 0){
		updateBreadcrumb(["Administrate faults", "Needs assigning"], ["administrate.html", "administrate.html"]);
		document.getElementById("fault-cards-assigning").style.display = "flex";
		document.getElementById("fault-cards-assigned").style.display = "none";
		document.getElementById("lowerDetailsDiv").style.display = "none";
		var wad = document.getElementsByClassName("card");

		for(let i =0; i< wad.length; i++){
			wad[i].style.display = "flex";
			console.log("test");
			if(wad[i].parentElement.tagName === 'FIELDSET'){
				wad[i].parentElement.replaceWith(wad[i]);
				wad[i].style.backgroundColor = "#c7c7c7";
				wad[i].style.border = "1px solid";
				wad[i].style.cursor = "pointer";
			}
		}
	}else{
		updateBreadcrumb(["Administrate faults", "Assigned"], ["administrate.html", "administrate.html"]);
		document.getElementById("fault-cards-assigning").style.display = "none";
		document.getElementById("fault-cards-assigned").style.display = "flex";
		document.getElementById("lowerDetailsDiv").style.display = "none";
		var wad = document.getElementsByClassName("card");

		for(let i =0; i< wad.length; i++){
			wad[i].style.display = "flex";
			console.log("test");
			if(wad[i].parentElement.tagName === 'FIELDSET'){
				wad[i].parentElement.replaceWith(wad[i]);
				wad[i].style.backgroundColor = "#c7c7c7";
				wad[i].style.border = "1px solid";
				wad[i].style.cursor = "pointer";
			}
		}
	}

}

function updateBar(index){
	highlightAside(index);
	if(index === 0){
		updateBreadcrumb(["Update fault status", "Incomplete"], ["update.html", "update.html"]);
		document.getElementById("fault-cards-incomplete").style.display = "flex";
		document.getElementById("fault-cards-complete").style.display = "none";
		document.getElementById("lowerDetailsDiv").style.display = "none";
		var wad = document.getElementsByClassName("card");
		var dropdowns = document.getElementsByClassName("dropdown");
		for(let i =0; i < dropdowns.length; i++){
			dropdowns[i].style.display = "inline-block";
		}
		for(let i =0; i< wad.length; i++){
			wad[i].style.display = "flex";
			console.log("test");
			if(wad[i].parentElement.tagName === 'FIELDSET'){
				wad[i].parentElement.replaceWith(wad[i]);
				wad[i].style.backgroundColor = "#c7c7c7";
				wad[i].style.border = "1px solid";
				wad[i].style.cursor = "pointer";
			}
		}
	}else if(index === 1){
		updateBreadcrumb(["Update fault status", "Complete"], ["update.html", "update.html"]);
		document.getElementById("fault-cards-incomplete").style.display = "none";
		document.getElementById("fault-cards-complete").style.display = "flex";
		document.getElementById("lowerDetailsDiv").style.display = "none";
		var wad = document.getElementsByClassName("card");
		var dropdowns = document.getElementsByClassName("dropdown");
		for(let i =0; i < dropdowns.length; i++){
			dropdowns[i].style.display = "inline-block";
		}
		for(let i =0; i< wad.length; i++){
			wad[i].style.display = "flex";
			console.log("test");
			if(wad[i].parentElement.tagName === 'FIELDSET'){
				wad[i].parentElement.replaceWith(wad[i]);
				wad[i].style.backgroundColor = "#c7c7c7";
				wad[i].style.border = "1px solid";
				wad[i].style.cursor = "pointer";
			}
		}
	}else{
		updateBreadcrumb(["Update fault status", "Timetable"], ["update.html", "update.html"]);
		document.getElementById("fault-cards-incomplete").style.display = "none";
		document.getElementById("fault-cards-complete").style.display = "none";
		var dropdowns = document.getElementsByClassName("dropdown");
		for(let i =0; i < dropdowns.length; i++){
			dropdowns[i].style.display = "none";
		}
	}
}

function mapSelectSuccess(){
	document.getElementById("map-select-success").style.display = "flex";
}

function formSubmitSuccess(){
	document.getElementById("form-submit-success").style.display = "flex";
}