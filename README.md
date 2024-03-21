[//]: # "Replace these links to point your repo"
[repo]: https://gecgithub01.walmart.com/camts/template-projects
[tags]: https://gecgithub01.walmart.com/camts/template-projects/tags
[contributors]: https://gecgithub01.walmart.com/camts/template-projects/contributors

# Template Project
## Build Status
### develop
[![Build Status](https://ci.wcnp2.walmart.com/buildStatus/icon?job=camts%2Frfs-binq-api%2Fdevelop)](https://ci.wcnp2.walmart.com/job/camts/job/rfs-binq-api/job/develop/)

### stage
[![Build Status](https://ci.wcnp2.walmart.com/buildStatus/icon?job=camts%2Frfs-binq-api%2Fstage)](https://ci.wcnp2.walmart.com/job/camts/job/rfs-binq-api/job/stage/)

### main
[![Build Status](https://ci.wcnp2.walmart.com/buildStatus/icon?job=camts%2Frfs-binq-api%2Fmain)](https://ci.wcnp2.walmart.com/job/camts/job/rfs-binq-api/job/main/)

## Sonarqube status
[![Quality Gate Status](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=alert_status)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api) [![Reliability Rating](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=reliability_rating)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api) [![Security Rating](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=security_rating)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api) [![Technical Debt](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=sqale_index)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api) [![Vulnerabilities](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=vulnerabilities)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api) [![Bugs](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=bugs)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api) [![Code Smells](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=code_smells)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api) [![Coverage](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=coverage)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api) [![Lines of Code](https://sonar.looper.prod.walmartlabs.com/api/project_badges/measure?project=rfs-binq-api&metric=ncloc)](https://sonar.looper.prod.walmartlabs.com/dashboard?id=rfs-binq-api)

## Description

API NodeJS Restful para el proyecto de Consulta de Saldos (giftcards). Expone endpoints para ser consumidos desde iframes en Ecommerce y Biformato para que los clientes que poseen tarjetas de regalo puedan consultar el saldo en línea. El API se conecta a UPP (Unified Payments Platform) para realizar las consultas, procesa la respuesta y envía los datos necesarios al frontend.

## Owner Ship

    Domain: Retail
    Product Owner: XXXXXXXX
    Team Roster:4367
    SSP: SSP00000268
    APM: APM0008342
    
## Documentation

- [Documentacion en confluence](https://confluence.walmart.com/display/CAMARCH/Balance+Inquiry+TDD)
- [Diagrama de arquitectura](https://confluence.walmart.com/pages/viewpage.action?pageId=796195902)
- [Swagger](https://api.binq.dev.walmart.com/docs/)
- [Proyecto de pruebas automatizadas](https://gecgithub01.walmart.com/camts/rfs-at-binq-api)
- [Documentacion del proyecto](./docs.md)

## Releases

Actual Version 0.0.1

```
      Date            Team            version
      2021/08/03      Architecture    0.0.1
```

For the versions available, see the [tags on this repository][tags]

## Project Structure
## Environment

|Ambiente|URL|Nombre del servidor|
|---|---|---|
|Dev|https://api.binq.dev.walmart.com|lcmnt87564.walmart.com|
|QA|https://api.binq.stg.walmart.com|lcmnt87564.walmart.com|

## WCNP

- Namespace: cam-binq-api
- Splunk Server: [Nonprod WCNP](https://wcnp-np-logsearch01.prod.us.walmart.net/) | 
[Prod WCNP](https://wcnp-logsearch01.prod.us.walmart.net/)
- Splunk Index: wcnp_cam-binq-api

## Service Registry
Application Key: **CAM-BINQ-API**
Environments:qa,dev,Pro


## Data Base

|Ambiente|Servidor|Usuario de servicio|
|---|---|---|
|dev|LCMNT55032GT.cam.wal-mart.com|SVCBINQDBDEV|
|stage|LCMNT55033GT.cam.wal-mart.com|SVCBINQDBQA|

## Security

Some comments
`Give an example here`

### Authentication
We are using IAM/SSO

### Authorization
We are using IAM/SSO

### Vault and Secret

Some comments
`Give an example here`


Los siguientes secretos se encuentran configurados en el Vault, dentro de la carpeta cambinqapi y separados por ambiente.

|Nombre del secreto|Descripción|
|---|---|
|Reference ID| Referencia del secreto
|dbuser|Nombre del usuario de servicio
|dbkey|Credencial del usuario de servicio
|aeskey|Llave de cifrado
|consumerId|Consumer ID para realizar peticiones a UPP
|correlationId|Correlation ID para realizar peticiones a UPP
|countryValue|Estructura JSON con los valores de localeId, tenantId y verticalId dados por UPP para las consultas de saldo según el país de origen de la tarjeta
|recaptchaString|Token para validación de Recaptcha

### Snyk
Link: https://appsec.walmart.com/tools/snyk

## Deployment

Add additional notes about how to deploy this on a live system

## Certificate
|Dev|https://api.binq.dev.walmart.com|Assigned group: cam- certificados
|QA|https://api.binq.dev.walmart.com|Assigned group: cam- certificados

## Built With

- [NodeJS](https://nodejs.org/) - The platform
- [Express](https://expressjs.com/) - The web framework used
- [Swagger](https://swagger.io/) - For API definition
- [Sequelize](https://sequelize.org/) - Promise based ORM

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository][tags].

## Authors
|Rol|Nombre|Correo|

|LTA| Dan Barquero|dan.barquero@walmart.com|
|LTD|Diego Alejandro|diego.alejandro@walmart.com|
|Developer Frontend|Guido López|guido.lopez@walmart.com|
|TPO| Stephanie Segura| stephanie.segura@walmart.com|
|BA|

See also the list of [contributors][contributors] who participated in this project.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
