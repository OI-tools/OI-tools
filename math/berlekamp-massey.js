window.onload = function () {
  register_tool(
    $("#tool"),
    function (params) {
      (f = params.f.val().split(" ")), (p = BigInt(params.p.val()));
      for (var i = 0; i < f.length; i++) f[i] = BigInt(f[i]);
      if (p <= 0) return "参数错误";
      if (f.length > 5e3 || p > 1e10) return "超出计算范围";
      if (!is_prime(p)) return "模数不是素数";
      for (var i = 0; i < f.length; i++)
        if (f[i] < 0 || f[i] >= p) return "数列必须在 0 到 p-1 之间";
      inv = berlekamp_massey(f, p);
      return inv.join(" ");
    },
    { f: $("#input-f"), p: $("#input-p") },
    $("#output"),
  );
};
