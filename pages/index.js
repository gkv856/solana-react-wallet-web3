import CounterComp from "../yApps/components/counter";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import React, { FC, useCallback } from "react";
import { Button } from "semantic-ui-react";

const IndexPage = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const onClick = useCallback(async () => {
    if (!wallet.publicKey) throw new WalletNotConnectedError();

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1,
      })
    );

    const signature = await wallet.sendTransaction(transaction, connection);

    const xx = await connection.confirmTransaction(signature, "processed");
    console.log("xx= ", xx);
  }, [wallet, connection]);

  return (
    <div>
      <div>
        <h1>hello from index page</h1>
        <CounterComp />
        <br />
        <Button onClick={onClick} disabled={!wallet.publicKey} primary>
          Send 1 lamport to a random address!
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;
