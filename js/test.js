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

console.log(calculateDistance(3,12,14));