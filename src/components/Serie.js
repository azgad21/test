/* 
* this function generate the prime numbers
*/

function esPrimo(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  /*
  * this function saves the prime numbers within in an array
  */

  function primos(n) {
    let res = [];
    for (let i = 2; i < n; i++) {
      if (esPrimo(i)) res.push(i);
    }
    return res;
  }

  /*
  * this function generates fibonacci series
  */

  function fibonacci(n) {
    const fib = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[n];
  }

  /*
  * this function generates the triangular numbers
  */

  function ntriangular(n) {
    let ntri = 0;
    ntri = (n * (n + 1)) / 2;
    return ntri;
  }
  
  // serie(n) = -3primo(n) - fibonacci(n) + 5triangular(n + 1)
  // serie(3) = -3 * primo(7) - fibonacci(2) + 5 * triangular(10) =  27
  
  /*
  * this function performs the operation of the ecuation
  */

  function Serie(n) {
    let nserie = 0;
    let resultado = primos(1000);
    nserie = -3 * resultado[n] - fibonacci(n) + 5 * ntriangular(n + 1);
    return nserie;
  }
  
  export default Serie;
  