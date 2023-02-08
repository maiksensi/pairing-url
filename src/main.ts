import { App, Stack, StackProps } from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class UrlShortener extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // define resources here...

    const getUrlHandler = new NodejsFunction(this, 'getUrlHandler', {
      entry: './src/getUrlHandler.ts',
      handler: 'getUrlHandler',
    });

    const postUrlHandler = new NodejsFunction(this, 'postUrlHandler', {
      entry: './src/postUrlHandler.ts',
      handler: 'postUrlHandler',
    });

    const api = new RestApi(this, 'url-shortener-api', {
      restApiName: 'url-shortener-api',
      description: 'App to shorten URLs',
    });

    api.root.addMethod('POST', new LambdaIntegration(postUrlHandler));

    const getUrl = api.root.addResource('{url}');
    getUrl.addMethod('GET', new LambdaIntegration(getUrlHandler));
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new UrlShortener(app, 'url-shortener-dev', { env: devEnv });
// new MyStack(app, 'pairing-url-prod', { env: prodEnv });

app.synth();
