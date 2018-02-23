function pyramid() {
    var floors = parseInt(prompt('¿De cuantos pisos será tu pirámide?'));
    var space = '';
    var bricks = '';
    for(var i = 0; i < floors; i++) {
      space = ' '.repeat(floors - i);
      bricks = bricks + ':v';
      console.log(space + bricks + bricks);
      var div = document.querySelector('.pyramid-div');
      var pre = document.createElement('pre');
      div.appendChild(pre);
      pre.innerHTML = space + bricks + bricks;
    }
  }
  