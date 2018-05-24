describe('The text-bill function logic',function(){
  it('should calculate the total for one` call',function(){
    var textFactoryObject = TextBill();

    textFactoryObject.billTwo('call');

    assert.equal(textFactoryObject.callTwo(),2.75);
  });
  it('should calculate the total for multiple calls',function(){
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

    assert.equal(textFactoryObject.callTwo(),27.50);
  });
  it('should calculate the total for a call and a sms',function(){
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

    assert.equal(textFactoryObject.finalTotal(),35.00);
  });
  it('should calculate the total for a sms',function(){
    var textFactoryObject = TextBill();

    textFactoryObject.billTwo('sms');

    assert.equal(textFactoryObject.smsTwo(),0.75);
  });
  it('should calculate the total for a multiple sms(s)',function(){
    var textFactoryObject = TextBill();

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

    assert.equal(textFactoryObject.smsTwo(),7.50);
  });
});
