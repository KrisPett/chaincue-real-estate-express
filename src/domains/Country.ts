export enum CountryNames {
    SWEDEN = "SWEDEN",
    SPAIN = "SPAIN"
}

export class Country {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
