export interface RootObject {
    code: number;
    status: string;
    data: surahsName[];
}
export interface surahsName {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
}