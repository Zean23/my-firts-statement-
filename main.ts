input.onGesture(Gesture.Shake, function () {
    random = randint(0, 2)
    if (random == 0) {
        basic.showString("YES")
    } else if (random == 1) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE")
    }
})
let random = 0
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
	
})
