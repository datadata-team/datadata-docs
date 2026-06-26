export class Sequence {
  private val = 0;

  public next() {
    this.val += 1;
    return this.val;
  }
}
