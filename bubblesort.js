var arr = [3,2,4,1,5];
var arr_len = arr.length;

//Find largest number in each iteration
for (i=(a_len-1); i>=0; i--) {
  for (var j=1; j<=i; j++) {
      if (a[j-1]>a[j]) {
        var temp = a[j-1];
        a[j-1] = a[j];
        a[j] = temp;
      }
   }
}

console.log(a);
//(1,2,3,4,5)
