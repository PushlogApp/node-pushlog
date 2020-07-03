"use strict";

function init(userToken, logDisplayName, cleanSetup) {
    console.log(logDisplayName + "@Pushlog init started...");

    if (cleanSetup) {
        cleanSetup();
    } else {
        if (checkForLogExistence(logDisplayName)) {
            overwriteConsole(userToken, logDisplayName);
        }
    }
}

function checkForLogExistence(logDisplayName) {
    // check node persist for existing log token
}

function cleanSetup() {
    // delete note persist storage and generate new token
}

function pushLog(type) {
    // push entry to api (type match for info and error)
}

function overwriteConsole(userToken, logDisplayName) {
    // overwrite console.log, console.info, console.warn, console.warn to make api calls

    var nodeConsole = console;

    console = {};

    console.log = function(log) {
        nodeConsole.log(log);
    };

    console.info = function(log) {
        nodeConsole.log(log);
    };

    console.warn = function(log) {
        nodeConsole.log(log);
    };

    console.error = function(log) {
        nodeConsole.log(log);
    };

}

export const init = init;