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
## Deploy to AWS

```
docker build -t .
```

## Deploy to Heroku

```
./script/deploy
```

# Set up testing environment:

## Postgres:

```
createdb fairline
```

## Listen for Stripe webhooks locally:

Needed for creating an account

```
stripe --api-key <Stripe Private Key> listen --forward-to=localhost:8080/webhooks/stripe --skip-verify
```
