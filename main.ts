enum RadioMessage {
    hallo = 324,
    hello2 = 22932,
    hello = 49337,
    message1 = 49434
}
function wie_alt_bist_du () {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            zwei_.change(LedSpriteProperty.Y, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                zwei_.change(LedSpriteProperty.Y, -1)
            }
        }
    }
    eria()
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
    kaufhaus()
}
function kaufhaus () {
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
function komm_mit () {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            schiff1.change(LedSpriteProperty.Y, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                schiff1.change(LedSpriteProperty.Y, -1)
            }
        }
    }
    _2()
}
function eria () {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            Lklein.turn(Direction.Right, 45)
        } else {
            Lklein.turn(Direction.Left, 45)
        }
    }
    ppunkt()
}
function ppunkt () {
    _3 = game.createSprite(0, 0)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.B)) {
            schiff1.move(1)
        } else {
            if (input.buttonIsPressed(Button.A)) {
                schiff1.change(LedSpriteProperty.X, -1)
            }
        }
    }
    komm_mit()
}
radio.onReceivedMessage(RadioMessage.hallo, function () {
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
function _2 () {
    _22 = game.createSprite(0, 0)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.B)) {
            schiff1.move(1)
        } else {
            if (input.buttonIsPressed(Button.A)) {
                schiff1.change(LedSpriteProperty.X, -1)
            }
        }
    }
}
function cola () {
    zwei_ = [game.createSprite(0, 1), game.createSprite(0, 0)]
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            zwei_.change(LedSpriteProperty.X, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                zwei_.change(LedSpriteProperty.X, -1)
            }
        }
    }
    wie_alt_bist_du()
}
let _22: game.LedSprite = null
let _3: game.LedSprite = null
let schiff1: game.LedSprite = null
let Lklein: game.LedSprite[] = []
let zwei_: game.LedSprite[] = []
radio.setGroup(1)
radio.sendMessage(RadioMessage.hallo)
