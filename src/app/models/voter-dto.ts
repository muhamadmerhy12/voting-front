export interface VoterDto {
  id?: number;
  firstName?: string;
  fatherName?: string;
  motherName?: string;
  lastName?: string;
  gender?: 'M' | 'F';
  birthDate?: Date;
  registrationNumber?: string;
  address?: string;
  hasVoted: boolean;
}
