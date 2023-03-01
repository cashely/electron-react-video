import { atom, selector } from 'recoil';

const source = atom({
    key: 'source',
    default: {
        mp3: '',
        mp4: ''
    }
});


const mp3TotalTimeState = selector({
    key: 'mp3TotalTimeState',
    get({ get }) {
        const sourceState = get(source);

        const { mp3 } = sourceState;

        if (!mp3) {
            return 0;
        }

        // const video = document.createElement('video');
        // video.
    }
}) 




export {
    source,
    mp3TotalTimeState
}