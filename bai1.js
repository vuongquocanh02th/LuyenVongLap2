function inDayFib(n){
    let a=0; //So Fib dau tien
    let b=1; //So Fib thu hai
    let result=[];
    for(let i=0;i<n;i++){
        result.push(a); //Add so fib hien tai vao mang
        let next=a+b; //Tinh so fib tiep theo
        a=b; //Cap nhat so truoc
        b=next; //Cap nhat so hien tai
    }
    return result;

}
let n = parseInt(prompt("Nhập số lượng số Fibonacci bạn muốn in ra:"));
document.write("Day fib: "+inDayFib(n));