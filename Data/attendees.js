const attendeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
const Attendee = mongoose.model("Attendee", attendeeSchema);
module.exports = Attendee;
