
import { LoopController } from './core/LoopController'
import { AnimationManager } from './core/AnimationManager'
import { RotatorManager } from './animations/RotationManager'
import { createCamera } from './render/createCamera'
import { createRenderer } from './render/createRenderer'
import { buildWorld } from './buildWorld'

const renderer = createRenderer()
const camera = createCamera()

const animationManager = new AnimationManager()
const rotationManager = new RotatorManager()
animationManager.subscribe(rotationManager)

const scene = buildWorld(rotationManager)

const loop = new LoopController((delta) => {
  animationManager.update(delta)
  renderer.render(scene, camera)
})

loop.start()
