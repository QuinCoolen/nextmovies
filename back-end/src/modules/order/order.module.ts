import { forwardRef, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PaywallModule } from '../paywall/paywall.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../typeorm';
import { UserModule } from '../user/user.module';
import { RoomModule } from '../room/room.module';
import { TimestampModule } from '../timestamp/timestamp.module';
import { BravoMailModule } from '../bravo-mail/bravo-mail.module';
import { TicketModule } from '../ticket/ticket.module';

@Module({
  imports: [
    UserModule,
    RoomModule,
    TimestampModule,
    TypeOrmModule.forFeature([Order]),
    forwardRef(() => PaywallModule),
    BravoMailModule,
    TicketModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
