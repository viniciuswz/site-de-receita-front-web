import styled, { keyframes } from 'styled-components';

const SkeletonAnimation = keyframes`
 0% { background-position: 0% 50%; }
 100% { background-position: 100% 50%; }
`;

export const Skeleton = styled.div`
  animation: ${SkeletonAnimation} 1s linear infinite alternate;
  background: linear-gradient(
    90deg,
    #939393,
    #939393,
    #a1a1a1,
    #939393,
    #939393
  );
  background-size: 600%;
  overflow: hidden;
  position: relative;
  border-radius: 4px;

  &.text {
    height: 12px;
    width: 100%;
    margin: 5px 0;
  }

  &.title {
    height: 12px;
    width: 50%;
    margin: 5px 0;
  }

  &.btn {
    height: 24px;
    width: 30%;
    margin: 5px 0px;
    margin-left: 5px;
  }

  &.social_share {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
  }

  &.titleH1 {
    height: 24px;
    width: 50%;
    margin: 5px 0;
  }

  &.BtnSelect {
    width: 100%;
    height: 48px;
    margin-right: 5px;
    border-radius: 10px;
  }

  &.btnSend {
    width: 18%;
    height: 40px;
    border-radius: 10px;
  }

  &.titleH3 {
    height: 24px;
    width: 40%;
    margin: 5px 10px 5px 0;
  }

  &.titleH4 {
    height: 14px;
    width: 30%;
    margin: 5px 10px 5px 0;
  }

  &.slide_active {
    width: 100%;
    height: 180px;
  }
  &.slide {
    margin-top: 16px;
    width: 100%;
    height: 40px;
  }

  &.span {
    width: 60px;
    height: 10px;
  }

  &.star {
    width: 90px;
    height: 10px;
  }

  &.square {
    width: 140px;
    height: 140px;
  }

  &.comentsImg {
    width: 110px;
    height: 60px;
    border-radius: 10px;
  }

  &.perfil {
    width: 100%;
    height: 100%;
  }
`;
