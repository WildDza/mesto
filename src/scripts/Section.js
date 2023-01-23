export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(item) {
    const post = this._renderer(item);
    this._container.prepend(post);
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderItems(data) {
    this.clear();
    data.forEach((item) => {
      this.addItem(item);
    });
  }
}
