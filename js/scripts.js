// plik scripts.js

var a = prompt('Podaj wartość wymiernej zmiennej a');
	b = prompt('Podaj wartość wymiernej zmiennej b');
	value = (a*a) + (2*a*b) - (b*b);

if (value > 0) {
	console.log('wynik dodatni');
} else if (value < 0) {
	console.log('wynik ujemny');
} else {
	console.log('wynik jest równy 0');
}

console.log('wynik działania a^2 + 2*a*b -b^2 = '+ value);
