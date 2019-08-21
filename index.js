var base = 750
if (typeof $P_2_R_BASE$ !=='undefined' && $P_2_R_BASE$!=='undefined') {
  base = parseInt($P_2_R_BASE$)
}

export default function(px) {
  if (typeof px === 'number') {
    return px && px / (base / 10) + "rem";
  }
  return px
}
