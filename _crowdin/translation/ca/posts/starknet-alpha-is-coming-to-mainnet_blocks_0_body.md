### TL;DR

* *StarkNet Alpha is launching on Mainnet Ethereum by November*
* The time to build on StarkNet is now

### A Brief History

We announced our vision for [StarkNet](https://starkware.co/product/starknet/) at the beginning of the year: to bring massive scalability to Ethereum while preserving L1 security, permissionless interactions, and decentralization.\
We released **[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)** on a public testnet in June. This version supported fully permissionless general computation smart contracts. We’ve since upgraded it twice: first to **Alpha 1** — providing [L1<>L2 messaging and on-chain data](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), and then to **Alpha 2** — supporting [composability](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 now supports composable smart contracts of general computation in an Ethereum-like state, with the ability for L1 and L2 contracts to interact with each other. Read more [here](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### What is StarkNet Alpha on Mainnet?

StarkNet Alpha on Mainnet will support similar features to those currently available on the Goerli public testnet.

#### **What to Expect**

Because StarkNet is still under development, we want to introduce capabilities in a stepwise fashion and ensure developer expectations are met at every single step. Two particularly important aspects we’d like to emphasize are:

* **Permissioned smart contract deployment**: We will follow the sensible playbook introduced by our Optimistic Rollup colleagues: start with *permissioned* contract deployment. The protocol specifying how to request the inclusion of your smart contract in this initial whitelist will be published in the coming weeks.
* **No guarantee for backward compatibility**: we expect the future transition from StarkNet Alpha to StarkNet Beta to include regenesis of the state. The network will begin from block 0, and applications will have to redeploy their contracts. Furthermore, developers and users should note that the expected StarkNet Beta might not be backward compatible with StarkNet Alpha, e.g. developers might need to modify their contracts. Obviously, we will try to allow an easy transition for applications, with minimal required changes.

#### Additional Near-Term Features

As part of the transition of StarkNet Alpha from testnet to Mainnet, we will:

1. Add constructors to contracts.
2. Improve the testing framework.
3. For blocks and transactions, move from using an ID to using a hash.

We plan to continue the deployment of new features at a regular cadence, just as we’ve done on the public testnet. In the near term, we plan the following upgrades:

1. Account Contracts and Token Contracts — opening the way for DeFi applications to interact with StarkNet the way they are familiar with.
2. Improved Contract Functionality — supporting contract upgradability and events.
3. Warp: the Solidity-to-Cairo compiler developed by Nethermind will allow a smooth transition from Solidity smart contracts to StarkNet smart contracts.
4. Ethereum Signatures: native support for ECDSA over secp256k1 will allow easier integration with existing wallets.
5. StarkNet Full Node: a Full Node will allow users to participate in the network with hardware requirements on par with those of an Ethereum Full Node.

#### Fee Mechanism

The fee mechanism will be turned on as soon as account contracts and token contracts are added to StarkNet Alpha.

All transactions submitted to StarkNet will incur a fee designed to cover L1 and off-chain costs. The fee will initially be charged in ETH. The cost of a single transaction will decrease as StarkNet increases its scale (as is the case on all existing STARK-based systems). When crafting the initial fee mechanisms, we favor simplicity over accurately pricing transactions according to the resources they consume. Expect this mechanism to be refined and improved over time.

With an eye towards making StarkNet a sustainable network and incentivizing its operators and developers, a portion of the revenues collected from the fees will be distributed to application developers and StarkNet core developers.

#### Security

StarkNet Alpha’s security model on Mainnet will follow the current model on testnet:

* Every state transition is backed by a STARK proof, thus is ensured to be valid.
* All state data will be published on-chain so the state will be fully constructible from L1.
* There will be a single sequencer.
* The network will be upgradable without any time delays.

### The StarkNet Ecosystem is Growing

Opening StarkNet to the world attracted a massive wave of developers interested in learning Cairo and developing over StarkNet. They provided invaluable feedback, and it was a true delight to see vibrant discussions on the StarkNet [Discord](https://discord.gg/uJ9HZTUk2Y).

Moreover, StarkNet is being developed not only by the StarkWare team but also by some of the strongest teams in the blockchain ecosystem:

* Nethermind is working on two projects:

1. **[Warp](https://github.com/NethermindEth/warp)**: a Solidity to Cairo compiler

2. **[Voyager](https://voyager.online/)**: a StarkNet block explorer

* Open Zeppelin is working on a [Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) implementation for StarkNet and also started working on a developer’s environment: [Nile](https://github.com/martriay/nile).
* ShardLabs is working on a [StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin) and on a better testing framework.
* The Erigon team is working on expanding their Ethereum Full Node to support StarkNet (codename: Fermion). They are working with us on designing core mechanisms of StarkNet.
* Equilibrium is working on a StarkNet Full Node implementation in Rust,
* Cairo audit services: In the coming months, ABDK, ConsenSys Diligence, Peckshield, and Trail of Bits will be conducting Cairo audits.
* StarkNet audits: we started out with auditing the network’s foundations:

1. **CryptoExperts** will be conducting an audit of the Cairo Solidity Verifier.
2. A formal **LEAN proof** of the Cairo specs was recently completed and published as a [paper](https://arxiv.org/abs/2109.14534) and a GitHub [repo](https://github.com/starkware-libs/formal-proofs).

Expect many more interesting collaborations to be published in the coming months!

### STARKs are Scaling Today

We approach the launch of StarkNet Alpha with confidence, as StarkEx, our standalone scaling SaaS, has demonstrated how STARKs can massively scale Ethereum applications. We launched StarkEx for [dYdX](https://dydx.exchange/) (perpetual contracts), [DeversiFi](https://www.deversifi.com/) (spot trading and payments), as well as for [Immutable](https://www.immutable.com/) and [Sorare](https://sorare.com/) (NFT minting and trading). We saw their gas/tx costs reduced by 100X–200X, to about 650 gas/tx in Validium (off-chain data), and 1100 gas/tx for a ZK-Rollup.

To date, StarkEx has settled $80B in trades and over 27M transactions, far eclipsing any other L2 solution — and all of them combined.

### Act Now

There has never been a better time to join the growing StarkNet ecosystem by building either your next dApp or useful developer tools.

We invite you to:

1. Join the [StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), where you can meet and engage the StarkNet community.
2. [Start learning](https://www.cairo-lang.org/docs/hello_starknet/index.html) how to write StarkNet smart contracts.
3. [DM us](https://twitter.com/StarkWareLtd) — our team is eager to help your ideas and initiatives come to life.

**Update (Nov. 2021):** StarkNet Alpha is live on Ethereum Mainnet