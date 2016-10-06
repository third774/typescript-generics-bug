import { RepositoryBase } from "./repository.base";
import { Person } from "./person";

class PersonRepository extends RepositoryBase<Person> {

}

export let personRepo = new PersonRepository();