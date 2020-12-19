import React, { useState } from "react";
import { CreateBadgeModel, NIFTRON, Token, TokenType } from "niftron-sdk";

const Badges = () => {
  const [tokens, setTokens] = useState<any>();

  const createBadgeModel: CreateBadgeModel = {
    tokenName: "CBS2020",
    tokenType: TokenType.SFT,
    tokenData: JSON.stringify({ Organizer: "Niftron" }),
    tokenCount: 10,
    previewImageUrl: "https://i.ibb.co/VqWSJ2k/CBS-2020.png",
  };

  const createBadge = async () => {
    try {
      const res = await NIFTRON.tokenBuilder.createBadge(createBadgeModel);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const getTokens = async () => {
    try {
      const res: Token[] | null = await NIFTRON.user.getTokensByPublicKey();
      if (res) {
        console.log(res);
        setTokens(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const transferBadge = async () => {};

  return (
    <div>
      <button onClick={createBadge}>Create Badge</button>

      <button onClick={getTokens}>Get Created Tokens/ Badges</button>

      <div>
        <div>All Tokens/ Badges</div>
        {tokens &&
          tokens.map((item: any, index: any) => {
            return (
              <div
                key={`token-${index}`}
                style={{ display: "inline-block", border: "1px solid #ccc" }}
              >
                <div>Name: {item.tokenName}</div>
                <div>Type: {item.tokenType}</div>
                <div>Code: {item.assetCode}</div>
                <div>Count: {item.assetCount}</div>

                {/* <button onClick={tranferBadge}>Transfer Badge</button> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Badges;
