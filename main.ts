input.onButtonPressed(Button.AB, function () {
    makerbit.clearLcd2004()
    makerbit.showStringOnLcd2004("Setting Date & Time", makerbit.position2004(LcdPosition2004.Pos1), 20, TextOption.AlignCenter)
    basic.pause(2000)
    makerbit.showStringOnLcd2004("Please Wait", makerbit.position2004(LcdPosition2004.Pos21), 20, TextOption.AlignCenter)
    ds.DateTime(
    2021,
    12,
    8,
    3,
    20,
    15,
    0
    )
    basic.pause(2000)
    makerbit.showStringOnLcd2004("Time Set", makerbit.position2004(LcdPosition2004.Pos21), 20, TextOption.AlignCenter)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    control.reset()
})
let ds: DS1302.DS1302RTC = null
ds = DS1302.create(DigitalPin.P2, DigitalPin.P16, DigitalPin.P14)
ds.start()
makerbit.connectLcd(39)
makerbit.clearLcd2004()
makerbit.showStringOnLcd2004("Current UK Time", makerbit.position2004(LcdPosition2004.Pos1), 20, TextOption.AlignCenter)
basic.forever(function () {
    makerbit.showStringOnLcd2004("" + ds.getHour() + " : " + ds.getMinute() + " : " + ds.getSecond(), makerbit.position2004(LcdPosition2004.Pos41), 20, TextOption.AlignCenter)
})
