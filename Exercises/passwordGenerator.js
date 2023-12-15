function passwordGenerator(arr) {
    let [str1, str2, replacementStr] = arr;
    let concatenatedStr = str1 + str2;
    let vowels = ["a", "e", "i", "o", "u"];
    let index = 0;
    for (let char of concatenatedStr) {
        if (vowels.includes(char)) {
            concatenatedStr = concatenatedStr.replace(char, replacementStr[index].toUpperCase());
            index++;
            if (index == replacementStr.length) {
                index = 0;
            }
        }
    }
    let password = concatenatedStr.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
// passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
// passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);