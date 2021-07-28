import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
 async model() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let parsed = await response.json();
    return parsed;
  }
}
