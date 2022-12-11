/*
    function poi(n) {
        if (n%2 == 0) {
         return 'par'
        } else {
            return 'impar'
        }
    }

    console.log(`o numero e ${res = poi(9)}`)
*/ 

function fatorial(n) {
    fat = 1
    for (c = n; n > 1; n--) {
        fat *= n
    }
    return fat
}

console.log(fatorial(6))