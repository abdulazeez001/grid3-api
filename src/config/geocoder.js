const config = {
  provider: {
    doc: "geocder provider",
    format: "*",
    default: null,
    env: "GEOCODER_PROVIDER",
    sensitive: false,
  },
  apiKey: {
    doc: "geocoder api key",
    format: "*",
    default: null,
    env: "GEOCODER_API_KEY",
    sensitive: false,
  },
};

exports.geocoder = config;
