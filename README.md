<div class="container">
  <img class="wideImage" src="./public/images/readme/readme.png" alt="Wide Image">
</div>

<style>
  .container {
    width: 80%;
    margin: auto;
    overflow: hidden;
    height: 300px; /* Adjust the container height as needed */
    position: relative;
  }
  
  .wideImage {
    width: auto;
    height: auto;
    transition: transform 1s ease; /* Adjust the transition duration and timing function as needed */
  }

  .container:hover .wideImage {
    transform: translateY(-100%);
  }
</style>