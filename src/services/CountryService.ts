import { PrismaClient } from '@prisma/client';
import { Country, CountryNames } from '../domains/Country';

const prisma = new PrismaClient();

export class CountryService{
    static async save(countryNames: CountryNames): Promise<Country> {
        return await prisma.country.create({
            data: {
                id: crypto.randomUUID(),
                name: countryNames.toString()
            }
        });
    }

    static async findAll(): Promise<Country[]> {
        return await prisma.country.findMany();
    }
}

export default CountryService;