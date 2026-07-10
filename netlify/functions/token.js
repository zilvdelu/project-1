exports.handler = async (event, context) => {
  返回 {
    statusCode: 200,
    body: process.env.GITHUB_TOKEN
  }
}
