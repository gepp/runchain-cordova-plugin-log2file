var exec = cordova.require('cordova/exec');

module.exports = {
    setLogfilePath: function (path, successCb, failureCb) {
        exec(successCb,failureCb,'log2file','setLogfilePath',[path]);
    },
    getLogfilePath: function (successCb, failureCb) {
        exec(successCb, failureCb,'log2file','getLogfilePath',[]);
    },
    getArchivedLogfilePaths: function (successCb, failureCb) {
        exec(successCb, failureCb,'log2file','getArchivedLogfilePaths',[]);
    },
    debug: function (line, successCb, failureCb) {
        exec(successCb,failureCb,'log2file','debug',[line]);
    },
    info: function (line, successCb, failureCb) {
        exec(successCb,failureCb,'log2file','info',[line]);
    },
    warn: function (line, successCb, failureCb) {
        exec(successCb,failureCb,'log2file','warn',[line]);
    },
    error: function (line, successCb, failureCb) {
        exec(successCb,failureCb,'log2file','error',[line]);
    }
};