# 拓展欧几里得算法 exgcd

计算 $ax+by=\gcd(a,b)$ 的 $\gcd(a,b)$、$x$ 和 $y$ 的值。

<div class="grid cards" id="calc" markdown>
- 输入
    <input class="md-input md-input--stretch" id="input-a" type="number" placeholder="第一个数">
    <br><br>
    <input class="md-input md-input--stretch" id="input-b" type="number" placeholder="第二个数">
- 输出
    <input class="md-input md-input--stretch" id="output" placeholder="结果" readonly>
</div>

<script>
window.onload = function() {
    register_calc($("#calc"), function(params) {
        a = BigInt(params.a.val()), b = BigInt(params.b.val());
        if(a <= 0 || b <= 0) return "参数错误";
        if(a > 1e18 || b > 1e18) return "超出计算范围";
        obj = exgcd(a, b);
        return `x = ${obj.x}, y = ${obj.y}, gcd(a, b) = ${obj.d}`;
    }, {a: $("#input-a"), b: $("#input-b")}, $("#output"));
}
</script>
