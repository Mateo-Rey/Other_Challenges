let arr = [[1,4,5],[1,3,4],[2,6]]

function merge(l1,l2) {
    let list = []
    list.push(l1);
    list.push(l2);
    let join = list.join('');
    let repjoin = join.replace(/,/g, '');
    let arraym = repjoin.split('')
    console.log(arraym)
    arraym.sort((a,b) => {return a-b})
    return arraym;
}

merge(arr)