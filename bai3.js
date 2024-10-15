//goc vuong phia tren ben trai
let h1=parseFloat(prompt("nhap chieu cao tam giac 1"));
for(let i=h1; i>=1; i--){
    let row='';
    for(let j=1;j<=i;j++){
        row+='* ';
    }
    document.write(row+'<br>');
}

document.write("<br>");

//goc vuong phia duoi ben trai
let h2=parseFloat(prompt("Nhap chieu cao tam giac 2"));
for(let i=1; i<=h2;i++){
    let row='';
    for(let j=1;j<=i;j++){
        row+='* ';
    }
    document.write(row+'<br>');
}
document.write("<br>");

//goc vuong phia duoi ben phai
let h3=parseFloat(prompt("Nhap chieu cao tam giac 3"));

for (let i = 0; i < h3; i++) {
    let row = '';

    // Thêm khoảng trắng cho mỗi hàng
    for (let j = 0; j < h3 - i - 1; j++) {
        row += '  '; // Thêm khoảng trắng
    }

    // Thêm dấu sao
    for (let j = 0; j <= i; j++) {
        row += '* ';
    }
    document.write('<pre>'+row+'</pre>');
}
document.write("<br>");

//goc vuong phia tren ben phai
let h4=parseFloat(prompt("Nhap chieu cao cua tam giac 4"));
for (let i = 0; i < h4; i++) {
    let row = '';

    // Thêm khoảng trắng cho mỗi hàng
    for (let j = 0; j <  i; j++) {
        row += '  '; // Thêm khoảng trắng
    }

    // Thêm dấu sao
    for (let j = 0; j < h4 - i; j++) {
        row += '* ';
    }
    document.write('<pre>'+row+'</pre>');
}