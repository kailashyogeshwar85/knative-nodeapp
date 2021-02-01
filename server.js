const app = require('fastify')({ logger: true });

// Declare a route
app.post('/', async (request, reply) => {
  try {
    var { handler } = require(`./index`);
    handler(JSON.parse(request.body.Payload), {}, function (err, resp) {
      if (err) {
        return reply.status(400).send({ error: err });
      }
      console.log('Successfully Invoked function');
      return reply.send(resp);
    })
  } catch(e) {
    reply.send(e);
  }
});

(async () => {
  try {
    await app.listen(process.env.PORT || 8080);
    app.log.info(`Server listening on HOST ${process.env.HOST} PORT: ${process.env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();