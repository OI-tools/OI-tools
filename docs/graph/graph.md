# 图论工具

<div class="grid cards" id="tool" markdown>
- 输入
    <textarea class="md-input md-input--stretch" id="input-link" type="text" placeholder="数列（以空格分隔）"></textarea>
    <br><br>
    边长：<input class="md-input md-input--stretch" id="input-spring-length" type="range" max="500" min="1" value="100">
    <br><br>
    节点大小：<input class="md-input md-input--stretch" id="input-node-size" type="range" max="100" min="20" value="40">
- 输出 :material-fullscreen:
    <div id="output"></div>
</div>

<script>
window.onload = function() {
    var {graph, renderer} = register_graph($('#output'), $("#input-spring-length").val(), $("#input-node-size").val());
    window.renderer = renderer;
    register_tool($("#tool"), function(params) {
        springLength = parseInt(params.springLength.val()), newNodeSize = parseInt(params.nodeSize.val());
        if(springLength <= 0 || newNodeSize <= 0 || isNaN(springLength) || isNaN(newNodeSize)) return;
        renderer.getLayout().simulator.springLength(springLength);
        if(window.nodeSize != newNodeSize) {
            interpreter_graph(graph, "");
            window.nodeSize = newNodeSize;
        }
        interpreter_graph(graph, params.link.val());
    }, {link: $("#input-link"), springLength: $("#input-spring-length"), nodeSize: $("#input-node-size")}, undefined);
    $(".twemoji").click(function() {
        document.getElementById("output").requestFullscreen();
    });
}
</script>

<style>
    #tool #output, #tool svg {
        width: 100% !important;
        height: 100% !important;
    }
    textarea {
        min-height: 500px;
        width: 100%;
        resize: vertical;
    }
    #output {
        background-color: #f8f8f8;
    }
</style>
