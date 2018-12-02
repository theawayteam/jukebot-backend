# JukeBot Backend

Backend API for JukeBot

## Development

```sh
npm install -g serverless
git clone https://github.com/theawayteam/jukebot-backend.git
cd since/
yarn
serverless deploy -s dev
```

### Logging

Logs are pushed to LogDNA using the CloudWatch LogDNA integration. Logs are streamed from the CloudWatch stream to a LogDNA provided Lambda function and sent asynchronously so logging doesn't slow down core processing. The CloudWatch log filter used is `?debug ?info ?warn ?error`.
