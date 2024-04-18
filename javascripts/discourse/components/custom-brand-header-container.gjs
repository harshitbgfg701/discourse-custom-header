import Component from "@glimmer/component";
import { service } from "@ember/service";
import not from "truth-helpers/helpers/not";
import or from "truth-helpers/helpers/or";
import CustomBrandHeaderContents from "./custom-brand-header-contents";

export default class CustomBrandHeaderContainer extends Component {
  @service site;

  <template>
    {{this.headerHTML.decodedHTML}}
  </template>
}
