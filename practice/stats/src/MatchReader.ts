import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

import { MatchData } from './MatchData';

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(line: string[]): MatchData {
    return [
      dateStringToDate(line[0]),
      line[1],
      line[2],
      parseInt(line[3], 10),
      parseInt(line[4], 10),
      line[5] as MatchResult,
      line[6],
    ];
  }
}
