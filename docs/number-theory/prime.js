window.onload = function () {
  register_tool(
    $("#tool"),
    function (params) {
      a = BigInt(params.a.val());
      if (a <= 0) return "参数错误";
      if (a > 1e10) return "超出计算范围";
      if (is_prime(a)) return "是质数";
      return "不是质数";
    },
    { a: $("#input-a") },
    $("#output"),
  );
};
