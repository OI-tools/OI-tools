function register_tool(tool_obj, tool_fn, tool_params, tool_output) {
  tool_obj
    .find("input, textarea")
    .not("[readonly]")
    .on("input propertychange", function () {
      var res = tool_fn(tool_params);
      if (tool_output != undefined) tool_output.val(res);
    });
}

function register_graph(container, springLength, nodeSize) {
  var graph = Viva.Graph.graph();
  var layout = Viva.Graph.Layout.forceDirected(graph, {
    springLength: springLength,
    springCoeff: 0.0008,
    dragCoeff: 0.02,
    gravity: -1.2,
  });

  var graphics = Viva.Graph.View.svgGraphics();
  window.nodeSize = nodeSize;

  graphics
    .node(function (node) {
      var ui = Viva.Graph.svg("g"),
        svgText = Viva.Graph.svg("text")
          .attr("x", window.nodeSize / 2)
          .attr("y", window.nodeSize / 2)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("stroke", "black")
          .attr("stroke-width", "1")
          .attr("fill", "black")
          .text(node.id),
        svgRect = Viva.Graph.svg("rect")
          .attr("width", window.nodeSize)
          .attr("height", window.nodeSize)
          .attr("stroke", "black")
          .attr("stroke-width", "2")
          .attr("fill", "white");
      let drag = false;
      ui.addEventListener("mousedown", () => (drag = false));

      ui.addEventListener("mousemove", () => (drag = true));

      ui.addEventListener("click", function () {
        if (!drag) {
          layout.pinNode(node, !layout.isNodePinned(node));
          svgRect.attr("stroke-width", layout.isNodePinned(node) ? "5" : "2");
        }
      });
      ui.append(svgRect);
      ui.append(svgText);
      return ui;
    })
    .placeNode(function (nodeUI, pos) {
      nodeUI.attr(
        "transform",
        "translate(" +
          (pos.x - window.nodeSize / 2) +
          "," +
          (pos.y - window.nodeSize / 2) +
          ")",
      );
    });

  var createMarker = function (id) {
      return Viva.Graph.svg("marker")
        .attr("id", id)
        .attr("viewBox", "0 0 10 10")
        .attr("refX", "10")
        .attr("refY", "5")
        .attr("markerUnits", "strokeWidth")
        .attr("markerWidth", "10")
        .attr("markerHeight", "5")
        .attr("orient", "auto");
    },
    marker = createMarker("Triangle");
  marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");

  var defs = graphics.getSvgRoot().append("defs");
  defs.append(marker);

  var geom = Viva.Graph.geom();

  graphics
    .link(function (link) {
      var ui = Viva.Graph.svg("g"),
        svgLine = Viva.Graph.svg("path")
          .attr("stroke", "gray")
          .attr("stroke", "black")
          .attr("stroke-width", "2")
          .attr("fill", "black")
          .attr("marker-end", "url(#Triangle)"),
        svgText = Viva.Graph.svg("text")
          .attr("x", 0)
          .attr("y", 0)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("stroke", "black")
          .attr("stroke-width", "1")
          .attr("fill", "black")
          .text(link.data.weight);

      ui.append(svgLine);
      ui.append(svgText);
      return ui;
    })
    .placeLink(function (linkUI, fromPos, toPos) {
      var toNodeSize = window.nodeSize,
        fromNodeSize = window.nodeSize;

      var from =
        geom.intersectRect(
          // rectangle:
          fromPos.x - fromNodeSize / 2, // left
          fromPos.y - fromNodeSize / 2, // top
          fromPos.x + fromNodeSize / 2, // right
          fromPos.y + fromNodeSize / 2, // bottom
          // segment:
          fromPos.x,
          fromPos.y,
          toPos.x,
          toPos.y,
        ) || fromPos; // if no intersection found - return center of the node

      var to =
        geom.intersectRect(
          // rectangle:
          toPos.x - toNodeSize / 2, // left
          toPos.y - toNodeSize / 2, // top
          toPos.x + toNodeSize / 2, // right
          toPos.y + toNodeSize / 2, // bottom
          // segment:
          toPos.x,
          toPos.y,
          fromPos.x,
          fromPos.y,
        ) || toPos; // if no intersection found - return center of the node

      var data = "M" + from.x + "," + from.y + "L" + to.x + "," + to.y;

      linkUI.firstChild.attr("d", data);
      linkUI.lastChild.attr(
        "transform",
        "translate(" +
          (fromPos.x + toPos.x) / 2 +
          "," +
          (fromPos.y + toPos.y) / 2 +
          ")",
      );
    });

  // Render the graph
  var renderer = Viva.Graph.View.renderer(graph, {
    layout: layout,
    graphics: graphics,
    container: container.get(0),
  });
  renderer.run();

  return { graph, renderer };
}

var points = [];
function update_graph(graph, point, link) {
  for (var i = 0; i < points.length; i++) {
    graph.forEachLinkedNode(points[i], function (linkedNode, link) {
      graph.removeLink(link);
    });
    if (point.indexOf(points[i]) == -1) {
      graph.removeNode(points[i]);
    }
  }
  for (var i = 0; i < point.length; i++) {
    if (points.indexOf(point[i]) == -1) {
      graph.addNode(point[i]);
    }
  }
  for (var i = 0; i < link.length; i++) {
    graph.addLink(link[i][0], link[i][1], {
      weight: link[i][2],
    });
  }
  points = point;
}

function interpreter_graph(graph, text) {
  var lines = text.split("\n");
  var point = [];
  var link = [];
  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i]
      .replace(/\s+/g, " ")
      .split(" ")
      .filter(function (item) {
        return item !== "";
      });
    if (lines[i].length == 1) {
      point.push(lines[i][0]);
    } else if (lines[i].length == 2) {
      point.push(lines[i][0]);
      point.push(lines[i][1]);
      link.push([lines[i][0], lines[i][1], ""]);
    } else if (lines[i].length >= 3) {
      point.push(lines[i][0]);
      point.push(lines[i][1]);
      link.push([lines[i][0], lines[i][1], lines[i][2]]);
    }
  }
  point = Array.from(new Set(point));
  link = Array.from(new Set(link));
  update_graph(graph, point, link);
}
