function months_passed_since_year_0() {
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    return y * 12 + m;
}
console.log(months_passed_since_year_0());