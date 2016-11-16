import Commentary from './commentary.json';

export default class ElectionCommentary {
  static getCommentary(id = null, type = null) {
    switch (id) {
    case null:
      return Commentary;
    default:
      return Commentary[id].commentary[type];
    }
  }
}
