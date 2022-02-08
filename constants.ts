import { Dictionary } from "./types";

export const DICTIONARIES: Record<string, Dictionary> = {
  'default': {
    title: 'i18n Example',
    greet: 'Hello!, we could not detect your locale so we defaulted to english.',
    subtitle: 'Localized text based on geolocation headers',
    link: 'See headers documentation'
  },
  'en': {
    title: 'i18n Example',
    greet: 'Hello!',
    subtitle: 'Localized text based on geolocation headers',
    link: 'See headers documentation'
  },
  'id': {
    title: 'Contoh i18n',
    greet: 'Halo!',
    subtitle: 'Bla bla',
    link: 'Lihat dokumentasi'
  },
}
