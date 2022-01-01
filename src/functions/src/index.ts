if (
  !process.env.FUNCTION_NAME ||
  process.env.FUNCTION_NAME === 'on_user_created'
) {
  exports.on_user_created = require('./on_user_created')
}
