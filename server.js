// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example Data (Replace with Database)
const discussions = [
  {
    id: 1,
    title: 'Best Practices for Tomato Farming',
    content: 'What are the best practices for growing tomatoes in a temperate climate?',
    author: 'user123',
    date: '2023-11-01',
  },
  {
    id: 2,
    title: 'Dealing with Pests in Corn Fields',
    content: 'Looking for advice on managing pests in corn fields. Any recommendations?',
    author: 'user456',
    date: '2023-11-02',
  },
  {
    id: 3,
    title: 'Optimal Irrigation for Wheat Crops',
    content: 'Seeking guidance on the most effective irrigation methods for wheat cultivation.',
    author: 'user789',
    date: '2023-11-03',
  },
  {
    id: 4,
    title: 'Challenges in Organic Farming',
    content: 'Discussing the challenges faced by farmers in maintaining organic farming practices.',
    author: 'user234',
    date: '2023-11-04',
  },
  {
    id: 5,
    title: 'Improving Soil Fertility for Potatoes',
    content: 'Share your experiences on enhancing soil fertility for successful potato farming.',
    author: 'user567',
    date: '2023-11-05',
  },
  {
    id: 6,
    title: 'Effective Crop Rotation Techniques',
    content: 'Exploring proven strategies for implementing crop rotation to boost soil health.',
    author: 'user890',
    date: '2023-11-06',
  },
  {
    id: 7,
    title: 'Managing Drought in Rice Fields',
    content: 'Discussing methods to cope with drought conditions during rice cultivation.',
    author: 'user123',
    date: '2023-11-07',
  },
  {
    id: 8,
    title: 'Integrated Pest Management for Grapes',
    content: 'Share insights on adopting integrated pest management practices for grapevines.',
    author: 'user456',
    date: '2023-11-08',
  },
  {
    id: 9,
    title: 'Nutrient Deficiency in Apple Orchards',
    content: 'Addressing nutrient deficiency issues in apple orchards. Seeking advice.',
    author: 'user789',
    date: '2023-11-09',
  },
  {
    id: 10,
    title: 'Precision Agriculture Techniques',
    content: 'Discussing the benefits and challenges of implementing precision agriculture methods.',
    author: 'user234',
    date: '2023-11-10',
  },
  // Add more discussion examples as needed
];

// Routes

// Fetch all discussions
app.get('/discussions', (req, res) => {
  res.json(discussions);
});

// Fetch a specific discussion by ID
app.get('/discussions/:id', (req, res) => {
  const discussionId = parseInt(req.params.id);
  const discussion = discussions.find(d => d.id === discussionId);

  if (discussion) {
    res.json(discussion);
  } else {
    res.status(404).json({ error: 'Discussion not found' });
  }
});

// Post a new discussion
app.post('/discussions', (req, res) => {
  const { title, content, author } = req.body;

  if (title && content && author) {
    const newDiscussion = {
      id: discussions.length + 1,
      title,
      content,
      author,
      date: new Date().toISOString().split('T')[0], // Current date in 'YYYY-MM-DD' format
    };

    discussions.push(newDiscussion);
    res.status(201).json(newDiscussion);
  } else {
    res.status(400).json({ error: 'Invalid discussion data' });
  }
});

// Fetch user profile
app.get('/profile/:username', (req, res) => {
  const username = req.params.username;
  // For simplicity, return a mock user object
  const user = {
    username,
    displayName: 'John Doe',
  };

  res.json(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
