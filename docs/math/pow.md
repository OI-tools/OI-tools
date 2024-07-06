# 模意义下的快速幂（pow）

计算 $a^b \bmod p$。

<div class="grid cards" id="calc" markdown>
- 输入
    <input class="md-input md-input--stretch" id="input-a" type="number" placeholder="底数">
    <br><br>
    <input class="md-input md-input--stretch" id="input-b" type="number" placeholder="指数">
    <br><br>
    <input class="md-input md-input--stretch" id="input-p" type="number" placeholder="模数">
- 输出
    <input class="md-input md-input--stretch" id="output" placeholder="结果" readonly>
</div>

<script>
window.onload = function() {
    register_calc($("#calc"), function(params) {
        a = parseInt(params.a.val()), b = parseInt(params.b.val()), p = parseInt(params.p.val());
        if(!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(p) ||
            a < 0 || b < 0 || p <= 0) return "参数错误";
        if(b > 1e18 || p > 1e18) return "超出计算范围";
        if(a > p) return "底数不能大于模数";
        return String(pow(a, b, p));
    }, {a: $("#input-a"), b: $("#input-b"), p: $("#input-p")}, $("#output"));
}
</script>