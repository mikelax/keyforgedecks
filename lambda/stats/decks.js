const axios = require('axios');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.registeredCount = async (event, context) => {

  try {
    const decks = await axios.get('https://www.keyforgegame.com/api/decks', {
      params: {
        page: 1,
        page_size: 1,
        ordering: '-date'
      }
    });

    console.log(`Received from API count of: ${decks.data.count}`);

    await saveCount(decks.data.count);

    return {
      statusCode: 200,
      body: JSON.stringify({
        count: decks.data.count,
        input: event
      })
    }
  } catch (error) {
    console.error('Error getting registered deck count');
    console.error(error);
  }
};

// private

const saveCount = async (count) => {
  const d = new Date();

  const params = { TableName: process.env.REGISTERED_DECKS_COUNT_TABLE, Item: { date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`, timestamp: Math.floor(Date.now() / 1000), count } };

  return await dynamodb.put(params).promise();
}
