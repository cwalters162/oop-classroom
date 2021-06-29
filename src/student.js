class Student { // WIP
  constructor(name, skillLevel) {
    this.name = name;
    this.skillLevel = skillLevel;
    this.assignments = [];
  }
  study() {
    if (this.skillLevel >= 100) {
    } else {
      this.skillLevel++
    }
  }
  doHomework(object, key) {

  }
}

module.exports = Student
