const feedbackSchema = new mongoose.Schema({
    email:{ type: String, required: true, unique: true },
    comment: { type: String, required: true }, // The feedback comment
    rating: { type: Number, min: 1, max: 5 }, // Optional rating (e.g., 1-5 stars)
  });
  const Feedback = mongoose.model('Feedback', feedbackSchema);