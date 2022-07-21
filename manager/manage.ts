import { Moderator } from './../model/Moderator';
import { Student } from './../model/Student';
import { Bootcamp } from './../model/Bootcamp';
import { Sponsor } from './../model/Sponsor';
import { Activity } from '../model/Activity';

const activities:Array<Activity> = [];

let sponsor = new Sponsor("AKSİgorta "); //New sponsor identified 
const date = new Date('2022-06-28');//New Date identified
var bootcamp=new Bootcamp("Java Angular Bootcamp",date,"Online",sponsor);//Object defined with bootcamp constructor
bootcamp.IsTheActive=true; //Bootcamp in active
//console.log("Activity Status: "+bootcamp.ActivityStatus);
bootcamp.ActivityDetail="Java & Angular Bootcamp 45 hours online education with teachers";//Bootcamp details defined
//console.log(bootcamp.getActivityType());

/*New students identified */
var studentOne=new Student("Özlem","PUL","5079682541","ozlem@gmail.com","201751001","Dokuz Eylül Univercity");
bootcamp.addStudents(studentOne);
var studentTwo=new Student("Ayşe Nur","Bilge","50521653","aysenur@gmail.com","201751002","İstanbul Gelişim Univercity");
bootcamp.addStudents(studentTwo);



/*New moderator identified */
var moderator=new Moderator("Murat Tevfik","Yağlıcı","5079632514","tevfik@gmail.com");
bootcamp.addModerators(moderator);
//console.log(bootcamp.Students);
activities.push(bootcamp);//Added to activity
//console.log(bootcamp.Moderators);
deleteActivity("Java Angular Bootcamp",activities);

/*New bootcamps identified */
var bootcampTwo=new Bootcamp("SpirngBoot Bootcamp",date,"In Ofise",sponsor);
bootcampTwo.addStudents(studentTwo);
activities.push(bootcampTwo);//Added to activity
//console.log(bootcampTwo.Students);
//console.log(bootcampTwo);
//console.log(activities[0].Students);
displayAllActivities(activities);