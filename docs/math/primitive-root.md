# 原根 primitive root

计算在 $\bmod p$ 意义下的所有原根。

<div class="grid cards" id="calc" markdown>
- 输入
    <input class="md-input md-input--stretch" id="input-p" type="number" placeholder="模数">
- 输出
    <input class="md-input md-input--stretch" id="output" placeholder="结果" readonly>
</div>

<script>
window.onload = function() {
    register_calc($("#calc"), function(params) {
        p = BigInt(params.p.val());
        if(p <= 0) return "参数错误";
        if(p > 1e9) return "超出计算范围";
        return "[TODO]作者很懒，还没有写代码";
    }, {p: $("#input-p")}, $("#output"));
}
</script>