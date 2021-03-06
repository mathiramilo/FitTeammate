// Object that represents the user

export default class User {
    // User has a name, lastname, age, gender, height, weight & training days a week
    constructor(name, lastname, age, gender, height, weight, tdw) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.tdw = tdw;
    }

    // Method that calculates and returns the user BMI
    calculateBMI() {
        return (this.weight / (Math.pow((this.height / 100), 2))).toFixed(1);
    }
}