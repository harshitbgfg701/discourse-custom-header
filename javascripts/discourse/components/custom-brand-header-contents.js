import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class CustomBrandHeaderContents extends Component {
    @service site;

    get headerHTML() {

        const header = fetch('https://static.bgfg.co.uk/components/videogamer/header/index')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return json;
            });

        console.log('header data', header);

        console.log('html data', header.html);

        const decodedHTML = Buffer.from(header.html, 'base64')
        var htmlString = decodedHTML.toString();

        console.log('html data', htmlString);

        return header;
    }
}