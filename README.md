<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Savis Market</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛍️</text></svg>">
  <style>
    body{
      background-color: rgb(9, 58, 105);
      display: flex; 
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .container {
      width: 45%;
      margin: auto;
      overflow: hidden;
      height: 85svh; 
      border-radius: 10px;
      margin-top: 44px;
    }
    .containerTablet {
      width: 33%;
      margin: auto;
      overflow: hidden;
      height: 85svh; 
      border-radius: 10px;
      margin-top: 40px;
    }
    .containermobile {
      width: 23%;
      margin: auto;
      overflow: hidden;
      height: 85svh; 
      border-radius: 10px;
      margin-top: 40px;
    }
    .verticalImage1 , .verticalImage2 , .verticalImage3 {
      width: 100%;
      height: auto;
      transition: transform 5s linear; 
    }
     
    .verticalImage1:hover {
      animation: scrollImage 8s linear infinite; 
    }
    .verticalImage2:hover {
      animation: scrollImage 6s linear infinite; 
    }
    .verticalImage3:hover {
      animation: scrollImage 4s linear infinite; 
    }
    @keyframes scrollImage {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(calc(-100% + 300px)); /* Adjust 300px to match container height */
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <img class="verticalImage1" src="./public/images/readme/readme.png" alt="Wide Image">
  </div>
  <div class="containerTablet">
    <img class="verticalImage2" src="./public/images/readme/readme.png" alt="Wide Image">
  </div>
  <div class="containermobile">
    <img class="verticalImage3" src="./public/images/readme/readme.png" alt="Wide Image">
  </div>
</body>
</html>
