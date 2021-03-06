import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import img from '../material/texture/6.jpg';
import l15 from '../material/letter15.png';
import '../stylesheet/detail.scss';

const Detail_15 = () => {
  let [letter, letterSet] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      letterSet(false);
    }, 4000);
    let timer2 = setTimeout(() => {
      window.location.href = 'sell_your_mind_research#/d20';
    }, 90000);

    let camera,
      scene,
      renderer,
      sphere,
      clock,
      flag = 0;

    init();
    animate();

    function init() {
      const container = document.getElementById('container');

      clock = new THREE.Clock();

      scene = new THREE.Scene();
      scene.background = new THREE.TextureLoader().load(img);

      const light = new THREE.AmbientLight(0xffffff, 1);
      scene.add(light);

      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      scene.add(camera);

      // Create the panoramic sphere geometery
      const panoSphereGeo = new THREE.SphereGeometry(6, 256, 256);

      // Create the panoramic sphere material
      const panoSphereMat = new THREE.MeshStandardMaterial({
        side: THREE.BackSide,
        displacementScale: -4.0,
      });

      // Create the panoramic sphere mesh
      sphere = new THREE.Mesh(panoSphereGeo, panoSphereMat);

      // Load and assign the texture and depth map
      const manager = new THREE.LoadingManager();
      const loader = new THREE.TextureLoader(manager);

      loader.load(img, function (texture) {
        texture.minFilter = THREE.NearestFilter;
        texture.generateMipmaps = false;
        sphere.material.map = texture;
      });

      loader.load('./textures/kandao3_depthmap.jpg', function (depth) {
        depth.minFilter = THREE.NearestFilter;
        depth.generateMipmaps = false;
        sphere.material.displacementMap = depth;
      });

      // On load complete add the panoramic sphere to the scene
      manager.onLoad = function () {
        scene.add(sphere);
      };

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.xr.enabled = true;
      renderer.xr.setReferenceSpaceType('local');
      container.appendChild(renderer.domElement);

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
      //     window.location.href = 'sell_your_mind_research#/d20';
      // };
      // const onKeyDown = function (event) {
      //   if (event.code === 'KeyF')
      //     window.location.href = 'sell_your_mind_research#/d20';
      // };
      // document.addEventListener('keydown', onKeyDown);
      // document.addEventListener('keypress', onKeyPress);

      window.addEventListener('resize', onWindowResize);
      document.body.style.cursor = 'none';
      document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      });
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      renderer.setAnimationLoop(render);
    }

    function render() {
      // If we are not presenting move the camera a little so the effect is visible
      if (renderer.xr.isPresenting === false) {
        const time = clock.getElapsedTime() * 25;

        sphere.rotation.y += 0.01;
        sphere.position.x = Math.sin(time) * 0.002; //0.2
        sphere.position.z = Math.cos(time) * 0.002; //0.2
      }

      renderer.render(scene, camera);
    }
  }, []);
  return (
    <div className="detail-body" id="container">
      {letter === true ? (
        <div className="blocker" id="blocker">
          <div className="instructions" id="instructions">
            <img src={l15} alt="letter" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Detail_15;
