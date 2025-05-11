import * as THREE from 'three'
import type { RotatorManager } from './animations/RotationManager'

export function buildWorld(rotatorManager: RotatorManager): THREE.Scene {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    // TODO: complete scene with sun, earth and moon
    return scene
}
