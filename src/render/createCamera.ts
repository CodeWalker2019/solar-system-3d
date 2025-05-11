import * as THREE from 'three'

export function createCamera(): THREE.PerspectiveCamera {
    const aspect = window.innerWidth / window.innerHeight
    const camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000)

    camera.position.set(0, 1, 15)
    camera.up.set(0, 1, 0)

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })

    return camera
}
