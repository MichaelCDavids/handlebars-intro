var calculateBtn = document.querySelector('.calculateBtn');
var billTotalElement = document.querySelector('.billTotal');
var billString = document.querySelector('.billString');


function calculateBill(usage){
  var billItems = usage.split(",");
  var billTotal = 0;
  for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i].trim();
      if (billItem === "call"){
          billTotal += 2.75;
      }
      else if (billItem === "sms"){
          billTotal += 0.75;
      }
  }
  var Total = billTotal.toFixed(2);
  return Total;
}
function calculateBtnClicked(){
    var projectedUsage = billString.value;
    var roundedBillTotal = calculateBill(projectedUsage);
    billTotalElement.innerHTML = roundedBillTotal;
}
function colorChangeOne(){
  if(billTotalElement.innerHTML<20.00){
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");
  }else if(billTotalElement.innerHTML>20.00 && billTotalElement.innerHTML<30.00){
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.add("warning");
  }else if(billTotalElement.innerHTML>=30.00){
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.add("danger");
  }
}

calculateBtn.addEventListener('click', function(){
  calculateBtnClicked();
  colorChangeOne();
});
