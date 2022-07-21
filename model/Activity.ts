import { Moderator } from './Moderator';
import { Student } from "./Student";

export abstract class Activity {
    private activityName:string;
    private activityDate:Date;
    private activityDetail!:string;
    private students:Array<Student> = [];
    private moderators:Array<Moderator> = [];
    private isTheActive!:boolean;
    private activityStatus:string; // online or yerinde eğitim

    constructor(activityName:string,activityDate:Date,activityStatus:string) {
        this.activityName=activityName;
        this.activityDate=activityDate;
        this.activityStatus=activityStatus;
          
    }

    get ActivityName():string{
        return this.activityName;
    }
    set ActivityName(activityName:string){
        this.activityName=activityName;
    }
    get ActivityDate():Date{
        return this.activityDate;
    }
    set ActivityDate(activityDate:Date){
        this.activityDate=activityDate;
    }
    get ActivityStatus():string{
        return this.activityStatus;
    }
    set ActivityStatus(activityStatus:string){
        this.activityStatus=activityStatus;
    }
    get ActivityDetail():string{
        return this.activityDetail;
    }
    set ActivityDetail(activityDetail:string){
        this.activityDetail=activityDetail;
    }
    get Students():Student[]{
        return this.students;
    }
    addStudents(student:Student)
    {
       this.students.push(student);
    }
    get Moderators():Moderator[]{
        return this.moderators;
    }
    addModerators(moderator:Moderator)
    {
       this.moderators.push(moderator);
    }

    get IsTheActive():boolean{
        return this.isTheActive;
    }
    set IsTheActive(isTheActive:boolean){
        this.isTheActive=isTheActive;
    }
    
    
    abstract getActivityType():string;

}

