const config = {
  port: process.env.PORT || 8081,
  host: process.env.host,
  jwtSecret: process.env.jwtSecret,
  dbUri: 'mongodb+srv://admin:1234qwe@cluster0.bj036.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
}

export default config;