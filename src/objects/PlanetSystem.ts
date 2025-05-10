import * as THREE from 'three';
import type { ReRenderable } from './types';
import { Rotator } from '../utility/Rotator';

export class PlanetSystem extends THREE.Group implements ReRenderable {
    private rotator: Rotator;

    constructor(planets: THREE.Object3D[]) {
        super();
        this.rotator = new Rotator(this);
        this.add(...planets);
    }

    update(dt: number) {
        this.rotator.update(dt);
    }
}
