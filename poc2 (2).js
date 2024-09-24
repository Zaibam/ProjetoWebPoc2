//Array com o método de map, que soma +1
const arraymap = [2, 4, 6, 8]
const soma = arraymap.map(num => num + 1);
console.log(soma);//Resultado=[3, 5, 7, 9]
 
//Array com método de sort, que ordena os numeros na ordem crescente
const numeros = [5, 2, 10, 8, 3, 7, -1, -9];
numeros.sort((a, b) => a - b);
console.log(numeros);//Resultado=[-9, -1, 2, 3, 5, 7, 8, 10]

//Array com o método filter, com ele conseguimos filtrar e exibir somente os pares
const desordem = [-8, -7, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = desordem.filter(num => num % 2 === 0);
console.log(numerosPares);//Resultado=[-8, -2, 0, 2, 4, 6, 8, 10]

//Array com o método reduce , podemos obter um resultado somando todos os itens do array
const listinha = [-12, 1, 2, 3, 4, 5, 10, 28];
const resultado = listinha.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(resultado); //Resultado é 41

//Em um Array com o método spread ,podemos justar elementos de arrays em um só array
const ferrari = ['PuroSangue', 'Roma', '296GTB'];
const porsche = ['Taycan', 'Cayenne', 'Panamera'];
const carros = [...ferrari, ...porsche];
console.log(carros); //Resultado =[ 'PuroSangue', 'Roma', '296GTB', 'Taycan', 'Cayenne', 'Panamera' ]


