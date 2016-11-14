import Commentary from './commentary.json';

export default class ElectionCommentary {
  static getCommentary(id = null) {
    switch (id) {
    case null:
      return Commentary;
    default:
      return Commentary[id];
    }
  }
}
