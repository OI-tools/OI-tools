window.onload = function () {
  register_tool(
    $("#tool"),
    function (params) {
      (a = BigInt(params.a.val())), (p = BigInt(params.p.val()));
      if (a < 0 || p <= 0) return "参数错误";
      if (p > 1e18) return "超出计算范围";
      if (a > p) return "原数不能大于模数";
      inv = inverse(a, p);
      if (inv == -1) return "无逆元";
      return String(inv);
    },
    { a: $("#input-a"), p: $("#input-p") },
    $("#output"),
  );
};
