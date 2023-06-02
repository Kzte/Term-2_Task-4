var vehicleInventory = [];


function addVehicle(event) {
  event.preventDefault();

 
  var vehicleType = document.getElementById("vehicleType").value;
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  var registrationNumber = document.getElementById("registrationNumber").value;
  var condition = document.getElementById("condition").value;


  var vehicle = {
    vehicleType: vehicleType,
    make: make,
    model: model,
    registrationNumber: registrationNumber,
    condition: condition
  };

  vehicleInventory.push(vehicle);

 
  document.getElementById("vehicleForm").reset();

 
  updateTable();
}