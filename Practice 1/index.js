//Alış-veriş sifarişinin pulsuz göndərmə üçün uyğun olub olmadığını müəyyən edən funksiya yaradın. Satın alınan əşyaların ümumi dəyəri $50.00-dan çox olarsa, sifariş pulsuz çatdırılma üçün uyğundur.
function free(a,b,c) {
    if (a+b+c > 50 || a+b>50 || a>50 ) {
        return true;
      } else {
        return false;
      }
    }
    const FreeShipping = free(20,40);
    console.log(`Pulsuz Catdirilma ${FreeShipping}`);