function register_calc(calc_obj, calc_fn, calc_params, calc_output) {
    calc_obj.find("input, textarea").not("[readonly]").on('input propertychange',function () {
        calc_output.val(calc_fn(calc_params));
    })
}

function pow(a, b, p) {
    res = 1n
    while(b > 0) {
        if(b % 2n == 1n) {
            res = res * a % p;
        }
        a = a * a % p;
        b /= 2n;
    }
    return res;
}

function gcd(a, b) {
    if(b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

function exgcd(a, b) {
    if(b == 0) {
        return {d: a, x: 1n, y: 0n};
    }
    obj = exgcd(b, a % b);
    d = obj.d, x = obj.x, y = obj.y;
    t = x;
    x = y;
    y = t - a / b * y;
    return {d, x, y};
}

function inverse(a, p) {
    obj = exgcd(a, p);
    if(obj.d != 1n) return -1n;
    return (obj.x + p) % p;
}

function phi(n) {
    res = n;
    for(i = 2n; i * i <= n; i ++) {
        if(n % i == 0n) {
            while(n % i == 0n) {
                n /= i;
            }
            res -= res / i;
        }
    }

    if(n > 1n) {
        res -= res / n;
    }

    return res;
}

function mu(n) {
    res = 1n;
    for(i = 2n; i * i <= n; i ++) {
        if(n % i == 0n) {
            n /= i;
            res *= -1n;
            if(n % i == 0n) {
                res = 0n;
            }
        }
    }

    if(n > 1n) {
        res *= -1n;
    }

    return res;
}

function get_primes(n) {
    primes = [];
    is_prime = new Array(n + 1n).fill(true);
    for(i = 2n; i <= n; i ++) {
        if(is_prime[i]) {
            primes.push(i);
        }
        for(j = 0n; j < primes.length && i * primes[j] <= n; j ++) {
            is_prime[i * primes[j]] = false;
        }
    }
    return primes;
}

function get_primitive_roots(p) {
    g = [];
}