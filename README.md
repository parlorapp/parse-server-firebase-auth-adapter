# parse-server-firebase-auth-adapter
Authenticate to parse server with your Firebase account

So this was meant to be a fork of some other module but i ended up rewriting it entirely.

Here is how you would authenticate a firebase token using curl
````
#!/bin/bash
APPLICATION_ID=ccJ45ICdt0b1llnGTvGz7YimD7Ln0MgfjvP3XkvK
curl -X POST \
  -H "X-Parse-Application-Id: ${APPLICATION_ID}" \
  -H "Content-Type: application/json" \
  -d '{
        "authData": {
          "firebase": {
            "id": "abc123",
            "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhYmMxMjMiLCJpYXQiOjE0OTU0ODYyMjQsImV4cCI6MTQ5NTQ4OTgyNCwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1hdGwxbUBmaXJlYmFzZS1wYXIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1hdGwxbUBmaXJlYmFzZS1wYXIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20ifQ.agnydwLXwoYCUAwXEiix8EteYojBlWcn3_1xUFO1xXmTNFheyLz6FJNEHhyLvkAPyRBECSc-dqkxE9tRJFRyA4y6rlSBwiJpLaA9HUet2THRqxxn7vBw4PUa_9SzS_y8kOiQsKT5AHLSfMB0Afn24Yy-_rt4VHW7janzwYFva6mIkmTtTRDAHsbwH4si5obyW5NajwQvFRLvBdb8YvEYDNqAxw0sJ8SbfMOvp44MujQ7EBUqcO632DFIJ8npYTRRsz_VtErdkH3s0u3RJJ2oKVg0OiapUjajLiwbYdBw3XS6Ip1PpdYCJ3h3n7EuorR_UErpXiASZy8aQDMCz7gb9A"
          }
        }
      }' \
  http://127.0.0.1:1337/parse/users
````

The above example doesn't actually work since this is a custom token, the method
to verify a token on firebase's lib only works for identity tokens.

more here https://firebase.google.com/docs/auth/admin/verify-id-tokens
