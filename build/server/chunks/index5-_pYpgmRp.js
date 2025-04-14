function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;
  else return 1 - v;
}

export { sineIn as s };
//# sourceMappingURL=index5-_pYpgmRp.js.map
