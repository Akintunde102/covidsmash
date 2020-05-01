
export enum LevelTitlesEnum {
     four = 'diamond',
    three = 'gold',
    two = 'silver',
    one = 'ruby'
}  
const levelsScore: {[key: number]: LevelTitlesEnum} = {
    2500: LevelTitlesEnum.one,
    5000: LevelTitlesEnum.two,
    7000: LevelTitlesEnum.three,
    9000: LevelTitlesEnum.four
}

export default levelsScore;