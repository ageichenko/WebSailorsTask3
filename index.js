const letters = {
	'Н': 1,
	'К': 5,
	'П': 2,
	'Р': 4,
	'О': 7
};
let str = 'НННКПРРРРОРППППР';
let result = '';
let sum = 0;

for (let i = 0; i < str.length; i++) {
	result += str[i] + '=' + letters[str[i]] + ' ';
	sum += letters[str[i]];
}

result += 'sum=' + sum;

console.log(result);