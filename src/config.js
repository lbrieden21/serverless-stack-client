export default {
  STRIPE_KEY: "pk_test_NfeWlQpOzMvztOIXFjErHCb100BI8iv34X",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "lb1-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://h4rcnia4hl.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_N0ageHrOR",
    APP_CLIENT_ID: "j47u17prakdq3m5u7n9gk61id",
    IDENTITY_POOL_ID: "us-east-1:1ec29833-5a12-4547-a585-333a2ae1a3bb"
  }
};
