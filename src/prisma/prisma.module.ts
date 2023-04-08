import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//The @Global Decorator ensures the services below are available
//all other modules globally
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
