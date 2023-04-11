const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")
document.body.append(canvas)
canvas.height = innerHeight
canvas.width = innerWidth
ctx.fillRect(100, 100, 50, 50)
ctx.fillStyle = "#EFEFEF"
ctx.fillRect(0, 0, innerWidth, innerHeight)
ctx.fillStyle = "blue"

const original_brick = {
    rows: [{ from: 0, to: 5 }, { from: 0, to: 5 }, { from: 1, to: 4 }],
    width: 330, height: 60,
    gap: { x: 50, y: 40 },
    offset: { x: 40, y: 50 },
}

const brick = {
    rows: [{ from: 1, to: 7 }, { from: 0, to: 8 }, { from: 1, to: 7 }, { from: 2, to: 6 }, { from: 3, to: 5 }],
    width: 180, height: 40,
    gap: { x: 40, y: 30 },
    offset: { x: 50, y: 60 },
}

const paddle = {x: 730, y: 860, width: 330, height: 50}

const ball = {x: 900, y: 800, r: 25}

renderBricks()
renderPaddle()
renderBall()

function renderBricks() {
    const { rows, width, height, gap, offset } = brick
    const step = { x: width + gap.x, y: height + gap.y}

    for (const i in rows) {
        const { from, to } = rows[i]

        for (let j = from; j < to; j++) {
            ctx.fillRect(offset.x + step.x * j, offset.y + step.y * i, width, height)
        }
    }
}

function renderPaddle(){
    const {x, y, width, height} = paddle

    ctx.fillRect(x, y, width, height)
}

function renderBall(){
    const {x, y, r} = ball

    ctx.arc(x, y, r, 0, 7)
    ctx.fill()
}