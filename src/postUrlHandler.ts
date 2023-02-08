import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const postUrlHandler = async (_event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 201,
        headers: {
            'Content-Type': 'application/json',
        },
        body:  JSON.stringify({
            originalUrl: 'https://www.google.com',
            shortenedUrl: 'https://abc.com/url/abce90230ADF',
        })
    };
}
