type AgeCategory = 'coeval' | 'parent';
type Side = 'wife   ' | 'husband';
type Parent = 'papa' | 'mama'

export interface Member {
  uid: string;
  lastName: string;
  name: string;
  patronymic: string;
  side: Side;
  ageCategory: AgeCategory;
  wellKnown?: boolean;
  oneWhoMarries?: boolean
  parent?: Parent
}
