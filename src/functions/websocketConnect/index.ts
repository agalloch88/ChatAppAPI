import { formatJSONResponse } from '@libs/APIResponses';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    const tableName = process.env.singleTable;
    const { connectionId, domainName, stage } = event.requestContext;
    const token = event.queryStringParameters?.token;

    if (!token) {
      return authFailed({ connectionId, domainName, stage });
    }

    formatJSONResponse({ body: {} });
  } catch (error) {
    console.log(error);
    return;
  }
};

const authFailed = ({
  connectionId,
  domainName,
  stage,
}: {
  connectionId: string;
  domainName: string;
  stage: string;
}) => {
  await
};
