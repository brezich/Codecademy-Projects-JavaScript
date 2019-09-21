// making a parent class School
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  // creating getters and setters
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      return this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  // School info
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  
  // creating a static method
  static pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInt];
  }
}

// creating a PrimarySchool class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// creating a HighSchool class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    return this._sportsTeams;
  }
}

// creating a PrimarySchool instance
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Giboli']);
console.log(sub);

// creating a HighSchool instance
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Voleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
