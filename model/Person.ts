import { Student } from './Student';
import { Activity } from "./Activity";
import { Moderator } from "./Moderator";
import { Bootcamp } from './Bootcamp';
import { Sponsor } from './Sponsor';
import { Hackhaton } from './Hackhaton';
import { InHouseEducation } from './InHouseEducation';
import { Department } from './Department';

export abstract class Person{
    private name: string;
    private surname: string;
    private phoneNumber: string;
    private email: string;  
    private activity: Activity;

    constructor(name:string,surname:string,phoneNumber:string,email:string) {
        this.name=name;
        this.surname=surname;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    addBootcamp(activityName:string,activityDate:Date,activityStatus:string,sponsor:Sponsor):Activity{
        this.activity= new Bootcamp(activityName,activityDate,activityStatus,sponsor);
        return this.activity;
    }

    addHackhaton(activityName:string,activityDate:Date,activityStatus:string,sponsor:Sponsor):Activity{
        this.activity= new Hackhaton(activityName,activityDate,activityStatus,sponsor);
        return this.activity;
    }

    addInHouseEducation(activityName:string,activityDate:Date,activityStatus:string,companyName:string,department:Department):Activity{
        this.activity= new InHouseEducation(activityName,activityDate,activityStatus,companyName,department);
        return this.activity;
    }

    get Name():string{
        return this.name;
    }

    set Name(name:string){
        this.name=name;
    }

    get Surname():string{
        return this.surname;
    }

    set Surname(surname:string){
        this.surname=surname;
       
    }

    get PhoneNumber():string{
        return this.phoneNumber;
    }

    set PhoneNumber(phoneNumber:string){
        this.phoneNumber=phoneNumber;
    }

    get Email():string{
        return this.email;
    }

    set Email(email:string){
        this.email=email;
    }


}
