enum RadioMessage {
    message1 = 49434,
    hello2 = 22932,
    hello = 49337,
    hallo = 324
}
radio.onReceivedMessage(RadioMessage.hallo, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    schiff1 = game.createSprite(0, 0)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            schiff1.change(LedSpriteProperty.X, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                schiff1.change(LedSpriteProperty.X, -1)
            }
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
    Lklein = [game.createSprite(0, 1), game.createSprite(0, 0), game.createSprite(1, 0)]
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            Lklein.turn(Direction.Left, 45)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                Lklein.turn(Direction.Right, 45)
            }
        }
    }
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            schiff1.change(LedSpriteProperty.X, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                schiff1.change(LedSpriteProperty.X, -1)
            }
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
})
let Lklein: game.LedSprite[] = []
let schiff1: game.LedSprite = null
radio.setGroup(1)
radio.sendMessage(RadioMessage.hello2)
basic.forever(function () {
	
})
