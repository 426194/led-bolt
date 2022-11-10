let 亮度2 = 0
let x = 0
let dx = 1
let 亮度 = 1
basic.forever(function () {
    if (亮度 == 0) {
        亮度2 = 20
    } else if (亮度 == 255) {
        亮度2 = -20
    }
    if (x == 4) {
        dx = -1
    } else if (x == 0) {
        dx = 1
    }
    x += dx
    basic.pause(100)
    basic.clearScreen()
    led.plotBrightness(x, 0, 亮度)
    led.plotBrightness(x, 1, 亮度)
    led.plotBrightness(x, 2, 亮度)
    led.plotBrightness(x, 3, 亮度)
    led.plotBrightness(x, 4, 亮度)
    亮度 += 20
})
