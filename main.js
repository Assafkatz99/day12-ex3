array = ["b",6,"a","q",7,2, -1, 10]

function sortTheArray(arr){
    nums = []
    notNums = []
    for (i in arr){
        if (typeof(arr[i]) === "number"){
            nums.push(arr[i])
        }
        else{
            notNums.push(arr[i])
        }
    } 
    return nums.sort((a, b) => a - b).concat(notNums.sort())
}
    

console.log(sortTheArray(array))