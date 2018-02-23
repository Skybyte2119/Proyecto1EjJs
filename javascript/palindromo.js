var fraseUsuario = prompt("Escribe una frase");
function frasePalindromo(fraseUsuario){
  fraseUsuario=fraseUsuario.toLowerCase().replace(/\s/g,"");   
  fraserReversa=fraseUsuario.split("").reverse().toString(); 
  for (var i = 0; i < ((fraserReversa.length)-1); i++) {
    fraserReversa=fraserReversa.replace(",","");
  };
  if(fraseUsuario==fraserReversa){
    resultado="es un Palindromo";
  }
  else{
    resultado="no es un Palindromo";
  }
  document.write("Tu frase "+resultado);
 
}
frasePalindromo(fraseUsuario);