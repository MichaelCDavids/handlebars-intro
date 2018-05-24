describe('The settings-bill function logic',function(){

  it('should calculate the total for a call', function(){

    // global
    var settingBill = SettingsFunctions()

    // settings button
    settingBill.newCall(5);
    settingBill.newSms(2.50);
    //todo - warning level...

    // add button
    settingBill.calculateSettingsBill('call');

    assert.equal(settingBill.allCalls(), 5);
    assert.equal(settingBill.allSms(), 0);
    assert.equal(settingBill.allTotal(), 5);

  });

  it('should calculate the total for mulitple calls', function(){

    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');

    assert.equal(settingBill.allCalls(), 15);
    assert.equal(settingBill.allSms(), 0);
    assert.equal(settingBill.allTotal(), 15);

  });

  it('should calculate the total for a call and sms', function(){

    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');

    assert.equal(settingBill.allCalls(), 5);
    assert.equal(settingBill.allSms(), 2.50);
    assert.equal(settingBill.allTotal(), 7.50);

  });

  it('should calculate the total for a sms', function(){

    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('sms');

    assert.equal(settingBill.allCalls(), 0);
    assert.equal(settingBill.allSms(), 2.50);
    assert.equal(settingBill.allTotal(), 2.50);

  });
  it('should calculate the total for a string of sms usage', function(){
    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');

    assert.equal(settingBill.allSms(),25.00);
  });
  it('should calculate the total for a string of call+sms usage', function(){
    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    assert.equal(settingBill.allTotal(),37.50);
  });
  it('should check if the total is greater or equal to critical level',function(){
      var settingBill = SettingsFunctions();

      settingBill.newCall(5);
      settingBill.newSms(2.50);
      settingBill.newWarning(10.00);
      settingBill.newCritical(50.00);

      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');

      assert.isAtMost(settingBill.allTotal(), settingBill.CriticalValue());
      //assert.equal(settingBill.reachedCriticalLevel(), true);
      //assert.isAtMost(settingBill.total(), settingBill.CriticalVal());

  });
  it('should check if critical level is reached',function(){
    var settingBill = SettingsFunctions();

    settingBill.newCall(5);
    settingBill.newSms(2.50);
    settingBill.newWarning(10.00);
    settingBill.newCritical(50.00);

    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');

    assert.equal(settingBill.reachedCriticalLevel(), true);
  });
  it('should check if critical level is reached',function(){
    var settingBill = SettingsFunctions();

    settingBill.newCall(5);
    settingBill.newSms(2.50);
    settingBill.newWarning(10.00);
    settingBill.newCritical(100.00);

    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');

    assert.equal(settingBill.reachedCriticalLevel(), false);
  });
});
