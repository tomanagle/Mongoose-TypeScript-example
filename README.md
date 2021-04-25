# Mongoose TypeScript example

[![Known Vulnerabilities](https://snyk.io/test/github/tomanagle/Mongoose-TypeScript-example/badge.svg?targetFile=package.json)](https://snyk.io/test/github/tomanagle/Mongoose-TypeScript-example?targetFile=package.json)
[![GitHub stars](https://img.shields.io/github/stars/tomanagle/Mongoose-TypeScript-example.svg)](https://github.com/tomanagle/Mongoose-TypeScript-example/stargazers)
[![GitHub license](https://img.shields.io/github/license/tomanagle/Mongoose-TypeScript-example.svg)](https://github.com/tomanagle/Mongoose-TypeScript-example/blob/master/LICENCE)
[![GitHub forks](https://img.shields.io/github/forks/tomanagle/Mongoose-TypeScript-example.svg)](https://github.com/tomanagle/Mongoose-TypeScript-example/network)

This repo is example code that goes along with this medium aticle: https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722

If you prefer a video: https://www.youtube.com/watch?v=GZ1dKq2Wg1Y

The article explains how to use use TypeScript with your Mongoose models.

If something in [the article](https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722) or this repo needsfurther explanation or improvements, please sumit a pull request.

## Testing

`yarn test`

The test command will setup a mongodb test server, connect to it, run your tests and the server will go through a teardown process to clean up all remaining listners.

## Development

`yarn dev`

The run dev command will start the server and listen on the configured port. The port can be configured in ./src/index.ts

## Support
[Buy me a Coffee](https://www.buymeacoffee.com/tomn)

[Sign up to DigitalOcean](https://m.do.co/c/1b74cb8c56f4) I 💖 DigitalOcean

[Subscribe on YouTube](https://www.youtube.com/channel/UClEEzwG7Tl3-8eY11Qytsog)
