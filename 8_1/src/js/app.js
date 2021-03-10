// TODO: write your code here

export class Validator {
 
  static validateUsername(checkedNickName) {
    return /^[a-z][\w-]+[a-z]$/i.test(checkedNickName) && !/\d{3,}/.test(checkedNickName);
  }
}



console.log('worked');
