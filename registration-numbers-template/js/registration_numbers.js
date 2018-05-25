document.addEventListener('DOMContentLoaded', function() {
  var input = document.querySelector('.registration-number-field');
  var addBtn = document.querySelector('.add-button');
  var resetBtn = document.querySelector('.reset-button');
  var output = document.querySelector('.registration_list');
  var filterOption = document.querySelector('#select-filter');
  var applyFilterBtn = document.querySelector('#apply-filter');
  var filterOptionHandlebars = document.querySelector('#select-filter-handlebars');
  var applyFilterBtnHandlebars = document.querySelector('#apply-filter-handlebars');
  var errortext = document.querySelector('#errors');


  // Making Widget Use Handlebars
  var templateSource = document.querySelector(".registration-template").innerHTML;
  var templateRegistration = Handlebars.compile(templateSource);
  var insertDataElements = document.querySelector(".insertRegistrationTemplate");


  var storedRegistrationNumbers = localStorage.getItem('registrations') ? JSON.parse(localStorage.getItem('registrations')) : {};
  var regObj = RegistrationFactoryFunction(storedRegistrationNumbers);

   window.addEventListener('load', function() {
      var listForNow = regObj.lister();
      for (var i = 0; i < listForNow.length; i++) {
         enterReg(listForNow[i]);
      }
   });
   var numberPlates = {
      plates : regObj.lister(storedRegistrationNumbers).reverse()
   };
   insertDataElements.innerHTML = templateRegistration(numberPlates);

  function validate() {
    var regNumEntered = document.getElementById('regNumber').value;
    var regNumEntered = regNumEntered.toUpperCase();
    var allowedCharacters = /^[\w ]+$/;
    if (regNumEntered.match(allowedCharacters)) {
      return true;
    } else {
      errortext.innerHTML = "please enter a valid reg number";
      regNumber.focus();
      return false
    }
  }

  function enterReg(enteredRegNumber) {
    var newListItem = document.createElement('li');
    var list = document.getElementById("my-list");
    newListItem.textContent = enteredRegNumber.toUpperCase();
    output.appendChild(newListItem);
    list.insertBefore(newListItem, list.childNodes[0]);
  }

  addBtn.addEventListener('click', function() {
    var enteredRegNumber = input.value;
    var isNotInMap = !(enteredRegNumber.toUpperCase() in regObj.theMap());
    if (isNotInMap) {
      var startString = enteredRegNumber.substring(0, 3);
      var places = ["CA ", "CJ ", "CY ", "CF ", "CAW", "GP ", "CL ", "CK "];
      var isInList = false;
      for (var i = 0; i < places.length; i++) {
        if (startString.toUpperCase() === 'CA ') {
          isInList = true;
        }
        if (startString.toUpperCase() === 'CAW') {
          isInList = true;
        }
        if (startString.toUpperCase() === places[i]) {
          isInList = true;
        }
      }
      if (isInList) {
        if (validate() && isNotInMap) {
          regObj.addReg(enteredRegNumber.toUpperCase());
          enterReg(enteredRegNumber.toUpperCase());
          var numberPlates = {
             plates : regObj.lister().reverse()
          };
          insertDataElements.innerHTML = templateRegistration(numberPlates);
          localStorage.setItem('registrations', JSON.stringify(regObj.theMap()));
        }
      } else {
         errortext.innerHTML = "please enter a valid reg number";
         regNumber.focus();
      }
    } else {
      errortext.innerHTML = "Trying to add duplicate!";
      regNumber.focus();
    }
    input.value = "";
  });
  resetBtn.addEventListener('click',function(){
     regObj.reset();
 });

  applyFilterBtn.addEventListener('click', function() {
    document.getElementById('my-list').innerHTML = "";
    var location = filterOption.value;
    var locations = ["CA ", "CJ", "CY", "CF", "CAW", "GP", "CL", "CK"];
    var allRegistrations = regObj.lister();

    var result = false;
    for (var i = 0; i < locations.length; i++) {
      if (location === locations[i]) {
        result = true;
      }
    }
    if (result) {
      var filteredRegNumbers = regObj.filter(allRegistrations, location);
      for (var i = 0; i < filteredRegNumbers.length; i++) {
        enterReg(filteredRegNumbers[i]);
      }
    } else {
      for (var i = 0; i < allRegistrations.length; i++) {
        enterReg(allRegistrations[i]);
      }
    }
  });
  applyFilterBtnHandlebars.addEventListener('click', function() {
    document.getElementById('my-list-handlebars').innerHTML = "";
    var location = filterOptionHandlebars.value;
    var locations = ["CA ", "CJ", "CY", "CF", "CAW", "GP", "CL", "CK"];
    var allRegistrations = regObj.lister();

    var result = false;
    for (var i = 0; i < locations.length; i++) {
      if (location === locations[i]) {
        result = true;
      }
    }
    if (result) {
      var numberPlates = {
         plates : regObj.filter(allRegistrations, location).reverse()
      };
      insertDataElements.innerHTML = templateRegistration(numberPlates);
    } else {
      var numberPlates = {
         plates : regObj.lister().reverse()
      };
      insertDataElements.innerHTML = templateRegistration(numberPlates);
    }
  });
});
