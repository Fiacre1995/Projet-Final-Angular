import { caisse } from "./caisse.model";
import { user } from "./user.model";

export class facture {

    "id_fact" : number;
    "num_caiss" : String;
    "caisse" : caisse;
    "user" : user;
}