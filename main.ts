enum RadioMessage {
    hallo = 324,
    hello2 = 22932,
    hello = 49337,
    message1 = 49434
}
function kleinLerstellen () {
    // Endlosschleife: Warte auf Drehbefehl
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            // Drehung der Gruppe
            rotateGroup(Lklein)
            // Anti-Debounce
            basic.pause(500)
        }
    }
}
function p_2erstellen () {
    basic.pause(100)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.B)) {
            schiff1.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.A)) {
            schiff1.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    // Sprite-Gruppe erstellen
    Lklein = [game.createSprite(0, 1), game.createSprite(0, 0), game.createSprite(1, 0)]
    kleinLerstellen()
}
function code_start () {
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    // Haupt-Sprite erstellen
    schiff1 = game.createSprite(0, 0)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.B)) {
            schiff1.move(1)
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.A)) {
            schiff1.move(-1)
            basic.pause(100)
        }
    }
    p_2erstellen()
}
function rotateGroup (sprites: any[]) {
    let positions = sprites.map(sprite => {
        return { x: sprite.get(LedSpriteProperty.X), y: sprite.get(LedSpriteProperty.Y) };
    });
// Zentrum der Gruppe annehmen (z.B. bei (2,2))
    centerX = 2
    centerY = 2
    // Berechne neue Positionen für 90° Drehung im Uhrzeigersinn
    for (let i = 0; i <= Lklein.length - 1; i++) {
        newX = centerX + (positions[i].y - centerY)
        newY = centerY - (positions[i].x - centerX)
        sprites[i].set(LedSpriteProperty.X, newX)
sprites[i].set(LedSpriteProperty.Y, newY)
    }
    kleinLerstellen()
}
let centerY = 0
let centerX = 0
let schiff1: game.LedSprite = null
let Lklein: game.LedSprite[] = []
let newX = 0
let newY = 0
function controlSprite(sprite: game.LedSprite, property: LedSpriteProperty) {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            sprite.change(property, 1);
        } else if (input.buttonIsPressed(Button.B)) {
            sprite.change(property, -1);
        }
        basic.pause(100); // Verhindert zu schnelles Bewegen
    }
}
// Initialisierung
radio.setGroup(1)
radio.sendMessage(RadioMessage.hallo)
code_start()
