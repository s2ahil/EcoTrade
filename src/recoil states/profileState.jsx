// profileState.js
import { atom } from 'recoil';

export const profileState = atom({
  key: 'profileState',
  default: {
    profileImageLink: '',
    username: '',
    placeToWork: '',
    itemsYouTake: '',
    // availableForWork: true,
    priceOfItems: '',
    contactInfo: '',
    availability: '',
  },
});
