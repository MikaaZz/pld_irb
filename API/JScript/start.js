let pageCounter = new Array(12);

pageCounter[0] = "../Pages/introduction.html";
pageCounter[1] = "../Pages/step01.html";
pageCounter[2] = "../Pages/step02.html";
pageCounter[3] = "../Pages/step03.html";
pageCounter[4] = "../Pages/step04.html";
pageCounter[5] = "../Pages/step05.html";
pageCounter[6] = "../Pages/step06.html";
pageCounter[7] = "../Pages/step07.html";
pageCounter[8] = "../Pages/step08.html";
pageCounter[9] = "../Pages/step09.html";
pageCounter[10] = "../Pages/step10.html";
pageCounter[11] = "../Pages/finish.html";

let currentPage = null;

let arrivedAtTheEnd = false;
    
let lastPage = 0;

function startCourse() {
    
    startLMS();

    let gettingClassState = getValueLMS("cmi.core.lesson_status");

    if (gettingClassState == "not attempted") {
        gettingClassState = setValueLMS("cmi.core.lesson_status", "incomplete");
    }

    let markPage = getValueLMS("cmi.core.lesson_location");

    if (markPage == "") {
        currentPage = 0;
        setValueLMS("cmi.core.lesson_location", currentPage)
        goPage(currentPage);
    }

    else {
        currentPage = markPage;
        goPage(currentPage);
    }
}