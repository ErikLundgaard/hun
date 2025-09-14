let a = 0
function hun () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        # # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    a = 1
})
input.onButtonPressed(Button.B, function () {
    a = 0
})
function silm () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Sad)
}
basic.forever(function () {
    if (a == 1) {
        hun()
    } else if (a == 0) {
        silm()
    }
})
