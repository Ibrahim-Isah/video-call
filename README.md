# Snaphunt Interview Video Call

The Video call app works by a user creating a room and sharing the room name for other users to join the call. The call can also be recorded by clicking on the settings button when the call has started and switch to the Recording Tab. The Recording is currently not working on the hosted version as the S3 Bucket were not provided. But you can install locally and add S3 credentials to test the recording. To Install locally, kindly follow the steps below: 

# Dev Setup
Steps to get a local dev setup up and running:

- Run `npm install` to install all dependencies.
- Copy `.env.example` in the project root and rename it to `.env.local`.
- Update the missing environment variables in the newly created `.env.local` file.
- Run `npm run dev` to start the development server and visit http://localhost:3000 to see the result.
- Start development 🎉

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
