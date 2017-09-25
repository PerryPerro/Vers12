var imageArray = ["bildspel1.jpg", "bildspel2.jpg", "bildspel3.jpg"];

var myImage = document.getElementById("img");

var imageIndex = 1;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex = (imageIndex + 1) % imageArray.length;
}

var myTimer = setInterval(changeImage, 2000);

function inputValid(){
	var namnInput = document.getElementById("namnId").value;
	var mailInput = document.getElementById("mailId").value;
	var meddelandeInput = document.getElementById("meddelande").value;
	if(form.namn.value == ""){
		alert("Error: Namn kan inte va tomt");
		return false;
	}
	if(form.mail.value == ""){
		alert("Error: mail kan inte va tomt");
		return false;
	}
	if(form.meddelande.value == ""){
		alert("Error: meddelande kan inte va tomt");
		return false;
	}
	if(namnInput.length < 3){
		alert("Namn måsta vara minst 3 tecken");
		return false;
	}
	if(! /^[a-zA-ZäöåÄÖÅ]+$/.test(namnInput)){
		alert("Inga ottilåtna tecken, endast A-Ö");
		return false;
	}
	if(! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mailInput)){
		alert("skriv en giltig email");
		return false;
	}
	else{
		//alert("tjenaaaa");
	}
}

var userElement = document.getElementById("namnId");
var passwordElement = document.getElementById("mailId");

function validate(element, regex){
	var value = element.value;
	var isValid = regex.test(value);
}

userElement.addEventListener("keyup", function(){
	var value = userElement.value;

	var usernameRegex = /^[a-zA-ZäöåÄÖÅ]+$/;

	var isValid = usernameRegex.test(value);

	userElement.style.backgroundColor = isValid ? "green" : "red";
});

passwordElement.addEventListener("keyup", function(){
	var value = passwordElement.value;

	var passwordRegex = /.{8,}/;

	var isValid = passwordRegex.test(value);

	passwordElement.style.backgroundColor = isValid ? "green" : "red";
})

	document.getElementById("skicka").addEventListener("click", storeData);

	function storeData(){
		var input = document.getElementById("namnId");
		var input2 = document.getElementById("mailId");
		localStorage.setItem("namn", input.value);
		localStorage.setItem("mail", input2.value);
	}

function loadData() {
	var inputParse = document.getElementById("namnId");
	inputParse.value = localStorage.getItem("namn");
	var inputParse = document.getElementById("mailId");
	inputParse.value = localStorage.getItem("mail")
}

loadData();

$(document).ready(function (){


	$("#stopKnapp").click(function(){
    clearInterval(myTimer);
});	


	$(window).resize(function(){
		var innerWidth = $("body").prop("scrollWidth");
		if (innerWidth <= 751) {
			$(".meny").hide();
		}
		if (innerWidth >= 751) {
			$(".meny").show();
		}
}).resize();

	$(".hamburgare").click(function(){
		$(".meny").slideToggle("slow");
	});


	
})


function skapaElement(element) {
return document.createElement(element)
}

function tilldelaVarde(parent, el) {

	return parent.appendChild(el);

	};

function setAnchor(element, el) {
	element.setAttribute('href', "el");
}
const table = document.getElementById("Innehall");
const url = 'https://api.github.com/search/repositories?q=language:javascript+created:%3E2017-09-18&sort=stars&order=desc';

  fetch(url)
  .then((resp) => resp.json())
  .then(function(response) {

    let innehall = response.items;
    let femVarden = innehall.slice(0, 5);
    return femVarden.map(function(varjeInnehall) {

      let td = skapaElement('td'),
          span = skapaElement('span'),
          aNamn = skapaElement('a'),
          stars = skapaElement('span'),
          owner = skapaElement('a'),
          row = skapaElement("tr");
          
          	//Hämtar värden ur arrayen och tilldelar variablerna. 
      span.innerHTML =varjeInnehall.name;
      owner.innerHTML =varjeInnehall.owner.login;
      stars.innerHTML = varjeInnehall.stargazers_count;

      	//Tilldelar hyperlänk för namn och projektnamn
      aNamn.setAttribute('href', varjeInnehall.html_url); //Repon
      owner.setAttribute('href', varjeInnehall.owner.html_url);

      // Använder funktionen appendchild för att tilldela parent elemntet ett värde, t.ex en Td tilldelas en span / anchor tag.
      tilldelaVarde(row, td);
      tilldelaVarde(td, stars);
      tilldelaVarde(td, span);
      tilldelaVarde(aNamn, span);
      tilldelaVarde(row, aNamn);
      tilldelaVarde(table, row);

      tilldelaVarde(row, td);
      tilldelaVarde(row, owner);



    })
  })
  .catch(function(error) {
    console.log(error);
  });

  const table2 = document.getElementById("InnehallCSS");
	const url2 = 'https://api.github.com/search/repositories?q=language:css+created:%3E2017-09-18&sort=stars&order=desc';

  fetch(url2)
  .then((resp) => resp.json())
  .then(function(response) {

    let innehall = response.items;
    let femVarden = innehall.slice(0, 5);
    return femVarden.map(function(varjeInnehall) {

      let td = skapaElement('td'),
          span = skapaElement('span'),
          aNamn = skapaElement('a'),
          stars = skapaElement('span'),
          owner = skapaElement('a'),
          row = skapaElement("tr");
          
          	//Hämtar värden ur arrayen och tilldelar variablerna. 
      span.innerHTML =varjeInnehall.name;
      owner.innerHTML =varjeInnehall.owner.login;
      stars.innerHTML = varjeInnehall.stargazers_count;

      	//Tilldelar hyperlänk för namn och projektnamn
      aNamn.setAttribute('href', varjeInnehall.html_url); //Repon
      owner.setAttribute('href', varjeInnehall.owner.html_url);

      // Använder funktionen appendchild för att tilldela parent elemntet ett värde, t.ex en Td tilldelas en span / anchor tag.
      tilldelaVarde(row, td);
      tilldelaVarde(td, stars);
      tilldelaVarde(td, span);
      tilldelaVarde(aNamn, span);
      tilldelaVarde(row, aNamn);
      tilldelaVarde(table2, row);

      tilldelaVarde(row, td);
      tilldelaVarde(row, owner);



    })
  })
  .catch(function(error) {
    console.log(error);
  });
