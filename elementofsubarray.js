function findlast(arr) {
    let rarr = arr[arr.length-1].reverse()
    return rarr[0];
}

console.log(findlast([[],[],[0,2,5,6]]))