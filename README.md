# RUN DB
- docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Prueba001." -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest

# RUN SERVER
- npm run start
- tsc --watch