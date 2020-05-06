<script>
  export let color = "#2e52b7";
</script>

<style>
  .background {
    position: fixed;
    height: 100vh;
    width: 100vw;
    clip-path: polygon(100% 0, 100% 82%, 45% 100%, 0 100%, 0 0);
    z-index: -1;
  }
</style>

<div class="background" style={`background-color: ${color};`} />
