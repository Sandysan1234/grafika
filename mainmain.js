import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const personGroup = new THREE.Group();

// Bagian tubuh orang
const torsoGeometry = new THREE.BoxGeometry(1, 2, 0.5);
const torsoMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const torso = new THREE.Mesh(torsoGeometry, torsoMaterial);
torso.position.y = 1;
personGroup.add(torso);

// Sepeda (membuat geometri sepeda sederhana)
const bikeGroup = new THREE.Group();

// Roda depan
const frontWheelRadius = 0.3;
const frontWheelGeometry = new THREE.CircleGeometry(frontWheelRadius, 32);
const frontWheelMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const frontWheel = new THREE.Mesh(frontWheelGeometry, frontWheelMaterial);
frontWheel.rotation.x = Math.PI / 2; // Menghadap ke depan
frontWheel.position.set(-0.5, -0.3, 0);
bikeGroup.add(frontWheel);

// Roda belakang
const rearWheelRadius = 0.3;
const rearWheelGeometry = new THREE.CircleGeometry(rearWheelRadius, 32);
const rearWheelMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const rearWheel = new THREE.Mesh(rearWheelGeometry, rearWheelMaterial);
rearWheel.rotation.x = Math.PI / 2; // Menghadap ke depan
rearWheel.position.set(0.5, -0.3, 0);
bikeGroup.add(rearWheel);

// Bingkai sepeda
const frameWidth = 0.1;
const frameHeight = 0.5;
const frameDepth = 0.02;
const frameGeometry = new THREE.BoxGeometry(frameWidth, frameHeight, frameDepth);
const frameMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const frame = new THREE.Mesh(frameGeometry, frameMaterial);
frame.position.y = 0.2;
bikeGroup.add(frame);

// Kemudi
const handlebarWidth = 0.2;
const handlebarHeight = 0.02;
const handlebarDepth = 0.1;
const handlebarGeometry = new THREE.BoxGeometry(handlebarWidth, handlebarHeight, handlebarDepth);
const handlebarMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const handlebar = new THREE.Mesh(handlebarGeometry, handlebarMaterial);
handlebar.position.set(-0.35, 0.2, 0);
bikeGroup.add(handlebar);

bikeGroup.position.y = 0.5; // Sesuaikan posisi sepeda
personGroup.add(bikeGroup);

scene.add(personGroup);

function animate() {
    requestAnimationFrame(animate);

    // Lakukan animasi di sini, misalnya menggerakkan kaki atau tangan

    renderer.render(scene, camera);
}

animate();

camera.position.z = 5;
