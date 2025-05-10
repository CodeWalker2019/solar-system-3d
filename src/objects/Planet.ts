import { Rotator } from '../utility/Rotator';
import * as THREE from 'three';

const shpereGeometry = new THREE.SphereGeometry();

export class PlanetMesh extends THREE.Mesh {
  constructor(color: string = 'orange') {
    super();
    this.geometry = shpereGeometry;
    this.material = new THREE.MeshBasicMaterial({ color });
  }
}

export class RotatingPlanet extends PlanetMesh {
  private rotator = new Rotator(this);

  update(dt: number) {
    this.rotator.update(dt);
  }
}
