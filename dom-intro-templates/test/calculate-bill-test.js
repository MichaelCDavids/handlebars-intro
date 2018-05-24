describe('The calculate-bill function logic',function(){
  it('should calculate the total for a string of call usage', function(){
    assert.equal(calculateBill("call,call,call,call,call,call,call,call,call,call"),27.50);
  });
  it('should calculate the total for a string of sms usage', function(){
    assert.equal(calculateBill("sms,sms,sms,sms,sms,sms,sms,sms,sms,sms"),7.50);
  });
  it('should calculate the total for a string of call+sms usage', function(){
    assert.equal(calculateBill("call,call,call,call,call,call,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,call,call,call,call"),35.00);
  });
  it('should calculate the total for an empty string of phone usage', function(){
    assert.equal(calculateBill(" "),0.00);
  });
});
