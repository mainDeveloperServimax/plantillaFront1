export class DateFuntions {


  public convertDate(da: string): Date {
    const d = new Date(da);
    return new Date(d.setDate(d.getDate() + 1));
  }
  public getFormat(da: string, hourPlus: number = 0): string {
    const d = new Date(da);
    const a = new Date(d);
    a.setTime(a.getTime() + (hourPlus * 60 * 60 * 1000))
    return a.toISOString()//;`${a.getDate()}/${a.getMonth() + 1}/${a.getFullYear()}`;
  }

  public getDateFormatFromSource(da: string): string {
    const initialCut = da.split('T');
    if (initialCut.length > 0 && initialCut[0]) {
      const arrDate = da.split('T')[0].split('-')
      return `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
    }
    return '';
  }
}
