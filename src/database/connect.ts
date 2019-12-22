import mongoose from 'mongoose';

async function connect({ db }: { db: string }) {
  try {
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log(`🗄️ Successfully connected to the database 🗄️`));
  } catch (error) {
    console.log(`🔥 An error occurred when trying to connect with database 🔥`);
    throw error;
  }
}

export default connect;
