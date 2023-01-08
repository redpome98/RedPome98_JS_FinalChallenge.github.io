const backgroundFile=["background2.jpg","background4.jpg","background5.jpg"];

const RandomImg=backgroundFile[Math.floor(Math.random()*backgroundFile.length)];

const RandomBackground=document.createElement("img");


RandomBackground.src=`backgrounds/${RandomImg}`;

document.body.appendChild(RandomBackground);