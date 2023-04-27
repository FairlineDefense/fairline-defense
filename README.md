# Fairline Defense

# Scripts

## Run locally

```
npm install
```

```
npm start
```

## Download the Stripe CLI, authenticate, and run following in a separate terminal:
```
stripe --api-key <STRIPE TEST SECRET API KEY> listen --forward-to=localhost:8080/webhooks/stripe --skip-verify
```

# Deployment

## Deploy to Fly.io:

## Paste in production env variables to .env

## Run webpack
```
npm start
```
## Wait for webpack notification the app has rebundled with new env variables:

```
webpack 5.74.0 compiled successfully in 16998 ms
```

### Then authenticate:
```
flyctl login
```

### Then deploy:
```
flyctl deploy
```