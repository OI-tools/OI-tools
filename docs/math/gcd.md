# 欧几里得算法（gcd）

计算 $\gcd(a, b)$。

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
        a = parseInt(params.a.val()), b = parseInt(params.b.val());
        if(!Number.isInteger(a) || !Number.isInteger(b) ||
            a <= 0 || b <= 0) return "参数错误";
        if(a > 1e18 || b > 1e18) return "超出计算范围";
        return String(gcd(a, b));
    }, {a: $("#input-a"), b: $("#input-b")}, $("#output"));
}
</script>