
## Bitcoin Circle STARK 

### Introduction

Bitcoin Circle STARK includes Bitcoin script implementations of various cryptographic primitives for STARK.

Essentially, it's a collection of building blocks of a Circle STARK verifier in Bitcoin script. 

As outlined in the Motivation section, a Circle STARK verifier enables Bitcoin to support true second layer protocols where users are guaranteed a right to exit.  

To contribute to this repository, please see this GitHub repo and join our community telegram chat.

For reference, see the [Circle STARKs paper](https://eprint.iacr.org/2024/278.pdf).

### Primitives


#### M31, CM31, QM31, Circle Point

Implementation of add, sub, mul of Mersenne-31 (M31), its complex extension (CM31), and its degree-4 extension (QM31), which is imported from [BitVM/rust-bitcoin-m31-or-babybear](https://github.com/BitVM/rust-bitcoin-m31-or-babybear).


#### CirclePoint over QM31

Implementation of doubling of a circle point over QM31.

Implementation of drawing a random point on the circle over QM31, useful for Order-Optimal Data Structures (OODS).


#### Fiat-Shamir Transcript

Also known as "channel," which is the term used in Starkware's [stwo library](https://github.com/starkware-libs/stwo).

Absorbing commitments and QM31 elements through `OP_CAT + OP_SHA256`.

Squeezing random elements for Fiat-Shamir transform using hints and `OP_CAT + OP_SHA256`.


#### Proof-of-Work Check

Calculating a proof-of-work nonce for the "channel", based on specified security bits.

Verifying the proof-of-work nonce and computing the new "channel" state.


#### Merkle Tree

Implementation of Merkle path verification using hints and `OP_CAT + OP_SHA256`.
