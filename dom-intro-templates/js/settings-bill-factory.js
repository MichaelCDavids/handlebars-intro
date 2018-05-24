function SettingsFunctions(){
  var callValue = 0;
  var smsValue = 0;
  var warningValue = 0;
  var criticalValue = 0;
  var radioSettingCallsTotal = 0;
  var radioSettingsSmsTotals = 0;
  var radioSettingsAllTotals = 0;

  function billCalculator(billTypeSettings){
    if(billTypeSettings === 'call'){
        radioSettingCallsTotal += callValue;
        radioSettingsAllTotals += callValue;
    }else if( billTypeSettings === 'sms' ){
      radioSettingsSmsTotals += smsValue;
      radioSettingsAllTotals += smsValue;
    }
  }
  //Functions for the Tests
  function callCost(x){
    return callValue = x;
  }
  function smsCost(x){
    return smsValue = x;
  }
  function setWarningLevel(x){
    return warningValue = x;
  }
  function setCriticalLevel(x){
    return criticalValue = x;
  }
  function isCriticalLevelReached(){
    if(radioSettingsAllTotals>=criticalValue){
      return true;
    }else{
      return false;
    }
  }

  //Updating Values
  function updateCall(value){
    callValue = parseFloat(value);
    return callValue;
  }
  function updateSms(value){
    smsValue = parseFloat(value);
    return smsValue;
  }
  function updateWarning(value){
    warningValue = parseFloat(value);
    return warningValue;
  }
  function updateCritical(value){
    criticalValue = parseFloat(value);
    return criticalValue;
  }



  function getCallBill(){
    return radioSettingCallsTotal
  }
  function getSmsBill(){
    return radioSettingsSmsTotals
  }
  function getTotalBill(){
    return radioSettingsAllTotals
  }




  function getCallValue(){
    return callValue;
  }
  function getSmsValue(){
    return smsValue;
  }
  function getWarning(){
    return warningValue
  }
  function getCritical(){
    return criticalValue
  }


  return{

    updateCallValue : updateCall,
    updateSmsValue : updateSms,
    updateWarningValue : updateWarning,
    updateCriticalValue : updateCritical,

    calculateSettingsBill : billCalculator,

    //Used for testing
    newCall :callCost,
    newSms : smsCost,
    newWarning : setWarningLevel,
    newCritical : setCriticalLevel,
    reachedCriticalLevel : isCriticalLevelReached,

    CallValue: getCallValue,
    SmsValue: getSmsValue,
    WarningValue :getWarning,
    CriticalValue :getCritical,

    //
    allCalls : getCallBill,
    allSms : getSmsBill,
    allTotal : getTotalBill
  }

}
