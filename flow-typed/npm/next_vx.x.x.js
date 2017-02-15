declare module 'next' {
  // We include a generic here that's merged with the request to support
  // type checking on the attributes that we add to a request in our middleware.
  declare type Context<Q> = {|
    req: ?(http$IncomingMessage & Q),
    pathname: string,
    query: {[key: string]: string},
  |};

  declare class App {
    prepare: () => Promise<void>,
  }

  declare module.exports: ({
    dev?: boolean,
  }) => App;
}

declare var process: Process & {
  browser: boolean,
};
