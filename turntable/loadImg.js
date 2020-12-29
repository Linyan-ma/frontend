export default function loadImg(imgs) {
  return new Promise((resolve, reject) => {
    let total = imgs.length,
      cur = 0,
      resultImg = []
    console.log(imgs)
    for (let i = 0; i < imgs.length; i++) {
      let img = new Image()
      img.crossOrigin = 'Anonymous'
      img.src = imgs[i].src
      img.onload = () => {
        cur++
        let data = {
          id: imgs[i].id,
          img: img,
        }
        resultImg.push(data)
        cur === total && resolve(resultImg)
      }
      img.onerror = function() {
        cur++
        resultImg.push({
          id: imgs[i].id,
          img: null,
        })
        cur === total && resolve(resultImg)
      }
    }
  })
}
