import * as THREE from 'three'

export class LoopController {
    private clock = new THREE.Clock()
    private isRunning = false
    private animationFrameId = 0
    private callback: (delta: number) => void = () => {}

    constructor(callback?: (delta: number) => void) {
        if (callback) this.callback = callback
    }

    setCallback(fn: (delta: number) => void) {
        this.callback = fn
    }

    start() {
        this.isRunning = true
        this.clock.start()

        const loop = () => {
        if (!this.isRunning) return
        this.animationFrameId = requestAnimationFrame(loop)

        const delta = this.clock.getDelta()
        this.callback(delta)
        }

        loop()
    }

    stop() {
        this.isRunning = false
        cancelAnimationFrame(this.animationFrameId)
    }

    resetClock() {
        this.clock = new THREE.Clock()
    }
}
