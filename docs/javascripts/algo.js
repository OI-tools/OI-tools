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
    isprime = new Array(Number(n + 1n)).fill(true);
    for(i = 2n; i <= n; i ++) {
        if(isprime[i]) {
            primes.push(i);
        }
        for(j = 0n; j < primes.length && i * primes[j] <= n; j ++) {
            isprime[i * primes[j]] = false;
        }
    }
    return primes;
}

function is_prime(n) {
    for(i = 2n; i * i <= n; i ++) {
        if(n % i == 0n) {
            return false;
        }
    }
    return n > 1n;
}

function get_primitive_root(p) {
    function exist_primitive_root(primes, p) {
        if(p == 2n || p == 4n) return true;
        if(p % 2n == 0n) p /= 2n;
        if(is_prime(p)) return true;
        for(i = 2n; i < primes.length && primes[i] * primes[i] <= p; i ++) {
            if(p % primes[i] == 0n) {
                while(p % primes[i] == 0n) p /= primes[i];
                return p == 1n;
            }
        }
        return false;
    }
    factors = [];
    primes = get_primes(100000n);
    if(!exist_primitive_root(primes, p)) return -1n;
    temp = phi(p);
    phip = phi(p);
    for(i = 0n; i < primes.length && primes[i] * primes[i] <= temp; i ++) {
        if(temp % primes[i] == 0n) {
            factors.push(phip / primes[i]);
            while(temp % primes[i] == 0n) temp /= primes[i];
        }
    }

    if(temp > 1n) {
        factors.push(phip / temp);
    }

    root = -1n;
    for(i = 1n; i < p; i ++) {
        is_root = true;
        if(pow(i, phip, p) != 1n) continue;
        for(j = 0n; j < factors.length; j ++) {
            if(pow(i, factors[j], p) == 1n) {
                is_root = false;
                break;
            }
        }
        if(is_root) {
            root = i;
            break;
        }
    }
    return root;
}