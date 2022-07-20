import { Activity } from "./Activity";
import { Person } from "./Person";

export class Student extends Person{

    private studentNumber:string;

    constructor(name:string,surname:string,phoneNumber:string,email:string,studentNumber:string){
        super(name,surname,phoneNumber,email);
        this.studentNumber=studentNumber;
    }


    get StudentNumber():string{
        return this.studentNumber;
    }

    set StudentNumber(studentNumber:string){
        this.studentNumber=studentNumber;
    }

}