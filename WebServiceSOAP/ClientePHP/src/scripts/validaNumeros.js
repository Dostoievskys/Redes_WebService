function validaNumericos(event) {
   if((event.charCode ==45) || 
      (event.charCode >= 48 && event.charCode <= 57) ||
      (event.charCode == 105) ||
      (event.charCode == 107)){
      return true;
   }
      return false;
}

/*

(event.charCode >= 48 && event.charCode <= 57) && 

&& (event.charCode == 107)
       && (event.charCode == 75) && (event.charCode == 45)*/