import NodeGeocoder from "node-geocoder";
import config from "config";

const options = {
  provider: config.get("geocoder.provider"),
  httpAdapter: "https",
  apiKey: config.get("geocoder.apiKey"),
  formatter: null,
};

const GeocoderClient = NodeGeocoder(options);

export default GeocoderClient;
