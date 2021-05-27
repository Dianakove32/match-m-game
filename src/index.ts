/* eslint-disable prefer-const */
import './style.scss';
import { navigation } from './components/navigation';
import { getImgFromForm } from './components/getImgFromForm/getImgFromForm';
import { locationResolver } from './components/rout/locationResolver';

window.onload = () => {
  navigation();
  getImgFromForm();

  const location = window.location.hash;
  if (location) {
    locationResolver(location);
  }
  document.querySelectorAll('.nav-item').forEach((x) => x.addEventListener('click', (e) => {
    const newLocation = e.target?.hash;
    locationResolver(newLocation);
  }));
};


