import * as THREE from 'three'

export class PlanetBuilder {
    private radius = 1
    private color: THREE.ColorRepresentation = 0xffffff
    private orbitRadius = 0
    private name = 'planet'
    private segments = 32
    private x = 0
    private y = 0
    private z = 0

    withPosition(x: number, y: number, z: number): this {
        this.x = x
        this.y = y
        this.z = z
        return this
    }

    withRadius(radius: number): this {
        this.radius = radius
        return this
    }

    withColor(color: THREE.ColorRepresentation): this {
        this.color = color
        return this
    }

    withOrbitRadius(orbitRadius: number): this {
        this.orbitRadius = orbitRadius
        return this
    }

    withName(name: string): this {
        this.name = name
        return this
    }

    withSegments(segments: number): this {
        this.segments = segments
        return this
    }

    create(): {
        mesh: THREE.Mesh
        orbitRadius: number
        name: string
    } {
        const geometry = new THREE.SphereGeometry(this.radius, this.segments, this.segments)
        const material = new THREE.MeshBasicMaterial({ color: this.color })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(this.x, this.y, this.z)

        mesh.name = this.name
        mesh.castShadow = true
        mesh.receiveShadow = true

        return {
        mesh,
        orbitRadius: this.orbitRadius,
        name: this.name
        }
    }
}
