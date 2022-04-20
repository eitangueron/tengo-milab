import { IOptionalQuestion } from "../types";

export const dummyData: IOptionalQuestion[] = [
  {
    id: "d2d1b095-8136-4a5f-996a-121374a867f4",
    options: [
      {
        count: 25,
        text: "Eitan",
      },
      {
        count: 20,
        text: "Ido",
      },
      {
        count: 5,
        text: "Yuval",
      },
    ],
    question: "What’s my name?",
  },
  {
    id: "aa08740d-8dd0-4ff0-af38-1d49f4297c0b",
    options: [
      {
        count: 0,
        text: "None",
      },
      {
        count: 30,
        text: "Less than 3",
      },
      {
        count: 70,
        text: "As many as u want",
      },
    ],
    question: "How many cups of coffee should I drink a day?",
  },
];
