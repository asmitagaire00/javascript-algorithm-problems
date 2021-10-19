// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let piValue = 2 * Math.PI;

  let newArr = arr.map((obj) => {
    let r = Math.pow(earthRadius + obj.avgAlt, 3);
    let squareRootValue = Math.sqrt(r / GM);
    const orbitalPeriod = piValue * squareRootValue;
    obj.avgAlt = obj.orbitalPeriod;
    obj[orbitalPeriod] = Math.round(orbitalPeriod);
    let newObj = {};
    newObj.name = obj.name;
    newObj.orbitalPeriod = Math.round(orbitalPeriod);
    return newObj;
  });

  return newArr;
}

const result = orbitalPeriod([
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 },
]);
console.log(result);
