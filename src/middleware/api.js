import $ from 'jquery';
import Utils from './utils';
import Flash from './flash';

const API_URL = "https://narniapi.herokuapp.com";

// Api
//
// Usage:
//   - Import the Api in your component:
//     import Api from './middleware/api';
//
//   - In your component's constructor, create a new Api instance and pass in
//     the name of the resource in *singular* format, so "quest", not "quests".
//
//     constructor() {
//       this.api = new Api("quest");
//     }
//
//     Then use the built in functions to communicate to the Api:
//
//     Get All
//     ------------------------------------------------------------------------
//     component = this;
//     this.api.getAll((data) => {
//       component.state.quests = data;
//     });
//
//     Get
//     ------------------------------------------------------------------------
//     component = this;
//     this.api.get(id, (data) => {
//       component.state.quest = data;
//     });
//
//     Create
//     ------------------------------------------------------------------------
//     component = this;
//     this.api.create(quest, (data) => {
//       component.state.quest = data;
//     });
//
//     Update
//     ------------------------------------------------------------------------
//     component = this;
//     this.api.update(id, quest, (data) => {
//       component.state.quest = data;
//     });
//
//     Destroy
//     ------------------------------------------------------------------------
//     component = this;
//     this.api.destroy(id);
//
//   - *NOTE* If the backend returns a 401 (unauthorized) error, the Api will
//     redirect to /sign-in, so you will need to implement that route with
//     react-router.
//
class Api {
  constructor(resource, plural) {
    let utils = new Utils();
    this.resource = resource;
    this.resources = plural || utils.pluralize(resource);
  }

  getAll(success) {
    let url = `${API_URL}/${this.resources}.json`;

    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json",
      dataType: "json"})

    .done((data) => {
      success(data);
    })

    .fail((jqxhr, textStatus, error) => {
      this.handleError(jqxhr, textStatus, error, failure);
    });
  }

  get(id, success) {
    let url = `${API_URL}/${this.resources}/${id}.json`;

    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json",
      dataType: "json"})

    .done((data) => {
      success(data);
    })

    .fail((jqxhr, textStatus, error) => {
      this.handleError(jqxhr, textStatus, error, failure);
    });
  }

  create(data, success) {
    let url = `${API_URL}/${this.resources}.json`;

    $.ajax({
      type: "POST",
      url: url,
      data: this.toPostData(data),
      contentType: "application/json",
      dataType: "json"})

    .done((data) => {
      success(data);
    })

    .fail((jqxhr, textStatus, error) => {
      this.handleError(jqxhr, textStatus, error, failure);
    });
  }

  update(id, data, success, failure) {
    let url = `${API_URL}/${this.resources}/${id}.json`;

    $.ajax({
      type: "PUT",
      url: url,
      data: this.toPostData(data),
      contentType: "application/json",
      dataType: "json"})

    .done((data) => {
      success(data);
    })

    .fail((jqxhr, textStatus, error) => {
      this.handleError(jqxhr, textStatus, error, failure);
    });
  }

  destroy(id, success) {
    let url = `${API_URL}/${this.resources}/${id}.json`;

    $.ajax({
      type: "DELETE",
      url: url,
      contentType: "application/json",
      dataType: "json"})

    .done((data) => {
      success(data);
    })

    .fail((jqxhr, textStatus, error) => {
      this.handleError(jqxhr, textStatus, error, failure);
    });
  }

  handleError(jqxhr, textStatus, error, failure) {
    console.log("Request Failed: ", textStatus, error);
    console.log("Status: ", jqxhr.status);

    if (jqxhr.status === 401) {
      let flash = new Flash("Please sign in.", "alert");
      window.location.href = "/sign-in";
    }
  }

  toPostData(data) {
    let postData = {};
    postData[this.resource] = data;
    return JSON.stringify(postData);
  }
}

export default Api;
