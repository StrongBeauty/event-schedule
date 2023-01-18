export const formateDate = (date: any): string =>{
    const year = date.getFullYear();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate()
    return `${year}.${month}.${day}`
}