import { FunctionComponent } from 'react';
import { ReactComponent as Byval } from '../assets/relation-types/circles/byval.svg';
import { ReactComponent as Jil } from '../assets/relation-types/circles/jil.svg';
import { ReactComponent as Jenilsya } from '../assets/relation-types/circles/jenilsya.svg';
import { ReactComponent as Kutil } from '../assets/relation-types/circles/kutil.svg';
import { ReactComponent as Obedal } from '../assets/relation-types/circles/obedal.svg';
import { ReactComponent as NahodilsyaVZakluchenii } from '../assets/relation-types/circles/nahodilsya-v-zakluchenii.svg';
import { ReactComponent as Uchredil } from '../assets/relation-types/circles/uchredil.svg';
import { ReactComponent as Perestroil } from '../assets/relation-types/circles/perestroil.svg';
import { ReactComponent as Pohoronen } from '../assets/relation-types/circles/pohoronen.svg';
import { ReactComponent as PolzovalsyaUslugami } from '../assets/relation-types/circles/polzovalsya-uslugami.svg';
import { ReactComponent as Prepodaval } from '../assets/relation-types/circles/prepodaval.svg';
import { ReactComponent as Rabotal } from '../assets/relation-types/circles/rabotal.svg';
import { ReactComponent as Rodilsya } from '../assets/relation-types/circles/rodilsya.svg';
import { ReactComponent as Sluzhil } from '../assets/relation-types/circles/sluzhil.svg';
import { ReactComponent as Sozdal } from '../assets/relation-types/circles/sozdal.svg';
import { ReactComponent as UchastvovalVVistavke } from '../assets/relation-types/circles/uchastvoval-v-vistavke.svg';
import { ReactComponent as Uchilsya } from '../assets/relation-types/circles/uchilsya.svg';
import { ReactComponent as Umer } from '../assets/relation-types/circles/umer.svg';
import { ReactComponent as Vistupal } from '../assets/relation-types/circles/vistupal.svg';
import { ReactComponent as Vladel } from '../assets/relation-types/circles/vladel.svg';

/**
 * Returns circle for relation type
 *
 * @param relationTypeId - id of relation type
 */
export default function getRelationTypeCircleById(relationTypeId: string): FunctionComponent | null {
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
      return null;
  }
}
