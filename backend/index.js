const fastify = require('fastify')()

fastify.register(require('fastify-cors'),{
})
const mongoose = require('mongoose');
const { deleteOne } = require('./models/transaction');

const transaction = require('./models/transaction')
try {
    mongoose.connect('mongodb+srv://admin:admin123@mycluster.n4gnk.mongodb.net/LedgerMangement?retryWrites=true&w=majority', { useNewUrlParser: true.valueOf, useUnifiedTopology: true });
    console.log("db connected");
} catch (e) {
    console.error(e);
}


fastify.post('/postdata', async (request, reply) => {
    // console.log(req.body);
    var Customer = request.body.name;
    var Type = request.body.options;
    var Description = request.body.des;
    var Amount = request.body.trans;
    const obj = {
        Customer,Type,Description,Amount
    }
    console.log(obj);

    try {
        const newTransaction = await transaction.create(obj);
        reply.code(201).send(newTransaction);

    } catch (e) {
        reply.code(500).send(e);
    }
    reply.send({'Hi':'Sucessfull'});
})

fastify.get('/getdata', async (request, reply) => {
    try {
        const transactiondetails = await transaction.find({});
        reply.code(200).send(transactiondetails);
      } catch (e) {
        reply.code(500).send(e);
      }
})

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'welcome' })
  })


fastify.listen(process.env.PORT, '0.0.0.0', err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
})