import { House } from '../domains/House';
import HouseService from '../services/HouseService';

export class HouseHelper {
    public static updateDTOBuilderWithHouses<B>(setHouses: (dtoBuilder: B, houses: House[]) => void): (dtoBuilder: B) => Promise<B> {
        return async (dtoBuilder: B) => {
            const houses = await HouseService.findAll();
            setHouses(dtoBuilder, houses);
            return dtoBuilder;
        };
    }

    public static updateDTOBuilderWithHouseByHouseId<B>(houseId: string, setHouse: (dtoBuilder: B, house: House) => void): (dtoBuilder: B) => Promise<B> {
        return async (dtoBuilder: B) => {
            const house = await HouseService.findById(houseId);
            setHouse(dtoBuilder, house);
            return dtoBuilder;
        };
    }
}