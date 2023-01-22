const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari ke-3 angka diatas dan sesuaikan kebutuhan parameternya


// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 189

function getmax(no1,no2,no3){
    let hasil = 0;
    if(hasil < no1){
        hasil = no1
    }
    if(hasil < no2){
            hasil = no2
        }
    if(hasil < no3){
        hasil = no3
    }
console.log(`Nilai maksimum adalah ${hasil}`);
    return hasil
}
getmax(number1,number2,number3)