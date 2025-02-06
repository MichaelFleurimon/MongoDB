const eventsSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Event title
  description: { type: String, required: true }, // Event description
  date: { type: Date, required: true }, // Event date and time
  location: { type: String, required: true }, // Event location
});
const Events = mongoose.model("Event", eventSchema);
module.exports = Event;
