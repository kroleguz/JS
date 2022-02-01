function treeSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var arrayOrNumber = array[i];
        if ((typeof arrayOrNumber === 'number') && arrayOrNumber) {
            sum += arrayOrNumber;
        } else if (typeof arrayOrNumber === 'object' && arrayOrNumber && arrayOrNumber.length) {
            sum += treeSum(arrayOrNumber);
        }
    }
    return sum;
}
alert(treeSum([
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
])); 