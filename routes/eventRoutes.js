app.get('/api/events', async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET a single event by ID
  app.get('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json(event);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  // POST a new event
  app.post('/api/events', async (req, res) => {
    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location,
    });
  
    try {
      const newEvent = await event.save();
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // PUT (update) an event by ID
  app.put('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      event.title = req.body.title || event.title;
      event.description = req.body.description || event.description;
      event.date = req.body.date || event.date;
      event.location = req.body.location || event.location;
  
      const updatedEvent = await event.save();
      res.json(updatedEvent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE an event by ID
  app.delete('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      await event.remove();
      res.json({ message: 'Event deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  