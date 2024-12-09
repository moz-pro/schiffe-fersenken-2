enum RadioMessage {
    hallo = 324,
    hello2 = 22932,
    hello = 49337,
    message1 = 49434
}
function kleines_l_erstellen_und_drehen () {
    Lklein = [game.createSprite(0, 1), game.createSprite(0, 0), game.createSprite(1, 0)]
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            Lklein.turn(Direction.Right, 45)
        } else {
            Lklein.turn(Direction.Left, 45)
        }
    }
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            schiff1.change(LedSpriteProperty.Y, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                schiff1.change(LedSpriteProperty.Y, -1)
            }
        }
    }
}
function _ () {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            schiff1.change(LedSpriteProperty.Y, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                schiff1.change(LedSpriteProperty.Y, -1)
            }
        }
    }
    kleines_l_erstellen_und_drehen()
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    schiff1 = game.createSprite(0, 0)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.B)) {
            schiff1.move(1)
        } else {
            if (input.buttonIsPressed(Button.A)) {
                schiff1.change(LedSpriteProperty.X, -1)
            }
        }
    }
    _()
})
let schiff1: game.LedSprite = null
let Lklein: game.LedSprite[] = []
radio.setGroup(1)
radio.sendMessage(RadioMessage.message1)
basic.forever(function () {
	
})
