/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url('/')
    }
   
    // verifyFullPage(options){
    //     const checkResult = {
    //         // The formatted filename, this depends on the options `formatImageName`
    //         fileName: 'examplePage-chrome-headless-latest-1366x768.png',
    //         folders: {
    //             // The actual folder and the file name
    //             actual: './.tmp/actual/desktop_chrome/*.png',
    //             // The baseline folder and the file name
    //             baseline: './test/baseline//desktop_chrome/*.png',
    //             // This following folder is optional and only if there is a mismatch
    //             // The folder that holds the diffs and the file name
    //             diff: './.tmp/diff/desktop_chrome/*.png',
    //           },
    //           // The mismatch percentage
    //           misMatchPercentage: 2.34
    //       };
    // }
}
