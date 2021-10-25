function snapCrackle(maxValue){
    var cont =1 ;
    for (let mult = 5;mult <= 20; mult+=5) {
      mult5 = mult;
      console.log(mult);
    }
        while (cont<=20) {
          var resto = cont%5;
          if (resto == 0){
            console.log ("SnapCrackle")
          }
            var resto = cont%2;
            if (resto == 0 ){
                console.log(cont);
           }else if (resto == 1){
              console.log("Snap");
            } else if(resto == 5){
              console.log("Crackle")
            }
            cont = cont + 1;
        }
        console.log("FIM");
    }