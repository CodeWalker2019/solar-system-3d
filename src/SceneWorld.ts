import * as THREE from 'three';
import type { ReRenderable } from './objects/types';
import { registerAllObjects } from './scene';

export class SceneWorld {
  private updateables: ReRenderable[] = [];

  get scene() { return this._scene; }

  constructor(private _scene: THREE.Scene) {
    registerAllObjects(this);
  }

  addUpdateable(entity: ReRenderable) {
    this.updateables.push(entity);
  }

  add(entity: THREE.Object3D) {
    this.scene.add(entity);
  }

  update(dt: number) {
    this.updateables.forEach(e => e.update?.(dt));
  }
}