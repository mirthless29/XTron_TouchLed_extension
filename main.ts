controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lightAnimation = 1
    lightAniStatus += 1
    if (lightAniStatus == 7) {
        lightAniStatus = 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    lightAniStatus = 0
    lightAnimation = 0
    xtronLight.stopAllAnimations()
    xtronLight.clear()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lightAnimation == 1) {
        lightAnimation = 0
        xtronLight.stopAllAnimations()
    } else {
        lightAnimation = 1
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lightAnimation = 1
    lightAniStatus += -1
    if (lightAniStatus == 0) {
        lightAniStatus = 6
    }
})
let lightAnimation = 0
let lightAniStatus = 0
lightAniStatus = 0
lightAnimation = 0
xtronModules.controlAllNeopixels(ModuleIndex.Module1, 0x000000)
xtronLight.setBrightness(20)
game.splash("Click A to stop led animation", "Click B to clean animation")
game.onUpdateInterval(500, function () {
    if (lightAnimation == 1 && lightAniStatus == 1) {
        xtronLight.showAnimation(xtronLight.rainbowAnimation, 500)
    }
    if (lightAnimation == 1 && lightAniStatus == 2) {
        xtronLight.showAnimation(xtronLight.runningLightsAnimation, 500)
    }
    if (lightAnimation == 1 && lightAniStatus == 3) {
        xtronLight.showAnimation(xtronLight.cometAnimation, 500)
    }
    if (lightAnimation == 1 && lightAniStatus == 4) {
        xtronLight.showAnimation(xtronLight.sparkleAnimation, 500)
    }
    if (lightAnimation == 1 && lightAniStatus == 5) {
        xtronLight.showAnimation(xtronLight.colorWipeAnimation, 500)
    }
    if (lightAnimation == 1 && lightAniStatus == 6) {
        xtronLight.showAnimation(xtronLight.theaterChaseAnimation, 500)
    }
})
game.onUpdateInterval(100, function () {
    if (xtronModules.isTouchDown(ModuleIndex.Module1, TPIndex.Triangle)) {
        xtronLight.setBrightness(20)
    }
    if (xtronModules.isTouchDown(ModuleIndex.Module1, TPIndex.Circle)) {
        lightAniStatus = 0
        lightAnimation = 0
        xtronLight.stopAllAnimations()
        xtronLight.clear()
        xtronLight.setAll(0xffffff)
        xtronLight.setBrightness(255)
    }
})
