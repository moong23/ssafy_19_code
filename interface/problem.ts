export interface IProbDateProps {
  date: string;
  problemList: IProblem[];
  isOpen: boolean;
}

export interface IProblem {
  id: number;
  name: string;
  submissions: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export interface ICandidates {
  codes: ICandidate[];
}

export interface ICandidate {
  id: number;
  name: string;
  submitAt: string;
}
