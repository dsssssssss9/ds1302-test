/**
 * Added a set correct Time / Date option by presseing A+B after setting correct details in the Blocks under ON Button A+B
 */
// If Current Date/Time is wrong:
// 
// Set correct details in these blocks
// 
// Upload to MicroBit 
// Press A+B to set new time & date
// 
input.onButtonPressed(Button.AB, function () {
    makerbit.clearLcd2004()
    makerbit.showStringOnLcd2004("Setting Date & Time", makerbit.position2004(LcdPosition2004.Pos1), 20, TextOption.AlignCenter)
    basic.pause(2000)
    makerbit.showStringOnLcd2004("Please Wait", makerbit.position2004(LcdPosition2004.Pos21), 20, TextOption.AlignCenter)
    // If Current Date/Time is wrong:
    // 
    // Set correct details in these blocks
    // 
    // Upload to MicroBit 
    // Press A+B to set new time & date
    // 
    ds.DateTime(
    2021,
    12,
    8,
    3,
    20,
    25,
    30
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
makerbit.showStringOnLcd2004("Press A+B If Wrong!!", makerbit.position2004(LcdPosition2004.Pos61), 20, TextOption.AlignCenter)
basic.pause(5000)
makerbit.showStringOnLcd2004("                    ", makerbit.position2004(LcdPosition2004.Pos61), 20, TextOption.AlignCenter)
basic.forever(function () {
    makerbit.showStringOnLcd2004("" + ds.getHour() + " : " + ds.getMinute() + " : " + ds.getSecond(), makerbit.position2004(LcdPosition2004.Pos41), 20, TextOption.AlignCenter)
})
