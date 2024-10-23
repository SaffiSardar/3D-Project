import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import './style.css';
import * as THREE from 'three';

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 4;

//objects
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:"red"});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#canvas"),
    antialias:true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.setSize(window.innerWidth,window.innerHeight);

//animate

function animate(){
    window.requestAnimationFrame(animate);
    
    //render
    renderer.render(scene,camera);
}

animate();