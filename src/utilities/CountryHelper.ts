import { Country } from '../domains/Country';
import CountryService from '../services/CountryService';

export class CountryHelper {
    public static updateDTOBuilderWithCountries<B>(setCountries: (dtoBuilder: B, countries: Country[]) => void): (dtoBuilder: B) => Promise<B> {
        return async (dtoBuilder: B) => {
            const countries = await CountryService.findAll();
            setCountries(dtoBuilder, countries);
            return dtoBuilder;
        };
    }
}
