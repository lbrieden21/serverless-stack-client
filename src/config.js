const dev = {
  STRIPE_KEY: "pk_test_NfeWlQpOzMvztOIXFjErHCb100BI8iv34X",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1gg32rqm5msov"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jpfl8nn2m2.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_zHJyeVbYP",
    APP_CLIENT_ID: "n8rehdnjpjl1fei555j1jdpus",
    IDENTITY_POOL_ID: "us-east-1:ae387d0f-dc9d-4ffc-9436-9bf336d9e53a"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_NfeWlQpOzMvztOIXFjErHCb100BI8iv34X",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-j98amdhigrav"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ofx3h7tk1f.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UJYCdgjs8",
    APP_CLIENT_ID: "4nbsodvtafovv9bhnl9dqid0mo",
    IDENTITY_POOL_ID: "us-east-1:20444175-8f7c-4558-bd82-06ac67fb2e5b"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
