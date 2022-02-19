export class Person {
  age: number;
  firstName: string;
  middleName: string;
  lastName: string;

  constructor(age: number, f: string, m: string, l: string) {
    this.firstName = f;
    this.middleName = m;
    this.lastName = l;
    this.age = age;
  }

  getFullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }
  getBirthdayYear() {
    return 2022 - this.age;
  }
}
