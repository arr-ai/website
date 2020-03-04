var aggrLog = '';
(function () {
    var oldLog = console.log;
    console.log = function (message) {
        aggrLog += Array.prototype.join.call(arguments, ' ') + '\n';
        oldLog.apply(console, arguments);
    };
})();
if (!WebAssembly.instantiateStreaming) { // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

const go = new Go();
let mod, inst;


WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
    mod = result.module;
    inst = result.instance;
}).catch((err) => {
    console.error(err);
});

async function run(input, output) {
    aggrLog = ''
    go.argv = ['eval'].concat(["eval", document.getElementById(input).value]);
    await go.run(inst);
    document.getElementById(output).innerHTML = aggrLog
    inst = await WebAssembly.instantiate(mod, go.importObject); // reset instance
}