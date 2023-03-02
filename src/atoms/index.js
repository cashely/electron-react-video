import { atom, selector } from 'recoil';

const source = atom({
    key: 'source',
    default: {
        mp3: null,
        mp4: null
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

const roomsState = atom({
    key: 'roomsState',
    default: [],
})

const sourcesState = atom({
    key: 'sourceState',
    default: []
})

const mp3sState = selector({
    key: 'mp3sState',
    get({ get }) {
        const sources = get(sourcesState);
        return sources.filter(v => v.type === 'mp3');
    }
})

const mp4sState = selector({
    key: 'mp4sState',
    get({ get }) {
        const sources = get(sourcesState);
        return sources.filter(v => v.type === 'mp4');
    }
})




export {
    source,
    mp3TotalTimeState,
    mp3sState,
    mp4sState,
    sourcesState,
    roomsState
}