function levelTitle() {
    var level = parseInt(prompt('¿Que nivel eres?'));
    if (level > 19) {
      document.querySelector('.level-title').innerHTML = '¡Eres un nija!';
      document.querySelector('.character-image').src = 'http://www.jumpninja.co.uk/wp-content/uploads/2017/06/NINJA-JUMPING2.png';
    } else if (level <= 19 && level > 10) {
      document.querySelector('.level-title').innerHTML = '¡Eres un acróbata!';
      document.querySelector('.character-image').src = 'https://prod.media.larepublica.pe/720x405/larepublica/imagen/2017/10/02/noticia-acrobata-referencia.jpg';
    } else {
      document.querySelector('.level-title').innerHTML = '¡Eres un novato!';
      document.querySelector('.character-image').src = 'http://www.tn8.tv/media/2015/11/gimnasta-nino-.jpg';
    }
  }
  function fibonacci() {
    var size = parseInt(prompt('Entonces... ¿que tanto quieres escucharme cantar?'));
    var first = 0;
    var second = 1;
    var serie = [];
    for( var i = 0; i < size; i++) {
      serie.push(' ' + first);
      second = first + second;
      first = second - first;
    }
    document.querySelector('.fibo').innerHTML = serie;
  }