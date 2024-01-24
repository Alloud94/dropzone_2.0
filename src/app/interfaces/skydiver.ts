export interface Skydiver {
    // Personalien
    id: number;
    vorname: string;
    nachname: string;
    geburtsdatum: Date;
    gewicht: number;
    adresse: string;
    plz: number;
    ortschaft: string;
    land: string;
    telefonnummer: number;
    email: string;
    boncardId: number;

    // Sprungdaten
    lizenznr: number;
    anzJumps: number;
    anzJumpsLetzte12Monate: number;
    schuelerstatus: boolean;
    mitgliedstatus: boolean;
    trainingsausweis: boolean;

    // Notfallkontakt
    notfallkontakt: string;
    notfalladresse: string;
    notfallPLZ: number;
    notfallort: string;
    notfallLand: string;
    notfalltelefon: number;
    notfalltelefon2: number;

    // Allgemeines
    registration: Date;
    letzteAktualisierung: Date;
    type: string;
    status: string;
    notfallblatt: string;

}
