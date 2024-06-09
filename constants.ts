import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react"

type SelectType = { value: string; label: string }[]

/* const frameworksList = [
    { value: "react", label: "React", icon: Turtle },
    { value: "angular", label: "Angular", icon: Cat },
    { value: "vue", label: "Vue", icon: Dog },
    { value: "svelte", label: "Svelte", icon: Rabbit },
    { value: "ember", label: "Ember", icon: Fish },
  ] */

export const sportTypesArr: SelectType = [
  {
    value: "wrestling",
    label: "Борьба",
  },
  {
    value: "gymnastics",
    label: "Гимнастика",
  },
  {
    value: "fightings",
    label: "Единоборства",
  },
  {
    value: "gaming",
    label: "Игровые",
  },
  {
    value: "intelligent",
    label: "Интеллектуальные",
  },
  {
    value: "cybersport",
    label: "Киберспорт",
  },
  {
    value: "athletics",
    label: "Легкая атлетика",
  },
  {
    value: "power",
    label: "Силовые",
  },
  {
    value: "technical",
    label: "Технические",
  },
  {
    value: "fitness",
    label: "Фитнес",
  },
  {
    value: "hobby",
    label: "Хобби",
  },
]

export const specificSportArr: { [x: string]: SelectType }[] = [
  {
    wrestling: [
      {
        value: "arm",
        label: "Армрестлинг",
      },
      {
        value: "freestyle",
        label: "Вольная",
      },
      {
        value: "greco-roman",
        label: "Греко-римская",
      },
      {
        value: "grappling",
        label: "Грэпплинг",
      },
      {
        value: "judo",
        label: "Дзюдо",
      },
      {
        value: "women-wrestling",
        label: "Женская борьба",
      },
      {
        value: "mes-wrestling",
        label: "Мас-рестлинг",
      },
      {
        value: "sambo",
        label: "Самбо",
      },
      {
        value: "sumo",
        label: "Сумо",
      },
    ],
  },
  {
    gymnastics: [
      {
        value: "acrobatics",
        label: "Акробатика",
      },
      {
        value: "trampolines",
        label: "Батуты",
      },
      {
        value: "workout",
        label: "Воркаут",
      },
      {
        value: "sports",
        label: "Спортивная",
      },
      {
        value: "artistic",
        label: "Художественная",
      },
    ],
  },
  {
    fightings: [
      {
        value: "box",
        label: "Бокс",
      },
      {
        value: "jujutsu",
        label: "Джиу-джитсу",
      },
      {
        value: "karate",
        label: "Карате",
      },
      {
        value: "kick-boxing",
        label: "Кикбоксинг",
      },
      {
        value: "mma",
        label: "ММА",
      },
      {
        value: "taekwondo",
        label: "Тхэквондо",
      },
      {
        value: "universal-fight",
        label: "Универсальный бой",
      },
      {
        value: "wushu",
        label: "Ушу",
      },
      {
        value: "fencing",
        label: "Фехтование",
      },
    ],
  },
  {
    gaming: [
      {
        value: "badminton",
        label: "Бадминтон",
      },
      {
        value: "handball",
        label: "Гандбол",
      },
      {
        value: "towns",
        label: "Городки",
      },
      {
        value: "lapta",
        label: "Лапта",
      },
      {
        value: "table-tennis",
        label: "Настольный теннис",
      },
      {
        value: "rugby",
        label: "Регби",
      },
      {
        value: "tennis",
        label: "Теннис",
      },
      {
        value: "floorball",
        label: "Флорбол",
      },
    ],
  },
  {
    intelligent: [
      {
        value: "go",
        label: "Го",
      },
      {
        value: "orienteering",
        label: "Спортивное ориентирование",
      },
      {
        value: "chess",
        label: "Шахматы",
      },
      {
        value: "checkers",
        label: "Шашки",
      },
    ],
  },
  {
    cybersport: [
      {
        value: "cs-go",
        label: "CS GO",
      },
      {
        value: "dota-2",
        label: "Dota 2",
      },
      {
        value: "pubg",
        label: "PUBG",
      },
      {
        value: "overwatch",
        label: "Overwatch",
      },
      {
        value: "warcraft-3",
        label: "Warcraft 3",
      },
      {
        value: "hunt-showdown",
        label: "Hunt: Showdown",
      },
    ],
  },
  {
    athletics: [
      {
        value: "adult",
        label: "Взрослая",
      },
      {
        value: "mass",
        label: "Массовая",
      },
      {
        value: "youth",
        label: "Юношеская",
      },
    ],
  },
  {
    power: [
      {
        value: "weight-lifting",
        label: "Гиревой спорт",
      },
      {
        value: "powerlifting",
        label: "Пауэрлифтинг",
      },
      {
        value: "russian-press",
        label: "Русский жим",
      },
      {
        value: "4",
        label: "Тяжелая атлетика",
      },
    ],
  },
  {
    technical: [
      {
        value: "1",
        label: "Автоспорт",
      },
      {
        value: "2",
        label: "Велоспорт",
      },
      {
        value: "3",
        label: "Вертолётный",
      },
      {
        value: "4",
        label: "Водно-моторный",
      },
      {
        value: "modeling",
        label: "Моделирование",
      },
      {
        value: "motosports",
        label: "Мотоспорт",
      },
      {
        value: "shooting",
        label: "Стрельба",
      },
      {
        value: "triathlon",
        label: "Триатлон",
      },
    ],
  },
  {
    fitness: [
      {
        value: "aerobics",
        label: "Аэробика",
      },
      {
        value: "body-building",
        label: "Бодибилдинг",
      },
    ],
  },
  {
    hobby: [
      {
        value: "billiards",
        label: "Бильярд",
      },
      {
        value: "bowling",
        label: "Боулинг",
      },
      {
        value: "darts",
        label: "Дартс",
      },
      {
        value: "parachute",
        label: "Парашют",
      },
      {
        value: "paintball",
        label: "Пейнтбол",
      },
      {
        value: "fishing-sport",
        label: "Рыболовный спорт",
      },
      {
        value: "skateboard",
        label: "Скейтборд",
      },
      {
        value: "sports-dog-breeding",
        label: "Спортивное собаководство",
      },
      {
        value: "sports-turism",
        label: "Спортивный туризм",
      },
    ],
  },
]
