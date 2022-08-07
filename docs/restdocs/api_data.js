define({ "api": [
  {
    "type": "get",
    "url": "v1/market?name=ojuwoye",
    "title": "Gets all data",
    "name": "Get_Market_details_by_Query",
    "group": "Market",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"data retrieved successfully\",\n    \"data\": [\n        {\n        \"id\": \"u_fc_poi_market.928\",\n        \"properties\": {\n            \"state_code\": \"LA\",\n            \"source\": \"OSGOF\",\n            \"name\": \"Ojuwoye Market\",\n            \"ward_code\": \"LASMUN03\",\n            \"settlement_name\": \"Ojuwoye\",\n            \"settlement_type\": \"BUA\",\n            \"type_goods\": \"null\",\n            \"other_type_goods\": \"null\",\n            \"product_desc\": \"null\",\n            \"days_monday\": \"null\",\n            \"days_tuesday\": \"null\",\n            \"days_wednesday\": \"null\",\n            \"days_thursday\": \"null\",\n            \"days_friday\": \"null\",\n            \"days_saturday\": \"null\",\n            \"days_sunday\": \"null\",\n            \"total_days\": \"null\",\n            \"frequency\": \"null\",\n            \"global_id\": \"15bd78b0-f9b0-4f4c-9e03-333b517bd536\"\n        },\n        \"address\": [\n            {\n                \"formattedAddress\": \"Agege Motor Road, Oshodi, Lagos 100281, NG\",\n                \"latitude\": 6.528074,\n                \"longitude\": 3.354016,\n                \"country\": null,\n                \"city\": \"Oshodi\",\n                \"stateCode\": \"Lagos\",\n                \"zipcode\": \"100281\",\n                \"streetName\": \"Agege Motor Road\",\n                \"streetNumber\": null,\n                \"countryCode\": \"NG\",\n                \"provider\": \"mapquest\"\n            }\n        ]\n    }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/interfaces/http/router/v1/marketRoute.js",
    "groupTitle": "Market",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3001/v1/market?name=ojuwoye"
      }
    ]
  }
] });
