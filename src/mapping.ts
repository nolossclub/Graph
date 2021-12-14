import { BigInt } from '@graphprotocol/graph-ts';

import { Winner as winner, Mint as mint } from '../generated/Contract/Contract';

import { Winner, Mint } from '../generated/schema';

export function handleMint(event: mint): void {
	let entity = new Mint(event.transaction.hash.toHex());

	entity.address = event.params._from;

	entity.save();
}

export function handleWinner(event: winner): void {
	let entity = new Winner(event.transaction.hash.toHex());

	entity.address = event.params._from;
	entity.amount = event.params.amount;

	entity.save();
}
