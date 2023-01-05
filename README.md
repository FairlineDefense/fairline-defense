# Fairline Defense

# Scripts

## Run locally

```
docker-compose up --build
```

## Download the Stripe CLI, authenticate, and run following in a separate terminal:
```
stripe --api-key <STRIPE SECRET API KEY> listen --forward-to=localhost:8080/webhooks/stripe --skip-verify
```
## Push to AWS using AWS CLI:
```
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 609103538808.dkr.ecr.us-east-1.amazonaws.com
```
```
docker build -t .
```
```
docker tag fairline-service-1:latest 609103538808.dkr.ecr.us-east-1.amazonaws.com/fairline-service-1:latest
```
```
docker push 609103538808.dkr.ecr.us-east-1.amazonaws.com/fairline-service-1:latest
```

## Deploy to Heroku

```
./script/deploy
```