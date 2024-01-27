function loadingBar(num) {
    let result = num / 10;
    let initialLoadingBar = "[..........]";
    let loadingBar = '['.concat( '%'.repeat(result));
    let strToReplace = '['.concat( '.'.repeat(result));
    if (num < 100){
        console.log(`${num}% ${initialLoadingBar.replace(strToReplace, loadingBar)}`);
        console.log('Still loading...');
    }else {
        console.log("100% Complete!");
        console.log(`${initialLoadingBar.replace(strToReplace, loadingBar)}`);
    }
}
loadingBar(30);
loadingBar(100);
