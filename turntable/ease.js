/**
 *
 * beizer曲线运动
 * @param {*} currentTime:当前时间
 * @param {*} startValue:起始值
 * @param {*} changeValue:总距离
 * @param {*} duration:总时长
 * @return {*}
 * @memberof turntable
 */
export function easeInOutQuad(currentTime, startValue, changeValue, duration) {
  currentTime /= duration / 2
  if (currentTime < 1) return (changeValue / 2) * currentTime * currentTime + startValue
  currentTime--
  return (-changeValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue
}

export function easeOutQuad(currentTime, startValue, changeValue, duration) {
  currentTime /= duration
  currentTime = Math.min(currentTime, 1)
  return -changeValue * currentTime * (currentTime - 2) + startValue
}
export function easeOutQuad2(x) {
  return x * (2 - x)
}
