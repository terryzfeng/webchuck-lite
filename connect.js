// Some helpful functions to get you started talking between JS and WebChucK
// Feel free to modify for your own purposes

//-----------------------------------------------------
// SYNCING WEBCHUCK GLOBALS TO JAVASCRIPT
// ----------------------------------------------------
// Note: There are also other ways to do this, but this 
// should help you get started if you want to sync globals

// Save this interval ID
let syncID;
let getValue;

/**
 * This will sync global variables with ChucK
 * This is the same as Chunity Documentation
 * https://chuck.stanford.edu/chunity/documentation/
 */
function syncGlobals()
{
    // To get a global variable from ChucK
    theChuck.getInt("MY_INT")
        .then((value) => {
            getValue = value; // Save the value
        });

    // To set a global variable to ChucK
    theChuck.setFloat("MY_FLOAT", Math.random());
}

/**
 * Call getGlobals every 1000ms
 * Syncs a ChucK global to JavaScript
 * https://developer.mozilla.org/en-US/docs/Web/API/setInterval
 */
function sync()
{
    syncID = setInterval(syncGlobals, 1000);
}

/**
 * Stop syncing ChucK globals to JavaScript
 * Stops the interval set by sync() 
 * https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
 */
function stopSync()
{
    clearInterval(syncID);
}
