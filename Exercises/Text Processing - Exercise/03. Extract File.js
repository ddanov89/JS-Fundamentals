function extractFile(path) {
    let fileInfo = path.split("\\").pop();
    let lastDotInd = fileInfo.lastIndexOf(".");
    let fileName = fileInfo.slice(0, lastDotInd);
    let fileExtension = fileInfo.slice(lastDotInd + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');