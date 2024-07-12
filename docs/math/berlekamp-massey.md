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
