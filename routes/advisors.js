var express = require("express");
var router = express.Router();
var mysql = require("mysql");

/**
 * @api {get} /advisors/ Request all advisors informations
 * @apiName GetAdvisor
 * @apiGroup Advisor
 *
 * @apiSuccess {String} firstname Firstname of the Advisor.
 * @apiSuccess {String} sport Sport of the Advisor.
 * @apiSuccess {String} imagePath Photo of the Advisor.
 * @apiSuccess {String} urlBio Bio link of the Advisor.
 * @apiSuccess {String} categoryId Category of the Advisor.
 * @apiSuccess {String} contact Contact of the Advisor.
 * 
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "firstname": "pat",
 *      "sport": "karate",
 *      "imagePath": "/server/0/p/avatar.jpg",
 *      "urlBio": "http://domain.com",
 *      "categoryId": "2",
 *      "contact": "test@test.com",
 *      "createdAt": "2018-02-10T15:46:51.778Z"
 *      "updatedAt": "2018-02-10T15:46:51.778Z",
 *    }
 * 
 */
router.get("/", function(req, res, next) {

  connection.query("SELECT * from ps_advisor", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    // res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    res.status(200).json(results);
  });
});

/**
 * @api {post} /advisors Create Advisor
 * @apiName CreateAdvisor
 * @apiGroup Advisor
 *
 * @apiParam {String} firstname Firstname of the Advisor.
 * @apiParam {String} sport Sport of the Advisor.
 * @apiParam {String} imagePath Photo of the Advisor.
 * @apiParam {String} urlBio Bio link of the Advisor.
 * @apiParam {Number} categoryId Category of the Advisor.
 * @apiParam {String} contact Contact of the Advisor.
 * @apiParam {Date} createAt Created date of the Advisor.
 * @apiParam {Date} updateAt Updated date of the Advisor.
 *
 * @apiSuccess {Number} id ID of the Advisor.
 * @apiSuccess {String} firstname Firstname of the Advisor.
 * @apiSuccess {String} sport Sport of the Advisor.
 * @apiSuccess {String} imagePath Photo of the Advisor.
 * @apiSuccess {String} urlBio Bio link of the Advisor.
 * @apiSuccess {Number} categoryId Category of the Advisor.
 * @apiSuccess {String} contact Contact of the Advisor.
 * @apiParam {Date} createAt Created date of the Advisor.
 * @apiParam {Date} updateAt Updated date of the Advisor.
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "fieldCount": 0,
 *      "affectedRows": 1,
 *      "insertId": 3,
 *      "serverStatus": 2,
 *      "warningCount": 0,
 *      "message": "",
 *      "protocol41": true,
 *      "changedRows": 0
 *    }
 */
router.post("/", function(req, res, next) {
  let query = "INSERT INTO ps_advisor SET ?";
  let params = [];

  // params.push('Advisors');
  params.push(req.query);

  connection.query(query, req.query, (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
});
module.exports = router;
