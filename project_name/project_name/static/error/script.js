const PIXEL_MAP = {
  0: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  1: [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
  ],
  2: [
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  3: [
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  4: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ],
  5: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  6: [
    [0, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  7: [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  8: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  9: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  B: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  C: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  F: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  G: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 1, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
  ],
  H: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  J: [
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  K: [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  O: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  P: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  Q: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1],
  ],
  R: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  S: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  V: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  W: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ],
  X: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  Z: [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
}

const COLORS = {
  text: "#FFFFFF",
  hitText: "#333333",
  background: "#000000",
  ball: "#FFFFFF",
  paddle: "#FFFFFF",
}

const GAME_CONFIG = {
  ballSpeed: 6,
  paddleWidth: 1, // Relative to large pixel size
  paddleLength: 10, // Relative to large pixel size
}

const TEXT_CONFIG = {
  letterSpacing: 1,
  wordSpacing: 3,
  largePixelSize: 8,
  smallPixelSize: 6,
}

class NotFoundAnimation {
  constructor() {
    this.canvas = document.getElementById("notFoundCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.pixels = []
    this.ball = { x: 0, y: 0, dx: 0, dy: 0, radius: 0 }
    this.paddles = []
    this.scale = 1
    this.words = this.getWordsFromHTML()

    this.resizeCanvas = this.resizeCanvas.bind(this)
    this.gameLoop = this.gameLoop.bind(this)

    window.addEventListener("resize", this.resizeCanvas)
    this.resizeCanvas()
    this.gameLoop()
  }

  getWordsFromHTML() {
    const largeText = document.getElementById("largeText").textContent
    const smallText = document.getElementById("smallText").textContent
    return [largeText, smallText]
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.scale = Math.min(this.canvas.width / 1000, this.canvas.height / 1000)
    this.initializeGame()
  }

  initializeGame() {
    const LARGE_PIXEL_SIZE = TEXT_CONFIG.largePixelSize * this.scale
    const SMALL_PIXEL_SIZE = TEXT_CONFIG.smallPixelSize * this.scale
    const BALL_SPEED = GAME_CONFIG.ballSpeed * this.scale

    this.pixels = []

    const calculateWordWidth = (word, pixelSize) => {
      return (
        word.split("").reduce((width, letter) => {
          const letterWidth = PIXEL_MAP[letter]?.[0]?.length ?? 0
          return width + letterWidth * pixelSize + TEXT_CONFIG.letterSpacing * pixelSize
        }, 0) -
        TEXT_CONFIG.letterSpacing * pixelSize
      )
    }

    const totalWidthLarge = calculateWordWidth(this.words[0], LARGE_PIXEL_SIZE)
    const totalWidthSmall = this.words[1].split(" ").reduce((width, word, index) => {
      return (
        width +
        calculateWordWidth(word, SMALL_PIXEL_SIZE) +
        (index > 0 ? TEXT_CONFIG.wordSpacing * SMALL_PIXEL_SIZE : 0)
      )
    }, 0)
    const totalWidth = Math.max(totalWidthLarge, totalWidthSmall)
    const scaleFactor = (this.canvas.width * 0.8) / totalWidth

    const adjustedLargePixelSize = LARGE_PIXEL_SIZE * scaleFactor
    const adjustedSmallPixelSize = SMALL_PIXEL_SIZE * scaleFactor

    const largeTextHeight = 5 * adjustedLargePixelSize
    const smallTextHeight = 5 * adjustedSmallPixelSize
    const spaceBetweenLines = 5 * adjustedLargePixelSize
    const totalTextHeight = largeTextHeight + spaceBetweenLines + smallTextHeight

    let startY = (this.canvas.height - totalTextHeight) / 2

    this.words.forEach((word, wordIndex) => {
      const pixelSize = wordIndex === 0 ? adjustedLargePixelSize : adjustedSmallPixelSize
      const totalWidth =
        wordIndex === 0
          ? calculateWordWidth(word, adjustedLargePixelSize)
          : this.words[1].split(" ").reduce((width, w, index) => {
              return (
                width +
                calculateWordWidth(w, adjustedSmallPixelSize) +
                (index > 0 ? TEXT_CONFIG.wordSpacing * adjustedSmallPixelSize : 0)
              )
            }, 0)

      let startX = (this.canvas.width - totalWidth) / 2

      if (wordIndex === 1) {
        word.split(" ").forEach((subWord) => {
          subWord.split("").forEach((letter) => {
            const pixelMap = PIXEL_MAP[letter]
            if (!pixelMap) return

            for (let i = 0; i < pixelMap.length; i++) {
              for (let j = 0; j < pixelMap[i].length; j++) {
                if (pixelMap[i][j]) {
                  const x = startX + j * pixelSize
                  const y = startY + i * pixelSize
                  this.pixels.push({ x, y, size: pixelSize, hit: false })
                }
              }
            }
            startX += (pixelMap[0].length + TEXT_CONFIG.letterSpacing) * pixelSize
          })
          startX += TEXT_CONFIG.wordSpacing * adjustedSmallPixelSize
        })
      } else {
        word.split("").forEach((letter) => {
          const pixelMap = PIXEL_MAP[letter]
          if (!pixelMap) return

          for (let i = 0; i < pixelMap.length; i++) {
            for (let j = 0; j < pixelMap[i].length; j++) {
              if (pixelMap[i][j]) {
                const x = startX + j * pixelSize
                const y = startY + i * pixelSize
                this.pixels.push({ x, y, size: pixelSize, hit: false })
              }
            }
          }
          startX += (pixelMap[0].length + TEXT_CONFIG.letterSpacing) * pixelSize
        })
      }
      startY += wordIndex === 0 ? largeTextHeight + spaceBetweenLines : 0
    })

    // Initialize ball position near the top right corner
    const ballStartX = this.canvas.width * 0.9
    const ballStartY = this.canvas.height * 0.1

    this.ball = {
      x: ballStartX,
      y: ballStartY,
      dx: -BALL_SPEED,
      dy: BALL_SPEED,
      radius: adjustedLargePixelSize / 2,
    }

    const paddleWidth = GAME_CONFIG.paddleWidth * adjustedLargePixelSize
    const paddleLength = GAME_CONFIG.paddleLength * adjustedLargePixelSize

    this.paddles = [
      {
        x: 0,
        y: this.canvas.height / 2 - paddleLength / 2,
        width: paddleWidth,
        height: paddleLength,
        targetY: this.canvas.height / 2 - paddleLength / 2,
        isVertical: true,
      },
      {
        x: this.canvas.width - paddleWidth,
        y: this.canvas.height / 2 - paddleLength / 2,
        width: paddleWidth,
        height: paddleLength,
        targetY: this.canvas.height / 2 - paddleLength / 2,
        isVertical: true,
      },
      {
        x: this.canvas.width / 2 - paddleLength / 2,
        y: 0,
        width: paddleLength,
        height: paddleWidth,
        targetY: this.canvas.width / 2 - paddleLength / 2,
        isVertical: false,
      },
      {
        x: this.canvas.width / 2 - paddleLength / 2,
        y: this.canvas.height - paddleWidth,
        width: paddleLength,
        height: paddleWidth,
        targetY: this.canvas.width / 2 - paddleLength / 2,
        isVertical: false,
      },
    ]
  }

  updateGame() {
    this.ball.x += this.ball.dx
    this.ball.y += this.ball.dy

    if (this.ball.y - this.ball.radius < 0 || this.ball.y + this.ball.radius > this.canvas.height) {
      this.ball.dy = -this.ball.dy
    }
    if (this.ball.x - this.ball.radius < 0 || this.ball.x + this.ball.radius > this.canvas.width) {
      this.ball.dx = -this.ball.dx
    }

    this.paddles.forEach((paddle) => {
      if (paddle.isVertical) {
        if (
          this.ball.x - this.ball.radius < paddle.x + paddle.width &&
          this.ball.x + this.ball.radius > paddle.x &&
          this.ball.y > paddle.y &&
          this.ball.y < paddle.y + paddle.height
        ) {
          this.ball.dx = -this.ball.dx
        }
      } else {
        if (
          this.ball.y - this.ball.radius < paddle.y + paddle.height &&
          this.ball.y + this.ball.radius > paddle.y &&
          this.ball.x > paddle.x &&
          this.ball.x < paddle.x + paddle.width
        ) {
          this.ball.dy = -this.ball.dy
        }
      }
    })

    this.paddles.forEach((paddle) => {
      if (paddle.isVertical) {
        paddle.targetY = this.ball.y - paddle.height / 2
        paddle.targetY = Math.max(0, Math.min(this.canvas.height - paddle.height, paddle.targetY))
        paddle.y += (paddle.targetY - paddle.y) * 0.1
      } else {
        paddle.targetY = this.ball.x - paddle.width / 2
        paddle.targetY = Math.max(0, Math.min(this.canvas.width - paddle.width, paddle.targetY))
        paddle.x += (paddle.targetY - paddle.x) * 0.1
      }
    })

    this.pixels.forEach((pixel) => {
      if (
        !pixel.hit &&
        this.ball.x + this.ball.radius > pixel.x &&
        this.ball.x - this.ball.radius < pixel.x + pixel.size &&
        this.ball.y + this.ball.radius > pixel.y &&
        this.ball.y - this.ball.radius < pixel.y + pixel.size
      ) {
        pixel.hit = true
        const centerX = pixel.x + pixel.size / 2
        const centerY = pixel.y + pixel.size / 2
        if (Math.abs(this.ball.x - centerX) > Math.abs(this.ball.y - centerY)) {
          this.ball.dx = -this.ball.dx
        } else {
          this.ball.dy = -this.ball.dy
        }
      }
    })
  }

  drawGame() {
    this.ctx.fillStyle = COLORS.background
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.pixels.forEach((pixel) => {
      this.ctx.fillStyle = pixel.hit ? COLORS.hitText : COLORS.text
      this.ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
    })

    this.ctx.fillStyle = COLORS.ball
    this.ctx.beginPath()
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2)
    this.ctx.fill()

    this.ctx.fillStyle = COLORS.paddle
    this.paddles.forEach((paddle) => {
      this.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
    })
  }

  gameLoop() {
    this.updateGame()
    this.drawGame()
    requestAnimationFrame(this.gameLoop)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new NotFoundAnimation()
})

