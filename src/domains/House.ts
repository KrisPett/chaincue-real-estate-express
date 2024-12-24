import { HouseImage } from './HouseImage';
import { Broker } from './Broker';

export enum HouseTypes {
    CONDOMINIUM = 'CONDOMINIUM',
    VILLA = 'VILLA',
    TOWNHOUSE = 'TOWNHOUSE',
    VACATION_HOME = 'VACATION_HOME',
    ESTATES_AND_FARMS = 'ESTATES_AND_FARMS',
    LAND = 'LAND',
    OTHER_HOUSES = 'OTHER_HOUSES'
}

export class House {
    id: string;
    title: string;
    description: string;
    location: string;
    numberRooms: number;
    beds: number;
    price: string;
    src: string;
    sold: boolean;
    houseTypes: HouseTypes;
    images: HouseImage[];
    broker: Broker | null;
    timestamp: Date;

    constructor(
        id: string,
        title: string,
        description: string,
        location: string,
        numberRooms: number,
        beds: number,
        price: string,
        src: string,
        sold: boolean,
        houseTypes: HouseTypes,
        images: HouseImage[],
        broker: Broker | null,
        timestamp: Date
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.numberRooms = numberRooms;
        this.beds = beds;
        this.price = price;
        this.src = src;
        this.sold = sold;
        this.houseTypes = houseTypes;
        this.images = images;
        this.broker = broker;
        this.timestamp = timestamp;
    }
}
