// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
        speak() {
            return `Hello my name is ${this.name}, I am from ${this.location}`
        }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
        demo(subject){
            return `Today we are learning about ${subject}`
        }

        grade(student, subject){
            return `${student} receives a perfect score on ${subject}`
        }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
        listsSubjects(){
            return this.favSubjects;
        }

        PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}`
        }

        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}`
        }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
        standUp(channel){
            return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`
        }

        debugsCode(student, subject){
            return `${this.name} debugs ${student}'s code on ${subject}`
        }
}

const Lama = new Instructor({
    name: 'Lama',
    age: '35',
    location: 'NA',
    gender: 'Male',
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Don`t forget the homies',
})

const Jimy = new Student({
    name: 'Jimy',
    age: '21',
    location: 'Texas',
    gender: 'Male',
    previousBackground: 'studying',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
})

const Jane = new ProjectManager({
    name: 'Jane',
    age: '22',
    location: 'Spain',
    gender: 'Female',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'i`ll kick your ass',
    gradClassName: 'CS1',
    favInstructor: 'Sean',
})

console.log(Lama.demo('JavaScript IV'));
console.log(Lama.grade('Jane', 'classes'));
console.log(Jimy.listsSubjects());
console.log(Jimy.PRAssignment('MoonWalking'));
console.log(Jimy.sprintChallenge('Javascript'));
console.log(Jane.standUp('Server'));
console.log(Jane.debugsCode('Jimy', 'Java'))