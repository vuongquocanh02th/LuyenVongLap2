let n=parseInt(prompt("Nhap 1 so duong"));
let result=1;
if(n>=0){
    for(let i=2; i<=n; i++){
        result *=i;
    }
    document.write("Giai thua cua "+n+" la "+result);
}else {
    alert("n phai > 0, vui long nhap lai");
}
