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
    "statusCode": 200,
    "message": "Results retrieved",
    "data": {
        "totalResult": 1,
        "retrievedResult": 1,
        "prev": null,
        "page": 1,
        "next": null,
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
    },
    "links": []
}
*/
/** 
    @api {get} v1/market?name=alaba&page=1&limit=5 Gets all data with limit and page
    @apiName Get Market details by Query with limits and page number
    @apiGroup Market
    @apiSuccessExample {json} Success-Response
    
    "success": true,
    "statusCode": 200,
    "message": "Results retrieved",
    "data": {
        "totalResult": 11,
        "retrievedResult": 5,
        "prev": null,
        "page": 1,
        "next": 2,
        "data": [
            {
                "id": "u_fc_poi_market.1065",
                "properties": {
                    "state_code": "LA",
                    "source": "GRID",
                    "name": "Alaba Market 334",
                    "ward_code": "LASATO14",
                    "settlement_name": "Alaba Oro market",
                    "settlement_type": "null",
                    "type_goods": "Clothing Livestock Electronic Spare Parts Food Stuff Mixed",
                    "other_type_goods": "null",
                    "product_desc": "null",
                    "days_monday": true,
                    "days_tuesday": true,
                    "days_wednesday": true,
                    "days_thursday": true,
                    "days_friday": true,
                    "days_saturday": true,
                    "days_sunday": false,
                    "total_days": 6,
                    "frequency": "Weekly",
                    "global_id": "1914a6a8-8c47-43a5-bae1-75b7f910cf6a"
                },
                "address": [
                    {
                        "formattedAddress": "Alaba Oro Road, , Lagos, NG",
                        "latitude": 6.465085,
                        "longitude": 3.326527,
                        "country": null,
                        "city": "",
                        "stateCode": "Lagos",
                        "zipcode": "",
                        "streetName": "Alaba Oro Road",
                        "streetNumber": null,
                        "countryCode": "NG",
                        "provider": "mapquest"
                    }
                ]
            },
            {
                "id": "u_fc_poi_market.3353",
                "properties": {
                    "state_code": "OG",
                    "source": "eHA_Polio",
                    "name": "Alabata Market",
                    "ward_code": "OGSODA01",
                    "settlement_name": "Alabata",
                    "settlement_type": "SSA",
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
                    "global_id": "4d17b11a-8886-4d31-b7c9-b1aa62ef8a77"
                },
                "address": [
                    {
                        "formattedAddress": ", , , NG",
                        "latitude": 7.31188,
                        "longitude": 3.49758,
                        "country": null,
                        "city": "",
                        "stateCode": "",
                        "zipcode": "",
                        "streetName": "",
                        "streetNumber": null,
                        "countryCode": "NG",
                        "provider": "mapquest"
                    }
                ]
            },
            {
                "id": "u_fc_poi_market.4157",
                "properties": {
                    "state_code": "BE",
                    "source": "GRID",
                    "name": "Malabar L Market",
                    "ward_code": "BNSUKM07",
                    "settlement_name": "Alabar L",
                    "settlement_type": "null",
                    "type_goods": "Clothing Electronic Spare Parts Food Stuff Mixed",
                    "other_type_goods": "null",
                    "product_desc": "null",
                    "days_monday": false,
                    "days_tuesday": false,
                    "days_wednesday": false,
                    "days_thursday": false,
                    "days_friday": true,
                    "days_saturday": false,
                    "days_sunday": false,
                    "total_days": 1,
                    "frequency": "Weekly",
                    "global_id": "5ff3f675-e599-42f0-8a01-4878c60436b8"
                },
                "address": [
                    {
                        "formattedAddress": ", , , NG",
                        "latitude": 7.807878,
                        "longitude": 9.55746,
                        "country": null,
                        "city": "",
                        "stateCode": "",
                        "zipcode": "",
                        "streetName": "",
                        "streetNumber": null,
                        "countryCode": "NG",
                        "provider": "mapquest"
                    }
                ]
            },
            {
                "id": "u_fc_poi_market.6916",
                "properties": {
                    "state_code": "LA",
                    "source": "GRID",
                    "name": "Alaba Market Annex St Patrik Street",
                    "ward_code": "LASOJO14",
                    "settlement_name": "Alaba",
                    "settlement_type": "null",
                    "type_goods": "Clothing Electronic Spare Parts Food Stuff Mixed",
                    "other_type_goods": "null",
                    "product_desc": "null",
                    "days_monday": true,
                    "days_tuesday": true,
                    "days_wednesday": true,
                    "days_thursday": true,
                    "days_friday": true,
                    "days_saturday": true,
                    "days_sunday": true,
                    "total_days": 7,
                    "frequency": "Other",
                    "global_id": "a03e3592-8e02-4f69-bb55-eb8a9c4aaba9"
                },
                "address": [
                    {
                        "formattedAddress": "Lagos-Badagry Expressway, Awjaw, Lagos, NG",
                        "latitude": 6.469221,
                        "longitude": 3.191593,
                        "country": null,
                        "city": "Awjaw",
                        "stateCode": "Lagos",
                        "zipcode": "",
                        "streetName": "Lagos-Badagry Expressway",
                        "streetNumber": null,
                        "countryCode": "NG",
                        "provider": "mapquest"
                    }
                ]
            },
            {
                "id": "u_fc_poi_market.7964",
                "properties": {
                    "state_code": "LA",
                    "source": "OSGOF",
                    "name": "Suru Alaba Market",
                    "ward_code": "LASATO14",
                    "settlement_name": "Suru Alaba",
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
                    "global_id": "b760c04e-3f68-44e8-98a8-ff44fe120995"
                },
                "address": [
                    {
                        "formattedAddress": "Suru Alaba Road, , Lagos, NG",
                        "latitude": 6.462543,
                        "longitude": 3.323584,
                        "country": null,
                        "city": "",
                        "stateCode": "Lagos",
                        "zipcode": "",
                        "streetName": "Suru Alaba Road",
                        "streetNumber": null,
                        "countryCode": "NG",
                        "provider": "mapquest"
                    }
                ]
            }
        ]
    },
    "links": []
}
*/
router.route("/").get(catchErrors(api("getMarketByQuery")));
module.exports = router;
