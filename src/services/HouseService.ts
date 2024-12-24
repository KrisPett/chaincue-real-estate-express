import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { House, HouseTypes } from '../domains/House';

const prisma = new PrismaClient();

class HouseService {
    static async save(houseTypes: HouseTypes): Promise<House> {
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

    static async findById(id: string): Promise<House> {
        const house = await prisma.house.findUnique({
            where: { id: id }
        });
        if (!house) {
            throw new Error(`House with id ${id} not found`);
        }
        return house;
    }

    static async findAll(): Promise<House[]> {
        return await prisma.house.findMany();
    }
}

export default HouseService;
