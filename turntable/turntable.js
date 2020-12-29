/** @format */

import loadImg from './loadImg.js'
import { easeInOutQuad, easeOutQuad } from './ease.js'
export default class turntable {
    /**
     * Creates an instance of turntable.
     * @param {*} element:转盘放置的元素（可以为null，若只想获取canvas生成缩略图）
     * @param {*} config:转盘配置参数
     * @memberof turntable
     */
    constructor(element, config) {
        // 转盘参数配置
        this.element = element
        this.reward = config.reward || []
        this.width = config.width || '300'
        this.height = config.height || '300'
        this.btn_txt = config.btn_txt || '点我抽奖'
        this.borderWidth = config.borderWidth || 20
        this.btnWidth = config.btnWidth || 120
        this.btnBgUrl =
            config.btnBgUrl ||
            'https://p0.ssl.qhimg.com/t01d5de9bc40a2417ad.png'
        this.time = config.time || 5000
        this.btn_bg_color = config.btn_bg_color || '#ff4a24'
        this.btn_color = config.btn_color || '#fff'
        this.borderColor = config.borderColor || '#f00'
        this.centerColor = config.centerColor || '#fff'
        this.bgUrl =
            config.bgUrl || 'https://p3.ssl.qhimg.com/t01ac8f01769d101d1b.png'
        this.turntableMounted = config.turntableMounted || function () {}
        this.onStart = config.onStart || function () {}
        this.onEnd = config.onEnd || function () {}
        this.disabled = config.disabled || false
        // 组件内部状态

        this.canvas = null
        this.btn_canvas = null
        this.rotateAngel = 0
        this.animating = false
        this.start = undefined
        this.btnDrawed = false
        this.turnDrawed = false
        this.mouted = false
        this.init()
    }
    set _disabled(status) {
        this.disabled = status
    }
    set _result(id) {
        this.result = id
    }
    init() {
        const {
            reward,
            btn_bg_color,
            btn_color,
            btn_txt,
            borderColor,
            bgUrl,
            width,
            height,
        } = this

        let canvas_turntable = document.createElement('div')
        let canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        this.canvas = canvas
        canvas_turntable.style = `position:relative;width:${width}px;height:${height}px`
        canvas_turntable.className = 'turntable'
        canvas_turntable.appendChild(canvas)

        this.element && this.element.appendChild(canvas_turntable)

        this.ctx = canvas.getContext('2d')
        const icons = reward.map((v, index) => ({ src: v.icon, id: index }))
        // load背景图
        if (bgUrl) {
            let bgImg = { id: 'bg', src: bgUrl }
            icons.push(bgImg)
        }
        loadImg(icons).then((imgsLoaded) => {
            this.catcheImgLoaded = imgsLoaded
            this.drawTurntable()
        })
        let btn = this.drawBtn({ btn_bg_color, btn_color, btn_txt })
        this.addClickListner(btn)
        canvas_turntable.appendChild(btn)
    }
    drawTurntable() {
        const { reward, borderColor } = this
        let imgsLoaded = this.catcheImgLoaded
        const reward_loadedIcons = reward.map((v, index) => {
            v.imgFile = imgsLoaded.filter((img) => img.id == index)[0].img
            return {
                ...v,
                ...reward[v.id],
            }
        })
        let bgImg = imgsLoaded.filter((img) => img.id == 'bg')[0].img
        const { width, height } = this
        this.ctx.clearRect(0, 0, width, height)
        this.drawBg({ borderColor, bgImg })
        this.drawFan({ reward: reward_loadedIcons })
        this.turnDrawed = true
        this.beforeMounted()
    }

