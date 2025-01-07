radio.onReceivedNumber(function (receivedNumber) {
    clock += 1
})
radio.setTransmitPower(1)
let clock = 0
radio.setGroup(6)
basic.forever(function () {
    if (clock >= 12) {
        radio.sendNumber(0)
        basic.pause(200)
        game.addScore(1)
        clock = 0
    } else {
        basic.pause(100)
        clock += 1
    }
})
