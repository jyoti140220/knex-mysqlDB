const express=require('express')
var router=express()
var router=express.Router()
router.use(express.json())

//create connection with knex
const knex = require('knex')({
    client: "mysql",
    connection : {
        host: "localhost",
        user: "root",
        password: "Jyoti34@12",
        database: "JYOTI"
    }
});


//for cheaking MYSQL and UBNTU version
router.get('/version',(req,res)=>{
    knex.raw("SELECT VERSION()").then(
        (version) => res.send((version[0][0]))
    ).catch((err) => { console.log( err); throw err })
        .finally(() => {
            knex.destroy();
        });

})

//for creating table
router.get('/createTable',(req,res)=>{
    knex.schema.createTable('NEWTABLE',(table)=>{
        table.increments('ID').primary()
        table.string('NAME')
        table.integer('AGE')
        table.date('BIRTHDAY')
    }).then(()=>res.send("table create"))
    .catch(err=>res.send(err))
})


//for insearting data
router.get('/insertdata',(req,res)=>{
    // 2 type se kr sakte he
    
    
    // knex('NEWTABLE').insert(req.body).then(()=>{res.send("inserat data")})
    knex('NEWTABLE').insert({NAME:"jyoti",AGE:34,BIRTHDAY:"12.2.2000"}).then(()=>{res.send("inserat data")})
    .catch(()=>{console.log("errr")})
})


//for select all rows
router.get('/selectRows',(req,res)=>{
    knex.from('NEWTABLE').select('*').then(row=>{res.send(row)})
    .catch(er=>{res.send(er)})
})

module.exports=router







