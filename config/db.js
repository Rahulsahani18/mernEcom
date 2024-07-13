const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const dbConnection = mongoose.connection;

    dbConnection.on('connected', () => {
      console.log('Connected to MongoDB!');
    });

    dbConnection.on('error', (err) => {
      console.error('Error connecting to MongoDB:', err);
    });
  } catch (error) {
    console.error('Error in MongoDB connection:', error);
  }
};
