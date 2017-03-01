/*
function maxSum(arr) {
    var max = arr[0];
    var newMax = 0;
    for (x = 0; x < arr.length; x++){
        for (j = x; j < arr.length; j++) {
            if (arr[j] > max) {
                max += arr[j];
                if (max > arr[x]) {
                    newMax = arr[x] + arr[j];
                }

            }
        }
    }

    return newMax;
}

console.log(maxSum([8, 5, 17, 100, -60, 15, 48])); */
/*
function spinWords(str){
    var split = str.split(" ")
    for(var i=0;i<split.length;i++){
        if (split[i].length > 5){
            split[i].reverse(split[i])
        }
    }
    return split.join(" ");
}

console.log(spinWords("hey fellow warriors")); */

/*
var obj = {
    name:"scott",
    age:29
};
function sayName(){
    console.log(this.name)
}
sayname.call(obj);*/