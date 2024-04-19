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

      const currentUser = api.getCurrentUser();

      console.log('currentUser', currentUser);

      if (currentUser) {
        const userId = currentUser.id;
        const endpoint = `/admin/users/${userId}.json`;

        ajax(endpoint, { dataType: 'json' }).then(response => {
          console.log('response', response);
          console.log('Logged-in user email:', response.email);
          // Perform further actions with the email address
        }).catch(error => {
          console.error('Error fetching user data:', error);
        });
      }

    });
  },
};
