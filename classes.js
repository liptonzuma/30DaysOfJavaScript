//lesson
/*class person {
    constructor(firstName, lastName, age, score, skills) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.score = 1;
        this.skills = [];

    }
    getFullName = () => {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
    get getskills() {
        return this.skills;
    }
    get getscore() {
        return this.score;
    }
    set setScore(score) {
        this.score++
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getInfo = () => {
            // return `Welcome ${this.getFullName()} , you're ${this.age} years old and your score now is ${this.score}`;
            if (this.score === 0) {
                return `come back tomorrow to increase your score`
            } else {
                return ` keep going ${this.getFullName()}`;
            }
        }
        /************************************** static****************/
/* static favoriteSkill() {
     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
     const index = Math.floor(Math.random() * skills.length);
     return skills[index]
 }
 static showDatetime() {
     let now = new Date()
     let year = now.getFullYear()
     let month = now.getMonth()
     let date = now.getDate()
     let hours = now.getHours()
     let minutes = now.getMinutes()


     let dateMonthYear = date + '.' + month + '.' + year
     let time = hours + ':' + minutes
     let fullTime = dateMonthYear + ' ' + time
     return fullTime
 };*/




/*****************************inheritance*****************************/

/*class student extends person {
    showAppreciation = () => {
        console.log('I was made from the person parent class')
    }
}*/
/****************************overriding methods**********************************/
/*class student extends person {
    constructor(firstName, lastName, age, gender) {
        super(firstName, lastName, age)
        this.gender = gender;
    }
    showAppreciation = () => {
        console.log('I was made from the person parent class')
    }
    getBio() {
        if (this.gender === 'male') {
            return `welcome ${this.getFullName()} , you're ${this.age}years old and a handsome looking male`
        } else {
            return `Hey there beautiful , you're ${this.age}years old . Nice to meet you ${this.getFullName()}`
        }
    }
}*/
/*let person1 = new person('lipton', 'zuma', 20, );
console.log(person1.getInfo())
    //console.log(person1);

console.log(person1.getFullName())
console.log(person1.getscore)
console.log(person1.getskills);
person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'
console.log(person1.skills)
console.log(person1.score)
console.log(person.favoriteSkill())
console.log(person.showDatetime())*/
/*const individual1 = new student('kofi', 'Asamoah', 20, 'female')
console.log(individual1)
console.log(individual1.showAppreciation())
console.log(individual1.getFullName())
console.log(individual1.getBio()) */

/***********************************************************30DaysOfJavaScript day 15 classes exercises********************************************* */
// exercises level 1
class animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.legs = legs
        this.color = color

    }
    get getAge() {
        return this.age;
    }
    static cry() {
        const startCrying = ['woof', 'meow', 'baah', 'roar', 'crow', 'boo'];
        const begin = Math.floor(Math.random() * startCrying.length);
        return startCrying[begin];
    }

}

class Dog extends animal {
    bark() {
        return 'woof woof'
    }
}
class Cat extends animal {
    makeSound() {
        return 'Meow......'
    }
}
// exercises level 2
class lion extends animal {
    constructor(name, age, color, legs, mane) {
        super(name, age, color, legs)
        this.mane = mane
    }
}
const simba = new lion('simba', 4, 'orange-brown', 4, true)
const spider = new Dog('spider', 1, 'black and white', 4)
console.log(spider)
console.log(spider.bark())
const animal1 = new animal('scooby', 3, 'brwon', 4);
console.log(animal1);
console.log(animal.cry())
console.log(simba)