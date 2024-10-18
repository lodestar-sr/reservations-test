import { DataSource, DataSourceOptions } from 'typeorm'

export const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  synchronize: true,
}

export default new DataSource(config)
