import { USER } from "./user";

export class livraisonEntity {

id: string;

cout: number;

adresse: string;

email: string;


approuver: boolean;


terminer: boolean;


livreur: USER;

/*@ManyToOne( type=>produitEntity, (produit)=> produit.livraisons, {
    nullable: true ,  eager: true
})
produit: produitEntity;*/
}
