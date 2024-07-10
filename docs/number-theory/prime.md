# 质数

给定原数 $a$，判断该数是否是质数。

<div class="grid cards" id="tool" markdown>
- 输入
    <input class="md-input md-input--stretch" id="input-a" type="number" placeholder="原数">
- 输出
    <input class="md-input md-input--stretch" id="output" placeholder="结果" readonly>
</div>

<script>
window.onload = function() {
    register_tool($("#tool"), function(params) {
        a = BigInt(params.a.val());
        if(a <= 0) return "参数错误";
        if(a > 1e10) return "超出计算范围";
        if(is_prime(a)) return "是质数";
        return "不是质数";
    }, {a: $("#input-a")}, $("#output"));
}
</script>
