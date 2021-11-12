const myMiddleware = (handler) => {
  return (req, res) => {
    //do middleware stuff...

    return handler(req, res);
  };
};

const myHandler = (req, res) => {
  //Do endpoint stuff ...

  res.end();
};
export default myMiddleware(myHandler);
