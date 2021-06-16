export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  static async getAll(successCallback) {
    // Promise way
    // fetch(GetSendData.todoApiUrl)
    //   .then((resp) => resp.json())
    //   .then((data) => successCallback(data))
    //   .catch((err) => console.warn(err));

    // async await way

    try {
      const resp = await fetch(GetSendData.todoApiUrl);
      const data = await resp.json();
      successCallback(data);
    } catch (err) {
      console.error('getAll error', err);
    }
  }

  static async createTodo(title, successCallback) {
    const newTodo = {
      title: title,
    };
    // fetch(GetSendData.todoApiUrl + '/new', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newTodo),
    // })
    //   .then((resp) => resp.json())
    //   .then((ats) => {
    //     successCallback(ats);
    //   })
    //   .catch((err) => console.warn(err));

    const resp = await fetch(GetSendData.todoApiUrl + '/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const ats = await resp.json();
    successCallback(ats);
  }

  static async deleteTodo(idToDelete, successCallback) {
    const resp = await fetch(`${GetSendData.todoApiUrl}/${idToDelete}`, {
      method: 'DELETE',
    });
    const ats = await resp.json();
    successCallback(ats);
  }
}