export function setUserPlaylists(playlists) {
    return {
        type: '@playlist/SET_PLAYLISTS',
        playlists: playlists
    }
}

export function selectPlaylist(playlist, songlist, indexCurrentPlayList) {
    return {
        type: '@playlist/SELECT_PLAYLIST',
        playlist: playlist,
        songlist: songlist,
        indexCurrentPlayList: indexCurrentPlayList,
    };
}

export function returnToHome() {
    return {
        type: '@playlist/RETURN_TO_HOME',
    };
}

export function playTheMusic(songsPlaying, currentSongPlaying, indexCurrentSongPlaying, indexCurrentPlayListPlaying) {
    return {
        type: '@playlist/PLAY_THE_PLAYLIST',
        songsPlaying: songsPlaying,
        currentSongPlaying: currentSongPlaying,
        indexCurrentSongPlaying: indexCurrentSongPlaying,
        indexCurrentPlayListPlaying: indexCurrentPlayListPlaying,
    };
}

export function playNextSong(currentSongPlaying, indexCurrentSongPlaying) {
    return {
        type: '@playlist/PLAY_NEXT_SONG',
        currentSongPlaying: currentSongPlaying,
        indexCurrentSongPlaying: indexCurrentSongPlaying,
    }
}

export function stopTheMusic() {
    return {
        type: '@playlist/STOP_THE_MUSIC',
    };
}

export function playOrPauseTheMusic(isMusicPaused) {
    return {
        type: '@playlist/PLAY_OR_PAUSE_THE_MUSIC',
        isMusicPaused: isMusicPaused,
    };
}
