exports.handler = async (payload, context, callback) => {
  // Add your Business logic here to route to execute different files based on payload data
  console.log('payload ' , payload); // will help to inspect how autoscaling works
  callback(null, { message: 'Success', payload })
}
