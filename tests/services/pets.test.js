const pets = require('../../services/pets');

test('list pets', async () => {
    expect(await pets.listPets()).toEqual({"data": [{"id": "<int64>", "name": "<string>", "tag": "<string>"}], "status": "200"});
})