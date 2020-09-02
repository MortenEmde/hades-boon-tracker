import { GodNameFromUrl } from '../../ts/types';

const GodColor = (god: GodNameFromUrl) => {
  switch (god) {
    case 'aphrodite':
      return 'plum';
    case 'ares':
      return 'red';
    case 'artemis':
      return 'greenyellow';
    case 'athena':
      return 'khaki';
    case 'chaos':
      return 'mediumpurple';
    case 'demeter':
      return 'lightblue';
    case 'dionysus':
      return 'darkorchid';
    case 'hermes':
      return 'orange';
    case 'poseidon':
      return 'deepskyblue';
    case 'zeus':
      return 'gold';
    default:
      return 'gold';
  }
};

export default GodColor;
