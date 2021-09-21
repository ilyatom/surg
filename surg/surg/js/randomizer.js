function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomValueFromTable(int, table) { // table = [ [value, min, max] ];
	var result = '';
	for (var i = table.length - 1; i >= 0; i--) {
		if (int <= table[i][2] & int >= table[i][1]) {
			result = table[i][0];
			break;
		}
	}
	return result;
}

function getRandomValueFromArray(myArray) {
	let rand = getRandomInt(0,myArray.length-1);
	return myArray[rand];
}

function d(max) {
	return getRandomInt(1, max);
}
