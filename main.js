// Main file for running WebChucK

// Main Button
const mainButton = document.getElementById('mainButton');
const stopButton = document.getElementById('stopButton');

/**
 * Load into this array all the files that you want WebChucK to read
 * serverFilename: the path to file
 * virtualFilename: the name that WebChucK will use to read the file
 */
const serverFilesToPreload = [
    /*
    {
        serverFilename: "./myfile.txt", virtualFilename: "myfile.txt"
    },
    */
];
// This loads files from the serverFilesToPreload list
let preloadedFilesReady = preloadFilenames(serverFilesToPreload);

// JavaScript to read in your Chuck file
code = fetch("./untitled.ck")
    .then(response => response.text())
    .then(text => { code = text; });

// Start WebChucK's virtual machine
async function prep()
{
    await startChuck();
    await theChuckReady;
    await code;
    theChuck.removeLastCode();
}

// MAIN BUTTON
mainButton.addEventListener('click', async () =>
{
    // Start VM and play code
    await prep();
    theChuck.runCode(code);
    
    // Start syncing globals
    sync();
});

// STOP BUTTON
stopButton.addEventListener('click', async () =>
{
    // Stop code
    theChuck.removeLastCode();

    // Stop syncing globals
    stopSync();

});
