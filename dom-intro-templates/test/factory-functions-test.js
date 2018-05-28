describe('The colorChange function ',function(){

  it('should return the name of the class to be added when warning level is reached', function(){
     var textFactoryObject = TextBill();
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');


     assert.equal(textFactoryObject.thresholdColor(),"warning");
  });

  it('should return the name of the class to be added when critical level is reached', function(){
     var textFactoryObject = TextBill();
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('call');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');
     textFactoryObject.billTwo('sms');


     assert.equal(textFactoryObject.thresholdColor(),"danger");
  });

});
