import { PrismaClient } from '@prisma/client';
import { Country, CountryNames } from '../domains/Country';

const prisma = new PrismaClient();

export interface CountryServiceI {
    save(countryNames: CountryNames): Promise<Country>;
    findAll(): Promise<Country[]>;
}

export class CountryService implements CountryServiceI {
    async save(countryNames: CountryNames): Promise<Country> {
        return await prisma.country.create({
            data: {
                id: crypto.randomUUID(),
                name: countryNames.toString()
            }
        });
    }

    async findAll(): Promise<Country[]> {
        return await prisma.country.findMany();
    }
}
