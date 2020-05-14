import jazzComposers from './jazzComposers.js'
import standardsComposers from './standardsComposers.js'

export function filter(tunes, filterBy) {
    return tunes.filter(tune => {
        switch (filterBy) {
            case 'All': return true
            case 'Selected': return tune.selected
            case 'Latin': return tune.latin
            case 'Blues': return tune.blues
            case 'Minor': return tune.minor
            case 'Waltzes': return tune.waltz
            case 'Ballads': return tune.ballad
            case 'Holiday': return tune.holiday
            case 'Contrafacts': return tune.contrafact
            case 'Rhythm': return tune.rhythm
            case 'Miles': return tune.miles || tune.composer.includes('Miles Davis')
            case 'Sinatra': return tune.sinatra || tune.composer.includes('Sinatra')
            case 'Standards': return wasComposedBy(tune, standardsComposers)
            case 'Jazz tunes': return wasComposedBy(tune, jazzComposers)
            default: return false
        }
    })
}

function wasComposedBy(tune, list) {
    return tune.composer.split(/[,&/]/).some(composer => list.includes(composer.trim()))
}

export function sort(tunes, sortBy) {
    if (sortBy === 'Random') return shuffle(tunes)
    else return tunes.sort((a, b) => {
        switch (sortBy) {
            case 'Year': return a.year - b.year
            default: return letterSort(a, b, sortBy)
        }
    })
}

function letterSort(a, b, sortBy) {
    const index = sortBy.toLowerCase()
    if (a[index] < b[index]) return -1
    if (a[index] > b[index]) return 1
    else return 0
}

const shuffle = tunes => {
    const shuffledTunes = tunes.slice(0)
    for (let i = shuffledTunes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledTunes[i], shuffledTunes[j]] = [shuffledTunes[j], shuffledTunes[i]]
    }
    return shuffledTunes
}