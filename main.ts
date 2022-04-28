input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(y, 1 - y)
            basic.pause(100)
        }
        for (let y = 0; y <= 4; y++) {
            led.toggle(y, 5 - y)
            basic.pause(100)
        }
        for (let x = 0; x <= 4; x++) {
            led.toggle(x, 3 - x)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
