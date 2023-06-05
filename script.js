function showPaymentForm() {
    var paymentForm = document.getElementById("paymentForm");
    paymentForm.style.display = "block";
  }
  
  function sendMoney() {
    var senderEmail = document.getElementById("senderEmail").value;
    var receiverEmail = document.getElementById("receiverEmail").value;
    var amount = document.getElementById("amount").value;
  
    var popupMessage = document.getElementById("popupMessage");
    var popupText = document.getElementById("popupText");
    popupText.innerText = "Payment complete or Transaction successful.";
    popupMessage.style.display = "block";
  }