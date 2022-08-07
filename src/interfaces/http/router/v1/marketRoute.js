import express from "express";
import { makeInvoker } from "awilix-express";
import catchErrors from "interfaces/http/errors/catchErrors";
import MarketController from "interfaces/http/controllers/MarketController";

const router = express.Router();

// instantiate class
// const api = new MarketController();
const api = makeInvoker(MarketController);
// Get fields
/** 
    @api {get} v1/market?name=ojuwoye Gets all data
    @apiName Get Market details by Query
    @apiGroup Market
    @apiSuccessExample {json} Success-Response
    {
        "success": true,
        "status_code": 200,
        "message": "data retrieved successfully",
        "data": [
            {
            "id": "u_fc_poi_market.928",
            "properties": {
                "state_code": "LA",
                "source": "OSGOF",
                "name": "Ojuwoye Market",
                "ward_code": "LASMUN03",
                "settlement_name": "Ojuwoye",
                "settlement_type": "BUA",
                "type_goods": "null",
                "other_type_goods": "null",
                "product_desc": "null",
                "days_monday": "null",
                "days_tuesday": "null",
                "days_wednesday": "null",
                "days_thursday": "null",
                "days_friday": "null",
                "days_saturday": "null",
                "days_sunday": "null",
                "total_days": "null",
                "frequency": "null",
                "global_id": "15bd78b0-f9b0-4f4c-9e03-333b517bd536"
            },
            "address": [
                {
                    "formattedAddress": "Agege Motor Road, Oshodi, Lagos 100281, NG",
                    "latitude": 6.528074,
                    "longitude": 3.354016,
                    "country": null,
                    "city": "Oshodi",
                    "stateCode": "Lagos",
                    "zipcode": "100281",
                    "streetName": "Agege Motor Road",
                    "streetNumber": null,
                    "countryCode": "NG",
                    "provider": "mapquest"
                }
            ]
        }
        ]
    }
*/
router.route("/").get(catchErrors(api("getMarketByQuery")));
module.exports = router;
