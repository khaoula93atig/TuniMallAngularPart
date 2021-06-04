import { USER } from "./user";
import { produitEntity } from "./produit";

export class livraisonEntity {

id: string;

cout: number;

adresse: string;

email: string;


approuver: boolean;


terminer: boolean;


livreur: USER;


produit: produitEntity;
}
