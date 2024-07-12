window.onload = function () {
  var { graph, renderer } = register_graph(
    $("#output"),
    $("#input-spring-length").val(),
    $("#input-node-size").val(),
  );
  window.renderer = renderer;
  register_tool(
    $("#tool"),
    function (params) {
      (springLength = parseInt(params.springLength.val())),
        (newNodeSize = parseInt(params.nodeSize.val()));
      if (
        springLength <= 0 ||
        newNodeSize <= 0 ||
        isNaN(springLength) ||
        isNaN(newNodeSize)
      )
        return;
      renderer.getLayout().simulator.springLength(springLength);
      if (window.nodeSize != newNodeSize) {
        interpreter_graph(graph, "");
        window.nodeSize = newNodeSize;
      }
      interpreter_graph(graph, params.link.val());
    },
    {
      link: $("#input-link"),
      springLength: $("#input-spring-length"),
      nodeSize: $("#input-node-size"),
    },
    undefined,
  );
  $(".twemoji").click(function () {
    document.getElementById("output").requestFullscreen();
  });
};
