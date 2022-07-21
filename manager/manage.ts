import { Moderator } from './../model/Moderator';
import { Student } from './../model/Student';
import { Bootcamp } from './../model/Bootcamp';
import { Sponsor } from './../model/Sponsor';
import { Activity } from '../model/Activity';

const activities:Array<Activity> = [];

function displayAllActivities(activity:Activity[]){
    for (var i = 0; i < activity.length; i++) {
        if(activity[i]!=undefined){
             console.log(activity[i].ActivityName +" - "+activity[i].ActivityStatus + " - "+activity[i].ActivityDate.toLocaleDateString()); 
        }
     }
}

function deleteActivity(removeActivityName:string,activities:Activity[]){
    
    for (var i = 0; i < activities.length; i++) {
        if(activities[i].ActivityName==removeActivityName){
           delete activities[i]; 
        }
     }
}

let sponsor = new Sponsor("AKSİgorta "); 
const date = new Date('2022-06-28');
var bootcamp=new Bootcamp("Java Angular Bootcamp",date,"Online",sponsor);
bootcamp.IsTheActive=true;
//console.log("Activity Status: "+bootcamp.ActivityStatus);
bootcamp.ActivityDetail="Java & Angular Bootcamp 45 hours online education with teachers";
//console.log(bootcamp.getActivityType());


var studentOne=new Student("Özlem","PUL","5079682541","ozlem@gmail.com","201751001");
bootcamp.addStudents(studentOne);
var studentTwo=new Student("Ayşenur","Bilge","50521653","aysenur@gmail.com","201751002");
bootcamp.addStudents(studentTwo);


var moderator=new Moderator("Murat Tevfik","Yağlıcı","5079632514","tevfik@gmail.com");
bootcamp.addModerators(moderator);
//console.log(bootcamp.Students);
activities.push(bootcamp);
//console.log(bootcamp.Moderators);
deleteActivity("Java Angular Bootcamp",activities);


var bootcampTwo=new Bootcamp("SpirngBoot Bootcamp",date,"In Ofise",sponsor);
bootcampTwo.addStudents(studentTwo);
activities.push(bootcampTwo);
//console.log(bootcampTwo.Students);
//console.log(bootcampTwo);
//console.log(activities[0].Students);
displayAllActivities(activities);