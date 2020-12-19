import { NIFTRON, NiftronAssetResponse } from "niftron-sdk";
import React, { useState } from "react";

const Badges = () => {
  const [assetCode, setAssetCode] = useState<string>();
  const [niftrons, setNiftrons] = useState<number>();

  const testSDK = async () => {
    try {
      const res: any = await NIFTRON.user.testTransfer();
      console.log(res);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getBalance = async () => {
    try {
      const res: NiftronAssetResponse | null = await NIFTRON.user.getNiftronCreditBalance();
      console.log(res);
      if (res) {
        setAssetCode(res.assetCode);
        setNiftrons(res.balance);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div>
      <div>Welcome to Share A Badge</div>

      {assetCode && niftrons && (
        <div>
          {assetCode}: {niftrons}
        </div>
      )}
      <button onClick={testSDK}>testSDK</button>
      <button onClick={getBalance}>Get Account Balance</button>
    </div>
  );
};

export default Badges;
