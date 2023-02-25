import {
  ApiGatewayManagementApi,
  PostToConnectionCommand,
  PostToConnectionCommandInput,
} from 'aws-sdk/client-apigatewaymanagementapi';

export const websocket = {
  createClient: ({
    domainName,
    stage,
  }: {
    domainName: string;
    stage: string;
  }) => {
    const endpoint = `https://${domainName}/${stage}`;
    return new ApiGatewayManagementApi({ endpoint });
  }
}