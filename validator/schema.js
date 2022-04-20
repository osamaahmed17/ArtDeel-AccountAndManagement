module.exports =
{
  "ORDER_SCHEMA": {
    "title": "Order",
    "description": "Order schema",
    "type": "object",
    "additionalProperties": true,
    "properties": {
      "delivery_type": {
        "type": "string",
      },
      "merchant_id": {
        "type": "string",
      },
      "merchant_storeId": {
        "type": "string",
      },
      "delivery_firstName": {
        "type": "string",
      },
      "delivery_lastName": {
        "type": "string",
      },
      "delivery_email": {
        "type": "string",
      },
      "delivery_street": {
        "type": "string",
      },
      "delivery_city": {
        "type": "string",
      },
      "delivery_postalCode": {
        "type": "string",
      },
      "delivery_country": {
        "type": "string",
      },
      "delivery_status": {
        "type": "string",
      },
      "delivery_fulfillmentStatus": {
        "type": "string",

      },
      "delivery_tracking": {
        "type": "string",
      },
      "parcel_weight": {
        "type": "string",
      },
      "delivery_comment": {
        "type": "string",
      },
      "delivery_dateStart": {
        "type": "string",
      },
      "delivery_dateEnd": {
        "type": "string",
      },
      "parcel_size": {
        "type": "string",
      },
      "delivery_additionalAddress": {
        "type": "string",
      },
      "delivery_checkoutComments": {
        "type": "string",
      },
      "rider_comments": {
        "type": "string",
      },
      "product1_title": {
        "type": "string",
      },
      "product1_price": {
        "type": "number",
      },
      "parcel_price": {
        "type": "number",
      },
      "parcel_paid": {
        "type": "boolean",
      },
      "delivery_id": {
        "type": "string",
      },
      "delivery_dateCreated": {
        "type": "string",
      }
    }
  },


  "CONFIGURATION_SCHEMA": {
    "title": "configuration",
    "description": "configuration schema",
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "key": {
        "type": "string"
      },
      "value": {
        "type": "object"
      }
    }
  }
}

