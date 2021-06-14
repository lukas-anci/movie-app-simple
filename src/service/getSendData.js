export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  static getAll(successCallback) {
    fetch(GetSendData.todoApiUrl)
      .then((resp) => resp.json())
      .then((data) => successCallback(data))
      .catch((err) => console.warn(err));
  }

  static createTodo(title, successCallback) {
    const newTodo = {
      title: title,
    };
    fetch(GetSendData.todoApiUrl + '/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((resp) => resp.json())
      .then((ats) => {
        successCallback(ats);
      })
      .catch((err) => console.warn(err));
  }
}
