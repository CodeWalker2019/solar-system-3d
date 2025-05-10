import * as THREE from 'three';
import { SceneWorld } from './SceneWorld';

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.set(0, 50, 35);
camera.lookAt(0, 0, 0);
const world = new SceneWorld(new THREE.Scene());

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  world.update(clock.getDelta());
  renderer.render(world.scene, camera);
}
animate();