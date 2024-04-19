import React, { useEffect } from 'react';
import * as THREE from 'three';

const imageURL = 'https://www.allbusiness.com/media-library/machine-learning.jpg?id=32093222&'; // URL de l'image

const ThreeDObject = () => {
  useEffect(() => {
    const scene = new THREE.Scene(); // La couleur de fond est transparente par défaut

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Spécifier alpha: true pour un canal alpha transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(1, 1);
    const texture = new THREE.TextureLoader().load(imageURL); // Charger l'image à partir de l'URL
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div id="canvas-container"></div>
  );
};

export default ThreeDObject;
