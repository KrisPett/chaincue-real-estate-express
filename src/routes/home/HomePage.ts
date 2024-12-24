import { Router, Request, Response } from 'express';
import { Country, CountryNames } from '../../domains/Country';
import { House, HouseTypes } from '../../domains/House';
import HouseService from '../../services/HouseService';
import { CountryService } from '../../services/CountryService';
import {CountryDTO, HouseDTO, HomePageDTO} from './HomePageDTO';

const router = Router();

router.get('/page', async (req: Request, res: Response) => {
    console.log('HomePage');

    const toDTO = await toHomePageDTO();

    res.json(toDTO);
});

const toHomePageDTO = async (): Promise<HomePageDTO> => {
    const dtoBuilder = new DTOBuilder();

    dtoBuilder.countries = await CountryService.findAll();
    dtoBuilder.houses = await HouseService.findAll();

    return toDTO(dtoBuilder);
};

const toDTO = (dtoBuilder: DTOBuilder): HomePageDTO => {
    return new HomePageDTO(
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

    getHouses(): House[] {
        return this.houses.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, 6);
    }
}

export default router;

