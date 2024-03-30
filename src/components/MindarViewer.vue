<script setup>  
  import 'mind-ar/dist/mindar-image.prod.js'
  import 'aframe'
  import 'mind-ar/dist/mindar-image-aframe.prod.js'
  import { ref, defineExpose } from 'vue'

  const sceneRef = ref(null)
  defineExpose({ sceneRef })
</script>
<script>
export default {
  props: {
    imagen: {
      type: String,
      required: true
    },
    back: {
      type: String,
      required: true
    },
    asset_3d: {
      type: String,
      required: true
    },
    scale: {
      type: Number,
      required: true
    }
  }
}
</script>

<template>  
  <a-scene
    ref="sceneRef"
    :mindar-image="`imageTargetSrc: /Targets/${imagen}; autoStart: true; uiLoading: no; uiError: no; uiScanning: no;`"
    color-space="sRGB"
    embedded
    renderer="colorManagement: true, physicallyCorrectLights"
    vr-mode-ui="enabled: false"
    device-orientation-permission-ui="enabled: false"
  >
    <a-assets>
      <img
        id="card"
        :src="`/Backs/${back}`"
        crossorigin="anonymous"
      />
      <a-asset-item
        id="avatarModel"
        :src="`https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/${asset_3d}`"
        crossorigin
      ></a-asset-item>
    </a-assets>

    <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

    <a-entity mindar-image-target="targetIndex: 0">
      <a-plane
        src="#card"
        position="0 0 0"
        height="0.552"
        width="1"
        rotation="0 0 0"
      ></a-plane>
      <a-gltf-model
        rotation="0 0 0 "
        position="0 0 0.1"
        :scale="`${scale} ${scale} ${scale}`"
        src="#avatarModel"
        animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
      ></a-gltf-model>
    </a-entity>
  </a-scene>  
</template>

