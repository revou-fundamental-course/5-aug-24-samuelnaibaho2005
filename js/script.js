function calculateBMI(){
    let BeratBadan = document.getElementById("BeratBadan").value;
    let Usia = document.getElementById("Usia").value;
    let TinggiBadan = document.getElementById("TinggiBadan").value;
    console.log(BeratBadan);
    console.log(Usia);
    console.log(TinggiBadan);

    // mengkonversi tinggi badan ke meter
    TinggiBadan = TinggiBadan / 100;

    //menghitung hasil
    let bmi = BeratBadan / (TinggiBadan * TinggiBadan);

    let HasilText1 = ``
    document.getElementById("hasilnumber").innerText = bmi.toFixed(1);

    if(bmi < 18.5){
        HasilText1 += "Maaf, anda kekurangan berat badan."
    } else if(bmi >= 18.5 || bmi <= 24.9){
        HasilText1 += "Waooww, badan kamu sangat ideal."
    } else if(bmi >= 25.0 || bmi <= 29.9){
        HasilText1 += "Eh, berat badan kamu kelebihan deh..."
    } else if(bmi >= 30.0) {
        HasilText1 += "waduhhh, kamu sudah sengat kegemukan atau obesitas."
    } else{
        HasilText1 += "Tidak valid!"
    }

    document.getElementById("hasiltext1").innerText = HasilText1;
    // console.log(bmi);

    // menentukan hasil diantara
    let bawahhasil = (bmi - 1).toFixed(0);
    let atashasil = (bmi + 1).toFixed(0);

    resultAntara = `Hasil BMI diantara ${bawahhasil} dan ${atashasil}`;
    document.getElementById("HasilAntara").innerText = resultAntara;

}

function resetform(){
    document.getElementById("BeratBadan").value = '';
    document.getElementById("Usia").value = '';
    document.getElementById("TinggiBadan").value = '';

    document.getElementById("hasiltext1").innerText = '-';
    document.getElementById("hasilnumber").innerText = '00.0';
    
    document.getElementById("HasilAntara").innerText = 'Hasil BMI diantara - dan -';
}