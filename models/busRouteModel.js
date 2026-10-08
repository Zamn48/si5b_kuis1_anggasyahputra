let busRoutes = [
    {
        id: 1,
        kodeRute: "K1",
        asal: "Terminal Alang-Alang Lebar",
        tujuan: "Ampera",
        kota: "Palembang",
        tarif: 5000
    },
    {
        id: 2,
        kodeRute: "K2",
        asal: "Terminal Sako",
        tujuan: "Plaju",
        kota: "Palembang",
        tarif: 6000
    },
    {
        id: 3,
        kodeRute: "K3",
        asal: "Terminal Jakabaring",
        tujuan: "Bukit Besar",
        kota: "Palembang",
        tarif: 7000
    }
];

let nextId = 4;

function getAllRoutes() {
    return busRoutes;
}

function getRoutesByCity(kota) {
    return busRoutes.filter(route => route.kota === kota);
}

function getRouteById(id) {
    return busRoutes.find(route => route.id === id);
}

function addRoute(data) {
    const newRoute = {
        id: nextId++,
        kodeRute: data.kodeRute,
        asal: data.asal,
        tujuan: data.tujuan,
        kota: data.kota,
        tarif: data.tarif
    };

    busRoutes.push(newRoute);
    return newRoute;
}

function updateRoute(id, data) {
    const index = busRoutes.findIndex(route => route.id === id);

    if (index === -1) {
        return null;
    }

    busRoutes[index] = {
        id: id,
        kodeRute: data.kodeRute,
        asal: data.asal,
        tujuan: data.tujuan,
        kota: data.kota,
        tarif: data.tarif
    };

    return busRoutes[index];
}

function deleteRoute(id) {
    const index = busRoutes.findIndex(route => route.id === id);

    if (index === -1) {
        return null;
    }

    const deletedRoute = busRoutes[index];
    busRoutes.splice(index, 1);

    return deletedRoute;
}

module.exports = {
    getAllRoutes,
    getRoutesByCity,
    getRouteById,
    addRoute,
    updateRoute,
    deleteRoute
};