import type { Updatable } from "../types/animations"

export class AnimationManager {
    private observers: Updatable[] = []

    subscribe(obj: Updatable) {
        this.observers.push(obj)
    }

    unsubscribe(obj: Updatable) {
        this.observers = this.observers.filter(o => o !== obj)
    }

    update(delta: number) {
        for (const observer of this.observers) {
        observer.update(delta)
        }
    }
}
