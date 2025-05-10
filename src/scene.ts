import { PlanetMesh, RotatingPlanet } from "./objects/Planet";
import { PlanetSystem } from "./objects/PlanetSystem";
import type { SceneWorld } from "./SceneWorld";

export function registerAllObjects(world: SceneWorld) {
    const moon = new PlanetMesh('#1424ff')
    moon.position.set(2, 0, 0)
    moon.scale.set(0.25, 0.25, 0.25)

    const earth = new RotatingPlanet('#14ffa1')
    world.addUpdateable(earth)

    const sun = new RotatingPlanet('#fffa14')
    sun.scale.set(12, 12, 12)

    const earthSystem = new PlanetSystem([earth, moon])
    earthSystem.position.set(25, 0, 0)
    world.addUpdateable(earthSystem)

    const sunSystem = new PlanetSystem([sun, earthSystem])
    world.addUpdateable(sunSystem)
    world.add(sunSystem)
}
