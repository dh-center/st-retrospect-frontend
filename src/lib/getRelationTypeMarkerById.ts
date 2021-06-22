import { FunctionComponent } from 'react';
import { ReactComponent as Byval } from '../assets/relation-types/markers/byval.svg';
import { ReactComponent as Jil } from '../assets/relation-types/markers/jil.svg';
import { ReactComponent as Jenilsya } from '../assets/relation-types/markers/jenilsya.svg';
import { ReactComponent as Kutil } from '../assets/relation-types/markers/kutil.svg';
import { ReactComponent as Obedal } from '../assets/relation-types/markers/obedal.svg';
import { ReactComponent as NahodilsyaVZakluchenii } from '../assets/relation-types/markers/nahodilsya-v-zakluchenii.svg';
import { ReactComponent as Uchredil } from '../assets/relation-types/markers/uchredil.svg';
import { ReactComponent as Perestroil } from '../assets/relation-types/markers/perestroil.svg';
import { ReactComponent as Pohoronen } from '../assets/relation-types/markers/pohoronen.svg';
import { ReactComponent as PolzovalsyaUslugami } from '../assets/relation-types/markers/polzovalsya-uslugami.svg';
import { ReactComponent as Prepodaval } from '../assets/relation-types/markers/prepodaval.svg';
import { ReactComponent as Rabotal } from '../assets/relation-types/markers/rabotal.svg';
import { ReactComponent as Rodilsya } from '../assets/relation-types/markers/rodilsya.svg';
import { ReactComponent as Sluzhil } from '../assets/relation-types/markers/sluzhil.svg';
import { ReactComponent as Sozdal } from '../assets/relation-types/markers/sozdal.svg';
import { ReactComponent as UchastvovalVVistavke } from '../assets/relation-types/markers/uchastvoval-v-vistavke.svg';
import { ReactComponent as Uchilsya } from '../assets/relation-types/markers/uchilsya.svg';
import { ReactComponent as Umer } from '../assets/relation-types/markers/umer.svg';
import { ReactComponent as Vistupal } from '../assets/relation-types/markers/vistupal.svg';
import { ReactComponent as Vladel } from '../assets/relation-types/markers/vladel.svg';
import { ReactComponent as Default } from '../assets/relation-types/markers/default.svg';

/**
 * Returns marker for relation type
 *
 * @param relationTypeId - id of relation type
 */
export default function getRelationTypeMarkerById(relationTypeId: string): FunctionComponent {
  switch (relationTypeId) {
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2E1MA==':
      return Byval;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2E1Zg==':
      return Jil;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2E5Zg==':
      return Jenilsya;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2E3ZQ==':
      return Kutil;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2FhYQ==':
      return Obedal;
    case 'UmVsYXRpb25UeXBlOjVkOTRiMjc0Y2M3Yzg5MjIxNjU2NTc4ZA==':
      return NahodilsyaVZakluchenii;
    case 'UmVsYXRpb25UeXBlOjVmZmM3ZGU5MDRiZDc0ODM1NTc2MWJjNA==':
      return Uchredil;
    case 'UmVsYXRpb25UeXBlOjVkOTFlYTU4Y2M3Yzg5NDY2NjU2NTQ4Ng==':
      return Perestroil;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2FkYw==':
      return Pohoronen;
    case 'UmVsYXRpb25UeXBlOjVkOWJiYzI0Y2M3Yzg5ZmMzMzU2NjI4ZA==':
      return PolzovalsyaUslugami;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2FkMQ==':
      return Prepodaval;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2E5Mg==':
      return Rabotal;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2E5OQ==':
      return Rodilsya;
    case 'UmVsYXRpb25UeXBlOjVkOTczZGM0Y2M3Yzg5M2IxZjU2NTlmNQ==':
      return Sluzhil;
    case 'UmVsYXRpb25UeXBlOjVkODRlZTgwZmY0MWQ4YTFlZjNiMzMxNw==':
      return Sozdal;
    case 'UmVsYXRpb25UeXBlOjVkOGI3NGE5MWUxZTU2YjBkZDEzZjNmMA==':
      return UchastvovalVVistavke;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2E3OA==':
      return Uchilsya;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2FkNA==':
      return Umer;
    case 'UmVsYXRpb25UeXBlOjVkODM0NDNhMGNiNDMzMDAzZjIyM2FiZg==':
      return Vistupal;
    case 'UmVsYXRpb25UeXBlOjYwMDRhMDA4MDRiZDc0YzUzMTc2MWM5OA==':
      return Vladel;
    default:
      return Default;
  }
}
