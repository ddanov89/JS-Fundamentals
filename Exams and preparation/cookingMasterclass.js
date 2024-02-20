function cookingMasterclass(arr) {

    let budget = Number(arr[0]);
    let studentCount = Number(arr[1]);
    let flourPrice = Number(arr[2]);
    let eggPrice = Number(arr[3]);
    let apronPrice = Number(arr[4]);
    let freePackage = Math.floor(studentCount / 5);
    
    let totalPackagePrice = apronPrice * (Math.ceil(studentCount + studentCount * 0.20)) + eggPrice * 10 * (studentCount) + flourPrice * (studentCount - freePackage);

    if ( budget >= totalPackagePrice) {
        console.log(`Items purchased for ${totalPackagePrice.toFixed(2)}$.`);
    }else {
        console.log(`${(totalPackagePrice - budget).toFixed(2)}$ more needed.`);
    }
}
// cookingMasterclass([50, 2 ,1.0, 0.10, 10.0]);
cookingMasterclass([100, 25, 4.0, 1.0, 6.0]);