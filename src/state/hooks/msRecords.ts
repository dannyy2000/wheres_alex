import { RecordWithPlaintext, getRecords, useOnSessionEvent } from "@puzzlehq/sdk";
import { useEffect, useState } from "react";

export const useMsRecords = (address?: string) => {
  const [gameRecords, setGameRecords] = useState<
    RecordWithPlaintext[] | undefined
  >(undefined);
  const [puzzleRecords, setPuzzleRecords] = useState<
    RecordWithPlaintext[] | undefined
  >(undefined);
  const [utilRecords, setUtilRecords] = useState<
    RecordWithPlaintext[] | undefined
    >(undefined);

  const fetchRecords = () => {
    // fetch gameRecords
    if (!address) return;
    getRecords({
      address,
      filter: { programId: 'wheres_alex_v011.aleo', type: 'unspent' },
    }).then((response) => {
      setGameRecords(response.records ?? []);
    });
    // fetch puzzleRecords
    getRecords({
      address,
      filter: { programId: 'puzzle_pieces_v011.aleo', type: 'unspent' },
    }).then((response) => {
      setPuzzleRecords(response.records ?? []);
    });
    // fetch utilRecords
    getRecords({
      address,
      filter: { programId: 'multiparty_pvp_utils_v011.aleo', type: 'unspent' },
    }).then((response) => {
      setUtilRecords(response.records ?? []);
    });
  };

  useOnSessionEvent(({ params }) => {
    const eventName = params.event.name;
    if (!['accountSynced'].includes(eventName)) return;
    fetchRecords();
  });

  useEffect(() => {
    if (!address) return;
    fetchRecords();
  }, [address])

  return { msPuzzleRecords: puzzleRecords, msGameRecords: gameRecords, msUtilRecords: utilRecords };
}