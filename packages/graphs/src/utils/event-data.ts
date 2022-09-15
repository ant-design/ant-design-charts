type Datum = any;
export default class EventData {
  data: Datum;
  constructor(data?: Datum) {
    data && this.setData(data);
  }
  getData(): Datum {
    return this.data;
  }
  setData(data: Datum) {
    this.data = data;
  }
}
