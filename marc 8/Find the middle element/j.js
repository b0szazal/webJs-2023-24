function gimme (triplet) {
    if (triplet[0] < triplet[1] && triplet[0] > triplet[2] ||
        triplet[0] > triplet[1] && triplet[0] < triplet[2]) {
      return 0;
    } else if (triplet[1] < triplet[0] && triplet[1] > triplet[2] ||
               triplet[1] > triplet[0] && triplet[1] < triplet[2]) {
      return 1;
    } 
      return 2;
  }