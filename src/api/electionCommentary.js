import Commentary from '../json/commentary.json';

export default class ElectionCommentary {
  static getCommentary(year = null, type = null) {
    switch (year) {
    case null:
      return Commentary;
    default:
      return Commentary[year].commentary[type];
    }
  }
}
