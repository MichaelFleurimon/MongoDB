require('dotenv').config();
const mongoose = require('mongoose');

// Define schemas directly in the seeder file to avoid module import issues
const attendeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
});

const feedbackSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  comment: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
});

// Create models
const Attendee = mongoose.model('Attendee', attendeeSchema);
const Event = mongoose.model('Event', eventSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Your MongoDB URI (replace with your actual URI)
const MONGODB_URI = 'mongodb+srv://michaelfleurimond301:<Michael1>@sba-319.ibxhs.mongodb.net/?retryWrites=true&w=majority&appName=Sba-319';

const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Attendee.deleteMany({}),
      Event.deleteMany({}),
      Feedback.deleteMany({})
    ]);
    console.log('Cleared existing data');

    // Seed Attendees
    const attendees = await Attendee.insertMany([
      {
        name: 'John Smith',
        email: 'john.smith@example.com'
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com'
      },
      {
        name: 'Michael Brown',
        email: 'michael.b@example.com'
      }
    ]);
    console.log('Seeded attendees');

    // Seed Events
    const events = await Event.insertMany([
      {
        title: 'Web Development Workshop',
        description: 'Learn the basics of web development with HTML, CSS, and JavaScript',
        date: new Date('2025-03-15T14:00:00Z'),
        location: 'Tech Hub, Room 101'
      },
      {
        title: 'Networking Mixer',
        description: 'Connect with professionals in the tech industry',
        date: new Date('2025-03-20T18:00:00Z'),
        location: 'Innovation Center'
      },
      {
        title: 'Data Science Seminar',
        description: 'Introduction to data analysis and machine learning',
        date: new Date('2025-04-05T15:00:00Z'),
        location: 'Virtual Meeting'
      }
    ]);
    console.log('Seeded events');

    // Seed Feedback
    const feedback = await Feedback.insertMany([
      {
        email: 'john.smith@example.com',
        comment: 'Great workshop! Learned a lot about web development.',
        rating: 5
      },
      {
        email: 'sarah.j@example.com',
        comment: 'The networking event was well organized.',
        rating: 4
      },
      {
        email: 'michael.b@example.com',
        comment: 'Would love more hands-on activities in future sessions.',
        rating: 4
      }
    ]);
    console.log('Seeded feedback');

    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

seedData();