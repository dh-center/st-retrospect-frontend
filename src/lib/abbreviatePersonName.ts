/**
 * Return abbreviated person fullname (Pushkin A.S.)
 *
 * @param lastName - person's lastname
 * @param firstName - person's firstname
 * @param patronymic - person's patronymic
 */
export default function abbreviatePersonName(lastName: string | null, firstName: string | null, patronymic: string | null): string {
  const abbreviatedFirstName = firstName ? firstName[0].toUpperCase() + '.' : '';
  const abbreviatedPatronymic = patronymic ? patronymic[0].toUpperCase() + '.' : '';

  return `${lastName ? lastName : ''} ${abbreviatedFirstName} ${abbreviatedPatronymic}`.replace(/\s{2,}/g, ' ');
}
