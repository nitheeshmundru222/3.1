
const request = require('supertest');
const app = require('./server');


describe('Player ',()=>{
it('CREATE player',async ()=>{
   const res = await request(app).post('/add').send({
        playerName:'Ezra Wright',
        touchDowns:100,
        rushingYards:200,
        sacks:50,
        goalsMade:100,
        goalsMissed:102,
        catchesMade:20,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.playerName).toBe('Ezra Wright')
    
});
it('UPDATE player',async()=>{
   
        const res = await request(app)
          .put("/update/648f3995531b2dae6e8ad41c")
          .send({
            playerName:'Ezra Wright1',
            touchDowns:100,
            rushingYards:200,
            sacks:50,
            goalsMade:100,
            goalsMissed:102,
            catchesMade:20,
          });
        expect(res.statusCode).toBe(200);
        expect(res.body.playerName).toBe('Ezra Wright1');
      
});
it('DELETE player',async()=>{
    const res = await request(app).delete(
        "/delete/648f3995531b2dae6e8ad41c"
      );
      expect(res.statusCode).toBe(200)

});

})
