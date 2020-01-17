var calculateDistance = function(time,speedOfFirstCyclist,speedOfSecondCyclist) {
	
//Алгоритм
//1. Найти растояние, которое проехал первый велосипедист умножив скорост на время

var distanceOfFirstCyclist = speedOfFirstCyclist*time;

//2. Найти разтояние, которое проехал второй велосипедист умножив скорость на время

var distanceOfSecondCyclist = speedOfSecondCyclist*time;

// Сложить полученные растояние

var totalDistace = distanceOfFirstCyclist+distanceOfSecondCyclist;

return totalDistace;
}

var firstDistance = calculateDistance(3,12,14);
var secondDistance = calculateDistance(5,1,2);
console.log(firstDistance, secondDistance) ;