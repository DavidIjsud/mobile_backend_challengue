import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CatsModule } from './cats/cats.module';
import { ChallengueModule } from './challengue/challengue.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://palmyrasoft:Software11@cluster0.6vtes6a.mongodb.net/presto_challengue?retryWrites=true&w=majority&appName=Cluster0',), CatsModule, ChallengueModule, CategoriesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
