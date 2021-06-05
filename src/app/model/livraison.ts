import { USER } from "./user";
import { produitEntity } from "./produit";

export class livraisonEntity {

id: string;

cout: number;

adresse: string;

email: string;

nom: string;

 prenom: string;
approuver: boolean;
quantiteProduit:number;

terminer: boolean;


livreur: USER;


produit: produitEntity;
}
