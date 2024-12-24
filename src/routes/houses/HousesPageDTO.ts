export class HousesPageDTO {
    constructor(
        public countries: CountryDTO[],
        public houses: HouseDTO[]
    ) {}
}

export class CountryDTO {
    constructor(public name: string) {}
}

export class HouseDTO {
    constructor(
        public id: string,
        public title: string,
        public location: string,
        public numberRooms: number,
        public beds: number,
        public price: string,
        public bitcoinPrice: string,
        public src: string
    ) {}
}