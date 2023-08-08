class ReturnMessages {
  async success(result: any) {
    const message = {
      statusCode: 200,
      message: ['API_SUCCESS_REQUEST'],
      data: result,
    };
    return message;
  }
  async error(error: any) {
    const message = {
      statusCode: 500,
      message: ['ERROR_FS_SERVICE', 'API_SUCCESS_REQUEST'],
      error: error.message,
    };
    return message;
  }
}
const ReturnMessage = new ReturnMessages();
export default ReturnMessage;
