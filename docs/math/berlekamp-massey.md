# Berlekamp–Massey BM 算法

给定数列 $\{f_0,\cdots,f_{n-1}\}$ 与模数 $p$，求其最小递推系数 $\{a_0,\cdots,a_{k-1}\}$ 使得满足 $f_i=\sum_{j=0}^{k-1}a_jf_{i-j-1}$。

<div class="grid cards" id="tool" markdown>
- 输入
    <input class="md-input md-input--stretch" id="input-f" type="text" placeholder="数列（以空格分隔）">
    <br><br>
    <input class="md-input md-input--stretch" id="input-p" type="number" placeholder="模数">
- 输出
    <input class="md-input md-input--stretch" id="output" placeholder="结果" readonly>
</div>

<script>
window.onload = function() {
    register_tool($("#tool"), function(params) {
        f = params.f.val().split(" "), p = BigInt(params.p.val());
        for(var i = 0; i < f.length; i++) f[i] = BigInt(f[i]);
        if(p <= 0) return "参数错误";
        if(f.length > 5e3 || p > 1e10) return "超出计算范围";
        if(!is_prime(p)) return "模数不是素数";
        for(var i = 0; i < f.length; i++)
            if(f[i] < 0 || f[i] >= p) return "数列必须在 0 到 p-1 之间";
        inv = berlekamp_massey(f, p);
        return inv.join(" ");
    }, {f: $("#input-f"), p: $("#input-p")}, $("#output"));
}
</script>
