export const handler = async (event) => {
    console.log("Received event: " + JSON.stringify(event));

    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from youtube lambda!'),
    };
    return response;
  };
  