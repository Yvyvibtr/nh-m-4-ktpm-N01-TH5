const authenticateRoutes = require("./authenticate-routes");
const userRoutes = require("../../../../../../Downloads/CSE702025-N06-Nhom-1/CSE702025-N06-Nhom-1/admin/src/routes/user-routes");
const productRoutes = require("../../../../../../Downloads/CSE702025-N06-Nhom-1/CSE702025-N06-Nhom-1/admin/src/routes/product-routes");
const dashboardRoutes = require("./dashboard-routes");
const categoryRoutes = require("./category-routes");
const orderRoutes = require("./order-routes");

function mainRoutes(app) {
  app.use(authenticateRoutes);
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/dashboard", dashboardRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/orders", orderRoutes);
}

module.exports = mainRoutes;
