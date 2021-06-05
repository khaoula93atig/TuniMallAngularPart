import { livraisonEntity } from "./livraison";
import { shopEntity } from "./shop";

export class produitEntity{


  codeBar: string;
   nom: string;

   type: string;

    categorie: string;

      price: number;

     couleur: string;

     quantite: number;
     image: string;

    marque: string;


     shop: shopEntity;



    livraisons:livraisonEntity;






}
