![array](https://github.com/user-attachments/assets/a60f6abc-6db9-4f2f-abee-dad49215f345)

# O que é um array?

Os arrays são estruturas que servem para guardar dados, e organizá-los. Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice. Você pode guardar seus chapéus na gaveta 1, suas calças na gaveta 2 e as meias na gaveta 3, e sempre que precisar de calças, chapéus ou meias, vai saber em que gaveta buscar.

Dentro do array existe vários métodos específicos, sendo alguns delez, o map, sort, filter, reduce e spread


# Map array

O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.

![image](https://github.com/user-attachments/assets/c18ffcfb-b95f-4812-b560-b0ac1617d43d)


```JS
//Array com o método de map, que soma +1
const arraymap = [2, 4, 6, 8]
const soma = arraymap.map(num => num + 1);
console.log(soma);

Resultado: (4) [3, 5, 7, 9]
```


# Sort

Se funcaoDeComparacao não for informado, os elementos serão ordenados de acordo com a sua conversão para texto e o texto comparado na pontuação unicode do texto convertido. Por exemplo, "banana" vem antes de "cherry". Em uma ordenação numérica, 9 vem antes de 80, mas porque os números são convertidos para texto e, "80" vem antes de "9" na ordenação UnicodeS

![Sort](https://github.com/user-attachments/assets/d26f5c02-579d-4e77-8a52-8012aa1dfb2b)

```JS
//Array com método de sort, que ordena os numeros na ordem crescente
const numeros = [5, 2, 10, 8, 3, 7, -1, -9];
numeros.sort((a, b) => a - b);
console.log(numeros);

Resultado: (8) [-9, -1, 2, 3, 5, 7, 8, 10]
```


# Filter

filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true. O callback é chamado apenas para índices do array que possuem valores atribuídos; Ele não é invocado para índices que foram excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não passaram no teste do callback são simplesmente ignorados, e não são incluídos no novo array.

![image](https://github.com/user-attachments/assets/b66a62b4-7bb7-4f14-b49e-ea345724623c)


```JS
//Array com o método filter, com ele conseguimos filtrar e exibir somente os pares
const desordem = [-8, -7, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = desordem.filter(num => num % 2 === 0);
console.log(numerosPares);

Resultado: (8) [-8, -2, 0, 2, 4, 6, 8, 10]
```


# Reduce

O método reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:

1. acumulador - valor inicial (ou o valor do callback anterior),
2. valorAtual - o valor do elemento atual
3. index - o índice atual e
4. array - o array onde a iteração está ocorrendo.

![image](https://github.com/user-attachments/assets/2be70e2c-b0e9-47eb-a712-2e20325a948b)


```JS
//Array com o método reduce , podemos obter um resultado somando todos os itens do array
const listinha = [-12, 1, 2, 3, 4, 5, 10, 28];
const resultado = listinha.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(resultado);

Resultado: 41
```


# Spread

Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados.

exemplos

Espalhamento e chamadas de funções
Substituindo apply
É comum usar Function.prototype.apply em casos onde você quer usar os elementos de um array como argumentos para uma função.

Apply para new
Quando um construtor é chamado com new, não é possivel usar diretamente um array e apply (apply executa o [[Call]] e não o [[Construct]]). No entanto, um array pode facilmente ser usado com new graças ao operador de espalhamento

Espalhamento em arrays literais
Um array literal mais poderoso
Criar um novo array usando um array existente como parte dele, não é possível utilizando apenas a sintaxe de array literal. O código imperativo deve ser usado ao invés da combinação de push, splice, concat, etc. Com a sintaxe de espalhamento isso se torna muito mais sucinto

```JS
//Em um Array com o método spread ,podemos justar elementos de arrays em um só array
const ferrari = ['PuroSangue', 'Roma', '296GTB'];
const porsche = ['Taycan', 'Cayenne', 'Panamera'];
const carros = [...ferrari, ...porsche];
console.log(carros);

Resultado: [ 'PuroSangue', 'Roma', '296GTB', 'Taycan', 'Cayenne', 'Panamera' ]
```
