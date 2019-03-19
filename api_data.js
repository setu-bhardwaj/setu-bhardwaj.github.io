define({ "api": [
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/getEvents/date/byDate",
    "title": "Get a Single Meeting by Date.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "startAt",
            "description": "<p>Meeting Date. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"all details found successfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5c8498b250ebd04f3054b41a\",\n            \"eventId\": \"IrqF09ECn\",\n            \"userId\": \"zlqH9efwP\",\n            \"title\": \"Project Meeting\",\n            \"description\": \"Scrum call meeting \",\n            \"startAt\": \"10/03/2019 02:00 PM\",\n            \"endAt\": \"Sun Mar 10 2019 10:24:40 GMT+0530 (India Standard Time)\",\n            \"where\": \"skype call\",\n            \"color\": \"blue\",\n            \"createdAt\": \"1552193714835\",\n            \"createdBy\": \"Happy\",\n            \"lastModified\": \"Sun Mar 10 2019 10:24:40 GMT+0530 (India Standard Time)\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"no events found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingGeteventsDateBydate"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/getEvents/event/:eventid",
    "title": "Get a Single Meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"event found successfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5c8499f51919a72ce0e4e331\",\n            \"eventId\": \"4705tPGwF\",\n            \"userId\": \"zlqH9efwP\",\n            \"title\": \"Project Meeting\",\n            \"description\": \"Scrum call meeting \",\n            \"startAt\": \"10/03/2019 02:00 PM\",\n            \"endAt\": \"10/03/2019 03:00 PM\",\n            \"where\": \"skype call\",\n            \"color\": \"blue\",\n            \"createdAt\": \"2019-03-10T05:00:37Z\",\n            \"createdBy\": \"Happy\",\n            \"lastModified\": \"Sun Mar 10 2019 10:29:59 GMT+0530 (India Standard Time)\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\"error\": true,\n\t\"message\": \"no events found\",\n\t\"status\": 404,\n\t\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingGeteventsEventEventid"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/getEvents/all",
    "title": "Get all the meetings.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      {\n    \"error\": false,\n    \"message\": \"all events found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"eventId\": \"BZ7NZbFv_\",\n            \"userId\": \"zlqH9efwP\",\n            \"title\": \"Project meeting3\",\n            \"description\": \"meeting desc\",\n            \"startAt\": \"03/12/2019 08:10 PM\",\n            \"endAt\": \"03/12/2019 08:30 PM\",\n            \"where\": \"delhi\",\n            \"color\": \"yellow\",\n            \"createdAt\": \"2019-03-12T14:33:10Z\",\n            \"createdBy\": \"Admin\",\n            \"lastModified\": \"Tue Mar 12 2019 19:10:04 GMT+0530 (India Standard Time)\"\n        },\n        {\n            \"eventId\": \"TIJS11vRD\",\n            \"userId\": \" \",\n            \"userName\": \" \",\n            \"userEmail\": \" \",\n            \"title\": \"userSelected\",\n            \"description\": \"userSelected\",\n            \"startAt\": \"2019-03-18T10:06:56.082Z\",\n            \"endAt\": \"2019-03-18T10:06:58.159Z\",\n            \"where\": \"userSelected\",\n            \"color\": \"black\",\n            \"createdAt\": \"2019-03-18T10:07:07Z\",\n            \"createdBy\": \"Admin\",\n            \"lastModified\": \"2019-03-18T10:07:07Z\"\n        },\n        {\n            \"eventId\": \"zF3_aArkp\",\n            \"userId\": \"zlqH9efwP\",\n            \"userName\": \"Anu Bhardwaj\",\n            \"userEmail\": \"anu.bh@gmail.com\",\n            \"title\": \"new meetings edited\",\n            \"description\": \"new meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings edited\",\n            \"startAt\": \"2019-03-19T06:09:08.198Z\",\n            \"endAt\": \"2019-03-19T06:09:09.936Z\",\n            \"where\": \"Office\",\n            \"color\": \"blue\",\n            \"createdAt\": \"2019-03-18T14:37:51Z\",\n            \"createdBy\": \"Admin\",\n            \"lastModified\": \"2019-03-18T14:37:51Z\"\n        },\n\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"AuthorizationToken Is Missing In Request\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingsGeteventsAll"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/getEvents/email/:emailId",
    "title": "Get all the meetings of a user via email.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      {\n    \"error\": false,\n    \"message\": \"user meeting found successfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5c8fad3f3ad0153b52e9c4bd\",\n            \"eventId\": \"zF3_aArkp\",\n            \"userId\": \"zlqH9efwP\",\n            \"userName\": \"Anu Bhardwaj\",\n            \"userEmail\": \"anu.bh@gmail.com\",\n            \"title\": \"new meetings edited\",\n            \"description\": \"new meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings edited\",\n            \"startAt\": \"2019-03-19T06:09:08.198Z\",\n            \"endAt\": \"2019-03-19T06:09:09.936Z\",\n            \"where\": \"Office\",\n            \"color\": \"blue\",\n            \"createdAt\": \"2019-03-18T14:37:51Z\",\n            \"createdBy\": \"Admin\",\n            \"lastModified\": \"2019-03-18T14:37:51Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5c90a00f310e7e82be89147c\",\n            \"eventId\": \"V-wX_0bhq\",\n            \"userId\": \"Ot7CKY7wX\",\n            \"userName\": \"Anu Bhardwaj\",\n            \"userEmail\": \"anu.bh@gmail.com\",\n            \"title\": \"Ahsjsd\",\n            \"description\": \"Ahsjsd\",\n            \"startAt\": \"2019-03-19T07:52:20.023Z\",\n            \"endAt\": \"2019-03-20T07:52:20.000Z\",\n            \"where\": \"Skype\",\n            \"color\": \"black\",\n            \"createdAt\": \"2019-03-19T07:53:51Z\",\n            \"createdBy\": \"Admin\",\n            \"lastModified\": \"2019-03-19T07:53:51Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"AuthorizationToken Is Missing In Request\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingsGeteventsEmailEmailid"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "Get",
    "url": "/api/v1/meetings/getEvents/user/:userId",
    "title": "Get all the meetings of a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      {\n    \"error\": false,\n    \"message\": \"all user events found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"title\": \"Project meeting3\",\n            \"description\": \"meeting desc\",\n            \"startAt\": \"03/12/2019 08:10 PM\",\n            \"endAt\": \"03/12/2019 08:30 PM\",\n            \"where\": \"delhi\",\n            \"createdAt\": \"2019-03-12T14:33:10Z\",\n            \"createdBy\": \"Admin\",\n            \"lastModified\": \"Tue Mar 12 2019 19:10:04 GMT+0530 (India Standard Time)\"\n        },\n        {\n            \"userName\": \"Anu Bhardwaj\",\n            \"userEmail\": \"anu.bh@gmail.com\",\n            \"title\": \"new meetings edited\",\n            \"description\": \"new meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings editednew meetings edited\",\n            \"startAt\": \"2019-03-19T06:09:08.198Z\",\n            \"endAt\": \"2019-03-19T06:09:09.936Z\",\n            \"where\": \"Office\",\n            \"createdAt\": \"2019-03-18T14:37:51Z\",\n            \"createdBy\": \"Admin\",\n            \"lastModified\": \"2019-03-18T14:37:51Z\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"AuthorizationToken Is Missing In Request\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingsGeteventsUserUserid"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/deleteEvent/:eventid",
    "title": "Delete a Meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventid",
            "description": "<p>eventid of the meeting. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{{\n    \"error\": false,\n    \"message\": \"event deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No event found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingDeleteeventEventid"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/addEvent",
    "title": "Add Meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "startAt",
            "description": "<p>Start Date/Time of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endsAt",
            "description": "<p>End Date/Time of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "where",
            "description": "<p>Loacton of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created Date/Time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Created by the Admin. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n    \"error\": false,\n    \"message\": \"event has been added successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"eventId\": \"4705tPGwF\",\n        \"userId\": \"zlqH9efwP\",\n        \"title\": \"Project Meeting\",\n        \"description\": \"Scrum call meeting \",\n        \"startAt\": \"10/03/2019 02:00 PM\",\n        \"endAt\": \"10/03/2019 03:00 PM\",\n        \"where\": \"skype call\",\n        \"color\": \"blue\",\n        \"createdAt\": \"2019-03-10T05:00:37Z\",\n        \"createdBy\": \"Happy\",\n        \"lastModified\": \"Sun Mar 10 2019 10:29:59 GMT+0530 (India Standard Time)\",\n        \"_id\": \"5c8499f51919a72ce0e4e331\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nerror:\n{\n    \"error\": true,\n    \"message\": \"AuthorizationToken Is Missing In Request\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingsAddevent"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/admin-meetings/sentReminders",
    "title": "Sending reminders.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the User. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{  \n    \"error\": false,\n    \"message\": \"Meetings Found and reminders sent\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingsAdminMeetingsSentreminders"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/meeting/editEvent/:eventid",
    "title": "Modify a Meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "startAt",
            "description": "<p>Start Date/Time of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endsAt",
            "description": "<p>End Date/Time of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "where",
            "description": "<p>Loacton of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created Date/Time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Created by the Admin. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Event successfully updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"no events found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PutApiV1MeetingEditeventEventid"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/update",
    "title": "Update the password reset token .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "PasswordResetToken",
            "description": "<p>PasswordResetToken generated. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"details update successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"l9EHju_qY\",\n        \"userType\": \"normal\",\n        \"firstName\": \"Happy\",\n        \"lastName\": \"Singh\",\n        \"password\": \"happy@123\",\n        \"email\": \"happy44@gmail.com\",\n        \"countryCode\": \"+91\",\n        \"mobileNumber\": 7845455586,\n        \"createdOn\": \"2019-03-19T09:18:08.000Z\",\n        \"PasswordResetToken\": \"1QrpzWjv5\",\n        \"PasswordResetExpiration\": \"\",\n        \"_id\": \"5c90b3d02dde1cea58391be9\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"no user details found with this email address\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "UserDetails",
    "name": "GetApiV1UsersUpdate"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/updatePassword",
    "title": "Update the new password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>New Password. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"details update successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "UserDetails",
    "name": "GetApiV1UsersUpdatepassword"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/userDetails",
    "title": "Get Single user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"l9EHju_qY\",\n        \"userType\": \"normal\",\n        \"firstName\": \"Happy\",\n        \"lastName\": \"Singh\",\n        \"email\": \"happy44@gmail.com\",\n        \"countryCode\": \"+91\",\n        \"mobileNumber\": 7845454545,\n        \"createdOn\": \"2019-03-19T09:18:08.000Z\",\n        \"PasswordResetToken\": \"\",\n        \"PasswordResetExpiration\": \"\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\nError:\n{\n   \"error\": true,\n   \"message\": \"No User Found\",\n   \"status\": 404,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "UserDetails",
    "name": "GetApiV1UsersUseridUserdetails"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/verify/:token",
    "title": "Get user details using password reset token.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>reset token. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user verified\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"4tb7KXEXx\",\n            \"userType\": \"normal\",\n            \"firstName\": \"happy\",\n            \"lastName\": \"Singh\",\n            \"email\": \"happy444@gmail.com\",\n            \"countryCode\": \"91\",\n            \"mobileNumber\": 0,\n            \"createdOn\": \"2019-03-19T11:15:47.000Z\",\n            \"PasswordResetToken\": \"1QrpzWjv5\",\n            \"PasswordResetExpiration\": \"2019-03-20T11:27:00.094Z\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"no user found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "UserDetails",
    "name": "GetApiV1UsersVerifyToken"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/allUsers",
    "title": "Get all Normal User details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"All normal User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"Ot7CKY7wX\",\n            \"userType\": \"normal\",\n            \"firstName\": \"Anu\",\n            \"lastName\": \"Bhardwaj\",\n            \"password\": \"$2b$10$olE0wI7uiGlGM7z2v9D75eMu5T.jJ8xejchQzXknhE7.G/y6eQxCC\",\n            \"email\": \"anu.bh@gmail.com\",\n            \"countryCode\": \"91\",\n            \"mobileNumber\": 0,\n            \"createdOn\": \"2019-03-12T14:07:44.000Z\",\n            \"PasswordResetToken\": \"\",\n            \"PasswordResetExpiration\": \"\"\n        },\n        {\n            \"userId\": \"l9EHju_qY\",\n            \"userType\": \"normal\",\n            \"firstName\": \"Happy\",\n            \"lastName\": \"Singh\",\n            \"password\": \"$2b$10$tv5wMgK03iUSiQwHIprGPeqDwEpeBVUkyFOU3N/Ksb60niQiukBi6\",\n            \"email\": \"happy44@gmail.com\",\n            \"countryCode\": \"+91\",\n            \"mobileNumber\": 7845454545,\n            \"createdOn\": \"2019-03-19T09:18:08.000Z\",\n            \"PasswordResetToken\": \"\",\n            \"PasswordResetExpiration\": \"\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nError:\n{\n   \"error\": true,\n   \"message\": \"AuthorizationToken Is Missing In Request\",\n   \"status\": 400,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "UserDetails",
    "name": "GetApiV1UsersViewAllusers"
  },
  {
    "type": "post",
    "url": "/api/v1/users/findUser",
    "title": "Finding User By Email",
    "version": "1.0.0",
    "group": "UserDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    \n    {\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"l9EHju_qY\",\n            \"userType\": \"normal\",\n            \"firstName\": \"Happy\",\n            \"lastName\": \"Singh\",\n            \"email\": \"happy44@gmail.com\",\n            \"countryCode\": \"+91\",\n            \"mobileNumber\": 7845454545,\n            \"createdOn\": \"2019-03-19T09:18:08.000Z\",\n            \"PasswordResetToken\": \"\",\n            \"PasswordResetExpiration\": \"\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"No User Found\",\n   \"status\": 404,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "UserDetails",
    "name": "PostApiV1UsersFinduser"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/delete",
    "title": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"AuthorizationToken Is Missing In Request\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersUseridDelete"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "          {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkFNd29Wek1ERyIsImlhdCI6MTU1Mjk5MDI4NDMwMCwiZXhwIjoxNTUzMDc2Njg0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6Imw5RUhqdV9xWSIsInVzZXJUeXBlIjoibm9ybWFsIiwiZmlyc3ROYW1lIjoiSGFwcHkiLCJsYXN0TmFtZSI6IlNpbmdoIiwiZW1haWwiOiJoYXBweTQ0QGdtYWlsLmNvbSIsImNvdW50cnlDb2RlIjoiKzkxIiwibW9iaWxlTnVtYmVyIjo3ODQ1NDU0NTQ1LCJQYXNzd29yZFJlc2V0VG9rZW4iOiIiLCJQYXNzd29yZFJlc2V0RXhwaXJhdGlvbiI6IiJ9fQ.B1dducsAkFmZ6WpfqLdJRBdKg4PsQQdHoSeCrrs5iaY\",\n        \"userDetails\": {\n            \"userId\": \"l9EHju_qY\",\n            \"userType\": \"normal\",\n            \"firstName\": \"Happy\",\n            \"lastName\": \"Singh\",\n            \"email\": \"happy44@gmail.com\",\n            \"countryCode\": \"+91\",\n            \"mobileNumber\": 7845454545,\n            \"PasswordResetToken\": \"\",\n            \"PasswordResetExpiration\": \"\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n     \"error\": true,\n     \"message\": \"Password not entered.Login Failed\",\n     \"status\": 400,\n     \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "Logout",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n  \"error\": false,\n  \"message\": \"Logged Out Successfully\",\n  \"status\": 200,\n  \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"AuthorizationToken Is Missing In Request\",\n  \"status\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup.",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"l9EHju_qY\",\n        \"userType\": \"normal\",\n        \"firstName\": \"Happy\",\n        \"lastName\": \"Singh\",\n        \"email\": \"happy44@gmail.com\",\n        \"countryCode\": \"+91\",\n        \"mobileNumber\": 7845454545,\n        \"createdOn\": \"2019-03-19T09:18:08.000Z\",\n        \"PasswordResetToken\": \"\",\n        \"PasswordResetExpiration\": \"\",\n        \"_id\": \"5c90b3d02dde1cea58391be9\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"One or More Parameter(s) is missing\",\n       \"status\": 400,\n       \"data\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/:userId/edit",
    "title": "Editing the User details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"AuthorizationToken Is Missing In Request\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PutApiV1UsersUseridEdit"
  }
] });
