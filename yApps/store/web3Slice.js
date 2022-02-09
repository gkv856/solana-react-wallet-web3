import { createSlice } from "@reduxjs/toolkit";
import { useWallet } from "@solana/wallet-adapter-react";

const initialState = {
  wallet: null,
};

const web3Slice = createSlice({
  name: "web3",
  initialState: initialState,
  reducers: {
    getWallet(state, action) {
      state.wallet = useWallet();
    },
  },
});

export const web3Actions = web3Slice.actions;

export default web3Slice;
