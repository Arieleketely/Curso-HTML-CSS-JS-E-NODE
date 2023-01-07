
const getAdminstrador = (map) => {
	let adm = [];

	for ([key, value] of map) {
		if (value === 'ADM') {
			adm.push(key);
		}
	}

	return adm;
};

const usuarios = new Map();

usuarios.set('Carlos', 'ADM');
usuarios.set('Amanda', 'ADM');
usuarios.set('Pedro', 'ADM');
usuarios.set('João', 'USER');
usuarios.set('Mateus', 'USER');

console.log(getAdminstrador(usuarios));