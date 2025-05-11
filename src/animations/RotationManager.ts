import { Vector3, type Object3D } from "three"
import { Rotator } from "./Rotator"
import type { Updatable } from "../types/animations"

export class RotatorManager implements Updatable {
    private rotators: Rotator[] = []

    subscribe(object: Object3D, speed: number, axis = new Vector3(0, 1, 0)) {
        this.rotators.push(new Rotator(object, speed, axis))
    }

    update(delta: number) {
        this.rotators.forEach(r => r.update(delta))
    }
}
