import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 } from "uuid";

export const handler: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      udued: undefined,
      id: v4(),
      date: new Date().toISOString(),
    }),
  };
};
