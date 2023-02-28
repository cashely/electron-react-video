import { atom } from 'recoil';

const source = atom({
    key: 'source',
    default: {
        mp3: '',
        mp4: ''
    }
});

export {
    source
}