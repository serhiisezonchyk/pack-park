import { CommentType, LocaleType, StepType } from '@/types';

export const locales: Array<LocaleType> = ['en', 'uk'];
export const links = [
  { href: '/map', textKey: 'forTravelers' },
  { href: '/partner', textKey: 'becomeAPartner' },
  { href: '/about', textKey: 'about' },
];
export const steps: Record<LocaleType, StepType[]> = {
  en: [
    {
      id: 1,
      title: 'Book online or on the app',
      description:
        'Get the app and choose a convenient location. Your BounceShield™ Protection is activated upon booking online.',
      src: '/step1.png',
    },
    {
      id: 2,
      title: 'Head to the store',
      description:
        'Drop off your bags by showing your confirmation to a store employee.',
      src: '/step2.png',
    },
    {
      id: 3,
      title: 'Enjoy the day',
      description:
        'Do whatever you’d like, then show your confirmation to pick up your stuff.',
      src: '/step3.png',
    },
  ],
  uk: [
    {
      id: 1,
      title: 'Забронюйте онлайн або через додаток',
      description:
        'Завантажте додаток і виберіть зручне місце. Ваш захист BounceShield™ активується після бронювання онлайн.',
      src: '/step1.png',
    },
    {
      id: 2,
      title: 'Прямуйте до магазину',
      description:
        'Залиште свої речі, показавши підтвердження працівнику магазину.',
      src: '/step2.png',
    },
    {
      id: 3,
      title: 'Насолоджуйтесь днем',
      description:
        'Робіть усе, що захочете, потім покажіть своє підтвердження, щоб забрати речі.',
      src: '/step3.png',
    },
  ],
};

export const comments: Record<LocaleType, CommentType[]> = {
  en: [
    {
      id: 1,
      src: '/user-1.png',
      name: 'Christina R.',
      city: 'New York',
      rate: 5,
      comment:
        'Good experience. My bag was safe in a luggage room. Very nice people working in this hotel.',
    },
    {
      id: 2,
      src: '/user-2.png',
      name: 'Becky M.',
      city: 'London',
      rate: 5,
      comment:
        'Smooth check in and check out of our luggage and super friendly people! Very easy and completely felt at ease my luggage was safe.',
    },
    {
      id: 3,
      src: '/user-3.png',
      name: 'Milad M.',
      city: 'Paris',
      rate: 5,
      comment:
        'Very easy to use. Took less than 5 mins for drop off and pick up. Everything was there, safe and secure!',
    },
    {
      id: 4,
      src: '/user-4.png',
      name: 'Cailyn W.',
      city: 'Los Angeles',
      rate: 5,
      comment:
        'Very easy and convenient way to store luggage. The staff were friendly and efficient. Thank you!',
    },
    {
      id: 5,
      src: '/user-5.png',
      name: 'Deborah H.',
      city: 'Rome',
      rate: 5,
      comment:
        'Easy to find, very affordable, friendly staff and secure location. Would absolutely recommend.',
    },
    {
      id: 6,
      src: '/user-6.png',
      name: 'Dragan V.',
      city: 'Sydney',
      rate: 5,
      comment:
        'Just what I needed, was able to drop my bags off for a few hours and pick up late night due to their being open 24hrs. Very convenient.',
    },
  ],
  uk: [
    {
      id: 1,
      src: '/user-1.png',
      name: 'Christina R.',
      city: 'New York',
      rate: 5,
      comment:
        'Гарний досвід. Моя сумка була в безпеці в камері зберігання. Дуже приємні люди працюють в цьому готелі.',
    },
    {
      id: 2,
      src: '/user-2.png',
      name: 'Becky M.',
      city: 'London',
      rate: 5,
      comment:
        'Легке оформлення і отримання багажу, дуже привітні люди! Дуже просто і повністю відчувалося, що багаж у безпеці.',
    },
    {
      id: 3,
      src: '/user-3.png',
      name: 'Milad M.',
      city: 'Paris',
      rate: 5,
      comment:
        'Дуже легко використовувати. На оформлення та отримання багажу пішло менше 5 хвилин. Усе було на місці, безпечно та надійно!',
    },
    {
      id: 4,
      src: '/user-4.png',
      name: 'Cailyn W.',
      city: 'Los Angeles',
      rate: 5,
      comment:
        'Дуже зручний і простий спосіб зберігати багаж. Персонал був привітний і ефективний. Дякую!',
    },
    {
      id: 5,
      src: '/user-5.png',
      name: 'Deborah H.',
      city: 'Rome',
      rate: 5,
      comment:
        'Легко знайти, дуже доступно, привітний персонал та безпечне місце. Абсолютно рекомендую.',
    },
    {
      id: 6,
      src: '/user-6.png',
      name: 'Dragan V.',
      city: 'Sydney',
      rate: 5,
      comment:
        'Саме те, що мені було потрібно. Міг залишити свої сумки на кілька годин і забрати їх пізно ввечері, оскільки вони працюють цілодобово. Дуже зручно.',
    },
  ],
};
