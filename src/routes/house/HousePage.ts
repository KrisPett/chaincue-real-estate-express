import { Router, Request, Response } from 'express';
import { House } from '../../domains/House';
import HouseService from '../../services/HouseService';
import { BrokerDTO, HousePageDTO, HouseImageDTO } from './HousePageDTO';
import { Broker } from '../../domains/Broker';
import { HouseImage } from '../../domains/HouseImage';

const router = Router();

router.get('/page/:houseId', async (req: Request, res: Response) => {
    console.log('housePage');
    console.log("houseId: ", req.params.houseId);
    const houseId = req.params.houseId;
    const houseDTO = await toHousePageDTO(houseId);
    res.json(houseDTO);
});

const toHousePageDTO = async (houseId: string): Promise<HousePageDTO> => {
    const dtoBuilder = new DTOBuilder();

    const house = await HouseService.findById(houseId);
    dtoBuilder.house = house;
    
    return toDTO(dtoBuilder);
};

const toDTO = (dtoBuilder: DTOBuilder): HousePageDTO => {
    return new HousePageDTO(
        dtoBuilder.house.id,
        dtoBuilder.house.title,
        dtoBuilder.house.houseTypes,
        dtoBuilder.house.location,
        dtoBuilder.house.numberRooms,
        dtoBuilder.house.beds,
        dtoBuilder.house.price,
        "₿32.346",
        dtoBuilder.house.description,
        dtoBuilder.house.images.map(toHouseImageDTO),
        dtoBuilder.house.broker ? toBrokerDTO(dtoBuilder.house.broker) : null
    );
};

const toHouseImageDTO = (image: HouseImage): HouseImageDTO => {
    return new HouseImageDTO(
        image.id,
        image.url
    );
};

const toBrokerDTO = (broker: Broker): BrokerDTO => {
    return new BrokerDTO(
        broker.id,
        broker.name,
        "broker.phoneNumber",
        "broker.email"
    );
};

class DTOBuilder {
    house: House
}

export default router;
