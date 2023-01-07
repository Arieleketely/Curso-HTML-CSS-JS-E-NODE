function unicoElemento(array) {
	let unico = new Set(array);
	return [...unico];
}

const arr = [10, 70, 60, 58, 223, 5];

console.log(unicoElemento(arr));