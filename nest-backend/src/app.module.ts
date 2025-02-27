import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    MongooseModule.forRoot(process.env.MONGO_DB_URI, {
      connectionFactory: (connection) => {
        console.log('MongoDB connected');
        return connection;
      },
    }),
    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}

