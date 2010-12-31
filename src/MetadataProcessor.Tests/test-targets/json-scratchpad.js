﻿var foo =
{
    "SMDVersion": "2.0",
    "version": "1.1",
    "id": "http://tempuri.com/",
    "target": "http://tempuri.com/",
    "schema": "http://tempuri.com/schema?includeDemoValue=true",
    "description": "City Index RESTful API 1.1",
    "additionalParameters": true,
    "throttleScopes": [{
        "name": "scope1",
        "window": 3000,
        "count": 1,
        "maxPending": 1
    },
    {
        "name": "scope2",
        "window": 5000,
        "count": 30,
        "maxPending": 10
    }],
    "services": {
        "CreateSession": {
            "description": "CreateSession Method Description",
            "target": "session",
            "uriTemplate": "/",
            "contentType": "application/json",
            "responseContentType": "application/json",
            "transport": "POST",
            "envelope": "JSON",
            "returns": {
                "$ref": "#.CreateSessionResponseDTO"
            },
            "throttleScope": "scope1",
            "parameters": [
        {
            "type": "string",
            "name": "UserName",
            "description": "Username is case sensitive",
            "demoValue": "3T999",
            "minLength": 6,
            "maxLength": 20
        },
        {
            "type": "string",
            "name": "Password",
            "description": "Password is case sensitive",
            "demoValue": "password",
            "minLength": 6,
            "maxLength": 20
        }
      ]
        },
        "DeleteSession": {
            "description": "",
            "target": "session",
            "uriTemplate": "/deleteSession?userName={userName}&session={session}",
            "contentType": "application/json",
            "responseContentType": "application/json",
            "transport": "POST",
            "envelope": "JSON",
            "returns": {
                "$ref": "#.SessionDeletionResponseDTO"
            },
            "parameters": [
        {
            "type": "string",
            "name": "userName",
            "description": "Username is case sensitive. May be set as a service parameter or as a request header.",
            "demoValue": "CC735158",
            "minLength": 6,
            "maxLength": 20
        },
        {
            "type": "string",
            "name": "session",
            "description": "The session token. May be set as a service parameter or as a request header.",
            "demoValue": "5998CBE8-3594-4232-A57E-09EC3A4E7AA8",
            "format": "guid",
            "minLength": 36,
            "maxLength": 36
        }
      ]
        }
    }
}