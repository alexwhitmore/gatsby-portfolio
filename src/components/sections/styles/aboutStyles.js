import styled from 'styled-components';

export const AboutWrapper = styled.section`
  background-color: #0d2438;
  color: #fff;
  height: 100%;
  border-top: 0px;
  padding-bottom: 150px;

  @media (max-width: 75em) {
    height: 100%;
  }

  .about-wrapper {
    @media (max-width: 37.5em) {
      padding-bottom: 5rem;
    }

    .about-wrapper__image {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;

      @media (max-width: 56.25em) {
        padding-bottom: 6.4rem;
      }

      @media (max-width: 75em) {
        height: 100%;
      }
    }

    .about-wrapper__info {
      display: flex;
      height: 100%;
      justify-content: center;
      flex-direction: column;

      @media (max-width: 37.5em) {
        align-items: center;
      }

      .about-wrapper__info-text {
        text-align: left;

        @media (max-width: 56.25em) {
          font-size: 1.5rem;
          text-align: center;
        }

        @media (max-width: 37.5em) {
          font-size: 1.6rem;
          text-align: center;
        }
      }
    }
  }
`;

export const AboutSkillsList = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      text-align: left;
      font-size: 15px;

      &:before {
        content: '»';
        position: absolute;
        left: 0;
        color: #02aab0;
        line-height: 20px;
        font-size: 20px;
        margin-bottom: 15px;
      }
    }
  }
`;
