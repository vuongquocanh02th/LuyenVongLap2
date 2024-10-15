let sotienbandau=parseFloat(prompt("Nhap so tien ban dau"));
let sothangchovay=parseInt(prompt("Nhap so thang cho vay"));
let laisuathangthang=parseFloat(prompt("Nhap lai suat hang thang(%)"))/100;
//Luu tru tong so tien
let tongtien=sotienbandau;
//tinh lai
for(let i=0; i<sothangchovay; i++){
    tongtien+=tongtien*laisuathangthang;
}
//tinh lai suat kiem duoc
let laisuatkiemduoc=tongtien-sotienbandau;
//in ket qua
document.write("So tien sau "+sothangchovay+" thang: "+tongtien.toFixed(2)+" VND <br>");
document.write("Lai suat kiem duoc "+laisuatkiemduoc.toFixed(2)+ " VND");