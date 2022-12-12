# Fairline Defense

# Scripts

## Run locally

```
npm run start-dev
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
