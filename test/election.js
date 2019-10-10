const Election = artifacts.require("./Election.sol");

contract("Election", (accounts) => {
  it("initializes with two candidates", async () => {
    const instance = await Election.deployed();
    const count = await instance.candidatesCount();
    assert.equal(count, 2)
  })

  it("initializes the candidates with the correct values", async () => {
    const instance = await Election.deployed();
    const candidate1 = await instance.candidates(1);
    const candidate2 = await instance.candidates(2);

    assert.equal(candidate1.id.toNumber(), 1);
    assert.equal(candidate1.name, "Donald Trump");
    assert.equal(candidate1.voteCount.toNumber(), 0);

    assert.equal(candidate2.id.toNumber(), 2);
    assert.equal(candidate2.name, "Joe Biden");
    assert.equal(candidate2.voteCount.toNumber(), 0);
  })
})