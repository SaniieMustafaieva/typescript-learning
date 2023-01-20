const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "Saniie";

const createError = (msg: string) => {
  throw new Error(msg);
};
function logBRtMsg(isBirthday: boolean, age: number, userName: string): string {
  if (isBirthday === true) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else if (isBirthday === false) {
    return "Too bad";
  }
  return createError("Error");
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
