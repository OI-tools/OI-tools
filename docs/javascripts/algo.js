function register_calc(calc_obj, calc_fn, calc_params, calc_output) {
    calc_obj.find("input, textarea").not("[readonly]").on('input propertychange',function () {
        calc_output.val(calc_fn(calc_params));
    })
}

function pow(x, y, p) {
    res = 1;
    while(y > 0) {
        if(y & 1) {
            res = res * x % p;
        }
        x = x * x % p;
        y >>= 1;
    }
    return res;
}

function inverse(x, p) {
    function exgcd(a, b) {
        if(b == 0) {
            return [a, 1, 0];
        }
        obj = exgcd(b, a % b);
        d = obj[0], x = obj[1], y = obj[2];
        t = x;
        x = y;
        y = t - parseInt(a / b) * y;
        return [d, x, y];
    }
    obj = exgcd(x, p);
    if(obj[0] != 1) return -1;
    return (obj[1] + p) % p;
}