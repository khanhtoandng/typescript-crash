import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv');
reader.read();

const team = 'Man United';

let manUnitedWins = reader.data.reduce((acc, line) => {
  if (line[1] === team && line[5] === MatchResult.HomeWin) {
    acc++;
  } else if (line[2] === team && line[5] === MatchResult.AwayWin) {
    acc++;
  }

  return acc;
}, 0);

console.log(`United win ${manUnitedWins}`);
