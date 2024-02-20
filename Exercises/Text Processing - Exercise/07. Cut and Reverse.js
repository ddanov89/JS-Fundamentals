function cutAndReverse(str) {
    let middleIdx = str.length / 2;
    let leftHalf = str.slice(0, middleIdx).split("").reverse().join("");
    let rightHalf = str.slice(middleIdx).split("").reverse().join("");; // (middleIdx, str.length)
    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');