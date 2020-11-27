const { createPrivateKey } = require("crypto");

function getyieldfactor(crop, omgevingsfactor) {
    let yieldfactor = 1;
    switch (omgevingsfactor.sun) {
        case "low":
            yieldfactor = yieldfactor * (100 + crop.factors.sun.low) / 100;
            break;
        case "medium":
            yieldfactor = yieldfactor * (100 + crop.factors.sum.medium) / 100;
            break;
        case "high":
            yieldfactor = yieldfactor * (100 + crop.factors.sun.high) / 100;
    }
    switch (omgevingsfactor.wind) {
        case "low":
            yieldfactor = yieldfactor * (100 + crop.factors.wind.low) / 100;
            break;
        case "medium":
            yieldfactor = yieldfactor * (100 + crop.factors.wind.medium) / 100;
            break;
        case "high":
            yieldfactor = yieldfactor * (100 + crop.factors.wind.high) / 100;
    }
    switch (omgevingsfactor.underground) {
        case "clay":
            yieldfactor = yieldfactor * (100 + crop.factors.underground.clay) / 100;
            break;
        case "sand":
            yieldfactor = yieldfactor * (100 + crop.factors.underground.sand) / 100;
            break;
        case "garden":
            yieldfactor = yieldfactor * (100 + crop.factors.underground.garden) / 100;
    }
    return yieldfactor;
}


const get_yield_for_crop = (crop, environmental_factors) => crop.numberOfPlantsPerCrop * crop.yield * getyieldfactor(crop, environmental_factors);
const get_costs_for_crop = (crop) => crop.numberOfPlantsPerCrop * crop.costs;
const get_total_costs = (harvest) => harvest.crop.numberOfPlantsPerCrop * harvest.crop.costs * harvest.num_crops;
const get_revenue_for_crop = (crop, environmental_factors) => crop.numberOfPlantsPerCrop * get_yield_for_plant(crop, environmental_factors) * crop.salePrice;
const get_total_revenue = (harvest, environmental_factors) => harvest.crop.numberOfPlantsPerCrop * get_yield_for_plant(harvest.crop, environmental_factors) * harvest.crop.salePrice * harvest.num_crops;
const get_profit_for_crop = (crop, environmental_factors) => get_revenue_for_crop(crop, environmental_factors) - get_costs_for_crop(crop);
const get_total_profit = (harvest, environmental_factors) => get_total_revenue(harvest, environmental_factors) - get_total_costs(harvest);
const get_yield_for_plant = (crop, environmental_factors) => getyieldfactor(crop, environmental_factors) * crop.yield;
/*
const corn = {
    name: "corn",
    numberOfPlantsPerCrop: 50,
    costs: 2,
    yield: 3,
    salePrice: 3,
    factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        },
        wind: {
            high: -60,
            medium: -30,
            low: 0
        },
        underground: {
            clay: -30,
            sand: 0,
            garden: 20
        }
    }
}

const omgevings_factoren = { sun: "low", wind: "medium", underground: "clay" };

let input = {
    crop: corn,
    num_crops: 10
}

console.log(`The profit for the ${input.crop.name} turns out to be eur ` + Math.floor(get_total_profit(input, omgevings_factoren)));

const avocado = {
    name: "avocado",
    numberOfPlantsPerCrop: 30,
    costs: 5,
    yield: 6,
    salePrice: 10,
    factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        },
        wind: {
            high: -60,
            medium: -30,
            low: 0
        },
        underground: {
            clay: 0,
            sand: 0,
            garden: 0
        }
    }
}

input = {
    crop: avocado,
    num_crops: 10
}

console.log(`The profit for the ${input.crop.name} turns out to be eur ` + Math.floor(get_total_profit(input, omgevings_factoren)));
*/

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_costs_for_crop,
    get_total_costs,
    get_revenue_for_crop,
    get_total_revenue,
    get_profit_for_crop,
    get_total_profit
}