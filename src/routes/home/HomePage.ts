import { Router, Request, Response } from 'express';
import { Country } from '../../domains/Country';
import { House } from '../../domains/House';
import {CountryDTO, HouseDTO, HomePageDTO} from './HomePageDTO';
import { CountryHelper } from '../../utilities/CountryHelper';
import { HouseHelper } from '../../utilities/HouseHelper';

const router = Router();

router.get('/page', async (req: Request, res: Response) => {
    console.log('HomePage');

    const toDTO = await toHomePageDTO();

    res.json(toDTO);
});

const toHomePageDTO = async (): Promise<HomePageDTO> => {
    const dtoBuilder = new DTOBuilder();

    await CountryHelper.updateDTOBuilderWithCountries((dtoBuilder: DTOBuilder, countries) => dtoBuilder.countries = countries)(dtoBuilder);
    await HouseHelper.updateDTOBuilderWithHouses((dtoBuilder: DTOBuilder, houses) => dtoBuilder.houses = houses)(dtoBuilder);

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

