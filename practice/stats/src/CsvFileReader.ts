import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(line: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((line: string): string[] => line.split(','))
      .map((line: string[]): T => this.mapRow(line));
  }
}
