import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class CustomBrandHeaderContents extends Component {
    @service site;

    get headerHTML() {

        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return json;
            });
    }

}