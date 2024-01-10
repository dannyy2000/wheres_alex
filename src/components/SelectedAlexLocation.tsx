/* eslint-disable @typescript-eslint/no-explicit-any */
// import behindBuildingImg from '../assets/behind_building.svg';
// import inWeedsImg from '../assets/in_weeds.jpg';
import danielImg from '../assets/fineguy.jpg'
import danImg from '../assets/IMG-20240109-WA0026.jpg'
import { Answer } from '@state/RecordTypes/wheres_alex_vxxx.js';

type SelectedAlexLocationProps = {
  answer: Answer;
  win?: boolean;
};

function SelectedAlexLocation({ answer, win }: SelectedAlexLocationProps) {
  const LeftAlex = () => {
    return (
      <div className='flex w-1/2 flex-col gap-2 self-start'>
        <img
          loading='lazy'
          src={danielImg}
          className={`aspect-square w-full self-stretch overflow-hidden rounded-[50%] object-cover object-center
                      ${answer === Answer.InTheWeeds ? '' : 'opacity-40'}`}
          alt={Answer.InTheWeeds}
        />
        {win === undefined && (
          <div
            className={`self-center whitespace-nowrap text-center text-sm font-extrabold tracking-tight
                        ${answer === Answer.InTheWeeds ? '' : 'opacity-40'}
                        ${
                          answer === Answer.InTheWeeds
                            ? 'text-primary-green'
                            : 'text-primary-white'
                        }`}
          >
            Akin
          </div>
        )}
      </div>
    );
  };

  const RightAlex = () => {
    return (
      <div className='flex w-1/2 flex-col gap-2 self-start'>
        <img
          loading='lazy'
          src={danImg}
          className={`aspect-square w-full self-stretch overflow-hidden rounded-[50%] object-cover object-center
                      ${
                        answer === Answer.BehindTheBuilding ? '' : 'opacity-40'
                      }`}
          alt={Answer.BehindTheBuilding}
        />
        {win === undefined && (
          <div
            className={`self-center whitespace-nowrap text-center text-sm font-extrabold tracking-tight
                        ${
                          answer === Answer.BehindTheBuilding
                            ? ''
                            : 'opacity-40'
                        }
                        ${
                          answer === Answer.BehindTheBuilding
                            ? 'text-primary-green'
                            : 'text-primary-white'
                        }`}
          >
            Daniel
          </div>
        )}
      </div>
    );
  };

  const WinText = () => {
    return (
      <div className='z-10 w-1/2'>
        <p className='text-center text-6xl font-black text-primary-green'>
          YOU
          <br />
          WON!
        </p>
      </div>
    );
  };

  const LoseText = () => {
    return (
      <div className='z-10 w-1/2'>
        <p className='text-center text-6xl font-black text-primary-red'>
          YOU
          <br />
          LOST!
        </p>
      </div>
    );
  };

  return (
    <div className='flex w-full flex-col items-center gap-8'>
      <div className='flex w-[298px] max-w-full items-center justify-between gap-5 self-center'>
        {win === undefined ? (
          <>
            <LeftAlex />
            <RightAlex />
          </>
        ) : (
          <>
            {win === true && answer === Answer.InTheWeeds && (
              <>
                <LeftAlex />
                <WinText />
              </>
            )}
            {win === true && answer === Answer.BehindTheBuilding && (
              <>
                <WinText />
                <RightAlex />
              </>
            )}
            {win === false && answer === Answer.InTheWeeds && (
              <>
                <LeftAlex />
                <LoseText />
              </>
            )}
            {win === false && answer === Answer.BehindTheBuilding && (
              <>
                <LoseText />
                <RightAlex />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default SelectedAlexLocation;
