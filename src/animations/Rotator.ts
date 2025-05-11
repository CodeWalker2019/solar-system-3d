import * as THREE from 'three'
import type { Updatable } from '../types/animations'

export class Rotator implements Updatable {
    constructor(
        private object: THREE.Object3D,
        private speed: number,
        private axis = new THREE.Vector3(0, 1, 0)
    ) {}

    update(delta: number) {
        this.object.rotateOnAxis(this.axis, this.speed * delta)
    }
}
