sortme = function( names ){
    return names.sort(function(a,b){return a.localeCompare(b, 'en', { sensitivity: 'base' })});
  }
  