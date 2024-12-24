export class HousePageDTO {
    constructor(
        public id: string,
        public title: string,
        public type: string,
        public location: string,
        public numberOfRooms: number,
        public beds: number,
        public dollarPrice: string,
        public cryptoPrice: string,
        public description: string,
        public images: HouseImageDTO[],
        public broker: BrokerDTO | null
    ) {}
}

export class HouseImageDTO {
    constructor(
        public id: string,
        public url: string
    ) {}
}

export class BrokerDTO {
    constructor(
        public id: string,
        public name: string,
        public phoneNumber: string,
        public email: string
    ) {}
}
