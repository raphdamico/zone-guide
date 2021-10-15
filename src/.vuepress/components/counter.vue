<template>
  <p class="demo">
    If your scenes are 
    <input class='zone-input' type="number" v-model=sceneMinutes> 
    mins long, and you do <input class='zone-input' type="number" step="0.5" v-model=scenesPerLocation> per location, the game will last about 
    <strong>{{ gameLength.string }}</strong>
  </p>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>',
        sceneMinutes: 10,
        scenesPerLocation: 1.5,
      }
    },
    computed: {
      gameLength() {
        let introTime = 30; // Start of game to zone observation facility
        let endgameTime = 10; // From arrival at Center to end
        let normalLocations = 6;
        let specialLocations = 5; // Only one scene
        let scenesWithoutTutorial = specialLocations + normalLocations * this.scenesPerLocation;
        
        let extraTutorialScenes = 2;
        let scenes = scenesWithoutTutorial + extraTutorialScenes;
        
        let totalDuration = scenes * this.sceneMinutes + introTime + endgameTime;
        
        let time = {
          total: totalDuration,
          hours: Math.floor(totalDuration/60),
          mins: totalDuration%60
        }

        time.string = (time < 60) ? `${time.mins}m` : `${time.hours}h ${time.mins}m`

        return time 
      }
    }
  }
</script>

<style>
  .zone-input {
    width: 46px;
    padding: 4px 6px;
    font-size: 16px;
  }
</style>