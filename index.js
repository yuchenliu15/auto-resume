/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    console.log(req.body);
    console.log("Triggered!!!!!!");
    res.status(200).send();
  };
  