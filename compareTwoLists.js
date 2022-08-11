function compare(l1, l2) {
    const uniqueValues = new Set([...l1, ...l2]);
    let res = []
    uniqueValues.forEach((e) => {
        if (!l2.includes(e)) {
            res.push(e)
        }
    })
    return res;
}

console.log(compare([1,6,2,3,5],[2,3,4,6]))