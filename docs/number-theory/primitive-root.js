window.onload = function () {
  register_tool(
    $("#tool"),
    function (params) {
      p = BigInt(params.p.val());
      if (p <= 0) return "参数错误";
      if (p > 1e10) return "超出计算范围";
      root = get_primitive_root(p);
      if (root == -1) return "无原根";
      return String(root);
    },
    { p: $("#input-p") },
    $("#output"),
  );
};
