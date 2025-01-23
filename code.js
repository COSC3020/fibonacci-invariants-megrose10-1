function fib(n) {
    const fibArray = [];
    function recurFib(x) {
      //console.log(`${x}`);
      //console.log(fibArray.length);
        if(x<=0) {
            fibArray.push(0)
            return 0;
        }
        else if(x==1) {
            fibArray.push(0);
            fibArray.push(1);
            return 1;
        }
        else {
            //let nextNum = (recurFib(x - 1) + recurFib(x - 2));
            //let x2 = recurFib(x - 2);
            fibArray.push(recurFib(x-1));
            //let x2 = recurFib(x - 2);
            let idx1 = fibArray.length - 1;
           // console.log(fibArray[idx1]);
          //  console.log(fibArray[idx1 - 1]);
            //console.log(`${array.} + ${x2} = ${nextNum}`);
            //fibArray.push(nextNum);
            let nextNum = fibArray[idx1] + fibArray[idx1-1];
            return nextNum;
        }
    }
    recurFib(n);
    return fibArray;
}
