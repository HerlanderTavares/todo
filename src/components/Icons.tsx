import {FC} from 'react';

type component = FC<{id: string}>;

const Icons: component = props => {
  switch (props.id) {
    case 'confirm':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
          />
        </svg>
      );

    case 'delete':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Trash</title>
          <path
            d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M80 112h352"
          />
          <path
            d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      );

    default:
      const styles = {
        width: '1rem',
        aspectRatio: '1',
        borderRadius: '50%',
        backgroundColor: 'black',
      };

      return <div style={styles}></div>;
  }
};

export default Icons;
