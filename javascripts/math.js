// see https://oi-wiki.org/math/berlekamp-massey/
function berlekamp_massey(f, p) {
  (a = []), (last = []);
  (k = -1n), (delta = 0n);

  for (i = 0n; i < f.length; i++) {
    tmp = 0n;
    for (j = 0n; j < a.length; j++) {
      tmp = (((tmp + a[j] * f[i - j - 1n]) % p) + p) % p;
    }

    if (f[i] == tmp) continue;

    if (k == -1n) {
      k = i;
      delta = (((f[i] - tmp) % p) + p) % p;
      a = new Array(Number(i + 1n)).fill(0n);
      continue;
    }

    u = a;
    val = ((((f[i] - tmp) % p) + p) % p) * inverse(delta, p);

    if (BigInt(a.length) < BigInt(last.length) + i - k)
      a = [
        ...a,
        ...new Array(
          Number(BigInt(last.length) + i - k - BigInt(a.length)),
        ).fill(0n),
      ];

    a[i - k - 1n] = (a[i - k - 1n] + val) % p;

    for (j = 0n; j < last.length; j++) {
      a[i - k + j] = (((a[i - k + j] - last[j] * val) % p) + p) % p;
    }

    if (BigInt(u.length) - i < BigInt(last.length) - k) {
      last = u;
      k = i;
      delta = (((f[i] - tmp) % p) + p) % p;
    }
  }
  return a;
}
