import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymController } from './gym.controller';

@Module({
  imports: [],
  providers: [GymService],
  controllers: [GymController],
})
export class GymModule {}
