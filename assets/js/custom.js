/* ----------------------------
/*  Name: encof
    Author: 
    Version: 
/* -------------------------- */

// mobilephone menu
function menu(){
	let nav = document.querySelector("#nav");
	
	if(nav.style.display === "block"){
		nav.style.display = "none";
	} else{
		nav.style.display = "block";
	}
}


// API call
let box = document.querySelector("#conf_boks")


function callConference(){
	let url = '/assets/jsonfiler/konferencer.json';

	fetch(url, {
		method: 'GET',
	})
	.then (function(data){
		return data.json();
	})
	.then(function(jsonData){
		conferenceHTML(jsonData);
	})
	.catch(function(error){
		console.log("noget gik galt: " + error);
	})
}

function conferenceHTML(conference){

	// Define the dates to sort the object before today, away.
	let d = new Date();
	let year = d.getFullYear();
	let month = d.getMonth() + 1;
	let day = d.getDate();
	let compareDate = year+"-"+month+"-"+day;
	
	// Add a 0 if there is only one number in the month og day.
	if(month < 10){
		compareDate = year+"-0"+month+"-"+day;
	}
	else if(day < 10){
		compareDate = year+"-"+month+"-0"+day;
	}

	// Loop to get the conference out
	for(let c of conference){

		let confContainer = document.createElement("article");
		if(compareDate >= c.date || c.date === null){
			
			confContainer.style.display = "none"; 
		}
		else{
			confContainer.classList.add("enkeltKonf","shadow","flexSection");
			confContainer.id = c.id;
			confContainer.innerHTML = '<div class="konferenceImg"><img src="./assets/images/' + c.logo +'" alt="'+ c.title + '"></div><div class="konferenceInfo"><h2>'+ c.title + '</h2><h3>' + c.date+ ", " + c.place +'</h3><p class="text_snippet snippet_width">'+ c.description + '</p><a target="_blank" class="btn shadow" href="'+ c.link + '">Gå til hjemmeside</a><a href="./conference_subpage/'+ c.subpage +'" class="btn shadow chosenBtn">Læs mere</button></a>'
		}
		box.appendChild(confContainer);
	}
	
}

function addConfValidation(){
	let confName = document.querySelector("#confName");
	let confLink = document.querySelector("#confLink");
	let confDate = document.querySelector("#confDate");
	let confImg = document.querySelector("#confImg");
	let confDescription = document.querySelector("#confDescription");

	if(confName.value === ""){
		confName.style.borderColor = "#B30000";
	}
	else if(confLink.value === ""){
		confLink.style.borderColor = "#B30000"
	}
	else if(confDate.value === ""){
		confDate.style.borderColor = "#B30000"
	}
	else if(confImg.value === ""){
		confImg.style.borderColor = "#B30000"
	}
	else if(confDescription.value === ""){
		confDescription.style.borderColor = "#B30000"
	}
	else{
		confName.style.borderColor = "green";
		confLink.style.borderColor = "green";
		confDate.style.borderColor = "green";
		confImg.style.borderColor = "green";
		confDescription.style.borderColor = "green";

	}
}
function contactValidation(){
	let name = document.querySelector("#name");
	let contactMail = document.querySelector("#contactMail");
	let topic = document.querySelector("#topic");
	let message = document.querySelector("#message");

	if(name.value === ""){
		name.style.borderColor = "#B30000";
	}
	else if(contactMail.value === ""){
		contactMail.style.borderColor = "#B30000"
	}
	else if(topic.value === ""){
		topic.style.borderColor = "#B30000"
	}
	else if(message.value === ""){
		message.style.borderColor = "#B30000"
	}
	else{
		name.style.borderColor = "green";
		contactMail.style.borderColor = "green";
		topic.style.borderColor = "green";
		message.style.borderColor = "green";
	}
}