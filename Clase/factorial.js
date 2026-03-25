function factorial(n) {
    console.log("Calculando factorial de ", n);
    //Se ocupa if para manejar el caso de números negativos, ya que el factorial no está definido para ellos
    if (n < 0) {
       throw new Error ("El factorial no está definido para números negativos");
    }
    //Caso bas
    //0! = 1
    if (n === 0) {
        console.log("Caso base : factorial(0) = 1");
        return 1;
    }
    const resultado = n*factorial(n - 1);
    console.log(`Retornando ${resultado} para n = ${n}`);
    //Llamada recursiva; factorial se llama a sí misma con n-1
    //n! = n * (n-1)!
        return resultado;
}
console.log(factorial(5)); // 120 
//El factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(3)); // 6