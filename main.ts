input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let BotãoNãoPressionado = true
basic.forever(function () {
    while (BotãoNãoPressionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            music.ringTone(262)
            BotãoNãoPressionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            music.ringTone(165)
            BotãoNãoPressionado = false
        }
    }
})
