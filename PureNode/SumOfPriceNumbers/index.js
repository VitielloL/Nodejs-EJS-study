/*Objetivos: 
1. Encontrar todos os números primos entre 1 e 1000. 
2. Somar todos os números primos que você encontrou entre 1 e 1000. 
3. A função `main` deve retornar a soma de todos os números primos.
*/

// listar os numeros primos
function primeNumbers(num) {
    let numbers = new Array();
    for (let i = 0; i <= num; i++) {
      if (isPrime(i)){
        numbers.push(i);
      }
    }
    return numbers;
  }

// verificar se o numero é primo
  function isPrime(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }

function main() {
    let arr = primeNumbers(10)
    let sum = 0

    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    console.log(arr);
    console.log(sum);
}

main()