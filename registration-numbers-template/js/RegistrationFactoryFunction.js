function RegistrationFactoryFunction(storedRegistrationNumbers){
  var registrationsAdded = storedRegistrationNumbers || {};
  var newTownList = [];

  function addRegNumber(reg){
    if(reg !== ""){
      if (registrationsAdded[reg] === undefined){
          registrationsAdded[reg] = 0;
      }
    }
  }

  function filterFunction(registrationsAddedList,location){
    var filtered = [];
    for(var i = 0;i<registrationsAddedList.length;i++){
      if(registrationsAddedList[i].startsWith(location)){
        filtered.push(registrationsAddedList[i]);
      }
    }
    return filtered;
  }

  function resetPage(){
    localStorage.clear();
    location.reload();
  }
  function registrationListMaker(something){
    return Object.keys(something||registrationsAdded);
  }

  function getTheMap(){
    return registrationsAdded;
  }

  return {
    addReg :addRegNumber,
    theMap: getTheMap,
    lister : registrationListMaker,
    filter : filterFunction,
    reset : resetPage
  }
}
