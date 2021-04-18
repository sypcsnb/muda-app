const router = require("express").Router();
let Production = require("../models/production.model");

router.route("/").get((req, res) => {
  Production.find()
    .then((productions) => res.json(productions))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const product_name = req.body.product_name;
  const status = req.body.status;
  const quantity = Number(req.body.quantity);
  const date = Date.parse(req.body.date);

  const newProduction = new Production({
    product_name,
    status,
    quantity,
    date,
  });

  newProduction
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Production.findById(req.params.id)
    .then((productions) => res.json(productions))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Production.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").patch((req, res) => {
  Production.findById(req.params.id)
    .then((productions) => {
      productions.product_name = req.body.product_name;
      productions.status = req.body.status;
      productions.quantity = Number(req.body.quantity);
      productions.date = Date.parse(req.body.date);

      productions
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
