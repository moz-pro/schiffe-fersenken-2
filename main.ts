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
/**
 * call code start ist zum übergang bitte beim relife test austauschen
 */
let Lklein: game.LedSprite[] = []
let schiff1: game.LedSprite = null
// Initialisierung
radio.setGroup(1)
radio.sendMessage(RadioMessage.hallo)
code_start()
