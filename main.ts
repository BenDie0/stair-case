let juan = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . . f f . . . . 
. . . . . f . f . f . f . . . . 
. . . . . f f . . . . f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . f . . . . . . . 
. . f f f . . . f . . . f f f . 
. . . . f f f f f f f f f . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . f f . . . f f . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(14)
for (let index = 0; index < 6; index++) {
    pause(100)
    juan.y += 4
    pause(100)
    juan.x += 4
}
for (let index = 0; index < 6; index++) {
    pause(100)
    juan.y += -4
    pause(100)
    juan.x += -4
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f f f . . 
. . . . f . . . . . . . . f . . 
. . . f . f . . f . . . . f . . 
. . f . . . . . . . . f f . . . 
. f . . . f f f . f f . . . . . 
. f . . . . . . f . . . . . . . 
. f f f f f f f . . . . . . . . 
. . . . . . f . . . . . . . . . 
. . . . . . f . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f . . f f f . . f . . . . . 
. . . . . . f . . . . . . . . . 
. . . . . . f . . . . . . . . . 
. . . . . f . f . . . . . . . . 
`, SpriteKind.Player)
for (let index = 0; index < 6; index++) {
    pause(100)
    mySprite.y += 4
    pause(100)
    mySprite.x += -4
}
for (let index = 0; index < 6; index++) {
    pause(100)
    mySprite.y += -4
    pause(100)
    mySprite.x += 4
}
