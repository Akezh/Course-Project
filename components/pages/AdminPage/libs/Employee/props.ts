export type Props = {
  readonly fullName: string;
  readonly role: string;
  readonly avatarImg: string;
  readonly salary: string;
  readonly salaryTransferDate: string;
  readonly workingHours: string;
  readonly schedule: ReadonlyArray<string>;
} & {
  onSendPayroll?: () => void;
  onAdjustHours?: () => void;
};
