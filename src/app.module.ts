import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { NorthwindDatabaseModule } from './infraestructure/northwind-database/northwind-database.module';

@Module({
  imports: [CoreModule, InfrastructureModule, NorthwindDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
