import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class UrlShortener extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // define resources here...
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