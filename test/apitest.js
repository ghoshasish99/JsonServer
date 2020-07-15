var should = require('should')
var request = require('request')
var expect = require('chai').expect;
var id;

describe('Validate MY API', ()=>{
     it('returns post response',()=>{
          request({url:'http://localhost:3000/Employees',method:'POST',body:{"name": "Sachin Tendulkar","dept": "QEA","empID": "401535"},json:true},(error,response)=>{
               (response.statusCode).should.equal(201)
               id=response.body.id
          })
     })

     it('returns get response',()=>{
          request({url:`http://localhost:3000/Employees/${id}`,method:'GET',json:true},(error,response)=>{
               (response.statusCode).should.equal(200)
          })
     })
})