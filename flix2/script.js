function adicionarFilme(){
    //link movie
    var filmeFavorito = document.getElementById("filme").value
     if(filmeFavorito.endsWith(".jpg")){
       listarFilmesNaTela(filmeFavorito)
  
       } else{
         console.error("Endereço de filme inválido")
       }
  
       // clean input
   document.getElementById("filme").value="";
  }
  function listarFilmesNaTela(filme){
        console.log(filme);  
        //take link "campoFilmeFavorito" convert img
         var elementoFilmeFavorito = "<img src=" + filme +">"
    
        //render 
        var elementoListaFilmes = document.getElementById("listaFilmes");
    
        //insert in elementoListaFilmes img
        elementoListaFilmes.innerHTML= elementoListaFilmes.innerHTML+  elementoFilmeFavorito
  
  }