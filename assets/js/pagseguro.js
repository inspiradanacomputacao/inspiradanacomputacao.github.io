"use strict"

var donationButton = document.querySelector(".right li:last-child");

donationButton.onclick = function() {
	var formm = document.createElement("form");
	formm.setAttribute("action", "https://pagseguro.uol.com.br/checkout/v2/donation.html");

	var currency = createInputHidden("currency", "BRL");
	var receiverEmail = createInputHidden("receiverEmail", "lidianedesouzamonteiro@gmail.com");

	formm.appendChild(currency);
	formm.appendChild(receiverEmail);

	document.body.appendChild(formm);

	formm.submit();

	return false;
}

function createInputHidden(name, value) {
	var element = document.createElement("input");

	element.setAttribute("type", "hidden");
	element.setAttribute("name", name);
	element.setAttribute("value", value);

	return element;
}