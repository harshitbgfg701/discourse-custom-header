import { hbs } from "ember-cli-htmlbars";
import { withPluginApi } from "discourse/lib/plugin-api";
import CustomBrandHeaderContainer from "../components/custom-brand-header-container";
import { registerWidgetShim } from "discourse/widgets/render-glimmer";

export default {
  name: "custom-brand-header",

  initialize() {
    registerWidgetShim(
      "custom-brand-header-contents",
      "div.custom-brand-header-contents",
      hbs`<CustomBrandHeaderContents />`
    );

    withPluginApi("1.14.0", (api) => {
      api.renderInOutlet(settings.plugin_outlet, CustomBrandHeaderContainer);
    });
  },
};
