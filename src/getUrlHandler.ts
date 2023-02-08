import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const getUrlHandler = async (_event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 301,
        headers: {
            'Location': 'https://abc.com/url/abce90230ADF',
        },
        body: '',
    };
}
