$(function () {
    // 数组排序
    var arr = [23,34,3,4,23,44,333,444];
    arr.sort(function (a,b) {
        return a-b;
    });
    console.log(arr);

    // 冒泡排序
    var arr = [5,2,5,7,9,4,2,6,9,0,5];
    var temp;
    for(var i=0;i<arr.length;i++){
        for(var j=1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    // 二维数组冒泡排序
    var arr=[["北京",80],["上海",50],["福州",10],["广州",50],["成都",70],["西安",100]];
    var temp;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-1;j++){
            if(arr[j][1]>arr[j+1][1]){
                temp = arr[j][1];
                arr[j][1] = arr[j+1][1];
                arr[j+1][1] = temp;
            }
        }
    }
    console.log(arr);

    // 数组去重
    // ES6方法
    var arr = [1,1,2,2,3,3,3,4,5,7,6];
    arr = new Set(arr);
    console.log(arr);
    var hash = [];
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                ++i;
            }
        }
        hash.push(arr[i]);
    }
    console.log(hash);
    // 数组下标去重
    for(var i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) === i){
            hash.push(arr[i]);
        }
    }
    console.log(hash);
});

