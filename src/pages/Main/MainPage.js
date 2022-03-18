import React from "react";
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import {
  MainOut, Autobody, Topbody, TopbodyLeft, TopbodyRight, ImgPart, TokenImg, TopItem, TopBlueText, TopwhiteText, InputPart, InputTitle, InputItem, CusInput, BtnPart, ManualBtn, SmallText
} from "./Main.style";
const MainPage = () => {
  return (
    <MainOut>
      <Autobody>
        <Topbody>
          <TopbodyLeft>
            <ImgPart>
              <TokenImg src='img/ship.png' alt='' />
              <TokenImg src='img/woman.png' alt='' />
            </ImgPart>
            TOKEN-TOKEN LP
          </TopbodyLeft>
          <TopbodyRight>
            <TopItem>
              <TopBlueText>0.00 LP = $0.00</TopBlueText>
              <TopwhiteText>Deposited Balance</TopwhiteText>
            </TopItem>
            <TopItem>
              <TopBlueText>000000000</TopBlueText>
              <TopwhiteText>APY</TopwhiteText>
            </TopItem>
            <TopItem>
              <TopBlueText>000000000</TopBlueText>
              <TopwhiteText>DAILY</TopwhiteText>
            </TopItem>
            <TopItem>
              <TopBlueText>000000000</TopBlueText>
              <TopwhiteText>AUTOCOMP TVL</TopwhiteText>
            </TopItem>
          </TopbodyRight>
        </Topbody>
        <InputPart>
          <InputItem>
            <InputTitle>Balance:<span>0.00000</span>TOKEN/TOKEN</InputTitle>
            <CusInput type='text' placeholder='5000' />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <BtnPart>
              <Button variant="contained">Deposit</Button>
            </BtnPart>
            <SmallText>
              You will receive Auto-X token as a receipt for your deposited
              ARGO assets. The token is needed to withdraw your ARGO.
              Do not trade or transfer your Auto-X to strangers!
            </SmallText>
          </InputItem>
          <InputItem>
            <InputTitle>Deposited:<span>0.00000</span>Token</InputTitle>
            <CusInput type='text' placeholder='5000' />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <BtnPart>
              <Button variant="outlined">Withdraw</Button>
              <Button variant="outlined">Withdraw All</Button>
            </BtnPart>
            <SmallText width='190px'>
              Deposit Fee: 0%, Withdrawal Fee: 0.1%
              Withdrawal will Result in: Redeem Auto-X
              for TOKEN/TOKEN
            </SmallText>
          </InputItem>
        </InputPart>
        <ManualBtn>
          <Button variant="outlined">Manual Compound</Button>
        </ManualBtn>
      </Autobody>
    </MainOut>
  );
};
export default MainPage;
