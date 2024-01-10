import { useConnect, useAccount } from '@puzzlehq/sdk';
// import rightImageSrc from '../assets/fineguy.jpg';
// import leftImageSrc from '../assets/fineguy.jpg';
// import bottomImageSrc from '../assets/fineguy.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@components/Button.js';

export const Welcome = () => {
  const navigate = useNavigate();
  const { account } = useAccount();
  const { loading, connect } = useConnect();

  useEffect(() => {
    if (account) {
      navigate('/');
    }
  }, [account, navigate]);

  return (
    <div className='flex h-full w-full items-stretch justify-between'>
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
       
        
        <h1 className='text-24xl z-10 max-w-full overflow-visible whitespace-nowrap text-center font-extrabold leading-[40.56px] tracking-tight text-primary-white title-hover'>
  WHERE'S
  <br />
  DAN?
</h1>
<p className='z-10 mb-8 mt-8 max-w-[400px] text-center text-base font-bold tracking-tight text-primary-white description-hover'>
  A thrilling game showcasing the power of Aleo and the Puzzle multiparty privacy stack through a wager between friends!
</p>

        <Button
          className='max-w-[250px]'
          onClick={connect}
          color='yellow'
          disabled={loading}
        >
          {loading ? 'Loading...' : loading ? 'Connecting...' : 'Play!'}
        </Button>
        {/* <img
          src={bottomImageSrc}
          alt='Bottom Alex'
          className='center -translate-y-100 fixed bottom-0 h-full max-h-[12rem] w-3/5 max-w-[35%] transform object-contain'
        /> */}
      </div>
    </div>
  );
};
