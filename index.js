const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Webhook endpoint for Dialogflow
app.post('/webhook', (req, res) => {
  const intent = req.body.queryResult.intent.displayName; // Detect the triggering intent

  if (intent === 'FireDetected') {
    // Respond with the phrase for Google Assistant
    return res.json({
      fulfillmentText: "There is a fire", // The text Google Assistant will speak
    });
  }

  // Default fallback
  res.json({
    fulfillmentText: "Sorry, I didn't understand that.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Webhook server running on port ${PORT}`));
