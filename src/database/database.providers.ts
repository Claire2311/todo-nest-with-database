import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.getOrThrow('DATABASE_HOST'),
        port: parseInt(configService.getOrThrow('DATABASE_PORT') || '3000'),
        username: configService.getOrThrow('DATABASE_USERNAME'),
        password: configService.getOrThrow('DATABASE_PASSWORD'),
        database: configService.getOrThrow('DATABASE_DB'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, //!Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
