class School{
constructor (name,level,numberOfStudents,scores){
  this._name = name;
  this._level = level;
  this._numberOfStudents = numberOfStudents;
  this._scores = [];
}
get name(){
  return this._name;
}
get level(){
  return this._level;
}
get numberOfStudents(){
  return this._numberOfStudents;
}
set numberOfStudents(num){
 if( typeof num  === 'number' ){
 this._numberOfStudents = num;
 } else if (typeof num  === 'string' ){
   console.log('Invalid input: numberOfStudents must be set to a Number.');
 }}

 //methods
 quickFacts(){
   console.log( this._name +' educates '+ this._numberOfStudents +' students at the '+ this._level +' school level.')
 }
static pickSubstituteTeacher(substituteTeachers){  
const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
return  substituteTeachers[randomIndex];
}

getAverageTestScores(){
  let sum = this._scores.reduce((acc,val) =>   acc+val,0);
  let theSLength = this._scores.length; 
  return 'The average test score is: '+sum/theSLength;
}
addScores(newScores){
  this._scores.push(newScores);
}

};

class PrimarySchool extends School {
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
};

class Middle extends School {
  constructor(name,numberOfStudents){
    super(name,'middle',numberOfStudents);
}
};

class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams){
  super(name,'high',numberOfStudents);
  this._sportsTeams = sportsTeams;
  }

get sportsTeams(){
  return this._sportsTeams;
  console.log(sportsTeams)
}
};

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.addScores(18);
lorraineHansbury.addScores(17);
lorraineHansbury.addScores(20);
lorraineHansbury.getAverageTestScores();
console.log(lorraineHansbury);
lorraineHansbury.quickFacts();
console.log(lorraineHansbury.getAverageTestScores());
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log('THe Substitute Teacher will be '+sub+'.');

const alSmith = new HighSchool(
  'Al E.Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
);
alSmith.addScores(19);
alSmith.addScores(15);
alSmith.addScores(19);
alSmith.getAverageTestScores();
console.log(alSmith);
console.log(alSmith.getAverageTestScores());
//console.log(alSmith.sportsTeams);

