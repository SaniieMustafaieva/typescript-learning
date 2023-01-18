// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Saniie";

const userData =
  '{"isBirthdayData":true, "ageData":40, "userNameData": "John"}';

const userObj: {
  isBirthdayData: true;
  ageData: 40;
  userNameData: "John";
} = JSON.parse(userData);

function logBRtMsg(isBirthday: boolean, age: number, userName: string): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return "Error";
  }
}

// const logBRtMsg = (
//   isBirthday: boolean,
//   age: number,
//   userName: string
// ): string => {
//   if (isBirthdayData) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return "Error";
//   }
// };

logBRtMsg(isBirthdayData, ageData, userNameData);
