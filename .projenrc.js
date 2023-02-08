const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'pairing-url',

  github: false,

  prettierOptions: {
    settings: {
      quoteProps: 'as-needed',
      singleQuote: true,
    },
  },

  gitignore: [
    'stages/*/secrets.yaml',
    '.DS_Store',
    '.idea/',
    '.tool-versions',
    '.vscode/',
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();