export const DATE = new Date("10.21.2023 14:00").getTime();

export const UNKNOWN_GUEST = 'privet'

export interface Contacts {
  wa: string;
  tg?: string;
  phone?: string;
}
export const ALEXEY_CONTACTS: Contacts = {
  wa: "https://wa.me/79940204864",
  tg: "https://t.me/frienship000",
  phone: "+79940204864",
};
export const DARYA_CONTACTS: Contacts = {
  wa: "https://wa.me/79841402670",
  tg: "https://t.me/Dory2110",
  phone: "+79841402670",
};
