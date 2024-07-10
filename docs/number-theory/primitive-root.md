# 原根

计算在模 $p$ 意义下的最小原根。

<div class="grid cards" id="tool" markdown>
- 输入
    <input class="md-input md-input--stretch" id="input-p" type="number" placeholder="模数">
- 输出
    <input class="md-input md-input--stretch" id="output" placeholder="结果" readonly>
</div>

<script>
window.onload = function() {
    register_tool($("#tool"), function(params) {
        p = BigInt(params.p.val());
        if(p <= 0) return "参数错误";
        if(p > 1e10) return "超出计算范围";
        root = get_primitive_root(p);
        if(root == -1) return "无原根";
        return String(root);
    }, {p: $("#input-p")}, $("#output"));
}
</script>
