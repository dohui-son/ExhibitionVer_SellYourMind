import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import img from '../material/texture/26.jpeg';
import l4 from '../material/letter4.png';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import '../stylesheet/detail.scss';
//import { VRButton } from './jsm/webxr/VRButton.js';
const Detail_4 = () => {
  let [letter, letterSet] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      letterSet(false);
    }, 4000);
    let timer2 = setTimeout(() => {
      window.location.href = 'sell_your_mind_research#/d28';
    }, 90000);
    let container,
      flag = 0;

    let camera, controls, scene, renderer;

    const worldWidth = 128,
      worldDepth = 128;
    const worldHalfWidth = worldWidth / 2;
    const worldHalfDepth = worldDepth / 2;
    const data = generateHeight(worldWidth, worldDepth);

    const clock = new THREE.Clock();

    init();
    animate();

    function init() {
      container = document.getElementById('container');
      document.body.style.cursor = 'none';
      document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      });

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        20000
      );
      camera.position.y = getY(worldHalfWidth, worldHalfDepth) * 100 + 100;

      scene = new THREE.Scene();
      const texture = new THREE.TextureLoader().load(img);

      scene.background = new THREE.TextureLoader().load(img);

      // sides

      const matrix = new THREE.Matrix4();

      const pxGeometry = new THREE.PlaneGeometry(100, 100);
      pxGeometry.attributes.uv.array[1] = 0.5;
      pxGeometry.attributes.uv.array[3] = 0.5;
      pxGeometry.rotateY(Math.PI / 2);
      pxGeometry.translate(50, 0, 0);

      const nxGeometry = new THREE.PlaneGeometry(100, 100);
      nxGeometry.attributes.uv.array[1] = 0.5;
      nxGeometry.attributes.uv.array[3] = 0.5;
      nxGeometry.rotateY(-Math.PI / 2);
      nxGeometry.translate(-50, 0, 0);

      const pyGeometry = new THREE.PlaneGeometry(100, 100);
      pyGeometry.attributes.uv.array[5] = 0.5;
      pyGeometry.attributes.uv.array[7] = 0.5;
      pyGeometry.rotateX(-Math.PI / 2);
      pyGeometry.translate(0, 50, 0);

      const pzGeometry = new THREE.PlaneGeometry(100, 100);
      pzGeometry.attributes.uv.array[1] = 0.5;
      pzGeometry.attributes.uv.array[3] = 0.5;
      pzGeometry.translate(0, 0, 50);

      const nzGeometry = new THREE.PlaneGeometry(100, 100);
      nzGeometry.attributes.uv.array[1] = 0.5;
      nzGeometry.attributes.uv.array[3] = 0.5;
      nzGeometry.rotateY(Math.PI);
      nzGeometry.translate(0, 0, -50);

      //

      const geometries = [];

      for (let z = 0; z < worldDepth; z++) {
        for (let x = 0; x < worldWidth; x++) {
          const h = getY(x, z);

          matrix.makeTranslation(
            x * 100 - worldHalfWidth * 100,
            h * 100,
            z * 100 - worldHalfDepth * 100
          );

          const px = getY(x + 1, z);
          const nx = getY(x - 1, z);
          const pz = getY(x, z + 1);
          const nz = getY(x, z - 1);

          geometries.push(pyGeometry.clone().applyMatrix4(matrix));

          if ((px !== h && px !== h + 1) || x === 0) {
            geometries.push(pxGeometry.clone().applyMatrix4(matrix));
          }

          if ((nx !== h && nx !== h + 1) || x === worldWidth - 1) {
            geometries.push(nxGeometry.clone().applyMatrix4(matrix));
          }

          if ((pz !== h && pz !== h + 1) || z === worldDepth - 1) {
            geometries.push(pzGeometry.clone().applyMatrix4(matrix));
          }

          if ((nz !== h && nz !== h + 1) || z === 0) {
            geometries.push(nzGeometry.clone().applyMatrix4(matrix));
          }
        }
      }

      const geometry = BufferGeometryUtils.mergeBufferGeometries(geometries);
      geometry.computeBoundingSphere();

      //const texture = new THREE.TextureLoader().load(img);
      //texture.magFilter = THREE.NearestFilter;

      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({ map: texture, side: THREE.DoubleSide })
      );
      scene.add(mesh);

      const ambientLight = new THREE.AmbientLight(0xcccccc);
      scene.add(ambientLight);

      // const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      // directionalLight.position.set(1, 1, 0.5).normalize();
      // scene.add(directionalLight);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      controls = new FirstPersonControls(camera, renderer.domElement);

      controls.movementSpeed = 1000;
      controls.lookSpeed = 0.125;
      controls.lookVertical = true;

      // const blocker = document.getElementById('blocker');
      // const instructions = document.getElementById('instructions');
      // instructions.style.display = 'none';
      // blocker.style.display = 'none';
      // const onKeyPress = function (event) {
      //   if (event.code === 'KeyG' && !flag) {
      //     blocker.style.display = 'block';
      //     instructions.style.display = '';
      //     flag = 1;
      //   } else if (event.code === 'KeyG' && flag) {
      //     blocker.style.display = 'none';
      //     instructions.style.display = 'none';
      //     flag = 0;
      //   } else if (event.code === 'KeyF')
      //     window.location.href = 'sell_your_mind_research#/d28';
      // };
      // const onKeyDown = function (event) {
      //   if (event.code === 'KeyF')
      //     window.location.href = 'sell_your_mind_research#/d28';
      // };
      // document.addEventListener('keydown', onKeyDown);
      // document.addEventListener('keypress', onKeyPress);
      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

      controls.handleResize();
    }

    function generateHeight(width, height) {
      const data = [],
        perlin = new ImprovedNoise(),
        size = width * height,
        z = Math.random() * 100;

      let quality = 2;

      for (let j = 0; j < 4; j++) {
        if (j === 0) for (let i = 0; i < size; i++) data[i] = 0;

        for (let i = 0; i < size; i++) {
          const x = i % width,
            y = (i / width) | 0;
          data[i] += perlin.noise(x / quality, y / quality, z) * quality;
        }

        quality *= 4;
      }

      return data;
    }

    function getY(x, z) {
      return (data[x + z * worldWidth] * 0.2) | 0;
    }

    //

    function animate() {
      requestAnimationFrame(animate);

      render();
    }

    function render() {
      controls.update(clock.getDelta());
      renderer.render(scene, camera);
    }
  }, []);
  return (
    <div className="detail-body" id="container">
      {letter === true ? (
        <div className="blocker" id="blocker">
          <div className="instructions" id="instructions">
            <img src={l4} alt="letter" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Detail_4;
