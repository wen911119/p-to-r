export default function(px) {
  if (typeof px === 'number') {
    let base = parseInt($P_2_R_BASE$ || 750)
    return px && px / (base / 10) + "rem";
  }
  return px
}
