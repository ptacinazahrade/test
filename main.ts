input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
})
