const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers");
const { zookeepers } = require("../data/zookeepers.json");

// this will mock any fs methods like fs.writeFileSync() without actually writing anything to a file
jest.mock('fs');

test("creates a zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Lindsey", id: "jhgdja3ng2" }, zookeepers
    );

    expect(zookeeper.name).toBe("Lindsey");
    expect(zookeeper.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Lindsey",
            age: 29,
            favoriteAnimal: "monkey",
        },
        {
            id: "4",
            name: "Sara",
            age: 28,
            favoriteAnimal: "rabbit",
        },
    ];

    const updatedZookeepers = filterByQuery({ age: 29 }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);
});

test("finds zookeeper by ID", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Lindsey",
            age: 29,
            favoriteAnimal: "monkey",
        },
        {
            id: "4",
            name: "Sara",
            age: 28,
            favoriteAnimal: "rabbit",
        },
    ];

    const result = findById("3", startingZookeepers);

    expect(result.name).toBe("Lindsey");
});

test("validates zookeeper age", () => {
    const zookeeper = {
        id: "3",
        name: "Lindsey",
        age: 29,
        favoriteAnimal: "monkey",
    }

    const invalidZookeeper = {
        id: "4",
        name: "Sara",
        age: "28",
        favoriteAnimal: "rabbit",
    }

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});