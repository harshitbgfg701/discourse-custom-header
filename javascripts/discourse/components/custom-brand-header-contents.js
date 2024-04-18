import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class CustomBrandHeaderContents extends Component {
    @service site;

    get headerHTML() {

        return fetch('https://static.bgfg.co.uk/components/videogamer/header/index')
            .then(response => response.json())
            .then(json => {
                console.log('json', json);
                // const decodedHTML = Buffer.from(json.html, 'base64').toString('utf-8');
                const decodedHTML = atob(json.html);
                console.log('html data', decodedHTML);
                return { ...json, decodedHTML };
            });
    }
}