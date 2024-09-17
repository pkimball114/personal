export const handler = async (event) => {
  console.log("Received event: " + JSON.stringify(event));

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',  // Allow all origins or specify your origin
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',  // Include methods that your API uses
    },
    body: JSON.stringify({ message: 'Hello from triviaMP3Processor' }),
  };
  return response;
};
