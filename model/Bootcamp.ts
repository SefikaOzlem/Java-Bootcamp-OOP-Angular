import { Activity } from "./Activity";
import {Sponsor} from "./Sponsor";
import { Teacher } from "./Teacher";

class Bootcamp extends Activity{
   
    private teachers: Teacher [];
    private sponsor: Sponsor;
    
    constructor(activityName:string,activityDate:Date,activityType:string,sponsor:Sponsor) {
        super(activityName,activityDate,activityType);
        this.sponsor=sponsor;
    }

    get Teachers():Teacher[]{
        return this.teachers;
    }
    addTeachers(teacher:Teacher)
    {
       this.teachers.push(teacher);
    }
    
    get Sponsor():Sponsor{
     return this.sponsor;
    }
    set Sponsor(sponsorCompany:Sponsor){
     this.sponsor=sponsorCompany;
    }
    
     getActivityType(): string {
        return 'Bootcamp';
     }

   
}