# 莫比乌斯函数 mu

计算 $\mu(a)$。

<div class="grid cards" id="calc" markdown>
- 输入
    <input class="md-input md-input--stretch" id="input-a" type="number" placeholder="原数">
- 输出
    <input class="md-input md-input--stretch" id="output" placeholder="结果" readonly>
</div>

<script>
window.onload = function() {
    register_calc($("#calc"), function(params) {
        a = BigInt(params.a.val());
        if(a < 0) return "参数错误";
        if(a > 1e18) return "超出计算范围";
        return String(mu(a));
    }, {a: $("#input-a")}, $("#output"));
}
</script>