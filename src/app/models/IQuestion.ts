 export interface IQuestion {
  questionId:   number;
  creationDate: Date;
  link:         string;
  title:        string;
  anyAnswers:   boolean;
  owner:        string;
}