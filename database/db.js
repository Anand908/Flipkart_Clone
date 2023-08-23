import mongoose from 'mongoose';

export const Connection = async( URL ) =>
{
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database Connected Successfully :)");
    }
    catch (error) {
        console.log("Error while Connecting with the database", error.message);
    }
}

export default Connection;