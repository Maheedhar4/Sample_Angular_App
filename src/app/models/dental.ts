export interface DentalRecords {
  Id: {
    Timestamp: number;
    Machine: number;
    Pid: number;
    Increment: number;
  };
  Date: Date;
  Reason: string;
  AmountCleared: number;
  TargetBank: string;
  SourceBank: string;
}
