function register_calc(calc_obj, calc_fn, calc_params, calc_output) {
    calc_obj.find("input, textarea").not("[readonly]").on('input propertychange',function () {
        calc_output.val(calc_fn(calc_params));
    })
}

function pow(a, b, p) {
    res = 1;
    while(b > 0) {
        if(b & 1) {
            res = res * a % p;
        }
        a = a * a % p;
        b >>= 1;
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
        return {d: a, x: 1, y: 0};
    }
    obj = exgcd(b, a % b);
    d = obj.d, x = obj.x, y = obj.y;
    t = x;
    x = y;
    y = t - parseInt(a / b) * y;
    return {d, x, y};
}

function inverse(a, p) {
    obj = exgcd(a, p);
    if(obj.d != 1) return -1;
    return (obj.x + p) % p;
}