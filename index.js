const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// classic function version
const totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
} );

// arrow function version
const totalBatteriesArrow = batteryBatches.reduce((total, batch) => total + batch);
