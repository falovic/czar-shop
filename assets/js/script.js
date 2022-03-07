// Slider


// Counter
window.onload = function () {

    let dd = 68
    let hh = 03
    let mm = 35;
    let ss = 57;

    setInterval(function () {

        function pad(n) {
            return (n < 10 ? "0" + n : n);
        }

        document.getElementById("dd").innerHTML = pad(dd);
        document.getElementById("hh").innerHTML = pad(hh);
        document.getElementById("mm").innerHTML = pad(mm);
        document.getElementById("ss").innerHTML = pad(ss);

        ss--;
        if (ss == 00) {
            mm--;
            ss = 60;
            if (mm == 00) {
                hh--;
                mm = 60;
                if (hh == 00) {
                    dd--;
                    hh = 24;
                }
            }
        }
    }, 1000);
}