document.getElementById("calculate").addEventListener("click", function() {
  //get value from input field
  let principal = parseFloat(document.getElementById("principal").value);
  let time = parseFloat(document.getElementById("time").value);
  let rates = parseFloat(document.getElementById("rate").value);
  let rate;
  if (isNaN(principal) || isNaN(time)) {
    alert("Please enter valid numeric values for both principal and time.");
    return;
  }
  if (principal < 500 || principal > 10000) {
    document.getElementById("error").innerText =
      "Principal must be between $500 and $10,000.";
    document.getElementById("error").style.display = "block";
    return;
  }
  document.getElementById("error").style.display = "none";
  if (isNaN(rates)) {
    rate = principal < 1000 ? 5 : principal <= 5000 ? 7 : 10;
  } else {
    rate = rates;
  }
  if (time > 5) rate += 2;

  let interest = (principal * rate * time) / 100;
  let totalAmount = principal + interest;

  document.getElementById("appliedRate").innerText = rate;
  document.getElementById("appliedRateAomunt").innerText = interest;

  document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
  document.getElementById("additionalInfo").innerText =
    time > 5
      ? "Bonus 2% interest for more than 5 years."
      : "Base interest applied.";

  document.getElementById("result").style.display = "block";
});
