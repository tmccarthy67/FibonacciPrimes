var FibonacciPrime = new Array;
var FibonacciNonPrime = new Array;
var fibonacci;
var nonPrime;
var prime;
var n1;
var n2;

// starting
var initialState = function () {
	n1 = 0;
	n2 = 1;
	// $('#prime').append('<p class=titles>Primes</p>');
	// $('#prime').append($('<p id=primeresult>'));
	// $('#nonprime').append('<p class=titles>Non-Primes</p>');
	// $('#nonprime').append($('<p id=nonprimeresult>'));
	// $('#advance').append($('<p id=selector>'));
	// $('#advance p').text('Next');
	// $('#header').append('<h1>');
	// $('#header h1').text('Fibonacci Numbers');
	addNumbers();
}

// add numbers
var addNumbers = function () {
	fibonacci = n1 + n2;
	primeCheck();
	}

// check to see if prime
var primeCheck = function () {
	n=parseInt(fibonacci);
   // If n is less than 2 or not an integer then by definition cannot be prime.
   if (n < 2) {isPrime = false};
   if (n == 2) {isPrime = true};
   if (n == 3) {isPrime = true};
   // Now assume that n is prime, we will try to prove that it is not.

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   if (n>2) {
   	var isPrime = true;
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }
};
   // Finally return whether n is prime or not.
   if (isPrime == true) {
 	addToFibonacciPrime();
   };
   if (isPrime == false) {
 	addToFibonacciNonPrime();
   };
}

// add Fibonacci Prime to array
var addToFibonacciPrime = function () {
	FibonacciPrime.push(fibonacci);
	nextNumber();
}

// add Fibonacci NONPrime to array
var addToFibonacciNonPrime = function () {
	FibonacciNonPrime.push(fibonacci);
	nextNumber();
}

// advance next number
var nextNumber = function () {
	n1 = n2;
	n2 = fibonacci;
	outputResults();
}

// output results
var outputResults = function () {
	// $('#prime').append($('<p id=primeresult>'));
	$('#primeresult').addClass('results');
	$('#nonprimeresult').addClass('results');

	$('#primeresult').text(FibonacciPrime);
	$('#nonprimeresult').text(FibonacciNonPrime);

}

	$('#header').append('<h1>');
	$('#header h1').text('Fibonacci Numbers');
	$('#prime').append('<p class=titles>Primes</p>');
	$('#prime').append($('<p id=primeresult>'));
	$('#nonprime').append('<p class=titles>Non-Primes</p>');
	$('#nonprime').append($('<p id=nonprimeresult>'));
	$('#advance').append($('<p id=selector>'));
	$('#advance p').text('Next');
	$('#selector').on('click', function() {
		if (FibonacciPrime == "" && FibonacciNonPrime == "") {
			initialState();
		};
		addNumbers();
	});
