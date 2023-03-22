
import { cathegoryproduit } from "./cathegory_produit.model";
import { fournisseurs } from "./fournisseurs.model";

export class produit {
    "id_prod" : number;
    "lib_prod" : String;
    "prix_prod" : number;
    "qt_prod" : number;
    "cathegoryproduit" : cathegoryproduit;
    "fournisseurs": fournisseurs;
}