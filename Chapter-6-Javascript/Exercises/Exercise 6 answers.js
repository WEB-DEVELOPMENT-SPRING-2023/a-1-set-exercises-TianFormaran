function PetrolCalculator(){
    var litre = document.petrol.litre.value

    if (litre > 1.72) {
        a = Number(document.petrol.litre.value);
        b = Number(document.petrol.numlitre.value);
        c = a * b;
        document.getElementById("total").innerHTML = c.toFixed(2);

    } else if (litre == 1.72){
        a = 1.72;
        b = Number(document.petrol.numlitre.value);
        c = a * b;
        document.getElementById("total").innerHTML = c.toFixed(2);

    } else if (litre < 1.72){
        document.getElementById("total").innerHTML = "only input litre amount over 1.72";
    }
}