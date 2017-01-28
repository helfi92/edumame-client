import feathers from 'feathers-client';

const app = feathers()
  .configure(feathers.authentication({ storage: window.localStorage }));

export default app;
