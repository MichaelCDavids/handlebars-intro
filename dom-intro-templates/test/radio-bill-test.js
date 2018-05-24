describe('The radio-bill function logic',function(){
  it('should calculate the total for one` call',function(){
    var radioFactoryObject = TextBill();

    radioFactoryObject.billTwo('call');

    assert.equal(radioFactoryObject.callTwo(),2.75);
  });
  it('should calculate the total for multiple calls',function(){
    var radioFactoryObject = TextBill();

    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');

    assert.equal(radioFactoryObject.callTwo(),27.50);
  });
  it('should calculate the total for a call and a sms',function(){
    var radioFactoryObject = TextBill();

    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('call');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');

    assert.equal(radioFactoryObject.finalTotal(),35.00);
  });
  it('should calculate the total for a sms',function(){
    var radioFactoryObject = TextBill();

    radioFactoryObject.billTwo('sms');

    assert.equal(radioFactoryObject.smsTwo(),0.75);
  });
  it('should calculate the total for a multiple sms(s)',function(){
    var radioFactoryObject = TextBill();

    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');
    radioFactoryObject.billTwo('sms');

    assert.equal(radioFactoryObject.smsTwo(),7.50);
  });
});
