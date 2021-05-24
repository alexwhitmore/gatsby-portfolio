import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  background-color: #0d2438;
  color: #fff;
  padding-bottom: 15rem;
  padding-top: 150px;

  .cta-btn {
    display: inline-block;
    position: relative;
    padding: 0.8rem $default-font-size;
    font-weight: bold;
    line-height: 1;
    z-index: 1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;

    &:after {
        content: ' ';
        display: block;
        position: absolute;
        width: 0px;
        height: 100%;
        left: 0;
        bottom: 0;
        z-index: -1;
        transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
      }
    }

  @media (max-width: 75em) {
    margin-top: 0rem;
    padding-top: 5rem;
  }

  .project-wrapper {
    margin-bottom: 15rem;

    .test {
      border: 3px solid #02aab0;
      border-radius: 5px;
      color: #fff;
      padding: 0.75rem 1.5rem 0.75rem 1.5rem;
      letter-spacing: 0.1em;
    }

    .test:hover {
      background: #02aab0 !important;
    }

    @media (max-width: 37.5em) {
      margin-bottom: 0rem;
    }

    .row {
      margin-bottom: 8rem;

      @media (max-width: 37.5em) {
        margin-bottom: 4rem;
      }
    }

    &__text {
      text-align: left;

      @media (max-width: 37.5em) {
        margin-bottom: 2.5rem !important;
      }

      @media (max-width: 75em) {
        margin-bottom: 4.8rem;
      }

      &-title {
        font-weight: bold;
        margin-bottom: 1.8rem;
        font-size: 2.5rem;

        @media (max-width: 37.5em) {
          font-size: 2rem;
        }
      }
    }
    
    &__image {
      width: 90%;
      margin 0 auto;

      @media (max-width: 75em) {
        width: 100%;
        margin: 0;
      }

      & .thumbnail {
        border: none;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        transition: all 0.2s ease-out;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
        transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow,
        0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

        @media(max-width: 37.5em) {
          border: 1px solid #d2d2d2;
          box-shadow: none;
          margin-bottom: 3.2rem;
        }
      }
    }
  }
`;
