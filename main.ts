input.onButtonPressed(Button.A, function () {
    makerbit.clearLcd2004()
})
let ds = DS1302.create(DigitalPin.P2, DigitalPin.P16, DigitalPin.P14)
ds.start()
makerbit.connectLcd(39)
makerbit.clearLcd2004()
makerbit.showStringOnLcd2004("Current UK Time", makerbit.position2004(LcdPosition2004.Pos1), 20, TextOption.AlignCenter)
basic.forever(function () {
    makerbit.showStringOnLcd2004("" + ds.getHour() + " : " + ds.getMinute() + " : " + ds.getSecond(), makerbit.position2004(LcdPosition2004.Pos41), 20, TextOption.AlignCenter)
})
