import { PrismaClient } from '@prisma/client';
import { Broker } from '../domains/Broker';

const prisma = new PrismaClient();

export interface BrokerServiceI {
    save(email: string): Promise<Broker>;
}

export class BrokerService implements BrokerServiceI {
    async save(email: string): Promise<Broker> {
        return await prisma.broker.create({
            data: {
                id: crypto.randomUUID(),
                name: "",
                phoneNumber: "",
                email: email
            }
        });
    }
}


