function register_calc(calc_obj, calc_fn, calc_params, calc_output) {
    calc_obj.find("input, textarea").not("[readonly]").on('input propertychange',function () {
        calc_output.val(calc_fn(calc_params));
    })
}

function pow(a, b, p) {
    res = BigInt(1);
    while(b > 0) {
        if(b % BigInt(2) == BigInt(1)) {
            res = res * a % p;
        }
        a = a * a % p;
        b /= BigInt(2);
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
        return {d: a, x: BigInt(1), y: BigInt(0)};
    }
    obj = exgcd(b, a % b);
    d = obj.d, x = obj.x, y = obj.y;
    t = x;
    x = y;
    y = t - BigInt(a / b) * y;
    return {d, x, y};
}

function inverse(a, p) {
    obj = exgcd(a, p);
    if(obj.d != 1) return -1;
    return (obj.x + p) % p;
}

function phi(n) {
    res = n;
    for(i = BigInt(2); i * i <= n; i ++) {
        if(n % i == 0) {
            while(n % i == 0) {
                n /= i;
            }
            res -= res / i;
        }
    }

    if(n > 1) {
        res -= res / n;
    }

    return res;
}

function mu(n) {
    res = BigInt(1);
    for(i = BigInt(2); i * i <= n; i ++) {
        if(n % i == 0) {
            n /= i;
            res *= BigInt(-1);
            if(n % i == 0) {
                res = BigInt(0);
            }
        }
    }

    if(n > 1) {
        res *= BigInt(-1);
    }

    return res;
}

function get_primitive_roots(p) {
    g = [];
}