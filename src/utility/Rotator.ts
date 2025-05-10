import type { Object3D } from "three";

export class Rotator {
    constructor(
        private object: Object3D,
        private axis: 'x' | 'y' | 'z' = 'y',
        private speed: number = 0.5
    ) {}

    update(dt: number) {
        this.object.rotation[this.axis] += dt * this.speed;
    }
}