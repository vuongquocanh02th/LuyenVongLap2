let chieurong=parseFloat(prompt("Nhap chieu rong"));
let chieudai=parseFloat(prompt("Nhap chieu dai"));
for(let i=0; i<chieurong; i++){
    let row='';
    for(let j=0; j<chieudai; j++){
        if(i===0||i===chieurong-1||j===0||j===chieudai-1){
            row+='* ';
        }else {
            row+='  ';
        }
    }
    document.write('<pre>'+row+'</pre>');
}
