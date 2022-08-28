# apollo responder
getting to know graphql backend with apollo server

## setup
[apollo server][apollo_server] setup docs

## hello world
created an initial "hello world" query. Consume with http or curl:
```shell
 $ curl --verbose  -X POST 'http://localhost:9876/api/graphql' \
    -H 'Content-Type: application/json' \
    -d '{ "query": "query{hello {message} }", "variables": {} }'
```

[apollo_server]: https://www.apollographql.com/docs/apollo-server/integrations/middleware#apollo-server-express
