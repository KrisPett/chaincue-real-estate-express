import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { House, HouseTypes } from '../domains/House';

const prisma = new PrismaClient();

export interface HouseServiceI {
    save(houseTypes: HouseTypes): Promise<House>;
    findById(id: string): Promise<House>;
    findAll(): Promise<House[]>;
}

class HouseService implements HouseServiceI {
    async save(houseTypes: HouseTypes) {
        const house = await prisma.house.create({
            data: {
                id: uuidv4(),
                title: '',
                description: '',
                location: '',
                numberRooms: 0,
                beds: 0,
                price: '',
                src: 'URLFrontImage1',
                sold: false,
                houseTypes: houseTypes,
                timestamp: new Date()
            }
        });
        return house;
    }

    async findById(id: string) {
        const house = await prisma.house.findUnique({
            where: { id: id }
        });
        if (!house) {
            throw new Error(`House with id ${id} not found`);
        }
        return house;
    }

    async findAll() {
        return await prisma.house.findMany();
    }
}

export default new HouseService();
