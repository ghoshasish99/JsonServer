# JsonServer

[![Deploy to Azure Web App](https://github.com/ghoshasish99/JsonServer/actions/workflows/master_json-server-1.yml/badge.svg)](https://github.com/ghoshasish99/JsonServer/actions/workflows/master_json-server-1.yml)

## Json Server is a light weight solution to get a full fledged fake Rest API 

### Getting Started

* To install : `npm install -g json-server`

* Create a `db.json` with some data :
```json
{
   "users":[
      {
         "id":1,
         "first_name":"Ashish",
         "last_name":"Ghosh",
         "job":"test automation"
      }
   ]
}
```
* To start JSON Server : `json-server --watch db.json`

* To access data, you can hit this url :
 http://localhost:3000/users/1

You should get the following output :
```json
{
   "users":[
      {
         "id":1,
         "first_name":"Ashish",
         "last_name":"Ghosh",
         "job":"test automation"
      }
   ]
}
```
For more on JSON Server visit [this link.](https://github.com/typicode/json-server)
