class SiteController {
  index(req, res) {
    res.render("home");
  }

  search(req, res) {
    res.render("search");
  }

  create(req, res) {
    console.log(req.body);
    res.send("");
  }
}

module.exports = new SiteController();
