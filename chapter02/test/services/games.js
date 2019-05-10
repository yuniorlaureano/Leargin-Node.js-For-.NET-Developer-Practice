'use strict';

const assert = require('assert');
const service = require('../../src/services/games');


describe('Game service', () => {
    const firstUserId = 'user-id-1';
    const secondUserId = 'user-id-2';

    describe('list of available games', () => {
        it('should include games set by other users', () => {
            //Given
            service.create(firstUserId, 'testing');

            //When
            const games = service.availableTo(secondUserId);

            //Then 
            assert.equal(games.length, 1);
            const game = games[0];
            assert.equal(game.setBy, firstUserId);
            assert.equal(game.word, 'TESTING');
        });


    });
});