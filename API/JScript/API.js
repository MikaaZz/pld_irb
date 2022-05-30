let findAPITries = 0;

function findAPI(win) {

    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {

        findAPITries++;

        if (findAPITries > 7) {
            alert("Erro ao achar API");
            return null;
        }

        win = win.parent;
    }
    return win.API ;
}

function getAPI() {
    
    let theAPI = findAPI(window);

    if ((theAPI == null) && (window.opener != null) && (typeof (window.opener) != "undefined")) {
        
        theAPI = findAPI(window.opener)
    }

    if (theAPI == null) {
        alert("Não foi possivel achar o API Adapter, converse com o gerenciador da sua plataforma para resolver este problema!")
    }

    return theAPI;
}

let finishCalled = false;

let initialized = false;

function startLMS() {

    API = getAPI();
    
    if (API == null) {
        alert("Erro, não foi possivel estabelecer conexão com LMS");
        return;
    }

    let result = API.LMSInitialize("");

    if (result == "false") {
        falseResult();
    }

    initialized = true;
    return;
}

function finishLMS() {

    if (initialized == false || finishCalled == true) {
        return;
    }

    let result = API.LMSFinish("");

    if (result == "false") {
        falseResult();
    }

    finishCalled = true;
    return;
}

function getValueLMS(dataModel) {

    if (initialized == false || finishCalled == true) {
        return;
    }
    
    API = getAPI();

    let result = API.LMSGetValue(dataModel);

    if (result == "false") {
        falseResult();
    }

    return result;
}

function setValueLMS(dataModel, value) {

    if (initialized == false || finishCalled == true) {
        return;
    }

    API = getAPI();

    let result = API.LMSSetValue(dataModel, value);

    if (result == "false") {
        falseResult();
    }
    
    return result;
}

function commitValueLMS() {

    if (initialized == false || finishCalled == true) {
        return;
    }

    API = getAPI();

    let result = API.LMSCommit("");

    if (result == "false") {
        falseResult();
    }
    
    return result;
}

function falseResult() {
    let errorNumber = API.LMSGetLastError();
    
    if (errorNumber != "0") {

        let errorString = API.LMSGetErrorString(errorNumber);
        let diagnostic = API.LMSGetDiagnostic(errorNumber);

        let errorDescription = "Numero: " + errorNumber + "\nDescrição: " + errorString + "\ndiagnostic: " + diagnostic;

        alert("Algum problema ocorreu ao mandar seus dados para o LMS: \n\n" + errorDescription);
        return;
    }
}