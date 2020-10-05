module.exports = function reverse(n) {
    let arr = (Array.from(Math.abs(n).toString())).reverse();
    return arr.join('') * 1;
}