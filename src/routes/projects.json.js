import { projects } from "./_projects";

/**
 * Function responsible for serving the JSON needed to render the projects information.
 *
 * @export
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function get(req, res, next) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify({ status: "success", data: projects }));
}
