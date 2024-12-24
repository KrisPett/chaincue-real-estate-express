import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { HouseImage } from '../domains/HouseImage';

const prisma = new PrismaClient();

export interface HouseImageServiceI {
    save(url: string): Promise<HouseImage>;
    findById(id: string): Promise<HouseImage>;
    findAll(): Promise<HouseImage[]>;
}

class HouseImageService implements HouseImageServiceI {
    async save(url: string) {
        const houseImage = await prisma.houseImage.create({
            data: {
                id: uuidv4(),
                url: url
            }
        });
        return houseImage;
    }

    async findById(id: string) {
        const houseImage = await prisma.houseImage.findUnique({
            where: { id: id }
        });
        if (!houseImage) {
            throw new Error(`HouseImage with id ${id} not found`);
        }
        return houseImage;
    }

    async findAll() {
        return await prisma.houseImage.findMany();
    }
}

export default new HouseImageService();
