import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    console.log("Database connected.")

    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => {
        console.log(`Server Running in port: ${PORT}`);
    })

}).catch((err) => { console.log(err) })