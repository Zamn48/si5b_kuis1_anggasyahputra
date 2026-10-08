const busRouteModel = require("../models/busRouteModel");

// GET /bus-routes
function getAllRoutes(req, res) {
    const { kota } = req.query;

    if (kota) {
        const routes = busRouteModel.getRoutesByCity(kota);
        return res.json(routes);
    }

    const routes = busRouteModel.getAllRoutes();
    res.json(routes);
}

// GET /bus-routes/:id
function getRouteById(req, res) {
    const id = parseInt(req.params.id);

    const route = busRouteModel.getRouteById(id);

    if (!route) {
        return res.status(404).json({
            status: "error",
            message: "Rute bus tidak ditemukan",
            data: null
        });
    }

    res.json(route);
}

// POST /bus-routes
function createRoute(req, res) {
    const { kodeRute, asal, tujuan, kota, tarif } = req.body;

    if (!kodeRute || !asal || !tujuan || !kota || tarif === undefined) {
        return res.status(400).json({
            status: "error",
            message: "kodeRute, asal, tujuan, kota, dan tarif wajib diisi",
            data: null
        });
    }

    const newRoute = busRouteModel.addRoute({
        kodeRute,
        asal,
        tujuan,
        kota,
        tarif
    });

    res.status(201).json({
        status: "success",
        message: "Rute bus berhasil ditambahkan",
        data: newRoute
    });
}

// PUT /bus-routes/:id
function updateRoute(req, res) {
    const id = parseInt(req.params.id);

    const existingRoute = busRouteModel.getRouteById(id);

    if (!existingRoute) {
        return res.status(404).json({
            status: "error",
            message: "Rute bus tidak ditemukan",
            data: null
        });
    }

    const { kodeRute, asal, tujuan, kota, tarif } = req.body;

    if (!kodeRute || !asal || !tujuan || !kota || tarif === undefined) {
        return res.status(400).json({
            status: "error",
            message: "kodeRute, asal, tujuan, kota, dan tarif wajib diisi",
            data: null
        });
    }

    const updatedRoute = busRouteModel.updateRoute(id, {
        kodeRute,
        asal,
        tujuan,
        kota,
        tarif
    });

    res.json({
        status: "success",
        message: "Rute bus berhasil diperbarui",
        data: updatedRoute
    });
}

// DELETE /bus-routes/:id
function deleteRoute(req, res) {
    const id = parseInt(req.params.id);

    const deletedRoute = busRouteModel.deleteRoute(id);

    if (!deletedRoute) {
        return res.status(404).json({
            status: "error",
            message: "Rute bus tidak ditemukan",
            data: null
        });
    }

    res.json({
        status: "success",
        message: `Rute bus dengan id ${id} berhasil dihapus`,
        data: null
    });
}

module.exports = {
    getAllRoutes,
    getRouteById,
    createRoute,
    updateRoute,
    deleteRoute
};