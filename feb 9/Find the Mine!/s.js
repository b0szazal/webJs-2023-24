function mineLocation(field){
    for(let i=0; i<field.length; i++){
      for(let j=0; j<field[0].length; j++){
        if(field[i][j]==1){
          return [i, j];
        }
      }
    }
  }