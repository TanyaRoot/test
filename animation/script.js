window.onload = function() {
  text();
  doit();
}

function text() {

}


function doit() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');

    ctx.font = "16px serif";
    ctx.fillText("JS", 0, 36);

    ctx.font = "16px serif";
    ctx.fillText("10%", 370, 36);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,0,10);

    setTimeout(function() {
      let i = 0
      const action = setInterval(move, 5)
      function move() {
        console.log("i", i);
        if (i >= 400) clearInterval(action)
         ctx.fillRect(0,56, i++, 10);
      }
    }, 1000)


  }
