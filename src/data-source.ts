import "dotenv/config"
import "reflect-metadata"
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {

    if (process.env.DATABASE_URL === undefined) throw new Error("Missing env var: 'DATABASE_URL")

    const URL: String = process.env.DATABASE_URL
    const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}")
    const migrationsPath: string = path.join(__dirname, "./migrations/**.{js,ts}")

    if (process.env.NODE_ENV === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            logging: false,
            entities: [entitiesPath]
        }
    }

    return {
        type: "postgres",
        url: String(URL),
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

export const AppDataSource: DataSource = new DataSource(dataSourceConfig())