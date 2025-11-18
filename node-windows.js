// npm install node-windows -g
// npm link node-windows

var Service = require('node-windows').Service;
var fs = require('fs');

const processType = process.argv[2];

function startProcess(processType) {
    switch (processType) {
        case 'install': return svc.install();
        case 'uninstall': return svc.uninstall();
    }
}

// Create a new service object
var svc = new Service({
    name: "docusaurusserve",
    description: 'A Node.js service to run Docusaurus serve.',
    script: "D:/Repos/Docusaurus Test/my-website/node_modules/@docusaurus/core/bin/docusaurus.mjs",
    scriptOptions: "serve --port 5468",
    workingDirectory: "D:/Repos/Docusaurus Test/my-website"
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
    svc.start();
    console.log('Process complete.');
    console.log('The Service exists: ', svc.exists);
});

svc.on('alreadyinstalled', function () {
    console.log('The service: ' + svc.name + ' is already installed.');
});

svc.on('alreadyuninstalled', function () {
    console.log('The service: ' + svc.name + ' is already uninstalled.');
});

svc.on('start', function () {
    console.log(svc.name + ' started!\nVisit http://localhost:5468 to see it in action.');
});

svc.on('uninstall', function () {
    console.log('Uninstall of ' + svc.name + ' complete.');
    console.log('The service exists: ', svc.exists);
});

startProcess(processType);