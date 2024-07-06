# 模意义下的快速幂

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
    register_calc($("#calc"), pow, {x: $("#input-x"), y: $("#input-y"), p: $("#input-p")}, $("#output"));
}
</script>