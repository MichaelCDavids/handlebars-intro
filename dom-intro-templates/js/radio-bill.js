document.addEventListener('DOMContentLoaded', function(){
  var radioButton = document.querySelector('.billItemTypeRadio');
  var radioAddButton = document.querySelector('.radioBillAddBtn');
  var radioCallTotals = document.querySelector('.callTotalTwo');
  var radioSmsTotals = document.querySelector('.smsTotalTwo');
  var radioAllTotal = document.querySelector('.totalTwo');


  var templateSource = document.querySelector(".RadioBillTemplate").innerHTML;
  var templateRadioBill = Handlebars.compile(templateSource);
  var insertDataElement = document.querySelector(".InsertRadioBillTemplate");

  var radioWidget = TextBill();

  var initialData = {
    callClass: 'callTotalTwo',
    smsClass: 'smsTotalOne',
    totalClass: 'totalOne',
    radioCallTotal: '0.00',
    radioSmsTotal: '0.00',
    radioGrandTotal: '0.00'
  };
  insertDataElement.innerHTML = templateRadioBill(initialData);

  function radioTotals() {
     var radioBills = {
      radioCallTotal: radioWidget.callTwo().toFixed(2),
      radioSmsTotal: radioWidget.smsTwo().toFixed(2),
      radioGrandTotal: radioWidget.finalTotal().toFixed(2),
      color : radioWidget.thresholdColor()
     };
     insertDataElement.innerHTML = templateRadioBill(radioBills);
  }
  radioAddButton.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
      var bill = radioWidget.billTwo(billItemType);
      radioTotals();
    }
  });


});
