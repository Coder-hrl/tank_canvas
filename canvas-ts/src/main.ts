import './style.css'


const el = document.querySelector<HTMLCanvasElement>('canvas')!
// 明确告诉不可能为空的,使用!来进行

const app = el.getContext('2d')!

// app.fillStyle = "#fff"

// app.fillRect(0, 0, 300, 300)

// app.fillStyle = "green"
// app.fillRect(el.width / 2 - 50, el.height / 2 - 50, 100, 100)


// stroke 画一个框
// app.strokeStyle = "red"
// app.lineWidth = 20
// app.lineJoin = "round"
// app.strokeRect(0, 0, 200, 200)

// 画圆
// app.fillStyle = " green"
// app.lineWidth = 20
// app.arc(100, 100, 50, 0, 2 * Math.PI)

// app.stroke()

// //划线
// app.beginPath()

// app.moveTo(0, 30)
// app.lineTo(el.width, el.height)
// app.lineTo(20, 100)
// app.closePath()
// app.strokeStyle = "green"
// app.stroke()



// const gadient = app.createLinearGradient()
app.fillStyle = "green"
app.fillRect(0, 0, el.width, el.height)

app.font = "80px"
app.strokeStyle = "white"
app.lineWidth = 5
app.textBaseline = "bottom"
app.strokeText("hello world", 0, 20)