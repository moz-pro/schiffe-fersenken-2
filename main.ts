enum RadioMessage {
    hallo = 324,
    hello2 = 22932,
    hello = 49337,
    message1 = 49434
}
function zwei_x () {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            zwei_.turn(Direction.Right, 45)
        } else {
            zwei_.turn(Direction.Left, 45)
        }
    }
    punkt_1x()
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
    kleines_ly()
}
function punkt_1y () {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            _3.change(LedSpriteProperty.Y, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                _3.change(LedSpriteProperty.Y, -1)
            }
        }
    }
    _2()
}
function kleines_ly () {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            Lklein.change(LedSpriteProperty.Y, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                Lklein.change(LedSpriteProperty.Y, -1)
            }
        }
    }
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
function zwai_y () {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            zwei_.change(LedSpriteProperty.Y, 1)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                zwei_.change(LedSpriteProperty.Y, -1)
            }
        }
    }
    zwei_x()
}
function zwa () {
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
    zwai_y()
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
function punkt_1x () {
    _3 = game.createSprite(0, 0)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.B)) {
            _3.move(1)
        } else {
            if (input.buttonIsPressed(Button.A)) {
                _3.change(LedSpriteProperty.X, -1)
            }
        }
    }
    punkt_1y()
}
let _22: game.LedSprite = null
let schiff1: game.LedSprite = null
let _3: game.LedSprite = null
let Lklein: game.LedSprite[] = []
let zwei_: game.LedSprite[] = []
radio.setGroup(1)
radio.sendMessage(RadioMessage.hallo)
