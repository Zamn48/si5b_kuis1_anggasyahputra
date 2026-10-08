require("dotenv").config();

const express = require("express");
const cors = require("cors");

const logger = require("./middlewares/logger");
const {
    errorHandler,
    notFound
} = require("./middlewares/errorHandler");

const busRouteRoutes = require("./routes/busRouteRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware umum
app.use(cors());
app.use(express.json());
app.use(logger);

// Halaman utama
app.get("/", (req, res) => {
    res.json({
        message: "RESTful API Rute Bus"
    });
});

// Routes Rute Bus
app.use("/bus-routes", busRouteRoutes);

// Penanganan endpoint yang tidak ditemukan
app.use(notFound);

// Penanganan error terpusat
app.use(errorHandler);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
}

module.exports = app;