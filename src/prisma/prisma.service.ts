import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; //Enables us to connect to the Database

//Logic that connects to the database
@Injectable()
export class PrismaService extends PrismaClient {
    constructor () {
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:postgrespw@localhost:32768/mydb?schema=public'
                }
            }
        })
    }
} 
