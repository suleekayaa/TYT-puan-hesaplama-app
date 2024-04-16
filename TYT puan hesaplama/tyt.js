let matematikDogru , matematikYanlis=0;
let turkceDogru , turkceYanlis=0;
let sosyalDogru , sosyalYanlis=0;
let fenDogru , fenYanlis=0;
let puan=0;
let okulPuani=0;

const yeniSatir= "\r\n";
let metin = "TYT PUAN HESAPLAMA UYGULAMASINA HOŞGELDİNİZ!"+yeniSatir
+"1-Puan Hesapla"+yeniSatir
+"2-Çıkış Yap";

let secim = prompt(metin);

switch(secim){

case"1":
okulPuani= Number(prompt("okul puanınızı giriniz"));
turkceDogru=Number(prompt("türkçe doğru sayısını giriniz"));
turkceYanlis=Number(prompt("türkçe yanlış sayısını giriniz"));

matematikDogru=Number(prompt("matematik doğru sayısını giriniz"));
matematikYanlis=Number(prompt("matematik yanlış sayısını giriniz"));

fenDogru=Number(prompt("fen doğru sayınızı giriniz"));
fenYanlis=Number(prompt("fen yanlış sayınızı giriniz"));

sosyalDogru=Number(prompt("sosyal doğru sayısını giriniz"));
sosyalYanlis=Number(prompt("sosyal doğru sayısını giriniz"));


let dogruSayisi= turkceDogru+matematikDogru+fenDogru+sosyalDogru;
let yanlisSayisi= turkceYanlis+matematikYanlis+fenYanlis+sosyalYanlis;
let kalanDogruSayisi= dogruSayisi - (yanlisSayisi/4);
puan = (kalanDogruSayisi*4) + 100 + okulPuani;
alert("TYT Puanınız: "+puan);
 break;

 case "2" :
    alert("sistemden çıkış yaptınız.");
    break;

    default :
        alert("lütfen geçerli aralıkta değer giriniz.");
        break;
    }