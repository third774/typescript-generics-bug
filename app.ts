import { personRepo } from "./person.repository";

let jane = "jane";
personRepo.logModel(jane);

let jim: any = "jim";
personRepo.logModel(jim);

let john = {
    firstname: "john",
    lastname: "doe"
};

personRepo.logModel(john);