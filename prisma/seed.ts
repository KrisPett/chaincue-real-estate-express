import { PrismaClient } from '@prisma/client';
import HouseService from '../src/services/HouseService';
import HouseImageService from '../src/services/HouseImageService';
import { HouseTypes } from '../src/domains/House';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function seed() {
    await prisma.houseImage.deleteMany();
    await prisma.house.deleteMany();
    await prisma.broker.deleteMany();
    await prisma.country.deleteMany();

    const houses = [
        { location: "Spain, Málaga", numberRooms: 3, beds: 2, price: "$969 384", src: "URLFrontImage1" },
        { location: "Spain, Málaga", numberRooms: 3, beds: 2, price: "$969 384", src: "URLFrontImage2" },
        { location: "Spain, Málaga", numberRooms: 3, beds: 2, price: "$969 384", src: "URLFrontImage3" },
        { location: "Spain, Málaga", numberRooms: 3, beds: 2, price: "$969 384", src: "URLFrontImage4" },
        { location: "Spain, Málaga", numberRooms: 3, beds: 2, price: "$969 384", src: "URLFrontImage5" },
        { location: "Spain, Málaga", numberRooms: 3, beds: 2, price: "$969 384", src: "URLFrontImage6" },
    ];

    const broker = await prisma.broker.create({
        data: {
            id: uuidv4(),
            name: '',
            contact: ''
        }
    });

    for (const houseData of houses) {
        const house = await HouseService.save(HouseTypes.VILLA);
        await prisma.house.update({
            where: { id: house.id },
            data: {
                location: houseData.location,
                numberRooms: houseData.numberRooms,
                beds: houseData.beds,
                price: houseData.price,
                src: houseData.src,
                broker: { connect: { id: broker.id } },
                images: {
                    create: [
                        { id: uuidv4(), url: houseData.src },
                        { id: uuidv4(), url: houseData.src },
                        { id: uuidv4(), url: houseData.src },
                        { id: uuidv4(), url: houseData.src },
                        { id: uuidv4(), url: houseData.src },
                        { id: uuidv4(), url: houseData.src },
                        { id: uuidv4(), url: houseData.src }
                    ]
                }
            }
        });
    }

    const countries = [
        { id: uuidv4(), name: 'SWEDEN' },
        { id: uuidv4(), name: 'SPAIN' }
    ];

    for (const countryData of countries) {
        await prisma.country.create({
            data: countryData
        });
    }
}