    /**
     *
     *
     * @memberof turntable
     */
    drawBg({ borderColor, bgImg }) {
        const ctx = this.ctx
        const { width, height, centerColor } = this
        const x = width / 2,
            y = height / 2,
            r = width / 2,
            sAngel = 0,
            eAngel = 2 * Math.PI
        ctx.save()
        ctx.translate(x, y)

        ctx.rotate((Math.PI / 180) * this.rotateAngel)

        // ctx.rotate(this.rotateAngel)
        // 边框颜色
        ctx.beginPath()
        ctx.arc(0, 0, r, sAngel, eAngel, false)
        ctx.fillStyle = borderColor
        ctx.fill()
        // 中心颜色
        ctx.beginPath()
        ctx.arc(0, 0, r - this.borderWidth, sAngel, eAngel, false)
        ctx.fillStyle = centerColor
        ctx.fill()
        // 背景图
        if (bgImg) {
            ctx.save()
            ctx.translate(-x, -y)
            ctx.drawImage(
                bgImg,
                0,
                0,
                bgImg.width,
                bgImg.height,
                0,
                0,
                width,
                height
            )
            ctx.restore()
        }
        ctx.restore()
    }
    /**
     * 扇形
     *
     * @memberof turntable
     */
    drawFan({ reward }) {
        const { width, height } = this
        const x = width / 2,
            y = height / 2,
            r = width / 2 - this.borderWidth
        reward.map((item, index) => {
            const { name, icon, imgFile, fan_color, font_color } = item
            let ctx = this.ctx,
                fanAngel = (2 * Math.PI) / reward.length,
                sAngel = -fanAngel / 2 - Math.PI / 2,
                eAngel = fanAngel / 2 - Math.PI / 2
            ctx.save()
            ctx.translate(x, y)
            ctx.rotate((Math.PI / 180) * this.rotateAngel)
            ctx.rotate(fanAngel * index)
            ctx.rotate(fanAngel / 2)
            // ctx.restore()
            //

            // 扇形背景
            ctx.beginPath()
            ctx.arc(0, 0, r, sAngel, eAngel, false)
            ctx.lineTo(0, 0)
            ctx.closePath()
            ctx.fillStyle = fan_color
            ctx.fill()

            let fan_len = Math.sqrt(2 * r * r * (1 - Math.cos(fanAngel)))
            //扇形奖品内容
            let text_x = 0
            let text_y = 20 - r
            ctx.font = '14px Arial'
            ctx.fillStyle = font_color
            ctx.textBaseline = 'middle' //设置文本的垂直对齐方式
            ctx.textAlign = 'center' //设置文本的水平对齐方式
            ctx.fillText(name, text_x, text_y)
            // icon
            const img = imgFile
            let targetW = fan_len / 3 //扇形对边的1/3长度
            let targetH = (img.height / img.width) * targetW
            let img_x = -targetW / 2
            let img_y = 30 - r
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                img_x,
                img_y,
                targetW,
                targetH
            )

            // this.drawFanContent({ name, icon, font_color, text_x, text_y })

            ctx.restore()
            // todo
        })
    }
    drawText(ctx, text, x, y, maxWidth, lineHeight) {
        let arrText = text.split('')
        let line = ''
        for (let n = 0; n < arrText.length; n++) {
            let testLine = line + arrText[n]
            let metrics = ctx.measureText(testLine)
            let testWidth = metrics.width
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y)
                line = arrText[n]
                y += lineHeight
            } else {
                line = testLine
            }
        }
        ctx.fillText(line, x, y)
    }
    drawBtn({ btn_bg_color, btn_color, btn_txt }) {
        let btn_canvas = document.createElement('canvas')
        btn_canvas.width = this.btnWidth
        btn_canvas.height = this.btnWidth
        this.btn_canvas = btn_canvas
        btn_canvas.style =
            'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);cursor:pointer'
        loadImg([{ id: 'btn_bg', src: this.btnBgUrl }]).then((res) => {
            const ctx = btn_canvas.getContext('2d')
            // draw
            let btnBgImg = res[0].img
            ctx.save()
            const x = this.btnWidth / 2,
                y = this.btnWidth / 2 + 10,
                r = this.btnWidth / 2 - 20
            ctx.drawImage(
                btnBgImg,
                0,
                0,
                btnBgImg.width,
                btnBgImg.height,
                0,
                0,
                this.btnWidth,
                this.btnWidth
            )
            ctx.translate(x, y)
            ctx.beginPath()
            ctx.arc(0, 0, r, 0, 2 * Math.PI)
            ctx.fillStyle = btn_bg_color
            ctx.fill()
            let text_x = 0
            let text_y = 28 - r
            ctx.font = '20px Arial'
            ctx.fillStyle = btn_color
            ctx.textBaseline = 'middle' //设置文本的垂直对齐方式
            ctx.textAlign = 'center' //设置文本的水平对齐方式
            this.drawText(ctx, btn_txt, text_x, text_y, r, 24)
            ctx.restore()
            this.btnDrawed = true
            this.beforeMounted()
        })

        return btn_canvas
    }

    animate(timestamp) {
        if (this.start === undefined) {
            this.start = timestamp
        }
        const { reward } = this
        const fanAngel = 360 / reward.length
        const elapsed = timestamp - this.start
        let curAngel = this.rotateAngel % 360
        let resultAngel = 360 - (this.result - 1) * fanAngel - fanAngel / 2
        // 5s从0=>3600(10圈)
        let endValue = (this.time / 1000) * 360 * 2
        if (this.result !== undefined) {
            endValue += resultAngel
        }
        let rotateChangeval = easeInOutQuad(elapsed, 0, endValue, this.time)
        // this.rotateAngel = rotateChangeval ? rotateChangeval : (this.rotateAngel += 1)
        this.rotateAngel = rotateChangeval

        this.drawTurntable()
        // if (elapsed > this.time && this.result !== undefined && Math.abs(curAngel - resultAngel) < 4) {

        if (elapsed > this.time) {
            this.start = undefined
            this.animating = false
            this.onEnd(this.result)
            if (this.result === undefined) {
                console.log('未获取到应该悬停的位置，请检验是否获取到正确结果')
            } else {
                this.result = undefined
            }
        } else {
            requestAnimationFrame((timestamp) => this.animate(timestamp))
        }
    }

    // drawBtn() {}
    addClickListner(element) {
        element.addEventListener('click', () => {
            if (this.animating || this.disabled) return
            this.onStart()
            requestAnimationFrame((timestamp) => this.animate(timestamp))
            this.animating = true
        })
    }
    beforeMounted() {
        if (this.btnDrawed && this.turnDrawed && !this.mouted) {
            this.mouted = true
            let _canvas = this.drawImg()
            this.turntableMounted && this.turntableMounted(_canvas)
        }
    }
    /**
     *
     * 最终canvas
     * @memberof turntable
     */
    drawImg() {
        // 将两张canvas绘制到同一张canvas中
        let resultCanvas = document.createElement('canvas')
        resultCanvas.width = this.width
        resultCanvas.height = this.height

        let r_ctx = resultCanvas.getContext('2d')
        let x = (this.width - this.btnWidth) / 2
        let y = (this.height - this.btnWidth) / 2
        r_ctx.drawImage(
            this.canvas,
            0,
            0,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height
        )
        r_ctx.drawImage(
            this.btn_canvas,
            0,
            0,
            this.btnWidth,
            this.btnWidth,
            x,
            y,
            this.btnWidth,
            this.btnWidth
        )
        // this.imgDrawed
        return resultCanvas
    }
}
