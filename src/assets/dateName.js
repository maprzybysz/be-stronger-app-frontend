export const monthName = [
  'Sty',
  'Lut',
  'Mar',
  'Kwi',
  'Maj',
  'Cze',
  'Lip',
  'Sie',
  'Wrz',
  'Paź',
  'Lis',
  'Gru',
];
export const dayName = [
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
  'Niedziela',
];

export const dateToString = (date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${year}-${month}-${day}`;
};
