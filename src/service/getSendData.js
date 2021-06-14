export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  static getAll(successCallback) {
    fetch(GetSendData.todoApiUrl)
      .then((resp) => resp.json())
      .then((data) => successCallback(data))
      .catch((err) => console.warn(err));
  }
}
