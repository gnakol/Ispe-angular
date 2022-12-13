import { Time } from "@angular/common";
import { Catchup } from "./Catchup";
import { Etudiant } from "./Etudiant";
import { KeyComposite } from "./KeyComposite";

export class Inscription{

    key_composite! : KeyComposite;

    note! : number;

    presence! : boolean;

    heureRendu! : Time;

    etudiant! : Etudiant;

    catchup! : Catchup;


}