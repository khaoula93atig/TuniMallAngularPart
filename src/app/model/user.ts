import { livraisonEntity } from "./livraison";

export class USER {

    id: string;

    prenom: string;

    nom: string;

     sexe: string;

      adresse: string;

        cin: number;

       role: string;


      username: string;


      email: string;

    password: string;


    salt: string;

    livraisons: livraisonEntity[];


}
