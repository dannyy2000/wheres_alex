import { useRecords } from '@puzzlehq/sdk';

export const useGameRecords = () => {
  const { records } = useRecords({
    filter: {
      programIds: [
        'whos_dan_v003.aleo',
        'dan_pieces_v002.aleo',
        'multiparty_pvp_utils_v015.aleo',
      ],
      type: 'unspent',
    },
    multisig: false,
  });
  const gameNotifications = records?.filter(
    (record) => record.programId === 'whos_dan_v003.aleo'
  );
  const puzzleRecords = records?.filter(
    (record) => record.programId === 'dan_pieces_v002.aleo'
  );
  const utilRecords = records?.filter(
    (record) => record.programId === 'multiparty_pvp_utils_v015.aleo'
  );

  console.log([gameNotifications, puzzleRecords, utilRecords]);

  return { puzzleRecords, gameNotifications, utilRecords };
};
