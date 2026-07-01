namespace SpriteKind {
    export const danoAgua = SpriteKind.create()
    export const ouro = SpriteKind.create()
    export const vida = SpriteKind.create()
    export const novoInimigo = SpriteKind.create()
    export const parteCenario1 = SpriteKind.create()
    export const magma = SpriteKind.create()
    export const ouro1 = SpriteKind.create()
    export const ouro2 = SpriteKind.create()
    export const vida1 = SpriteKind.create()
    export const vida2 = SpriteKind.create()
    export const novoInimigo1 = SpriteKind.create()
    export const VIDAMUM = SpriteKind.create()
}
/**
 * inimigo do google level 3
 */
/**
 * configuração do personagem
 */
/**
 * funções mapas
 */
/**
 * configurações adicinais para ter pulo nos niveis 3,4 e 5
 */
/**
 * Regras dos quadrados
 */
/**
 * tem três do mesmo (vida e moeda) para os níveis 2,4 e 5
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.novoInimigo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
    donkeyKong = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    donkeyKong,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    200,
    true
    )
    donkeyKong.setPosition(Zoro.x + 70, Zoro.y - 70)
    donkeyKong.follow(Zoro)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vida1, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite, effects.trail, 100)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vida, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite, effects.trail, 100)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.danoAgua, function (sprite, otherSprite) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level_atual == 3 && Zoro.vx == 0) {
        Zoro.vy = -150
    } else if (level_atual == 4 && Zoro.vx == 0) {
        Zoro.vy = -150
    } else if (level_atual == 5 && Zoro.vx == 0) {
        Zoro.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dano 1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dano chão`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vida2, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite, effects.trail, 100)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.magma, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ouro2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.spray, 100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
function avacarLevel (level_number: number) {
    if (level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        scene.setBackgroundColor(2)
        multilights.toggleLighting(false)
        Zoro.ay = 0
        controller.moveSprite(Zoro, 100, 100)
    } else if (level_number == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
        scene.setBackgroundColor(15)
        multilights.toggleLighting(true)
        Zoro.ay = 0
        controller.moveSprite(Zoro, 100, 100)
    } else if (level_number == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.ouro)
        sprites.destroyAllSpritesOfKind(SpriteKind.vida)
        tiles.setCurrentTilemap(tilemap`level`)
        scene.setBackgroundColor(1)
        multilights.toggleLighting(false)
        Zoro.ay = 300
        controller.moveSprite(Zoro, 100, 0)
    } else if (level_number == 4) {
        tiles.setCurrentTilemap(tilemap`level12`)
        scene.setBackgroundColor(9)
        multilights.toggleLighting(false)
        Zoro.ay = 300
        controller.moveSprite(Zoro, 100, 0)
    } else if (level_number == 5) {
        sprites.destroyAllSpritesOfKind(SpriteKind.ouro1)
        sprites.destroyAllSpritesOfKind(SpriteKind.vida1)
        tiles.setCurrentTilemap(tilemap`level7`)
        effects.blizzard.startScreenEffect(5000000)
        scene.setBackgroundColor(8)
        multilights.toggleLighting(false)
        Zoro.ay = 300
        controller.moveSprite(Zoro, 100, 0)
    }
    tiles.placeOnRandomTile(Zoro, sprites.dungeon.collectibleBlueCrystal)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    level_atual += 1
    avacarLevel(level_atual)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ouro, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.spray, 100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
/**
 * se o inimigo encostar perde vida e se pular em cima ganha ponto
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    sprites.destroy(donkeyKong, effects.warmRadial, 100)
    if (Zoro.y < otherSprite.y) {
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ouro1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.spray, 100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let moeda: Sprite = null
let coracao: Sprite = null
let peixe: Sprite = null
let fogo: Sprite = null
let Vilao: Sprite = null
let cenario1: Sprite = null
let projectile: Sprite = null
let donkeyKong: Sprite = null
let level_atual = 0
let Zoro: Sprite = null
Zoro = sprites.create(assets.image`myImage`, SpriteKind.Player)
music.play(music.stringPlayable("C E F A G B F E ", 110), music.PlaybackMode.LoopingInBackground)
controller.moveSprite(Zoro, 100, 0)
scene.cameraFollowSprite(Zoro)
info.setScore(0)
info.setLife(3)
level_atual = 1
avacarLevel(1)
multilights.addLightSource(Zoro, 10)
game.onUpdate(function () {
    Zoro.setImage(assets.image`myImage2`)
    if (Zoro.vx < 0) {
        Zoro.image.flipX()
    }
})
game.onUpdateInterval(2000, function () {
    if (level_atual == 3) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f b . . . . . . . 
            . . . . . . f f f b . . . . . . 
            . . f b . . f f f b . . . . . . 
            . f f f b . f f f b . . . . . . 
            . f f f b . f f f b . . . b . . 
            . f f f b . f f f b . . f f b . 
            . f f f b . f f f b . . f f b . 
            . f f f f f f f f b . . f f b . 
            . . f f f f f f f b . . f f b . 
            . . . f f f f f f f f f f f b . 
            . . . . f f f f f f f f f b . . 
            . . . . . . f f f f f f b . . . 
            . . . . . . f f f f b b . . . . 
            . . . . . . f f f b . . . . . . 
            `, randint(-200, -120), 0)
        tiles.placeOnTile(projectile, tiles.getTileLocation(9, 7))
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
/**
 * Animações e Regras da animação
 */
