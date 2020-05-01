import levels, {LevelTitlesEnum} from '../preloaded_data/levels';
export default function (score: number): string {
    console.log({levels, score});
    let level;
    for (const limit in levels) {
        console.log({limit});
        if (score <= parseInt(limit,10)){
            level = levels[limit];
            break;
        }
    }
    if (!level)console.error('Bad Score Supplied');
    return level||'';
}
