# 模意义下的快速幂

计算 $x^y \bmod p$。

<div class="grid cards" id="calc" markdown>
- 输入
    <input class="md-input md-input--stretch" id="input-x" type="number" placeholder="底数">
    <br><br>
    <input class="md-input md-input--stretch" id="input-y" type="number" placeholder="指数">
    <br><br>
    <input class="md-input md-input--stretch" id="input-p" type="number" placeholder="模数">
- 输出
    <input class="md-input md-input--stretch" id="output" placeholder="结果" readonly>
</div>

<script>
window.onload = function() {
    register_calc($("#calc"), function(params) {
        x = parseInt(params.x.val()), y = parseInt(params.y.val()), p = parseInt(params.p.val());
        if(!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(p) ||
            x < 0 || y < 0 || p <= 0) return "参数错误";
        if(y > 1e18 || p > 1e18) return "超出计算范围";
        if(x > p) return "底数不能大于模数";
        return String(pow(x, y, p));
    }, {x: $("#input-x"), y: $("#input-y"), p: $("#input-p")}, $("#output"));
}
</script>