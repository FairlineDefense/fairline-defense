# Fairline Defense

## Scripts

### Run locally
```
npm install
```

```
npm start
```

### Download the Stripe CLI, authenticate, and run following in a separate terminal:
```
stripe --api-key <STRIPE TEST SECRET API KEY> listen --forward-to=localhost:8080/webhooks/stripe --skip-verify
```
