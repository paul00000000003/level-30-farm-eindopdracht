const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_costs_for_crop,
    get_total_costs,
    get_revenue_for_crop,
    get_total_revenue,
    get_profit_for_crop,
    get_total_profit
} = require("./farm");

describe("get_costs_for_crop", () => {
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
        },
    };
    test("Get costs per crop", () => expect(get_costs_for_crop(corn)).toBe(100));
})


describe("get_revenue_for_crop", () => {
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
                high: 50,
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
    const environmental_factor = { sun: "low", wind: "medium", underground: "clay" };
    test("Get revenue for crop", () => expect(get_revenue_for_crop(corn, {})).toBe(450));
});

describe("get_total_revenue", () => {
    const corn = {
        name: "corn",
        numberOfPlantsPerCrop: 50,
        costs: 60,
        yield: 3,
        salePrice: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
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
        },
    }
    const input = {
        crop: corn,
        num_crops: 10
    }
    const environmental_factor = { sun: "low", wind: "medium", underground: "clay" };
    test("get total revenue", () => expect(get_total_revenue(input, environmental_factor)).toBe(1102.5))
})

describe("get_total_costs", () => {
    const corn = {
        name: "corn",
        numberOfPlantsPerCrop: 50,
        costs: 2,
        yield: 3,
        salePrice: 2,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
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

    const input = {
        crop: corn,
        num_crops: 10
    }
    test("get total cost", () =>
        expect(get_total_costs(input)).toBe(1000))

});


describe("get_profit_for_crop", () => {
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
                high: 50,
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
    const environmental_factor = { sun: "low", wind: "medium", underground: "clay" };
    test("get profit for crop", () => expect(get_profit_for_crop(corn, {})).toBe(350))
});

describe("get_total_profit", () => {
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
                high: 50,
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
        },
    }


    const input = {
        crop: corn,
        num_crops: 10
    }
    const environmental_factor = { sun: "low", wind: "medium", underground: "clay" };
    test("get total profit", () => expect(get_total_profit(input, {})).toBe(3500))
});

describe("get_yield_for_plant", () => {
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
                high: 50,
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
    const environmental_factor = { sun: "low", wind: "medium", underground: "clay" };
    test("Get yield for plant with environment factors", () => {
        expect(get_yield_for_plant(corn, {})).toBe(3)
    })
});


describe("get_yield_for_crop", () => {
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
                high: 50,
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
    const environmental_factor = { sun: "low", wind: "medium", underground: "clay" };
    test("Get yield for crop, simple", () => {
        expect(get_yield_for_crop(corn, environmental_factor)).toBe(36.75)
    })
});