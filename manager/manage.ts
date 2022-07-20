import { Student } from './../model/Student';
import { Bootcamp } from './../model/Bootcamp';
import { Sponsor } from './../model/Sponsor';
import { Activity } from '../model/Activity';

const activities:Array<Activity> = [];

let sponsor = new Sponsor("AKSİgorta "); 
const date = new Date('2022-06-28');
var bootcamp=new Bootcamp("Java Angular Bootcamp",date,"Online",sponsor);
bootcamp.ActivityDetail="Java & Angular Bootcamp 45 hours online education with teachers";
//console.log(bootcamp.getActivityType());
activities.push(bootcamp);
console.log(activities);
var studentOne=new Student("Özlem","PUL","5079682541","ozlem@gmail.com","201751001");
bootcamp.addStudents(studentOne);

var studentTwo=new Student("Ayşenur","Bilge","50521653","aysenur@gmail.com","201751002");
bootcamp.addStudents(studentTwo);

console.log(bootcamp.Students);

