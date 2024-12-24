import { Router, Request, Response } from 'express';
import { Country } from '../../domains/Country';
import { House } from '../../domains/House';
import HouseService from '../../services/HouseService';
import { CountryService } from '../../services/CountryService';
import {CountryDTO, HouseDTO, HousesPageDTO} from './HousesPageDTO';

const router = Router();

router.get('/page', async (req: Request, res: Response) => {
    console.log('houses');
    const toDTO = await toHomePageDTO();
    res.json(toDTO);
});

const toHomePageDTO = async (): Promise<HousesPageDTO> => {
    const dtoBuilder = new DTOBuilder();

    dtoBuilder.countries = await CountryService.findAll();
    dtoBuilder.houses = await HouseService.findAll();

    return toDTO(dtoBuilder);
};

const toDTO = (dtoBuilder: DTOBuilder): HousesPageDTO => {
    return new HousesPageDTO(
        dtoBuilder.countries.map(toCountryDTO),
        dtoBuilder.houses.map(toHouseDTO)
    );
};

const toCountryDTO = (country: Country): CountryDTO => {
    return new CountryDTO(country.name);
};

const toHouseDTO = (house: House): HouseDTO => {
    return new HouseDTO(
        house.id,
        house.title,
        house.location,
        house.numberRooms,
        house.beds,
        house.price,
        "₿32.346",
        house.src
    );
};

class DTOBuilder {
    countries: Country[] = [];
    houses: House[] = [];
}

export default router;

