//RECURSIVIDADE

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(7))


/*
5! = 5 x 4 x 3 x 2 x 1 = 120
-------------or-------------
5! = 5 4!

n! = n x (n-1)!
1! = 1

*/