/**
 * enfeite
 */
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile44`)) {
        cenario1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.parteCenario1)
        animation.runImageAnimation(
        cenario1,
        [img`
            .......fffffffff..........ff......
            ......f66664666ff........f66f...f.
            .....f6664444466f.........f66f.f6f
            ....f66666646666ff.........f6ff66f
            ...f6666611666666ff........f66666f
            ..f666661ff1666666ff......f666fff.
            ff6666661ff16666464f.....f666f....
            f6666666611666644444ff.ff666f.....
            f66666666666666646466fff666f......
            .fbbbbbbb66666666666666666f.......
            ..fddddddff66666666666666f........
            ...fd1d1dddf666666666666f.........
            ....fd1d1ddf666f66666fff..........
            .....ffdd1df6666f66ff.............
            .......ffffff6666ff...............
            .............fffff................
            `,img`
            .......fffffffff..........ff......
            ......f66664666ff........f66f...f.
            .....f6664444466f.........f66f.f6f
            ....f66666646666ff.........f6ff66f
            ...f66666ff666666ff........f66666f
            ..f66666f66f666666ff......f666fff.
            ff666666f66f6666464f.....f666f....
            f6666666666666644444ff.ff666f.....
            f66666666666666646466fff666f......
            .fbbbbbbb66666666666666666f.......
            ..fddddddff66666666666666f........
            ...fd1d1dddf666666666666f.........
            ....fd1d1ddf666f66666fff..........
            .....ffdd1df6666f66ff.............
            .......ffffff6666ff...............
            .............fffff................
            `,img`
            .......fffffffff..........ff......
            ......f66664666ff........f66f...f.
            .....f6664444466f.........f66f.f6f
            ....f66666646666ff.........f6ff66f
            ...f6666611666666ff........f66666f
            ..f666661ff1666666ff......f666fff.
            ff6666661ff16666464f.....f666f....
            f6666666611666644444ff.ff666f.....
            f66666666666666646466fff666f......
            .fbbbbbbb66666666666666666f.......
            ..fddddddff66666666666666f........
            ...fd1d1dddf666666666666f.........
            ....fd1d1ddf666f66666fff..........
            .....ffdd1df6666f66ff.............
            .......ffffff6666ff...............
            .............fffff................
            `],
        500,
        true
        )
        tiles.placeOnTile(cenario1, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
/**
 * inimigo level 5
 */
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile33`)) {
        Vilao = sprites.create(img`
            ......cc66......
            .....c6576c.....
            ....c677576c....
            ....cc677666....
            ...cc6c6667cc...
            ..6c666777cc6c..
            ..c76666766776..
            ..c6777777776c..
            ..cc67777776cc..
            .c67cc76676676c.
            .c777666667777c.
            .c6777777777766.
            .cc7767776776666
            c676cc6766666776
            c777766666677776
            cc7777777777776c
            .c676777677767c.
            ..cc667666766c..
            ...ccc6c66ccc...
            .....cccccc.....
            .......ee.......
            ......eeee......
            .....eeeeee.....
            .......ee.......
            `, SpriteKind.novoInimigo)
        tiles.placeOnTile(Vilao, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
/**
 * animação dano - larva e peixe
 */
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile48`)) {
        fogo = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.magma)
        animation.runImageAnimation(
        fogo,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 . . . 4 . . . . . 4 . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 2 
            2 5 2 2 2 2 2 2 2 2 2 2 5 2 4 2 
            2 2 2 2 2 5 2 2 2 2 2 2 2 2 2 2 
            2 2 4 2 2 2 2 4 2 2 5 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 5 2 2 2 5 2 2 4 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 5 2 2 4 2 4 2 2 2 2 5 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . . . 4 . . . . 2 . 5 . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 2 2 4 2 2 2 2 5 
            2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 
            2 2 5 2 2 2 5 2 2 2 2 5 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 
            2 2 2 2 2 2 2 5 2 2 2 2 2 2 2 2 
            2 2 2 5 2 2 2 2 2 2 2 2 2 5 2 2 
            2 2 2 2 2 2 4 2 2 2 5 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 4 2 2 2 2 2 2 2 2 2 4 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            . . . 2 . . . 4 . . . . . 5 . . 
            . . . . . . . . . . . . . . . . 
            . 4 . 5 . . 4 . . 5 . . 2 . . 4 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 
            2 5 2 2 2 5 2 2 2 2 5 2 2 2 5 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 
            2 2 4 2 2 2 2 2 2 2 2 2 5 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 5 2 2 2 2 5 2 4 2 2 4 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 
            2 2 2 4 2 2 2 2 2 2 2 2 5 2 2 2 
            2 2 2 2 2 5 2 2 4 2 2 2 2 2 2 2 
            2 5 2 2 2 2 2 2 2 2 4 2 2 5 2 2 
            2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            . . . 2 . . . . . . . . 4 . . . 
            . . . . . . . . . . . . . . . . 
            . 5 . . 4 . . . . 2 . . . 5 . . 
            2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 
            2 4 2 2 2 2 4 2 2 2 2 2 5 2 2 2 
            2 2 2 2 4 2 2 2 2 2 2 2 2 2 4 2 
            2 2 2 2 5 2 2 2 2 5 4 2 2 2 2 2 
            2 4 2 2 2 2 2 5 2 2 2 2 2 4 2 2 
            2 2 2 2 2 2 4 2 2 2 2 5 2 2 2 2 
            2 2 5 2 2 2 2 2 2 2 2 2 2 2 5 2 
            2 2 2 2 2 2 4 2 2 5 2 4 2 2 2 2 
            2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 
            2 4 2 2 2 2 2 2 5 2 2 2 4 2 4 2 
            2 2 2 2 2 2 4 2 2 4 2 2 2 2 2 2 
            2 2 2 4 2 2 2 2 2 2 2 2 4 2 2 2 
            2 2 2 2 5 2 2 5 2 2 2 2 2 2 2 2 
            `],
        500,
        true
        )
        tiles.placeOnTile(fogo, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
        peixe = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.danoAgua)
        animation.runImageAnimation(
        peixe,
        [img`
            .................99fff..............
            ................9dd66f..............
            ...............9dd66f...............
            ..............f99669f............999
            ........ffffff999999ff.........99669
            ......ff66666666666669fff.....9d669.
            ....ff6666666669696666999ff..9dd66f.
            ....f6966666ff6696966699999fffd66f..
            ....f6661111ff1696966699999996669f..
            .....f611111111666666999999999699f..
            ......f999339911666699999999fff669f.
            .......f91319111666999996d69...f66f.
            ........f3391119666fddddd99.....f66f
            .........ff1111f6d66fdd99........fff
            ...........99999f6d66f9.............
            .................fffff..............
            `,img`
            .................99fff..............
            ................9dd66f..............
            ...............9dd66f...............
            .........ffffff99669f...............
            ......fff66666666999ff..............
            .....f6666666666666669fff......99999
            .....6966666ff69696666999ff...9d6669
            .....6661111ff6696966699999ff9dd669.
            .....f611111111696966699999996d66f..
            ......f99933911666666999999999669f..
            .......f91319911666699999999ff699f..
            ........f3391111666999996d69..f669f.
            .........ff11116666fddddd99....f66f.
            ...........9991f6d66fdd99.......f66f
            ..............99f6d66f9..........fff
            .................fffff..............
            `,img`
            ..................99fff.............
            .................9dd66f.............
            ........fffffffffdd66f..............
            .......f666666666f969f..............
            .......f6691116ff6699ffff...........
            .......f6111111ff66666999ff....99999
            ........f199331166969669999f..9d6669
            ........f9913191666969699999f9dd669.
            .........f11111166696969999996d66f..
            .........f11111116666699999999669f..
            ..........f11111166669999999ff699f..
            ...........911119666999996d69.f669f.
            ............99119666fdddddd9...f66f.
            ..............9ff6d66fddd99.....f66f
            .................f6d66f99........fff
            ..................fffff.............
            `,img`
            ....................99fff...........
            ..........fffffffff96666f...........
            .........f666666666fff6f............
            .........f661116ff6666ff............
            .........f611111ff666669ff..........
            .........f1999911669696999f.........
            ..........f9191916669696999f...99999
            ............9333166696969999f99dd669
            ...........9333916666666999996dd699.
            ...........93319116666699999996699..
            ..........991391116666999999ff699f..
            ..........9111111966699999669.f99f..
            ...........9911119666fddddd9..f669f.
            .............999ff6d66fddd9....f66f.
            ..................f9d66f99......f66f
            ...................fffff.........fff
            `,img`
            ...........fffffff...99fff..........
            ..........f6666666ff96666f..........
            ..........f6611166666ff6f...........
            ..........f611111ff6666ff...........
            ..........f199991ff666669ff.........
            ..........ff919191669696999f........
            ...........f9933316669696999f..99999
            ............93339166696969999f9dd669
            ............933391666666699999dd699.
            ............9333911666669999996699..
            ...........993319116666999999f699f..
            ...........9913911966699999669f99f..
            ...........91111119666fddddd9.f669f.
            ............991111f6d66fddd9...f66f.
            ..............999fff6d66f99.....f66f
            ....................fffff........fff
            `,img`
            ....................................
            ....................................
            ....................................
            ...............99ffff...............
            ..............9dd666f...............
            .......ffffff9dd666f................
            .....ff66666666666669fff.......99999
            ...ff6666666696966666999ff....9d6669
            ..f66666666669669666699999fff9dd669.
            .f6966666666669696666999999996d66f..
            .f6666666fff669666669999999999669f..
            .ff661111fff6696666999999969ff699f..
            ..ff111111111666699999966699..f669f.
            ....99999991116d666fdd6999.....ff66f
            ........999999f6d666f99..........fff
            ...............ffffff...............
            `],
        500,
        true
        )
        tiles.placeOnTile(peixe, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`coração1`)) {
        coracao = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.vida)
        animation.runImageAnimation(
        coracao,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 2 2 2 f f f 2 2 2 f f . 
            . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
            . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
            . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f f 2 2 2 3 3 3 2 2 2 f f . 
            . . . f f 2 3 3 3 3 3 2 f f . . 
            . . . . f f 3 3 3 3 3 f f . . . 
            . . . . . f f 3 3 3 f f . . . . 
            . . . . . . f f 3 f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . f f f . . . . 
            . . . . f 2 2 2 f 2 2 2 f . . . 
            . . . . f 2 2 2 2 2 1 2 f . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . 
            . . . . . f 2 3 3 3 2 f . . . . 
            . . . . . f f 3 3 3 f f . . . . 
            . . . . . . f f 3 f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        1000,
        true
        )
        tiles.placeOnTile(coracao, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`coração2`)) {
        coracao = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.vida1)
        animation.runImageAnimation(
        coracao,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 2 2 2 f f f 2 2 2 f f . 
            . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
            . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
            . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f f 2 2 2 3 3 3 2 2 2 f f . 
            . . . f f 2 3 3 3 3 3 2 f f . . 
            . . . . f f 3 3 3 3 3 f f . . . 
            . . . . . f f 3 3 3 f f . . . . 
            . . . . . . f f 3 f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . f f f . . . . 
            . . . . f 2 2 2 f 2 2 2 f . . . 
            . . . . f 2 2 2 2 2 1 2 f . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . 
            . . . . . f 2 3 3 3 2 f . . . . 
            . . . . . f f 3 3 3 f f . . . . 
            . . . . . . f f 3 f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        1000,
        true
        )
        tiles.placeOnTile(coracao, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`coração0`)) {
        coracao = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.vida2)
        animation.runImageAnimation(
        coracao,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 2 2 2 f f f 2 2 2 f f . 
            . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
            . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
            . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f f 2 2 2 3 3 3 2 2 2 f f . 
            . . . f f 2 3 3 3 3 3 2 f f . . 
            . . . . f f 3 3 3 3 3 f f . . . 
            . . . . . f f 3 3 3 f f . . . . 
            . . . . . . f f 3 f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . f f f . . . . 
            . . . . f 2 2 2 f 2 2 2 f . . . 
            . . . . f 2 2 2 2 2 1 2 f . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . 
            . . . . . f 2 3 3 3 2 f . . . . 
            . . . . . f f 3 3 3 f f . . . . 
            . . . . . . f f 3 f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        1000,
        true
        )
        tiles.placeOnTile(coracao, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`ouro1`)) {
        moeda = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ouro)
        animation.runImageAnimation(
        moeda,
        [img`
            . . b b b b . . 
            . b 4 4 4 4 b . 
            b 4 d 3 3 d 4 b 
            b 4 3 4 4 1 4 b 
            c 4 3 4 4 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 4 4 4 b . . 
            b 4 d 3 d 4 b . 
            b 4 3 4 1 4 b . 
            c 4 3 4 1 d c . 
            c 4 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . b 4 d 1 4 b . 
            . b 4 3 1 4 b . 
            . c 4 3 1 d c . 
            . c 4 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . . b 1 1 b . . 
            . . b 4 4 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . b 4 1 d 4 b . 
            . b 4 1 3 4 b . 
            . c d 1 3 4 c . 
            . c d d 1 4 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 4 4 4 b . 
            . b 4 d 3 d 4 b 
            . b 4 1 4 3 4 b 
            . c d 1 4 3 4 c 
            . c d d 1 d 4 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(moeda, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`ouro2`)) {
        moeda = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ouro1)
        animation.runImageAnimation(
        moeda,
        [img`
            . . b b b b . . 
            . b 4 4 4 4 b . 
            b 4 d 3 3 d 4 b 
            b 4 3 4 4 1 4 b 
            c 4 3 4 4 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 4 4 4 b . . 
            b 4 d 3 d 4 b . 
            b 4 3 4 1 4 b . 
            c 4 3 4 1 d c . 
            c 4 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . b 4 d 1 4 b . 
            . b 4 3 1 4 b . 
            . c 4 3 1 d c . 
            . c 4 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . . b 1 1 b . . 
            . . b 4 4 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . b 4 1 d 4 b . 
            . b 4 1 3 4 b . 
            . c d 1 3 4 c . 
            . c d d 1 4 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 4 4 4 b . 
            . b 4 d 3 d 4 b 
            . b 4 1 4 3 4 b 
            . c d 1 4 3 4 c 
            . c d d 1 d 4 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(moeda, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`ouro0`)) {
        moeda = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ouro2)
        animation.runImageAnimation(
        moeda,
        [img`
            . . b b b b . . 
            . b 4 4 4 4 b . 
            b 4 d 3 3 d 4 b 
            b 4 3 4 4 1 4 b 
            c 4 3 4 4 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 4 4 4 b . . 
            b 4 d 3 d 4 b . 
            b 4 3 4 1 4 b . 
            c 4 3 4 1 d c . 
            c 4 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . b 4 d 1 4 b . 
            . b 4 3 1 4 b . 
            . c 4 3 1 d c . 
            . c 4 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . . b 1 1 b . . 
            . . b 4 4 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 4 4 b . . 
            . b 4 1 d 4 b . 
            . b 4 1 3 4 b . 
            . c d 1 3 4 c . 
            . c d d 1 4 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 4 4 4 b . 
            . b 4 d 3 d 4 b 
            . b 4 1 4 3 4 b 
            . c d 1 4 3 4 c 
            . c d d 1 d 4 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(moeda, value)
        tiles.setTileAt(value, assets.tile`baseTransparency16`)
    }
})
