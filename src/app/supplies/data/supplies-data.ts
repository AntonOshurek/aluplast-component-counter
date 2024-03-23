//types
// import { rootBaseName } from '../../../variables';
import type { ISuppliesPackage } from '../types/data-types';
//vars
import { SUPPLIES_COUNTERS, SuppliesLogsNames, SuppliesSettingsNames } from '../variables';

const suppliesData: ISuppliesPackage = {
  dataPackageName: 'supplies',
  dataPackageUNID: 3004,
  items: [
    {
      UNID: 'supplies-abc123',
      amount: 0,
      manufactured: '',
      productName: 'Przekładki polipropylenowe (do listwy) - zamówienia J. Wasielewska',
      systemCode: '',
      description: '',
      additionalInfo: '3 kartony (karton ma 5 tyś szt)',
      image: `https://a.allegroimg.com/s1440/11d55f/e6d50dc84210a352f7cb467a7302/Plyta-polipropylenowa-kanalikowa-HKP-1x1m`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 5000,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-def456',
      amount: 0,
      manufactured: '',
      productName: 'Taśma do bandowania - GREENSTRAP (15,5X0,90MM), 1400m zielona karb.',
      systemCode: '',
      description: '',
      additionalInfo: '1 paleta (48szt.)',
      image: `https://www.harmadon.pl/cache/files/1078139145/935greenstrap-1.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-ghi789',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw biały 1400 perforacja co 7,5',
      systemCode: '',
      description: '',
      additionalInfo: '40 rolek',
      image: `https://fol-mech.pl/wp-content/uploads/2020/07/zdjecie-1-1024x740.jpeg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-jkl012',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarny 1200 perforacja co 7',
      systemCode: '',
      description: '',
      additionalInfo: '20 rolek',
      image: `https://www.fuhmateo.pl/storage/sklep/produkty/158/zdjecia/folia-budowlana-typ-300-8m-x-25m-200-m2-290.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-mno345',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarno-biały 1200 perforacja co 7,0 90 µm',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: `https://www.fuhmateo.pl/storage/sklep/produkty/158/zdjecia/folia-budowlana-typ-300-8m-x-25m-200-m2-290.jpg`,
      color: '#ffff00',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-pqr678',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarno-biały 1400 perforacja co 7,5 90 µm',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: `https://www.fuhmateo.pl/storage/sklep/produkty/158/zdjecia/folia-budowlana-typ-300-8m-x-25m-200-m2-290.jpg`,
      color: '#ffff00',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-stu901',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarno-biały 1400 perforacja co 7,0 90 µm',
      systemCode: '',
      description: '',
      additionalInfo: '10 rolek',
      image: `https://www.fuhmateo.pl/storage/sklep/produkty/158/zdjecia/folia-budowlana-typ-300-8m-x-25m-200-m2-290.jpg`,
      color: '#ffff00',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-vwx234',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarny 1400 perforacja co 7,5',
      systemCode: '',
      description: '',
      additionalInfo: '40 rolek',
      image: `https://www.fuhmateo.pl/storage/sklep/produkty/158/zdjecia/folia-budowlana-typ-300-8m-x-25m-200-m2-290.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-yza567',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarny 1600 perforacja co 7,5',
      systemCode: '',
      description: '',
      additionalInfo: '10 rolek',
      image: `https://www.fuhmateo.pl/storage/sklep/produkty/158/zdjecia/folia-budowlana-typ-300-8m-x-25m-200-m2-290.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-bcd890',
      amount: 0,
      manufactured: '',
      productName: 'Półrękaw czarny 1600 perforacja co 7,7',
      systemCode: '',
      description: '',
      additionalInfo: '30 rolek',
      image: `https://www.fuhmateo.pl/storage/sklep/produkty/158/zdjecia/folia-budowlana-typ-300-8m-x-25m-200-m2-290.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'rolki',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'rolki',
    },
    {
      UNID: 'supplies-efg123',
      amount: 0,
      manufactured: '',
      productName: 'Etykieta biała 100x150 (szt na rolce 1000szt), półbłysk -fi = 40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://printandstick.eu/wp-content/uploads/2019/03/13a.jpg`,
      color: 'blue',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 8,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-hij456',
      amount: 0,
      manufactured: '',
      productName: 'Etykieta czerwona 150x100 (szt na rolce 1000szt),półbłysk - fi = 40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://etykietolandia.pl/cdn/shop/files/Zebraetykietytermiczneczerwone.webp?v=1707654818&width=1200`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 8,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-klm789',
      amount: 0,
      manufactured: '',
      productName: 'Etykieta niebieska 100x150 (szt na rolce 1000szt), półbłysk -fi = 40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://m.media-amazon.com/images/I/61g+1k4s2HL._AC_UF1000,1000_QL80_.jpg`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 8,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-nop012',
      amount: 0,
      manufactured: '',
      productName: 'Etykiety żółte 150x100 szt na rolce 1000szt),półbłysk -fi = 40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart. (x8szt)',
      image: `https://www.ilh.pl/wh/960-720/img/catalog/img/PA10Y-60-30.jpg`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 8,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-qrs345',
      amount: 0,
      manufactured: '',
      productName: 'Etykiety zielone 150x100 (szt na rolce 1000 szt),półbłysk -fi = 40 mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://image.ceneostatic.pl/data/products/139404591/8b88d30f-e014-4422-97ae-070267137646_p-interlabel-etykiety-ttr-60x40-zielona.jpg`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 8,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-tuv678',
      amount: 0,
      manufactured: '',
      productName: 'Etykiety białe Małe 100x70 (szt na rolce 1000 szt),półbłysk- fi=40mm',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(x8szt.)',
      image: `https://a.allegroimg.com/s1440/118df6/d8edf5d944d2a82b41feaf8ef6b9/ETYKIETY-TERMICZNE-BIALE-50x30-mm-1000szt`,
      color: 'blue',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 8,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-wxy901',
      amount: 0,
      manufactured: '',
      productName: 'Gwoździe  firma PREBENA  CNW 25/50 BK RI (10,800 szt.)',
      systemCode: '',
      description: '',
      additionalInfo: '10 kart.',
      image: `https://budemi.pl/1146-medium_default/gwozdzie-budowlane-paczka-5kg-rozne-rozmiary.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-zab234',
      amount: 0,
      manufactured: '',
      productName: 'Taśma pakowa z nadrukiem - TOWAR NIEZGODNY',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: `https://neopak.pl/dane/source/9/9cf2af4a81be4dc985f0e6928f806fdb.jpg`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-cde567',
      amount: 0,
      manufactured: '',
      productName: 'Taśma pomarańczowa z nadrukiem- ENERGETO',
      systemCode: '',
      description: '',
      additionalInfo: '5 kart.(x36szt.)',
      image: `https://neopak.pl/dane/source/9/9cf2af4a81be4dc985f0e6928f806fdb.jpg`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 36,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-fgh890',
      amount: 0,
      manufactured: '',
      productName: 'Biała taśma klejąca - White Solvent (szt rolek 36 pcs) - 48mm',
      systemCode: '',
      description: '',
      additionalInfo: '3 kart.(x10)',
      image: `https://techmarkety-sklep.pl/10390-large_default/p17-tasma-izolacyjna-biala-zbrojona-50mbx50mm.jpg`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 10,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-ijk123',
      amount: 0,
      manufactured: '',
      productName: 'Kalka do drukarki Index: WAX RESIN ECO OUT ( szt w kart. 10szt),104x450mm',
      systemCode: '',
      description: '',
      additionalInfo: '5 kart.(x36szt.)',
      image: `https://a.allegroimg.com/s512/11a1e8/a69188014166a76803f8f0c52ec2/Kalka-tasma-TTR-80mm-x-300m-woskowa-Liczba-etykiet-na-rolce-arkuszu-1`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 36,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-lmn456',
      amount: 0,
      manufactured: '',
      productName: 'Styropian grubość 2,0 cm ( w paczce 240 szt) - zamówienia J. Wasielewska',
      systemCode: '',
      description: '',
      additionalInfo: '5 kart.(x10szt.)',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftytuurzadzisz.pl%2Fwp-content%2Fuploads%2F2020%2F07%2Fstyropian.jpg&f=1&nofb=1&ipt=42883ea9f7497c40192b59cdcc39dedf1d1dbd6939f9896e272f7a867f00cee3&ipo=images`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 10,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-opq789',
      amount: 0,
      manufactured: '',
      productName: 'Styropian grubość 0,5 cm ( w paczce 480 szt) - zamówienia J. Wasielewska',
      systemCode: '',
      description: '',
      additionalInfo: '50 paczek',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftytuurzadzisz.pl%2Fwp-content%2Fuploads%2F2020%2F07%2Fstyropian.jpg&f=1&nofb=1&ipt=42883ea9f7497c40192b59cdcc39dedf1d1dbd6939f9896e272f7a867f00cee3&ipo=images`,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'paczka',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'paczka',
    },
    {
      UNID: 'supplies-rst012',
      amount: 0,
      manufactured: '',
      productName: 'Spray do hamulców BREMSEN FORCH ECO',
      systemCode: '',
      description: '',
      additionalInfo: '1 kart.(30x500ml)',
      image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.allegroimg.com%2Foriginal%2F1e4fc8%2F117044b9494480f17c2ed6d6fe80&f=1&nofb=1&ipt=ac9c7cc44df3eb8b30c699592bf1c1f03c2ef52611a2e8f013220c70a96023c5&ipo=images`,
      color: '',
      counters: [SUPPLIES_COUNTERS.COUNTER, SUPPLIES_COUNTERS.CARDBOARD],
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
        [SuppliesLogsNames.CARDBOARD]: {
          log: [],
          name: 'Kartony',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
        [SuppliesSettingsNames.BASE_CARDBOARD_VALUE]: {
          settingValue: 30,
          name: 'Sztuk w kartonie',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
    {
      UNID: 'supplies-uvw345',
      amount: 0,
      manufactured: '',
      productName: 'Płyn Release IT - 5l baniaki',
      systemCode: '',
      description: '',
      additionalInfo: '',
      image: ``,
      color: '',
      logs: {
        [SuppliesLogsNames.COUNTER]: {
          log: [],
          name: 'Licznik',
          lastChange: null,
        },
      },
      settings: {
        [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
          settingValue: 1,
          name: 'szt',
        },
      },
      additionalResources: [],
      packagingInfo: '',
      unitsOfMeasurement: 'szt',
    },
  ],
};

export default suppliesData;
