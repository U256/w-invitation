import type { Member } from './member.type';

export const members = {
  'me-one-dd-5': { lastName: 'Сыпкова     ', name: 'Дарья      ', patronymic: 'Александровна  ', side: 'wife   ', ageCategory: 'coeval', wellKnown: true, oneWhoMarries: true, },
  'mmr-eds76-d': { lastName: 'Чернавцев   ', name: 'Алексей    ', patronymic: 'Викторович     ', side: 'husband', ageCategory: 'coeval', wellKnown: true, oneWhoMarries: true, },
  'ghjf-ccs-zz': { lastName: 'Назаренко   ', name: 'Татьяна    ', patronymic: 'Васильевна     ', side: 'husband', ageCategory: 'parent', wellKnown: true, parent: 'mama' },
  'bbnhf-ddd-x': { lastName: 'Сыпкова     ', name: 'Наталья    ', patronymic: 'Викторовна     ', side: 'wife   ', ageCategory: 'parent', wellKnown: true, parent: 'mama' },
  'gfk-dddx-ff': { lastName: 'Сыпков      ', name: 'Александр  ', patronymic: 'Викторович     ', side: 'wife   ', ageCategory: 'parent', wellKnown: true, parent: 'papa' },
  'kdkjg-dxhkg': { lastName: 'Коваль      ', name: 'Вероника   ', patronymic: '               ', side: 'wife   ', ageCategory: 'coeval', wellKnown: true },
  'k-kjg-43-kg': { lastName: 'Голубев     ', name: 'Максим     ', patronymic: '               ', side: 'wife   ', ageCategory: 'coeval', wellKnown: true },
  'glmds-ddf-3': { lastName: '            ', name: '           ', patronymic: '               ', side: 'husband', ageCategory: 'coeval', wellKnown: true },
  'fd-dfv4v-ca': { lastName: '            ', name: '           ', patronymic: '               ', side: 'husband', ageCategory: 'coeval', wellKnown: true },
  'kndf-fffd-4': { lastName: '            ', name: '           ', patronymic: '               ', side: 'husband', ageCategory: 'coeval', wellKnown: true },
 } satisfies  { [key: string]: Member }

export type MemberUid = keyof typeof members
