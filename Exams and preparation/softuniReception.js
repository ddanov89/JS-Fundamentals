function softUniReception(arr) {

    let firstEmployeeCapacity = Number(arr[0]);
    let secondEmployeeCapacity = Number(arr[1]);
    let thirdEmployeeCapacity = Number(arr[2]);
    let studentCount = Number(arr[3]);
    let totalCapacity = firstEmployeeCapacity + secondEmployeeCapacity + thirdEmployeeCapacity;
    let neededHours = 0;

    while (studentCount > 0) {
        studentCount -= totalCapacity;
        neededHours++;
     
        if (neededHours % 4 == 0) {
          neededHours++;
        }
      }

    console.log(`Time needed: ${neededHours}h.`);
}
softUniReception(["5", "6", "4", "20"]);
softUniReception(['1','2','3','45']);

// function softUniReception(input = []) {
//     let emp1Eff = +input.shift();
//     let emp2Eff = +input.shift();
//     let emp3Eff = +input.shift();
//     let people = +input.shift();
//     let neededHours = 0;
//     let answerPerHour = emp1Eff + emp2Eff + emp3Eff;
   
//     while (people > 0) {
//       people -= answerPerHour;
//       neededHours++;
   
//       if (neededHours % 4 === 0) {
//         neededHours++;
//       }
//     }
   
//     console.log(`Time needed: ${neededHours}h.`);
//   }
// softUniReception(['3','2','5','40']);