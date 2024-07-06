function register_calc(calc_obj, calc_fn, calc_params, calc_output) {
    calc_obj.find("input, textarea").not("[readonly]").on('input propertychange',function () {
        calc_output.val(calc_fn(calc_params));
    })
}

function pow(params) {
    x = parseInt(params.x.val()), y = parseInt(params.y.val()), p = parseInt(params.p.val());
    if(!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(p) ||
        x < 0 || y < 0 || p <= 0) return "参数错误";
    if(y > 1e18 || p > 1e18) return "超出计算范围";
    if(x > p) return "底数不能大于模数";
    res = 1;
    while(y > 0) {
        if(y & 1) {
            res = res * x % p;
        }
        x = x * x % p;
        y >>= 1;
    }
    return String(res);
}

function inverse(params) {
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
    x = parseInt(params.x.val()), p = parseInt(params.p.val());
    if(!Number.isInteger(x) || !Number.isInteger(p) || x < 0 || p <= 0) return "参数错误";
    if(p > 1e18) return "超出计算范围";
    if(x > p) return "原数不能大于模数";
    obj = exgcd(x, p);
    if(obj[0] != 1) return "无逆元";
    return String((obj[1] + p) % p);
}