module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const productId = (req.query.productId || (req.body && req.body.productId));
    const responseMessage = productId
        ? `The product name for your product id ${productId} is Starfruit Explosion and the description is This starfruit ice cream is out of this world!`
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}