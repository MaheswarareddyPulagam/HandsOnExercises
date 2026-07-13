# Account Service

## Run
mvn spring-boot:run

## Test
GET http://localhost:8080/accounts/00987987973432

Expected Response
{
  "number":"00987987973432",
  "type":"Savings",
  "balance":234343.0
}
