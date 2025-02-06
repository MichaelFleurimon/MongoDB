app.get('/api/attendees/:id', async (req, res) => {
    try {
      const attendee = await Attendee.findById(req.params.id);
      if (!attendee) {
        return res.status(404).json({ message: 'Attendee not found' });
      }
      res.json(attendee);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

  app.post('/api/attendees', async (req, res) => {
    const attendee = new Attendee({
      name: req.body.name,
      email: req.body.email,
    });
  
    try {
      const newAttendee = await attendee.save();
      res.status.json(newAttendee);
    } catch (e) {
      res.json({ message: e.message });
    }
  });
   
  app.delete('/api/attendees/:id', async (req, res) => {
    try {
      const attendee = await Attendee.findById(req.params.id);
      if (!attendee) {
        return res.status(404).json({ message: 'Attendee not found' });
      }
  
      await attendee.remove();
      res.json({ message: 'Attendee deleted' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });