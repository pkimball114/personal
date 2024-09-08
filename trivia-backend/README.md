## Deploying to Kimball Bros AWS:
```bash
export AWS_PROFILE=kimballbros
sam validate --region us-west-2
sam build --no-cached
sam deploy --guided
```