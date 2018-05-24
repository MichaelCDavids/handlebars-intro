document.addEventListener('DOMContentLoaded', function(){

  var textBill = document.querySelector('.billTypeText');

  var callTotal = document.querySelector('.callTotalOne');
  var smsTotal = document.querySelector('.smsTotalOne');
  var totalBill = document.querySelector('.totalOne');

  var addButton = document.querySelector('.addToBillBtn');

  // Making Widget Use Handlebars
  var templateSource = document.querySelector(".TextBillTemplate").innerHTML;
  var templateTextBill = Handlebars.compile(templateSource);
  var insertDataElement = document.querySelector(".InsertTextBillTemplate");

  var textBillObj = TextBill();

  var initialData = {
    callClass: 'callTotalOne',
    smsClass: 'smsTotalOne',
    totalClass: 'totalOne',
    callTotal: '0.00',
    smsTotal: '0.00',
    GrandTotal: '0.00'
  };
  insertDataElement.innerHTML = templateTextBill(initialData);

  function billTotals() {
     var bills = {
      callTotal: textBillObj.callTwo().toFixed(2),
      smsTotal: textBillObj.smsTwo().toFixed(2),
      GrandTotal: textBillObj.finalTotal().toFixed(2),
      color : textBillObj.thresholdColor()
     };
     insertDataElement.innerHTML = templateTextBill(bills);
  }

  addButton.addEventListener('click', function(){
   textBillObj.billTwo(textBill.value.trim());
   billTotals();
  });
});
