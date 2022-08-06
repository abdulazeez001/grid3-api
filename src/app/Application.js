class Application {
  constructor({ restServer }) {
    this.restServer = restServer;
  }

  async start() {
    // Start elasticsearch if it exist
    // Seed data
    await this.restServer.start();
  }
}

export default Application;
