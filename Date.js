// Write a function that converts entered date formatted M/D/YYYY to YYYYMMDD

function formatDate(userDate) {
    var dt = new Date(userDate)
    var y = dt
        .getFullYear()
        .toString();
    var m = (dt.getMonth() + 1).toString();
    var d = dt
        .getDate()
        .toString();

    if (m.length == 1) {
        m = '0' + m;
    }
    if (d.length == 1) {
        d = '0' + d;
    }
    return y + m + d;
}

console.log(formatDate("1/31/2014"));
//"12/31/2014" to "20141231"