import styled from "styled-components";
export const MainOut = styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: relative;
`;
export const Autobody = styled.div`
    max-width: 800px;
    width: 95%;
    margin: 50px auto 0 auto;
    /* border: 1px solid red; */
`;
export const Topbody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:830px){
        flex-direction: column;
    }
`;
export const TopbodyLeft = styled.div`
    color: #fff;
    font-family: ArterioNonCommercial;
    font-weight: 400;
    font-size: 22px;
    display: flex;
    align-items: center;
`;
export const TopbodyRight = styled.div`
    display: flex;
    gap:15px;
    @media screen and (max-width:830px){
        margin-top: 20px;
        justify-content: space-between;
        gap: unset;
        width: 100%;
    }
    @media screen and (max-width:530px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 15px;
    }
`;
export const ImgPart = styled.div`
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const TokenImg = styled.img`
    
`;
export const TopItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const TopBlueText = styled.div`
    color: #0BBAFB;
    font-family: Ovo;
    font-size: 16px;
`;
export const TopwhiteText = styled.div`
    color: #fff;
    font-size: 14px;
    font-family: Ovo;
`;
export const InputPart = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    @media screen and (max-width:680px){
        flex-direction: column;
        row-gap: 30px;
    }
`;
export const InputTitle = styled.div`
    font-family: Ovo;
    font-size: 14px;
    margin-left: 20px;
    color: #fff;
    span{
        color: #0BBAFB;
        margin: 0 10px 0 7px;
    }
`;
export const InputItem = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 304px;
    @media screen and (max-width:680px){
        max-width: 100%;
    }
`;
export const CusInput = styled.input`
    margin-top: 13px;
    background-color: transparent;
    border: 1px solid #4285EC;
    height: 60px;
    margin-bottom: 40px;
    padding: 0 28px;
    width: 304px;
    color: #fff;
    font-family: Ovo;
    font-size: 18px;
    border-radius: 30px;
    :focus,:active{
        outline: none;
    }
    @media screen and (max-width:680px){
        width: 100%;
    }
`;
export const BtnPart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`;
export const SmallText = styled.div`
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.04em;
    font-size: 10px;
    line-height: 20px;
    width:${(props) => props.width};
    font-family: Ovo;
    margin: 25px auto 0 auto;
    text-align: center;
    @media screen and (max-width:680px){
        width:350px;
    }
`;
export const ManualBtn = styled.div`
    width:100%;
    justify-content: center;
    display: flex;
    margin-top: 30px;
`;